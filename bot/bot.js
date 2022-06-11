const tmi = require('tmi.js');
const request = require('request');

// Define configuration options
const opts = {
  identity: {
    username: process.env.USERNAME,
    password: process.env.TOKEN
  },
  channels: [
    'thewhitefallen'
  ]
};

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

  // If the command is known, let's execute it
  if (commandName === '!bsr') {
    saveRequest(commandArgs);
    console.log(`* Executed ${commandName} command`);
  } else {
    console.log(`* Unknown command ${commandName}`);
  }
}

// Function called when the "dice" command is issued
function saveRequest (msg) {
  console.log(msg)
  request(`https://api.beatsaver.com/maps/id/${msg}`, {json: true}, (err, res, body) => {
    if(err) {return console.log(err)}
    if(body.error) { return console.log(body.error)}
    console.log("test")
  })
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
