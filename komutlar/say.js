const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
let tag = "TAG";

const voiceChannels = message.guild.channels.cache.filter(c => c.type === "voice");
let count = 0;
for (const [id, voiceChannel] of voiceChannels)
count += voiceChannel.members.size;

var cses = count.toString().replace(/ /g, "    ");
var cüs2 = cses.match(/([0-9])/g);
cses = cses.replace(/([a-zA-Z])/g, "YOK").toLowerCase();
if (cüs2) {
cses = cses.replace(/([0-9])/g, d => {
return {
"0": "0️⃣",
"1": "1️⃣",
"2": "2️⃣",
"3": "3️⃣",
"4": "4️⃣",
"5": "5️⃣",
"6": "6️⃣",
"7": "7️⃣",
"8": "8️⃣",
"9": "9️⃣"
}[d];
});
}
var ctag = message.guild.members.cache.filter(member => member.user.username.includes(tag)).size.toString();
if (ctag) {
ctag = ctag.replace(/([0-9])/g, d => {
return {
"0": "0️⃣",
"1": "1️⃣",
"2": "2️⃣",
"3": "3️⃣",
"4": "4️⃣",
"5": "5️⃣",
"6": "6️⃣",
"7": "7️⃣",
"8": "8️⃣",
"9": "9️⃣"
}[d];
});
}

var conline = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "");
var cüs4 = conline.match(/([0-9])/g);
conline = conline.replace(/([a-zA-Z])/g, "YOK").toLowerCase();
if (cüs4) {
conline = conline.replace(/([0-9])/g, d => {
return {
"0": "0️⃣",
"1": "1️⃣",
"2": "2️⃣",
"3": "3️⃣",
"4": "4️⃣",
"5": "5️⃣",
"6": "6️⃣",
"7": "7️⃣",
"8": "8️⃣",
"9": "9️⃣"
}[d];
});
}

var cüyesayısı = message.guild.memberCount.toString().replace(/ /g, "");
var cüs = cüyesayısı.match(/([0-9])/g);
üyesayısı = cüyesayısı.replace(/([a-zA-Z])/g, "YOK").toLowerCase();
if (cüs) {
cüyesayısı = cüyesayısı.replace(/([0-9])/g, d => {
return {
"0": "0️⃣",
"1": "1️⃣",
"2": "2️⃣",
"3": "3️⃣",
"4": "4️⃣",
"5": "5️⃣",
"6": "6️⃣",
"7": "7️⃣",
"8": "8️⃣",
"9": "9️⃣"
}[d];
});
}

const cembed = new Discord.MessageEmbed()
.setTitle("Sunucu İstatistik")
.setColor("BLUE")
.setFooter(message.guild.name)
.setTimestamp()
.setThumbnail(message.guild.iconURL({dynamic: true}))
.addField("Toplam Üye", cüyesayısı)
.addField("Toplam Aktif Üye", conline)
.addField("Sesteki Üye Sayısı", cses)
;
message.channel.send(cembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "sunucu",
  description: "Sunucudakileri Sayar",
  usage: "sunucu"
};