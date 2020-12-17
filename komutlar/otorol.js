const Discord = require("discord.js");
let db = require("quick.db");
module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.reply(
      "Komutu kullanmak için rolleri yönet yetkinin bulunması gerek!"
    );
  if (!args[0])
    return message.reply(
      "Otorol ayarlamak için: `!otorol ayarla @rol`\nOtorol sıfırlamak için: `!otorol sıfırla`"
    );
  if (args[0] === "sıfırla") {
    await db.delete("otorol." + message.guild.id);
    message.reply("Otorol sıfırlandı!");
  }
  if (args[0] === "ayarla") {
    let teaky = message.mentions.roles.first();
    if (!teaky) return message.reply("Rol etiketlemen gerekiyor.");
    await db.set("otorol." + message.guild.id, teaky.id);
    let embed = new Discord.MessageEmbed()
      .setTitle("Otorol")
      .setThumbnail(message.guild.iconURL())
      .setColor("RANDOM")
      .setDescription(`${teaky} rolü girenlere otomatik verilecek!`)
      .setTimestamp();
    message.channel.send(embed);
  }
};
module.exports.conf = {
  aliases: []
};

module.exports.help = {
  name: "otorol"
};