// go to shell and type 'kill 1' to rehost and make sure bot works again
// heroku our beloved ??
// 3.2.2022 - lets uh. lets try using arrays next time.

// all commands so far: !friend, !ping, frog reaction
// want to add: !fact

// definitions
const Discord = require('discord.js');
const https = require('https');
const { Client, GatewayIntentBits } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
var frogRarity = frogGacha();
var indexFrog = 0;
var frogName, frogSpecies, frogScientific;
// var nameKey = ["'★★★' = COMMON", "'★★★★' = RARE", "'★★★★★' = LEGENDARY"]

// declaring intents, remember to edit bot perms
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

//showing that the bot is logged in, provides false hope before i get (another) error
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

// !start command
client.on("messageCreate", (message) => {
  let userName = message.author.username;
  if (message.content.startsWith("!start")) {
    const startEmbed = new EmbedBuilder()
      .setTitle(userName + ", I'm here to help! Here's what I can do: ")
            .setAuthor({ name: 'frogspawn', iconURL: 'https://cdn.discordapp.com/attachments/1074034215802372118/1074113960451784794/image.png', url: 'https://www.google.com/' })
      .setColor(0x0099FF)
      .addFields(
        { name: '!start', value: "Lists all commands (not that many)." },//1 
        { name: '!friend', value: "Roll for frogs! Can you get a rare or legendary one?" },//2
        { name: '!donate', value: "Provides a list of links for users to donate to various environmental causes." },
        { name: '!about', value: "Briefly informs the user about the developers' motivations behind the bot, alongside links to the website, Github repository, and Replit." },
        { name: 'automatic frog reaction', value: "If a user types the word 'frog', it's automatically reacted to with a frog emote." },//3
      )
      .setTimestamp()
      .setFooter({ text: "brought to you by frogspawn.", iconURL: 'https://cdn.discordapp.com/attachments/1074034215802372118/1074113960451784794/image.png' });
    message.channel.send({ embeds: [startEmbed] });
  };
});

// !donate command
client.on("messageCreate", (message) => {
  let userName = message.author.username;
  if (message.content.startsWith("!donate")) {
    const donateEmbed = new EmbedBuilder()
      .setTitle(userName + ", I'm so glad you decided to help me and my friends out! Here's what you can do: ")
            .setAuthor({ name: 'frogspawn', iconURL: 'https://cdn.discordapp.com/attachments/1074034215802372118/1074113960451784794/image.png', url: 'https://www.google.com/' })
      .setColor(0x0099FF)
      .addFields(
        { name: 'A Frog House', value: "A center for local advocacy, worldwide collaboration, and ecological education that works on behalf of amphibians and the citizens of upstate New York, advocating for chemical free properties, clean water, and healthy wetlands. [Donate here!](https://afroghouse.org/donate)" },//1 
        { name: 'Froglife', value: "A national wildlife conservation charity concerned with the conservation of the UK’s reptile and amphibian species and their associated habitats. [Donate here!](https://www.froglife.org/shop/sponsorship/donate/)" },//2
        { name: 'The Amphibian Foundation', value: "The foundation is dedicated to connecting individuals, communities and organizations in order to create and implement lasting solutions to the global amphibian extinction crisis. [Donate here!](https://amphibianfoundation.org/index.php/donations)" },
        { name: 'WWF - Adopt a Frog', value: "Symbolic animal adoption generously supports WWF’s global conservation efforts and build a future where people live in harmony with nature. [Donate here!](https://gifts.worldwildlife.org/gift-center/gifts/Species-Adoptions/Red-Eyed-Tree-Frog.aspx)" },//3
      )
      .setTimestamp()
      .setFooter({ text: "brought to you by frogspawn.", iconURL: 'https://cdn.discordapp.com/attachments/1074034215802372118/1074113960451784794/image.png' });
    message.channel.send({ embeds: [donateEmbed] });
  };
});

// !about command
client.on("messageCreate", (message) => {
  let userName = message.author.username;
  if (message.content.startsWith("!about")) {
    const donateEmbed = new EmbedBuilder()
      .setTitle(userName + ", want to learn more about me?")
      .setAuthor({ name: 'frogspawn', iconURL: 'https://cdn.discordapp.com/attachments/1074034215802372118/1074113960451784794/image.png', url: 'https://www.google.com/' })
      .setColor(0x0099FF)
      .addFields(
        { name: 'About Me', value: "Hi there! I'm frogspawn, developed lovingly by three chronically online gamers at HackHERS 2023! Created at the intersection of the developers' interests, I aim to provide awareness to certain species of frogs based on their 'rarity' - that is, how endangered they are. Critically endangered species are harder to roll for (unless you have luck!), and vice versa. We all hope you enjoy! :)"},
        { name: 'Website', value: "[Found here!](https://km776.github.io/frogspawn/)", inline: true },
        { name: 'Github', value: "[Found here!](https://github.com/km776/frogspawn)", inline: true },//2
        { name: 'Replit', value: "[Found here!](https://replit.com/@KapilaMane/frogspawn?v=1)", inline: true }) // PUBLISH REPLIT LOL
      .setTimestamp()
      .setFooter({ text: "brought to you by frogspawn.", iconURL: 'https://cdn.discordapp.com/attachments/1074034215802372118/1074113960451784794/image.png' });
    message.channel.send({ embeds: [donateEmbed] });
  };
});

