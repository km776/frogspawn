// go to shell and type 'kill 1' to rehost and make sure bot works again
// heroku our beloved ??

// all commands so far: !friend, !start, !ping, frog reaction, !add,  !mylist, !remove

// definitions
const Discord = require('discord.js');
const https = require('https');
const { Client, GatewayIntentBits } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const mylist = []
const removelist = []
var commonFrog = ['commonFrog1', 'commonFrog2', 'commonFrog3']
var rareFrog = ['rareFrog1', 'rareFrog2', 'rareFrog3']
var legendaryFrog = ['legendaryFrog1', 'legendaryFrog2', 'legendaryFrog3']
var frogRarity = frogGacha();

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

// function - random name generator
function randomName() {
  let allNames = ["Hoppy", "Speckles", "Naveen", "Tiana", "Hop Pop", "Polly", "Sprig", "Bubbles", "Croak", "Yoda", "Fletcher", "Kermit", "Toadie", "Jojo", "Houdini", "Lily", "Jasper"]
  let frogName = allNames[Math.floor(Math.random() * allNames.length)];
  return frogName;
}

/* function - random trait generator
function speciesType() {
  
  console.log(traitName);
  return traitName;
} */

// function - random frog species generator
function frogGacha() {
  var frogNum = Math.floor(Math.random() * 100);
    console.log(frogNum);
    if (frogNum < 10) {
      let frogRarity = '★★★★★'
      return frogRarity; 
    }
    else if (frogNum < 30) {
      let frogRarity = '★★★★'
      return frogRarity; 
    }
    else {
      let frogRarity = '★★★'
      return frogRarity; 
    }
  }

// function - description type
function frogDescribe() {
  if (frogRarity == '★★★★★') {
    let frogType = "this is a LEGENDARY frog!"
    return frogType;
  }
  else if (frogRarity == '★★★★') {
    let frogType = 'this is a RARE frog!'
    return frogType;
  }
  else if (frogRarity == '★★★') {
    let frogType = 'this is a COMMON frog!'
    return frogType;
  }
  console.log(frogType);
}

frogGacha();
randomName();
// speciesType();
frogDescribe();

// test ping-pong example
client.on("messageCreate", (msg) => {
  if (msg.content.startsWith("!ping")) {
    msg.channel.send("i love sana-sama! <3 :)");
  }
});

// test frog example -- IT WORKS
client.on("messageCreate", (message) => {
  if (message.content.match(/frog/gi)) {
    message.react('🐸');
  }
});

// test list function --
/*function testList () {
    const exampleEmbed2 = new EmbedBuilder()
      .setColor(0x0099FF)
      .setAuthor({ name: 'froggit!', iconURL: 'https://i.imgur.com/twO2EhU.jpeg' }) // put froggit icon here
      .setDescription('Here are your tasks:')
      .addFields(
        { name: 'Tasks', value: mylist[0] }
      )
      .setTimestamp()
      .setFooter({ text: "your frog friend believes in you!", iconURL: 'https://i.imgur.com/AfFp7pu.png' }); // put froggit icon here
}*/

// making the frog friend
client.on("messageCreate", (message) => {
  if (message.content.startsWith("!friend")) {
    frogRarity = frogGacha(); // randomizes rarity every single time the command is called WHICH IS WHAT I WANTED BUT DIDNT REALIZE
    const exampleEmbed = new EmbedBuilder()
      .setColor(0x0099FF)
      .setTitle(randomName()) // rotate through a list of names -- GOOD
      .setAuthor({ name: 'frogsinstem', iconURL: 'https://cdn.discordapp.com/attachments/1074034215802372118/1074113960451784794/image.png' }) // put froggit icon here
      .setDescription(frogDescribe())
      .addFields(
        { name: '\u200B', value: '\u200B' },
        { name: 'Trait', value: frogDescribe(), inline: true }, // rotate through a list of traits like pokemon
        { name: 'Rarity', value: frogRarity, inline: true }, // rotate through a list of colors
      )
      .setImage('https://cdn.discordapp.com/attachments/1031064989643051078/1031227057939693599/unknown.png') // put frog generated characters here
      .setTimestamp()
      .setFooter({ text: 'brought to you by froggit the bot', iconURL: 'https://cdn.discordapp.com/attachments/1031064989643051078/1031227116324405278/froggit.png' }); // put froggit icon here
    message.channel.send({ embeds: [exampleEmbed] });
    message.channel.send("Type !mylist to get started.");
  }
});


// keep this part 
const mySecret = process.env['TOKEN']
client.login(mySecret);
// ^^


