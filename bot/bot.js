const tmi = require('tmi.js');
const axios = require("axios").default;

// Prepare Channels List
const channels = process.env.CHANNELS.split(',');

// Define configuration options
const opts = {
  identity: {
    username: process.env.USERNAME,
    password: process.env.TOKEN
  },
  channels: channels
};

// API URLs
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
  // Command name [!bsr] args
  const commandName = msgArr[0];
  // Command Args !bsr [args]
  const commandArgs = msgArr[1];
  // Get username
  const sender = context.username;
  // Get Channel the command was issued
  const channel = target.substring(1, target.length);

  // If the command is known, let's execute it
  if (commandName === '!bsr') {
    // save SongRequest
    saveRequest(commandArgs, sender, channel);

    console.log(`* Executed ${commandName} command`);
  } else {
    console.log(`* Unknown command ${commandName}`);
  }
}

// Function called when the "bsr" command is issued
async function saveRequest (msg, username, channel) {
  // Get info about the requested song
  let song = await getSongInfo(msg);
  // if it exist save it
  if(song !== null) {
    // add requester
    song.requestedBy = username;
    song.channel = channel;
    //save to spring api
    let response = await sendSong(song);
    console.log(response.data);
  }
}

// Send song to Backend
async function sendSong(song) {
  try {
    let data = await axios.post(backendAPI, song);
    return data;
  } catch(error) {
    return null;
  };
}

// Get song info from the requested id
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