// function - random frog species generator
function frogGacha() {
  var frogNum = Math.floor(Math.random() * 100);
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
}

// function randomImg
function randomImg() {
  imgCommon = ["https://nationalzoo.si.edu/sites/default/files/animals/smoothsidedtoad-001.jpg", "https://museum.wa.gov.au/sites/default/files/imagecache/wam_v2_page_full_gallery/photo-galleries/555.jpeg", "https://museum.wa.gov.au/sites/default/files/imagecache/wam_v2_page_full_gallery/photo-galleries/505.jpeg", "https://live.staticflickr.com/4109/5394733582_a42a0d9fe0_b.jpg", "https://museum.wa.gov.au/sites/default/files/imagecache/wam_v2_page_full_gallery/photo-galleries/271.jpeg", "https://inaturalist-open-data.s3.amazonaws.com/photos/46983005/original.jpg", "https://res.cloudinary.com/ausmus/image/upload/c_fill,g_auto,h_450,q_auto,w_800/b7qp9djeqekbmynhoxzm", "https://inaturalist-open-data.s3.amazonaws.com/photos/1656167/large.jpg", "https://upload.wikimedia.org/wikipedia/commons/3/37/Eleutherodactylus_mimus.jpg", "https://upload.wikimedia.org/wikipedia/commons/a/a1/Litoria_nasuta.JPG", "https://media.australian.museum/media/dd/images/Some_image.width-1600.4c73ba1.jpg", "https://www.edgeofexistence.org/wp-content/uploads/2017/05/Latonia_nigriventer_Photo_Frank_Glaw-1.jpg"]
  imgRare = ["http://thebdi.org/wp-content/uploads/2021/11/005885-1.jpg", "https://upload.wikimedia.org/wikipedia/commons/b/ba/Mixophyes_iteratus.jpg", "https://upload.wikimedia.org/wikipedia/commons/d/d7/Goliath_Frog.jpg", "https://upload.wikimedia.org/wikipedia/commons/f/f4/Rana_de_Junin_22.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Sphagnum_Frog_-_Philoria_sphagnicolus.jpg/1200px-Sphagnum_Frog_-_Philoria_sphagnicolus.jpg", "https://upload.wikimedia.org/wikipedia/commons/3/37/Taudactylus_eungellensis_1.jpg"]
  imgLegendary = ["https://www.environment.act.gov.au/__data/assets/image/0003/751287/Cfrog5.JPG", "https://museum.wa.gov.au/sites/default/files/imagecache/wam_v2_page_full_gallery/photo-galleries/256.jpeg"]
  if (frogRarity == '★★★★★') {
    let frogImg = imgLegendary[indexFrog];
    return frogImg;
  }
  else if (frogRarity == '★★★★') {
    let frogImg = imgRare[indexFrog];
    return frogImg;
  }
  else if (frogRarity == '★★★') {
    let frogImg = imgCommon[indexFrog];
    return frogImg;
  }
}

//frogGacha();
//randomName();
// speciesType();
//frogDescribe();

// test ping-pong example -- add to website as a little treat for reading that far
client.on("messageCreate", (msg) => {
  if (msg.content.startsWith("!ping")) {
    msg.channel.send("i love sana-sama! <3");
  }
});

// test frog example -- IT WORKS
client.on("messageCreate", (message) => {
  if (message.content.match(/frog/gi)) {
    message.react('🐸');
  }
});

// making the frog friend
client.on("messageCreate", (message) => {
  if (message.content.startsWith("!friend")) {
    frogRarity = frogGacha();
    frogScientific = frogScience();
    frogSpecies = randomName();
    frogImg = randomImg();
    // randomizes rarity every single time the command is called WHICH IS WHAT I WANTED BUT DIDNT REALIZE
    const friendEmbed = new EmbedBuilder()
      .setColor(0x0099FF)
      .setTitle(frogSpecies) // rotate through a list of names -- YES IT WORKS
      .setAuthor({ name: 'frogspawn', iconURL: 'https://cdn.discordapp.com/attachments/1074034215802372118/1074113960451784794/image.png', url: 'https://www.google.com/' })
      .setURL(frogURL())
      .setAuthor({ name: 'frogspawn', iconURL: 'https://cdn.discordapp.com/attachments/1074034215802372118/1074113960451784794/image.png' })
      .setDescription(frogDescribe())
      .addFields(
        { name: '\u200B', value: '\u200B' },
        { name: 'Scientific Name', value: frogScientific, inline: true },
        { name: 'Rarity', value: frogRarity, inline: true })
      .setImage(frogImg) // put images
      .setTimestamp()
      .setFooter({ text: 'brought to you by frogspawn!', iconURL: 'https://cdn.discordapp.com/attachments/1074034215802372118/1074113960451784794/image.png' });
    
    let userName = message.author.username;
    message.channel.send({ embeds: [friendEmbed] });
  }
});

// keep this part 
const mySecret = process.env['TOKEN']
client.login(mySecret);
// ^^
