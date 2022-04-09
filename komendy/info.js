const db = require('quick.db');
const { MessageEmbed } = require('discord.js')
 module.exports = {
 name: 'info',
 async execute(message, args) {
 const pingm = message.mentions.members.first()
 const pingu = message.mentions.users.first()
 const brakpingu = new MessageEmbed()
.setTitle('Informacje o tobie')
.addField('Nazwa', `${message.author.username}`)
.addField('Dyskryminator', `${message.author.discriminator}`)
.addField('Id', `${message.author.id}`)
.addField('Tag' , `${message.author.tag}`)
.addField('Hex nicku', `${message.member.displayHexColor}`)
 .addField('Unikodowa ikona', `${message.member.roles.highest.unicodeEmoji || 'Brak emotki'}`)
.addField('Bot?', 'Nie')
.addField('Pseudonim serwera', `${message.member.nickname || 'Użytkownik nie posiada pseudonimu'}`)
.addField('Twoje permisje', ` \`\`\`${message.member.permissions.toArray().join(' ')}\`\`\` `)
.addField('Najwyższa rola', `<@&${message.member.roles.highest.id}>`)
.addField('Status', `*soon*™️`)
.setColor(message.member.displayHexColor)
 .setThumbnail(message.author.displayAvatarURL())
.setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL())
if (!pingu) return message.reply({ embeds: [brakpingu]});
      const mention = new MessageEmbed()
.setTitle(`Informacje o ${pingu.tag}`)
.addField('Nazwa', `${pingu.username}`)
.addField('Dyskryminator', `${pingu.discriminator}`)
.addField('Id', `${pingu.id}`)
.addField('Tag' , `${pingu.tag}`)
.addField('Hex nicku', `${pingm.displayHexColor}`)
.addField('Unikodowa ikona', `${pingm.roles.highest.unicodeEmoji || 'Brak emotki'}`)
.addField('Bot?', `${pingu.bot ? 'Tak' : 'Nie'}`)
.addField('Pseudonim serwera', `${pingm.nickname || 'Użytkownik nie posiada pseudonimu'}`)
.addField('Permisje użytkownika', ` \`\`\`${pingm.permissions.toArray().join(' ') || 'Użytkownik nie posiada permisji'}\`\`\` `)
.addField('Najwyższa rola', `<@&${pingm.roles.highest.id}>`)

.addField('Status', `*soon*`)
.setColor(pingm.displayHexColor)
.setThumbnail(pingu.displayAvatarURL())
.setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL())
      message.reply({ embeds: [mention]})
	}
}