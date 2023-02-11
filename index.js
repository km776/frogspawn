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
  console.log(frogName);
  return frogName;
}

// function - random trait generator
function randomTrait() {
  let allTraits = ["Adamant", "Bashful", "Brave", "Bold", "Calm", "Careful", "Docile", "Gentle", "Hardy", "Hasty", "Impish", "Jolly", "Lax", "Mild", "Modest", "Naive", "Quiet", "Quirky", "Relaxed", "Sassy", "Serious", "Timid"]
  let traitName = allTraits[Math.floor(Math.random() * allTraits.length)];
  console.log(traitName);
  return traitName;
}

// function - random frog species generator
function randomColor() {
  let commonFrog = ['commonFrog1', 'commonFrog2', 'commonFrog3']
  let rareFrog = ['rareFrog1', 'rareFrog2', 'rareFrog3']
  let legendaryFrog = ['legendaryFrog1', 'legendaryFrog2', 'legendaryFrog3']
  var frogNum = Math.floor(Math.random() * 100);
    console.log(frogNum);
    if (frogNum < 10) {
            let colorName = legendaryFrog[Math.floor(Math.random() * legendaryFrog.length)];
      return colorName; 
    }
    else if (frogNum < 30) {
      let colorName = rareFrog[Math.floor(Math.random() * rareFrog.length)];
      return colorName; 
    }
    else {
            let colorName = commonFrog[Math.floor(Math.random() * commonFrog.length)];
      return colorName; 
    }
  }

randomColor();
randomName();
randomTrait();

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
    const exampleEmbed = new EmbedBuilder()
      .setColor(0x0099FF)
      .setTitle(randomName()) // rotate through a list of names
      .setAuthor({ name: 'froggit!', iconURL: 'https://cdn.discordapp.com/attachments/1031064989643051078/1031227116324405278/froggit.png' }) // put froggit icon here
      .setDescription('This is your frog friend! They will accompany you and help keep track of your tasks. :>')
      .addFields(
        { name: '\u200B', value: '\u200B' },
        { name: 'Trait', value: randomTrait(), inline: true }, // rotate through a list of traits like pokemon
        { name: 'Favorite Color', value: randomColor(), inline: true }, // rotate through a list of colors
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
console.log(mySecret);
client.login(mySecret);
// ^^


