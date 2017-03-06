const cron = require('cron'); //require cron for cron jobs https://github.com/kelektiv/node-cron
const Discord = require('discord.js'); //require discord.js wrapper for api https://github.com/hydrabolt/discord.js/
const client = new Discord.Client(); //creating discord client
const token = 'Mjg3OTg2Nzc0MDk2MDg0OTky.C53aoA.Rzt8KO2pWaX0gK11_agqu1x0MiQ'; //bot token, should move to config file
const prefix = "," //global for prefix

var game; // global for the 'Playing'
const gameArray = ['with my bumhole', 'with daniels dick', 'with jobis nob', 'with tyler on the sofa', 'with rileys little pixie dick', '']; //array of games that clare can play

function randNum() {
  game = Math.floor(Math.random() * 5); // function to get a random number between 0 and 3 for gameArray choice
}

randNum(); //calling function once

client.on('ready', () => {
  client.user.setGame(gameArray[game]); //once the bot is ready set the game to the gameArray[random number from above]
});

var cronJob = cron.job('0 * * * * *', function() { // a cronjob that will run every minute, calling the random number function then update the 'Playing' status
  randNum();
  client.user.setGame(gameArray[game]);
});
cronJob.start(); //starting cronjob

client.on('message', message => { // this code will run whenever a message is recieved and the message parameter is everything about the message
  if(message.author.id === "145314529570586625")
  {
    message.react("\u{1f438}").catch(console.error); // reacting to tylers message, if wanted a different discord id, enable developer tools on discord and right click someone and copy id
  }
  if (!message.content.startsWith(prefix)) return; // if the message doesn't start with the prefix, stop

  else if (message.content.startsWith(prefix + "clare"))
  {
    message.channel.sendMessage("I'm online and looking for a good time", {tts: true}); // if message is ,clare tts the text
  }
  else if (message.content.startsWith(prefix + "boobs"))
  {
    message.channel.sendFile("clare.jpg", "clare.jpg", "Here's my juicy tits"); // if message is ,boobs send the picture with the caption Here's my juicy tits
  }
  else if(message.content.startsWith(prefix + "fuckme"))
  {
    message.channel.sendMessage("I will fuck " + message.author.username, {tts: true}); //if the message is ,fuckme respond with 'I will fuck' and the username of the message sender
  }
  else if(message.content.startsWith(prefix + "fuckjobi"))
  {
    message.channel.sendFile("jobi.jpg", "jobi.jpg", "Fucking jobi"); // if the message is ,fuckjobi  send the jobi pic
  }
  else if(message.content.startsWith(prefix + "help"))
  {
    message.channel.sendMessage("Available commands: \n ,clare: Introduces herself\n ,boobs: Sends boobs \n ,fuckme: Fucks you \n ,fuckjobi: Fucks jobi \n ,jobes: Plays jobes \n ,badum: Ba Dum Tss! \n ,rabbit: Links to rabb.it \n ,appear: Links to appear.in \n ,dickclare: Gives clare the dick \n ,bmb: Plays brotherman bill \n ,woo: Plays a jobi");
    // the above command will message all the commands on the ,help message (messy i know)
  }
  else if (message.content.startsWith(prefix + "jobes"))
  {
    if(message.member.voiceChannel != undefined) //if the user is in a voice channel
    {
      message.member.voiceChannel.join().then(connection => { //join the voice channel
        message.channel.sendMessage("Playing jobes"); //message what playing
        const dispatcher = connection.playFile('./gun.mp3', {volume: 0.1}); //play the local file
        dispatcher.on('end', () => { // when it ends
          message.member.voiceChannel.leave(); //leave
        });
      });
    }
    else {
      message.channel.sendMessage("Couldn't find channel"); //if the user isn't in voice channel/error message 'Couldn't find channel'
    }
  }
  else if (message.content.startsWith(prefix + "badum"))
  {
    if(message.member.voiceChannel != undefined) //if the user is in a voice channel
    {
      message.member.voiceChannel.join().then(connection => { //join the voice channel
        message.channel.sendMessage("Playing Ba Dum Tss!"); //message what playing
        const dispatcher = connection.playFile('./badum.mp3', {volume: 0.1}); //play the local file
        dispatcher.on('end', () => { //when it ends
          message.member.voiceChannel.leave(); //leave
        });
      });
    }
    else {
      message.channel.sendMessage("Couldn't find channel"); //if the user isn't in voice channel/error message 'Couldn't find channel'
    }
  }
  else if (message.content.startsWith(prefix + "rabbit"))
  {
    message.channel.sendMessage(message.author  + " http://rabb.it/what2heck"); //Reply to the sender with the rabbit link
  }
  else if (message.content.startsWith(prefix + "appear"))
  {
    message.channel.sendMessage(message.author  + " http://appear.in/fam920"); //Reply to the sender with the appear.in link
  }
  else if (message.content.startsWith(prefix + "dickclare"))
  {
    message.channel.sendMessage("ow. ow. " + message.author + " get it out my bum", {tts: true}); //Reply saying get out my bum
  }
  else if (message.content.startsWith(prefix + "bmb"))
  {
    if(message.member.voiceChannel != undefined)
    {
      message.member.voiceChannel.join().then(connection => {
        message.channel.sendMessage("Playing Brotheman bill"); // already explained twice above
        const dispatcher = connection.playFile('./bmb.mp3', {volume: 0.1});
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave();
        });
      });
    }
    else {
      message.channel.sendMessage("Couldn't find channel");
    }
  }
  else if (message.content.startsWith(prefix + "woo"))
  {
    if(message.member.voiceChannel != undefined)
    {
      message.member.voiceChannel.join().then(connection => {
        message.channel.sendMessage("Playing woo yippee fuk yer");// already explained twice above
        const dispatcher = connection.playFile('./woo.mp3', {volume: 0.1});
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave();
        });
      });
    }
    else {
      message.channel.sendMessage("Couldn't find channel");
    }
  }
});

client.login(token); // log the bot in with the token at the top
