// go to shell and type 'kill 1' to rehost and make sure bot works again
// heroku our beloved ??

// all commands so far: !friend, !start, !ping, frog reaction, !add,  !mylist, !remove

// definitions
const Discord = require('discord.js');
// const https = require('https');
// const { Client, GatewayIntentBits } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
// const mylist = ["Drink a glass of water"]
// const removelist = []


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

// function - random color generator
function randomColor() {
  let allColors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "Brown", "Black", "White"]
  let colorName = allColors[Math.floor(Math.random() * allColors.length)];
  console.log(colorName);
  return colorName;
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

client.on("messageCreate", (message) => {
  let userName = message.author.username;
  if (message.content.startsWith("!mylist")) {
    const exampleEmbed2 = new EmbedBuilder()
      .setTitle(userName + "'s List")
      .setColor(0x0099FF)
      .setAuthor({ name: 'froggit!', iconURL: 'https://cdn.discordapp.com/attachments/1031064989643051078/1031227116324405278/froggit.png' }) // put froggit icon here
      .setDescription('Here are your tasks:')
      .addFields(
        { name: 'Tasks', value: mylist[0] }
      )
      .setTimestamp()
      .setFooter({ text: "your frog friend believes in you!", iconURL: 'https://cdn.discordapp.com/attachments/1031064989643051078/1031227116324405278/froggit.png' }); // put froggit icon here
    message.channel.send({ embeds: [exampleEmbed2] });
  }
});

client.on("messageCreate", (message) => {
  let userName = message.author.username;
  let counter = 1
  if (message.content.startsWith("!add")) {
    mylist.push(message.content.slice('!add'.length + 1));  //removes the first part, works]
    console.log(mylist); // works

    let last = mylist[mylist.length - 1]
    console.log(last); // works
    // so i have the variable, now i just want to add it to a new field
    // add new field

    const exampleEmbed2 = new EmbedBuilder()
      .setTitle(userName + "'s List")
      .setColor(0x0099FF)
      .setAuthor({ name: 'froggit!', iconURL: 'https://cdn.discordapp.com/attachments/1031064989643051078/1031227116324405278/froggit.png' }) // put froggit icon here
      .setDescription('Here are your tasks:')
      .addFields(
        { name: 'Tasks', value: counter + ". " + mylist[0] + '\n' + (counter + 1) + ". " + mylist[mylist.length - 1] }
      )
      .setTimestamp()
      .setFooter({ text: "your frog friend believes in you!", iconURL: 'https://cdn.discordapp.com/attachments/1031064989643051078/1031227116324405278/froggit.png' }); // put froggit icon here
    message.channel.send({ embeds: [exampleEmbed2] });
  }
});

client.on("messageCreate", (message) => {
  let userName = message.author.username;
  if (message.content.startsWith("!remove")) {

    const exampleEmbed3 = new EmbedBuilder()
      .setTitle(userName + "'s List")
      .setColor(0x0099FF)
      .setAuthor({ name: 'froggit!', iconURL: 'https://cdn.discordapp.com/attachments/1031064989643051078/1031227116324405278/froggit.png' }) // put froggit icon here
      .setDescription('Here are your tasks:')
      .addFields(
        { name: 'Tasks', value: mylist[0]}
      )
      .setTimestamp()
      .setFooter({ text: "your frog friend believes in you!", iconURL: 'https://cdn.discordapp.com/attachments/1031064989643051078/1031227116324405278/froggit.png' }); // put froggit icon here
    message.channel.send({ embeds: [exampleEmbed3] });
  }
});




/*client.on("messageCreate", (message) => {
  if (message.content.startsWith("!remove")) {
    
  }
});*/

// Starting tasks: Drink a glass of water, Touch grass
// Add tasks - !add
// Remove tasks - !remove


// keep this part 
const mySecret = process.env['TOKEN']
console.log(mySecret);
client.login(mySecret);
// ^^


