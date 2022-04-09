# Selam Ben Alencia Bu Welcom Botu Bana Ait Olmak Üzere Ve Söylediyim Burdaki Seslendirmeler Bana Ait Degildir Sade İyi Günler + Teşekkürler.
# Mutlaka Doldurmanız Gerekmektedir
```js
const tokens = [
"TOKEN GİRMELİSİNİZ 1",
"TOKEN GİRMELİSİNİZ 2",
"TOKEN GİRMELİSİNİZ 3",
"TOKEN GİRMELİSİNİZ 4",
];
const chnls = [
"SES İD'Sİ GİRMELİSİNİZ 1",
"SES İD'Sİ GİRMELİSİNİZ 2",
"SES İD'Sİ GİRMELİSİNİZ 3",
"SES İD'Sİ GİRMELİSİNİZ 4",
];
```
# Burda İse Yetkili Rolü İle Register Rolünü Girmelisiniz
```js
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
```
# GÖRSELLER
<img src="https://cdn.discordapp.com/attachments/960213823141339206/962290054628257843/unknown.png">
