const http = require('http');
const express = require('express');
const moment = require('moment')
moment.locale("tr")
const app = express();
app.get("/", (request, response) => {
console.log(moment().format("LLLL") + " BERK //\\ CE");
response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000)

const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const Canvas = require('canvas')
const snekfetch = require('snekfetch');
const fs = require('fs');
const db = require('quick.db')
const ms = require('parse-ms');
require('moment-duration-format')
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
console.log(`${moment().format("DD MMMM YYYY HH:mm")} ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
if (err) console.error(err);
log(`${files.length} adet komut yükleniyor;`);
files.forEach(f => {
let props = require(`./komutlar/${f}`);
log(`Komut: ${props.help.name}`);
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {
client.aliases.set(alias, props.help.name);
});
});
});

client.reload = command => {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(`./komutlar/${command}`)];
let cmd = require(`./komutlar/${command}`);
client.commands.delete(command);
client.aliases.forEach((cmd, alias) => {
if (cmd === command) client.aliases.delete(alias);
});
client.commands.set(command, cmd);
cmd.conf.aliases.forEach(alias => {
client.aliases.set(alias, cmd.help.name);
});
resolve();
} catch (e){
reject(e);
}
});
};

client.load = command => {
return new Promise((resolve, reject) => {
try {
let cmd = require(`./komutlar/${command}`);
client.commands.set(command, cmd);
cmd.conf.aliases.forEach(alias => {
client.aliases.set(alias, cmd.help.name);
});
resolve();
} catch (e){
reject(e);
}
});
};

client.unload = command => {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(`./komutlar/${command}`)];
let cmd = require(`./komutlar/${command}`);
client.commands.delete(command);
client.aliases.forEach((cmd, alias) => {
if (cmd === command) client.aliases.delete(alias);
});
resolve();
} catch (e){
reject(e);
}
});
};

client.elevation = message => {
if(!message.guild) return;

let permlvl = 0;
if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
if (message.author.id === ayarlar.sahip) permlvl = 4;
return permlvl;
};

// KODLAR BURADAN SONRA \\

client.on("message", async (message, guild) => {
if(message.author.bot === true) return
  var miranafk = db.get(`kullanicilar.${message.author.id}.afk`);
  if (!miranafk) return;
  var afkb = JSON.parse(miranafk);
  if (new Date().getTime() - afkb.zaman < 1000) return;
  db.delete(`kullanicilar.${message.author.id}.afk`);
  var süre = new Date().getTime() - afkb.zaman;

    var sürem = moment
      .duration(süre)
      .format("Y [yıl], M [ay], D [gün], H [saat], m [dakika], s [saniye]");
    message.channel.send(
      ":thumbsup:| AFK modundan ayrıldınız. <@" +
        message.author.id +
        ">. Afk kaldığın süre:** " +
        sürem +
        "**"
    );

});
//
client.on("message", async (message, guild) => {
  let etiket = message.mentions.users.first();
  if (!etiket) return;
  var afaka = db.fetch(`kullanicilar.${etiket.id}.afk`);
  if (!afaka) return;
  var afk = JSON.parse(afaka);
  if (!afk) return;
  var süre = new Date().getTime() - afk.zaman;
    var sürem = moment
      .duration(süre)
      .format("Y [yıl], M [ay], D [gün], H [saat], m [dakika], s [saniye]");
    if (afk) {
      return message.channel.send(
        `**${etiket.tag}** adlı kullanıcı **${sürem}**dir **${afk.sebep}** sebebiyle afk!`
      );
    }
  

});

client.on('guildMemberAdd',async member => {
  
 let veri = await db.fetch(`codeming_${member.guil.id}`)
 
 
 if(!veri) return
 
  
  let kanal = member.guild.channels.get(veri)
 
  if(!kanal) return member.guild.owner.send('Daha önceden güvenlik kanalı olarak ayarlanmış kanalı bulamıyorum.? Silinmiş olabilir mi?')
  
  const kurulus = new Date().getTime() - member.createdAt.getTime(); 
  let beklenen = 86400000
  
  if(kurulus < beklenen) {
    
    
 kanal.send(':x: Anlaşılan **'+member.username+'** adlı kullanıcının hesabı **1 gün**den daha önce kurulmuş.Sunucudan yasakladım.')   
   member.guild.ban(member, { reason: "BayBay!" });    
    
  } else {
   
 kanal.send('👍 **'+member.user.username+'** adlı kullanıcının hesabı **1 gün**den uzun süredir açık gibi gözüküyor! Giriş izni verildi.')   
   
  }
  
  
  
})

client.on("guildMemberAdd", async member => {
  let csdb = require("quick.db");
  let data = db.get("otorol." + member.guild.id);

  if (data) {
    let rol = member.guild.roles.cache.get(data);
    if (rol) {
      if(!member.user.bot){
      await member.roles.add(rol);
      }
    }
  }
});

client.on('guildMemberAdd', member => {
    const batucode = new Discord.MessageEmbed()
      .setColor("0x808080")
      .addField('Aramıza, hoşgeldin! :thumbsup:', 'Geldiğin İçin Teşşekürler.')
    member.send(batucode);
  });

client.on('guildMemberRemove', member => {
    member.send('**Görünüşe göre bir sunucudan ayrılmışsın yeniden bekleriz...**')
  });


client.on("guildMemberAdd", async (member) => {
let user = client.users.get(member.id);
let rol = db.fetch(`fakerol_${member.guild.id}`)
let kanal = db.fetch(`fakekanal_${member.guild.id}`)
const mami = new Date().getTime() - user.createdAt.getTime();

if (mami < 604800000) {
member.addRole(rol)
let embed1 = new Discord.MessageEmbed()
.setColor('RED')
.setAuthor('Tehlikeli')
.setDescription(`${user} adlı kullanıcı hesabını açalı **7 günden önce** olduğu için **fake sistemine takıldı.** <@&${rol}> adlı **rol verildi.**`)
client.channels.get(kanal).send(embed1)
}
else
{
let embed2 = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor('Güvenli')
.setDescription(`${user} adlı kullanıcı hesabını açalı** 7 günden fazla** olduğu için **fake sistemine takılmadı.**`)
client.channels.get(kanal).send(embed2)
}
}); 

client.on("guildMemberAdd", member => {
let user = client.users.get(member.id)
let süre = require('moment')
süre.locale('tr') 

let kanal = db.fetch(`kayıtkanal_${member.guild.id}`)
let yetkili = db.fetch(`kayıtyetki_${member.guild.id}`)
let tag = db.fetch(`ktag_${member.guild.id}`)
if(!kanal) return

const kurulus = new Date().getTime() - user.createdAt.getTime();
const gün = moment.duration(kurulus).format("D");
var kontrol;
if (kurulus > 2629800000) kontrol = "Güvenli";
if (kurulus < 2629800000) kontrol = "Şüpheli";

client.channels.get(kanal).send(`
Hoşgeldin <@${member.id}>! Seninle Beraber **__${member.guild.members.size}__** Kişiyiz!
Kaydının yapılması için gerçek ismini ve yaşını vermen gereklidir. 
<@&${yetkili}> Rolü bulunan arkadaşlar seninle ilgilenecektir.
**${tag}** Tagımızı alarak avantajlar elde edebilirsin.
Hesap oluşturulma tarihi: **${moment(user.createdAt).format("DD/MM/YYYY HH:mm:ss")}**
Hesap güvenlir mi? : **${kontrol}**`)
})

client.on("guildMemberAdd", member => {
  const hosgeldin = new Discord.MessageEmbed()
  .setColor('Random')
  .setThumbnail(member.guild.iconURL({dynamic:true}))
  .setTitle('Sunucumuza hoşgeldiniz !!')
  .setDescription('Sunucumuza geldiğin için bir teşekkürü borç biliriz')
.setFooter('RaufaiBeta#0001')
  member.send(hosgeldin)
  });

client.on("guildCreate", async(guild) => {

  let sahip = guild.owner.id
  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle('Beni sunucuna eklediğin içiin teşekür ederim !!')
  .setDescription('Bla bla bla...')
  .setFooter('RaufaiBeta#0001')
  client.users.cache.get(sahip).send(embed)             
    })

client.on("guildCreate", async guild => {
  let kanal = 'log-id'
  const embed = new Discord.MessageEmbed()
  .setColor('GREEN')
  .setTitle('Bir Sunucuya Eklendim')
  .setThumbnail(guild.iconURL({dynamic:true}))
  .addField('Sunucu Adı', guild.name )
  .addField('Sunucu İdsi', guild.id )
  .addField('Sunucu Sahibi', guild.owner.user.username + '#' + guild.owner.user.discriminator )
  .addField('Sunucuda Bulunan Kanal Sayısı', guild.channels.cache.size )
  .addField('Sunucuda Bulunan Üye Sayısı', guild.members.cache.size )
  client.channels.cache.get(kanal).send(embed)

});
client.on("guildDelete", async guild => {
  let kanal = 'log-id'
  const embed = new Discord.MessageEmbed()
  .setColor('RED')
  .setTitle('Bir Sunucudan Atıldım')
  .setThumbnail(guild.iconURL({dynamic:true}))
  .addField('Sunucu Adı', guild.name )
  .addField('Sunucu İdsi', guild.id )
  .addField('Sunucu Sahibi', guild.owner.user.username + '#' + guild.owner.user.discriminator )
  .addField('Sunucuda Bulunan Üye Sayısı', guild.members.cache.size )
  client.channels.cache.get(kanal).send(embed)

});

client.on("guildMemberAdd", async member => {
    let sayı = await db.fetch(`sayı_${member.guild.id}`)  
    let kanal = await db.fetch(`sayaçkanal_${member.guild.id}`)       
    if(!sayı || !kanal) return
    let sonuç = sayı - member.guild.memberCount
    const embed2 = new Discord.MessageEmbed()
.setDescription(`${member}, Aramızdan ayrıldı! **${sayı}** kişiye ulaşmak için **${sonuç}** kişi kaldı Şuan **${member.guild.memberCount}** Kişiyiz`)  
    client.channels.cache.get(kanal).send(embed2);
    })
    client.on("guildMemberRemove", async member => {
    let sayı = await db.fetch(`sayı_${member.guild.id}`)  
    let kanal = await db.fetch(`sayaçkanal_${member.guild.id}`)                                              
    if(!sayı || !kanal) return
    let sonuç = sayı - member.guild.memberCount
    const embed = new Discord.MessageEmbed()
.setDescription(`${member}, Aramızdan ayrıldı! **${sayı}** kişiye ulaşmak için **${sonuç}** kişi kaldı Şuan **${member.guild.memberCount}** Kişiyiz`)  
    client.channels.cache.get(kanal).send(embed);
    return
    })


client.on("guildMemberAdd", async(member) => {
let ingewikkeld = db.fetch("ce-nickreklam."+member.guild.id)
if(!ingewikkeld) return
const CodEming = [
".com",
".tk",
".gg",
"discord.gg/",
]
if(CodEming.some(ingew => member.user.username.includes(ingew))) {
await member.guild.members.cache.get(member.id).send("RaufaiBeta Burada! RaufaiBeta olarak reklama karşıyız. Nickindeki reklamı silerek tekrar katılmayı deneyebilirsin.")
await member.kick();
}
})

// DİSCORD.GG/CODEMİNG <3 \\

client.on("ready", async() => {

setInterval(() => {
 
let datalar = db.all().filter(data => data.ID.startsWith("mute_"))  

if(datalar.size < 0) return;

datalar.forEach(datacık => {

let kullanıcı = datacık.ID.replace("mute_", "")
let data = db.fetch(`mute_${kullanıcı}`)

// DİSCORD.GG/CODEMİNG <3 \\

let süre = data.ms - (Date.now() - data.başlangıç)

let sunucu = client.guilds.cache.get(data.sunucu)
let member = sunucu.members.cache.get(kullanıcı)
let kanal = sunucu.channels.cache.get(data.kanal)
let sebep = data.sebep
let moderator = client.users.cache.get(data.moderator)
let mute_rol = sunucu.roles.cache.find(rol => rol.name.toLowerCase().includes("susturuldu") || rol.name.toLowerCase().includes("muted"))


if(!member) {

  let hata = new Discord.MessageEmbed()
  .setTitle("Mute Devam Edemedi!")
  .setDescription("**"+kullanıcı+"** ID'ye sahip; **"+moderator.username+"** Tarafından mutelenen kullanıcı **"+sunucu.name+"** Sunucusundan ayrılmış!")
  .setColor("RED")
kanal.send("<@!"+moderator.id+">", hata)
db.delete(datacık.ID)

return
} 

// DİSCORD.GG/CODEMİNG <3 \\

if(süre > 0) return

let bitti = new Discord.MessageEmbed()
.setTitle(":hammer_pick: Mute Kaldırıldı!")
.setDescription("Aşağıdaki kullanıcıya ait mute; **Süresi Dolduğu** için sonlandırıldı!")
.addField('\u200b', '\u200b')
.addField(":bust_in_silhouette: __KULLANICI__ :bust_in_silhouette:", "» Kullanıcı: **"+member.user.username+"**\n» Mute Sebebi: **"+sebep+"**\n» ID: **"+member.user.id+"**")
.addField('\u200b', '\u200b')
.addField(":maple_leaf: __YETKİLİ__ :maple_leaf:", "» Yetkili: **"+moderator.username+"**\n» ID: **"+moderator.id+"**")
.setColor("GREEN")
kanal.send("<@!"+member.user.id+"> , <@!"+moderator.id+">",bitti)



member.roles.remove(mute_rol)
db.delete(datacık.ID)
})
// DİSCORD.GG/CODEMİNG <3 \\
}, 5000);

})

// DİSCORD.GG/CODEMİNG <3 \\

client.on("message", async(codeming) => {
  
if(codeming.author.bot) return 
  
if(!codeming.content !== "sa") return  

codeming.channel.startTyping()  
setTimeout(() => {
codeming.channel.stopTyping()  
codeming.channel.send("Aleyküm selam! Hoş geldin.")  
}, 3000)  
})

client.on("userUpdate", async(oldUser, newUser) => {
client.guilds.cache.forEach(ce => {
const data = db.fetch(`metherandom.${ce.id}`)
client.channels.cache.filter(h => h.id === data).forEach(m => {

let Berk = client.users.cache.get(newUser.id).avatarURL({ dynamic: true})


let Yasin = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(client.user.username + " | Random Sistemi")
.setFooter('Botu sunucuna ekleyerek sen de bu sistemi kullanabilirsin!')
.setImage(Berk)
m.send(Yasin)
})
})
})

client.on("guildMemberAdd", async (codeming) => {
let data = await db.fetch(`sayac_${codeming.guild.id}`)  
 
if(!data) return
let kanalveri = data.kanal
let count = data.count  
let ksayı = codeming.guild.memberCount
let kanal = client.channels.get(kanalveri)
let sayı = count-ksayı
if(ksayı >= count) {
kanal.send("📥 **"+codeming.user.username+"** Adlı kullanıcı **"+codeming.guild.name+"** sunucumuza giriş yaptı! :tada: Sunucu sayaç olan **"+count+"** üye sayısına ulaştı.Sayaç durduruldu! `"+count+" / "+ksayı+"`")   
db.delete(`cesayaç_${codeming.guild.id}`)
  return
} else {
  
kanal.send("📥 **"+codeming.user.username+"** Adlı kullanıcı **"+codeming.guild.name+"** sunucumuza giriş yaptı! Şu anda **"+ksayı+"** üyeyiz,**"+count+"** üye olmamız için **"+sayı+"** üye kaldı!")   
   
}
  
})

client.on("guildMemberRemove", async (codeming) => {
let data = await db.fetch(`cesayaç_${codeming.guild.id}`)  
 
if(!data) return
let kanalveri = data.kanal
let count = data.count  
let ksayı = codeming.guild.memberCount
let kanal = client.channels.get(kanalveri)
let sayı = count-ksayı

kanal.send("📤 **"+codeming.user.username+"** Adlı kullanıcı **"+codeming.guild.name+"** sunucumuzdan çıkış yaptı! Şu anda **"+ksayı+"** üyeyiz,**"+count+"** üye olmamız için **"+sayı+"** üye kaldı!")   
   

  
})


client.on("message",async(codeming) => {
if(codeming.author.bot) return
if(codeming.author.id === ayarlar.sahip) return

let codemingDC = codeming.content

if(!codemingDC.includes("<@"+ayarlar.sahip+">")) {
if(!codemingDC.includes("<@!"+ayarlar.sahip+">")) {
return

// CODEMİNG :/\:

}
}

let veri = await db.fetch(`ketiket_${codeming.author.id}`)

if(veri) {

let susturuldu = codeming.guild.roles.find(s => s.name === "Susturuldu")

if(!susturuldu) {

codeming.guild.createRole({
        name: 'Susturuldu',
        permissions: [],
        mentionable: false
    }).then(s => {

codeming.guild.channels.forEach(kanallar => {

kanallar.overwritePermissions(s.id, { SEND_MESSAGES: false, READ_MESSAGES: false});
db.delete(`ketiket_${codeming.author.id}`)
codeming.delete()
codeming.member.addRole(s.id)
return codeming.channel.send("<@!"+codeming.author.id+"> Seni uyarmıştım! Susturuldu rolün verildi.")
})

})

} else {

codeming.delete()
codeming.member.addRole(susturuldu.id)
return codeming.channel.send("<@!"+codeming.author.id+"> Seni uyarmıştım! Susturuldu rolün verildi.")
db.delete(`ketiket_${codeming.author.id}`)

let yasin = new Discord.RichEmbed()
.setTitle("Etiketlendin ve susturdum!")
.setDescription("**Etiketleyen:** "+codeming.author.username+"\n\n **Yazdığı Mesaj:**\n "+codemingDC+"")
.setColor("RED")
.setFooter("ByRaufaiBeta")
client.users.get(ayarlar.sahip).send(yasin)

}
} else {

codeming.delete()
return codeming.channel.send("<@!"+codeming.author.id+"> Sahibi etiketleme! Bir daha etikletlersen seni sustururum.")
db.set(`ketiket_${codeming.author.id}`, "aktif")
}
})

client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'sa') {
        msg.reply('Aleyküm Selam Hoşgeldin');      
      } 
      }
    });

client.on("message", async msg => {
    if (msg.channel.type === "dm") return;
      if(msg.author.bot) return;  
        if (msg.content.length > 4) {
         if (db.fetch(`capslock_${msg.guild.id}`)) {
           let caps = msg.content.toUpperCase()
           if (msg.content == caps) {
             if (!msg.member.hasPermission("ADMINISTRATOR")) {
               if (!msg.mentions.users.first()) {
                 msg.delete()
                 return msg.channel.send(`✋ ${msg.author}, Bu sunucuda, büyük harf kullanımı engellenmekte!`).then(m => m.delete(5000))
     }
       }
     }
   }
  }
});

client.on('ready', ()=> {
client.user.setPresence({ activity: { name: `${client.guilds.cache.size} Sunucu | ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcı! | ${ayarlar.prefix}yardım` }, status: 'dnd'})
console.log(`${client.user.tag}! Aktif!`)
});

client.login(ayarlar.token);
