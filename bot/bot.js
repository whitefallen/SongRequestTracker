const tmi = require('tmi.js');
const axios = require("axios").default;

// Define configuration options

const opts = {
  identity: {
    username: process.env.USERNAME,
    password: process.env.TOKEN
  },
  channels: [
    process.env.CHANNEL
  ]
};

const beatsaverAPI = "https://api.beatsaver.com/maps/id";
const backendAPI = "http://songrequesttracker-api:8080/api/songs";

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const msgArr = msg.split(' ');
  const commandName = msgArr[0];
  const commandArgs = msgArr[1];
  // Get username
  const sender = context.username;

  // If the command is known, let's execute it
  if (commandName === '!bsr') {
    saveRequest(commandArgs, sender);
    console.log(`* Executed ${commandName} command`);
  } else {
    console.log(`* Unknown command ${commandName}`);
  }
}

// Function called when the "dice" command is issued
async function saveRequest (msg, username) {
  let song = await getSongInfo(msg);
  if(song !== null) {
    song.requestedBy = username;
    //save to spring api
    let data = await sendSong(song);
    console.log(data.data);
  }
}

async function sendSong(song) {
  try {
    let data = await axios.post(backendAPI, song);
    return data;
  } catch(error) {
    return null;
  };
}

async function getSongInfo(msg) {
  try {
    let response = await axios.get(`${beatsaverAPI}/${msg}`);
    return {bsrId: response.data.id, songName: response.data.name}
  } catch(error) {
    return null;
  }
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
