const Discord = require("discord.js");
////"KENDI ID" Yazan yere kendi idnizi yazacak/yapıştıracak sınız
exports.run = async (client, message) => {
  if (message.author.id == "Kendi id") {
    message.channel.send("Bot yeniden başlatılıyor!"); ////Mesajı vermeyebilir ama kod çalışıyor
    process.exit(0);
  }
};

exports.conf = {
  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0
};

exports.help = {
  name: "reboot",

  description: "Botu yeniden başlatır",

  usage: "reboot"
};
