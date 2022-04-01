const db = require('quick.db');
const { MessageEmbed } = require('discord.js');
module.exports = {
name: 'warny',
async execute(message, args) {
    const m = message.mentions.members.first()

   if (!m) return message.reply({ content: 'Nie podano wzmianki'});
     const embed1 = new MessageEmbed()
 .setTitle(`Warny stivka ${m.user.tag}`)
     .addField('Ilość warnów', `${db.get(`warn_${m.user.id}`) || 'Brak warnów'} `)
    .addField('Brakuje do mute', '2')
      const embed2 = new MessageEmbed()
 .setTitle(`Warny stivka ${m.user.tag}`)
     .addField('Ilość warnów', `${db.get(`warn_${m.user.id}`) || 'Brak warnów'} `)
    .addField('Brakuje do mute', '1')
       const embed3 = new MessageEmbed()
 .setTitle(`Warny stivka ${m.user.tag}`)
     .addField('Ilość warnów', `${db.get(`warn_${m.user.id}`) || 'Brak warnów'} `)
    .addField('Brakuje do mute', 'Powinien być mute')
        const embed0 = new MessageEmbed()
 .setTitle(`Warny stivka ${m.user.tag}`)
     .addField('Ilość warnów', `${db.get(`warn_${m.user.id}`) || 'Brak warnów'} `)
    .addField('Brakuje do mute', '3')
    if (db.get(`warn_${m.id}`) == 3) return message.reply({embeds: [embed3]})
        if (db.get(`warn_${m.id}`) == 2) return message.reply({embeds: [embed2]})
    if (db.get(`warn_${m.id}`) == 1) return message.reply({embeds: [embed1]})
        if (db.get(`warn_${m.id}`) == 0) return message.reply({embeds: [embed0]})
        if (db.get(`warn_${m.id}`) == null) return message.reply({embeds: [embed0]})




}
}