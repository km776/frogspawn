// go to shell and type 'kill 1' to rehost and make sure bot works again
// heroku our beloved ??

// all commands so far: !friend, !ping, frog reaction
// want to add: !fact

// definitions
const Discord = require('discord.js');
const https = require('https');
const { Client, GatewayIntentBits } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
//const mylist = []
//const removelist = []
var frogRarity = frogGacha();
var frogName = 0;
var indexFrog = 0;
var nameKey = ["'★★★' = COMMON", "'★★★★' = RARE", "'★★★★★' = LEGENDARY"]

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

// function - species name generator
function randomName() {
  nameCommon = ["Smooth Frog", "Bilingual Froglet", "Quacking Frog", "Moss Froglet", "Orange-bellied Frog", "Small Western Froglet", "Karri Frog", "Vaillant's Frog", "Robber Frog", "Rocket Frog", "Green Frog", "Painted Frog"]
  nameRare = ["Kloof Frog", "Giant barred frog", "Giant Slippery Frog", "Lake Junin Frog", "Sphagnum frog", "Eungella Torrent Frog"]
  nameLegendary = ["Corroboree Frog", "White-bellied Frog"]
  if (frogRarity == '★★★★★') {
    let frogName = nameLegendary[indexFrog];
    return frogName;
  }
  else if (frogRarity == '★★★★') {
    let frogName = nameRare[indexFrog];
    return frogName;
  }
  else if (frogRarity == '★★★') {
    let frogName = nameCommon[indexFrog];
    return frogName;
  }
}

// function - frog URL for links
function frogURL() {
  let commonURL = ['https://www.iucnredlist.org/species/41144/78440727', 'https://www.iucnredlist.org/species/41132/78440009', 'https://www.iucnredlist.org/species/41134/78439759', 'https://www.iucnredlist.org/species/54352/78430882', 'https://www.iucnredlist.org/species/9032/78432697', 'https://www.iucnredlist.org/species/41142/78440937', 'https://www.iucnredlist.org/species/41147/78441853', 'https://www.iucnredlist.org/species/58744/53972044', 'https://www.iucnredlist.org/species/88299330/54351176', 'https://www.iucnredlist.org/species/41101/78450125', 'https://www.iucnredlist.org/species/58578/193376512', 'https://www.iucnredlist.org/species/55270/89700379']
  let rareURL = ['https://www.iucnredlist.org/species/58076/77159820', 'https://www.iucnredlist.org/species/13598/4222278', 'https://www.iucnredlist.org/species/5263/96062132', 'https://www.iucnredlist.org/species/2645/89195689', 'https://www.iucnredlist.org/species/54355/11128480', 'https://www.iucnredlist.org/species/21531/78446758']
  let legendaryURL = ['https://www.iucnredlist.org/species/18582/78432063', 'https://www.iucnredlist.org/species/9031/78432519']
  if (frogRarity == '★★★★★') {
    let frogURL = legendaryURL[indexFrog];
    return frogURL;
  }
  else if (frogRarity == '★★★★') {
    let frogURL = rareURL[indexFrog];
    return frogURL;
  }
  else if (frogRarity == '★★★') {
    let frogURL = commonURL[indexFrog];
    return frogURL;
  }
}

// function - scientific name
function frogScience() {
  let scienceCommon = ["Geocrinia laevis", "Crinia bilingua", "Crinia georgiana", "Crinia nimbus", "Geocrinia vitellina", "Crinia subinsignifera", "Anstisia rosea", "Lithobates vaillanti", "Craugastor raniformis", "Litoria nasuta", "Lithobates clamitans", "Discoglossus pictus"]
  let scienceRare = ["Natalobatrachus bonebergi", "Mixophyes iteratus", "Conraua goliath", "Telmatobius macrostomus", "Philoria sphagnicolus", "Taudactylus eungellensis"]
  let scienceLegendary = ["Pseudophryne corroboree", "Geocrinia alba"];
  if (frogRarity == '★★★★★') {
    indexFrog = Math.floor(Math.random() * scienceLegendary.length)
    let frogScienceName = scienceLegendary[indexFrog];
    return frogScienceName;
  }
  else if (frogRarity == '★★★★') {
    indexFrog = Math.floor(Math.random() * scienceRare.length)
    let frogScienceName = scienceRare[indexFrog];
    return frogScienceName;
  }
  else if (frogRarity == '★★★') {
    indexFrog = Math.floor(Math.random() * scienceCommon.length)
    let frogScienceName = scienceCommon[indexFrog];
    return frogScienceName;
  }
}

