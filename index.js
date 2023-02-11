// go to shell and type 'kill 1' to rehost and make sure bot works again
// heroku our beloved ??

// definitions
const Discord = require('discord.js');
const https = require('https');
const { Client, GatewayIntentBits } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

// declaring intents
const client = new Discord.Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// declaring intents - STRINGS
function intents(...i) {
  const clientIntents = [];
  i.forEach(intent => {
    clientIntents.push(intent);
  });
  return clientIntents;
}

//showing that the bot is logged in
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
// ^^

// test ping-pong example
client.on("messageCreate", (msg) => {
  if (msg.content.startsWith("!ping")) {
    msg.channel.send("i love sana-sama! <3");
  }
});

// test frog example -- IT WORKS
client.on("messageCreate", (msg) => {
  if (msg.content.match(/frog/gi)) {
    msg.react('🐸');
  }
});

// keep this part 
const mySecret = process.env['TOKEN']
console.log(mySecret);
client.login(mySecret);
// ^^

