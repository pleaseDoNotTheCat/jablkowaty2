const db = require('quick.db');
const { MessageEmbed } = require('discord.js')
const ms = require('ms')

module.exports = {
    name: 'warn',
    async execute(message, args) {
        if (!message.member.roles.cache.some(role => role.id === '950683762088362004')) return message.reply('Nie masz permisji');
const m = message.mentions.members.first()
if (!m) return message.reply('ping?')
db.add(`warn_${m.user.id}`, 1)
const czanel = message.client.channels.cache.get('946413386516799488')
const embed0 = new MessageEmbed()
.setTitle('Warn')
.addField('Administrator', ` \`${message.author.tag}\` `)
.addField('Stivek', ` \`${m.user.tag}\` `)
.addField('Powód', ` \`${args.slice(1).join(' ').replaceAll('`', ' ') || 'Nie podano powodu'}\` `)
czanel.send({embeds: [embed0]})
message.reply(`${m.user.username} dostał warna (Zły stivek)`)
const warny = db.get(`warn_${m.user.id}`)
if (warny >= 3) {
    const embed = new MessageEmbed()
.setTitle('Mute')
.addField('Administrator', ` \`${message.author.tag}\` `)
.addField('Stivek', ` \`${m.user.tag}\` `)
.addField('Czas', ` \`30m\` `)
.addField('Powód', ` \`3 warny\` `)
    db.set(`warn_${m.user.id}`, 0)
    czanel.send({embeds: [embed]})
    message.reply(`Stivek ${m.user.username} dostał mute`)
    m.roles.add('950726730165940255', `Mute od ${message.author.tag} // 3 warny`)

    await new Promise(r => setTimeout(r, ms('30m')))
    m.roles.remove('950726730165940255', `Koniec czasu`)
    const embed2 = new MessageEmbed()
.setTitle('Unmute')
.addField('Administrator', ` \`${message.client.user.tag}\` `)
.addField('Stivek', ` \`${m.user.tag}\` `)
.addField('Powód', ` \`Koniec mute\` `)
czanel.send({embeds: [embed2]})

return;
}
    }
}