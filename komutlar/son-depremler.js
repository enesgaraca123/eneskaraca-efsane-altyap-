const Discord = require("discord.js")
const fetch = require('node-fetch');

exports.run = async (client, message, args, db) => {
let date = await new Date()
var ay= (date.getMonth().toString().length == 1 ? "0" + date.getMonth().toString() + 1 : date.getMonth() + 1)
var gun = (date.getDate().toString().length == 1 ? "0" + date.getDate().toString() : date.getDate())
await fetch(`https://api.orhanaydogdu.com.tr/deprem/index.php?date=${date.getFullYear()}-${ay}-${gun}&limit=10`)
    .then(res => res.json())
    .then(json => {
let sonuc = json.result
var teaky = ""
  const embed = new Discord.MessageEmbed()
  .setAuthor("Son 10 Deprem")
    .setColor(`2C2F33`)
    .setFooter(`Kaynak: Kandilli Rasathanesi`, message.author.displayAvatarURL({dynamic:true}))
for (const ap of sonuc) {
  embed.addField(`${ap.lokasyon}`,` __Zaman:__ ${ap.date} __Büyüklük:__ ${ap.mag} - __Derinlik:__ ${ap.depth}km \n\n`)
}

  message.channel.send(embed)
})
};

// BU KOMUT codare.fun' DAN ALINTIDIR!
 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["depremler","deprem"],
  permLevel: 0,
};

exports.help = { 
  name: 'sondepremler', 
}