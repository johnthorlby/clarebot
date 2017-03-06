const cron = require('cron');

const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'Mjg3OTg2Nzc0MDk2MDg0OTky.C53aoA.Rzt8KO2pWaX0gK11_agqu1x0MiQ';
const prefix = ","
const channel = '288011094583148565';

const urlBoobs = "https://www.facebook.com/photo.php?fbid=10203455861574889&set=a.1579713650436.2078043.1163501624&type=3&theater";
var game;
const gameArray = ['with clares ass', 'with daniels dick', 'with jobis nob', 'with tyler on the sofa'];

function randNum() {
  game = Math.floor(Math.random() * 4);
}

randNum();

client.on('ready', () => {
  client.user.setGame(gameArray[game]);
});

var cronJob = cron.job('0 * * * * *', function() {
  randNum();
  client.user.setGame(gameArray[game]);
});
cronJob.start();

client.on('message', message => {
  if(message.author.id === "145314529570586625")
  {
    message.react("\u{1f438}").catch(console.error);
  }
  if (!message.content.startsWith(prefix)) return;

  else if (message.content.startsWith(prefix + "clare"))
  {
    message.channel.sendMessage("I'm online and looking for a good time", {tts: true});
  }
  else if (message.content.startsWith(prefix + "boobs"))
  {
    message.channel.sendFile("clare.jpg", "clare.jpg", "Here's my juicy tits");
  }
  else if(message.content.startsWith(prefix + "fuckme"))
  {
    message.channel.sendMessage("I will fuck " + message.author.username, {tts: true});
  }
  else if(message.content.startsWith(prefix + "fuckjobi"))
  {
    message.channel.sendFile("jobi.jpg", "jobi.jpg", "Fucking jobi");
  }
  else if(message.content.startsWith(prefix + "help"))
  {
    message.channel.sendMessage("Available commands: \n ,clare: Introduces herself\n ,boobs: Sends boobs \n ,fuckme: Fucks you \n ,fuckjobi: Fucks jobi \n ,jobes: Plays jobes \n ,badum: Ba Dum Tss! \n ,rabbit: Links to rabb.it \n ,appear: Links to appear.in \n ,dickclare: Gives clare the dick");
  }
  else if (message.content.startsWith(prefix + "jobes"))
  {
    if(message.member.voiceChannel != undefined)
    {
      message.member.voiceChannel.join().then(connection => {
        message.channel.sendMessage("Playing jobes");
        const dispatcher = connection.playFile('./gun.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave();
        });
      });
    }
    else {
      message.channel.sendMessage("Couldn't find channel");
    }
  }
  else if (message.content.startsWith(prefix + "badum"))
  {
    if(message.member.voiceChannel != undefined)
    {
      message.member.voiceChannel.join().then(connection => {
        message.channel.sendMessage("Playing Ba Dum Tss!");
        const dispatcher = connection.playFile('./badum.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave();
        });
      });
    }
    else {
      message.channel.sendMessage("Couldn't find channel");
    }
  }
  else if (message.content.startsWith(prefix + "rabbit"))
  {
    message.channel.sendMessage(message.author  + " http://rabb.it/what2heck");
  }
  else if (message.content.startsWith(prefix + "appear"))
  {
    message.channel.sendMessage(message.author  + " http://appear.in/fam920");
  }
  else if (message.content.startsWith(prefix + "dickclare"))
  {
    message.channel.sendMessage("ow. ow. " + message.author + " get it out my bum", {tts: true});
  }
});

client.login(token);
