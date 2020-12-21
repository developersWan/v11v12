const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
    
  message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`**Yardım Menüsüne Hoş Geldin Dostum 😇**
  \`\`\`${client.user.username} Bot Yardım ve Hakkında.\`\`\`
  
  **\`!çevir\`
  V11 Kodunuzu V12 Versiyonuna çevirir!
  
  \`Bot Hakkında\`
  Bu bot kodlarınızı kolay bir şekilde V12'ye çevirip botunuzu güncellemenize yarar.

  \`Botumu Neden Güncelliyim?\`
  Gelen güncellemelerde discord.js daha da iyileştiği için botunuza daha güzel özellikler ekleyebilirsiniz!

  \`Nasıl Kullanıcam?\`
  !çevir <V11 Kodunuz> yazdıktan sonra bot otomatik olarak kodunuzu V12'ye Çevirir!
  **
  
  
  💐 İyi Kodlamalar  :)
  **`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png'))


  //message.channel.send(embed);
  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases:['help', 'bilgi'],
    permlevel: 0
};

exports.help = {
    name: "yardım"
}