// function - description type
function frogDescribe() {
  describeCommon = ["The body of the Smooth Frog is grey or brown, sometimes with small red spots. The underside of their hind legs and groin has pink patches.", "A small (2 cm) slender-bodied pale brown frog with or without an elaborate pattern of bars and stripes across the body and limbs. The limbs are of moderate length and slender, with unwebbed fingers and toes.", "Also known as the red-thighed froglet due to its legs tending to be bright red. The frog is well known for the sound it produced which resembled a quack.", "The moss froglet is Tasmania’s most recently discovered frog, found in the Hartz Mountains in 1992.The only frog species currently known in south-west Tasmania, it thrives in subalpine swamps and lays its eggs within clumps of moss and lichen.", "An orange-bellied frog with a brown back, covered in tiny spots that resemble a starry sky, this frog is also known as the 'starry dwarf frog'. Researchers first came across the creatures in 2010.", "A very common, Australian ground-dwelling frog, the common eastern froglet is a small frog of brown or grey colour of various shades. The frog is of extremely variable markings, with great variety usually found within confined populations.", "This frog's former classification was 'Geocrinia rosea', and it was reclassified in 2022. It also known as the roseate frog.", "A species of frog in the family Ranidae found in Central America. Has a wide variety of habitats in subtropical or tropical areas.", "The young of this genus (Eleutherodactylus) hatch as small frogs, rather than as tadpoles. Most species are characterized by parental behaviors, such as egg-guarding by either the male or female parent.", "Rocket frog is a common name for many species of frog, though this one in particular refers to the striped rocket frog. It is kept as a pet, and in Austrailia this animal may be kept in captivity with the appropriate permit.", "A common North American amphibian. Close your eyes, picture a typical frog, you now know what this species looks like!", "Also known as the Mediterranean painted frog, these frogs can have colorful markings. Populatuions that live along rivers, seasonal ponds, and swamps seem to be less endangered."]
  describeRare = ["Also known as the Natal diving frog, Boneberg's frog, or Kloof frog, it is the only species within the monotypic genus Natalobatrachus. It is native to South Africa.", "Found in Australia, it is associated with flowing streams and creeks as well as rainforest habitats. This is the Australia's second largest species of frog.", "Specimens can grow up to 32cm in length and weight up to 3.25 kg (7.2 lb)! Its numbers are dwindling due to habitat destruction and its collection for food and the pet trade.", "This completely aquatic frog is a very large and endangered species of frog. It has been introduced to slow-moving parts of the upper Mantaro River, although it is unclear if this population still persists.", "These frogs are all confined to mountain areas, and native to Australia. It is threatened by climate change pathogens and habitat loss.", "This frog inhabits montane rainforest and tall open forests. This species is the only known Australian frog to go through an apparent period of absence, only to later reappear."]
  describeLegendary = ["Corroboree frogs comprise two species of frog native to the Southern Tablelands of Australia, the northern and southern species. Both species are small, posionous ground-dwelling frogs.", "It was reclassified into the new genus Anstisia in 2022. Threats from altered ecology have made this a critically endangered species of south-western Australia."]
  if (frogRarity == '★★★★★') {
    let frogType = "This is a LEGENDARY frog! " + describeLegendary[indexFrog];
    return frogType;
  }
  else if (frogRarity == '★★★★') {
    let frogType = 'This is a RARE frog! ' + describeRare[indexFrog];
    return frogType;
  }
  else if (frogRarity == '★★★') {
    let frogType = 'This is a COMMON frog! ' + describeCommon[indexFrog];
    return frogType;
  }
  console.log(frogType);
}

//frogGacha();
//randomName();
// speciesType();
//frogDescribe();

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
    frogRarity = frogGacha();
    frogName = randomName();
    // randomizes rarity every single time the command is called WHICH IS WHAT I WANTED BUT DIDNT REALIZE
    const exampleEmbed = new EmbedBuilder()
      .setColor(0x0099FF)
      .setTitle(frogName) // rotate through a list of names -- 
      .setURL(frogURL())
      .setAuthor({ name: 'frogsinstem', iconURL: 'https://cdn.discordapp.com/attachments/1074034215802372118/1074113960451784794/image.png' })
      .setDescription(frogDescribe())
      .addFields(
        { name: '\u200B', value: '\u200B' },
        { name: 'Scientific Name', value: frogScience(), inline: true }, // rotate through a list of traits like pokemon
        { name: 'Rarity', value: frogRarity, inline: true }, // rotate through a list of colors
      )
      .setImage('https://cdn.discordapp.com/attachments/1031064989643051078/1031227057939693599/unknown.png') // put frog generated characters here
      .setTimestamp()
      .setFooter({ text: 'brought to you by frogsinstem!', iconURL: 'https://cdn.discordapp.com/attachments/1074034215802372118/1074113960451784794/image.png' }); // put froggit icon here
    message.channel.send({ embeds: [exampleEmbed] });
  }
});


// keep this part 
const mySecret = process.env['TOKEN']
client.login(mySecret);
// ^^


