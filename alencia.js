const Discord = require('discord.js');
//Alencia
const tokens = ["TOKEN GİRMELİSİNİZ 1", "TOKEN GİRMELİSİNİZ 2", "TOKEN GİRMELİSİNİZ 3", "TOKEN GİRMELİSİNİZ 4", ];
const chnls = ["SES İD'Sİ GİRMELİSİNİZ 1", "SES İD'Sİ GİRMELİSİNİZ 2", "SES İD'Sİ GİRMELİSİNİZ 3", "SES İD'Sİ GİRMELİSİNİZ 4", ];
//Not: Arkdaşlar İstediginiz Kadar Welcom Botu Ekleyebilirsiniz Botunuz Konusan Ses Yani Hoşgeldin Sesi Bana Ait Degildir...
const selamlı = [];
for (let index = 0; index < tokens.length; index++) {
    const token = tokens[index];
    const client = new Discord.Client();
    client.login(token);
    let concon;
    client.on('ready', async() => {
        console.log(client.user.username); //Alencia
        await client.user.setActivity({ name: "❤️  Alencia", type: "LISTENING", status: "ONLİNE" });
        concon = await client.channels.cache.get(chnls[index]).join()
    });
    let zewo;
    client.on('voiceStateUpdate', async(prev, cur) => {
        if (cur.member.user.bot) return; //Alencia
        if (cur.channel && (cur.channel.id === chnls[index])) {
            if (cur.channelID === prev.channelID) return;
            if ((cur.member.roles.highest.rawPosition < cur.guild.roles.cache.get("YETKİLİ YANİ KAYIT ROLÜNÜ GİRMELİSİNİZ").rawPosition)) { //Yetkili Id'si
                zewo = await concon.play('./hosgeldin.mp3');
                selamlı.push(cur.member.user.id);
            } else if (cur.member.roles.highest.rawPosition > cur.guild.roles.cache.get("UNREGİSTERY ROLÜNÜ GİRMELİSİNİZ").rawPosition) { //Hosgeldin ıd'si
                zewo = await concon.play('./yetkili.mp3');
                selamlı.push(cur.member.user.id); //Alencia
            }
        }
    }); //Alencia
    client.on('voiceStateUpdate', async(prev, cur) => { if (cur.member.id === client.user.id) concon = await client.channels.cache.get(chnls[index]).join(); })
}
//botu başlatırken bunu iyi okuyun "node ./zewo.js" yazmalısınız//