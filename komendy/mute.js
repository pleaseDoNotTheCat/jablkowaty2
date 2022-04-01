const { MessageEmbed } = require('discord.js');
const ms = require('ms')
module.exports = {
    name: 'mute',
    async execute(message, args) {
        if (!message.member.roles.cache.some(role => role.id === '950683762088362004')) return message.reply('Nie masz permisji');
const m = message.mentions.members.first()
if (ms(args[1]) == undefined) return message.reply('To nie jest czas')
const czanel = message.client.channels.cache.get('946413386516799488')
const powod = args.slice(2).join(' ').replaceAll('`', ' ') || 'Nie podano powodu'
const embed = new MessageEmbed()
.setTitle('Mute')
.addField('Administrator', ` \`${message.author.tag}\` `)
.addField('Stivek', ` \`${m.user.tag}\` `)
.addField('Czas', ` \`${args[1]}\` `)
.addField('Powód', ` \`${powod}\` `)
if (!m) return message.reply('ping?')
message.reply(`Stivek ${m} dostał mute`)
czanel.send({embeds: [embed]})
m.roles.add('950726730165940255', `Mute od ${message.author.tag}`)
await new Promise(r => setTimeout(r, ms(args[1])))
m.roles.remove('950726730165940255', `Koniec mute`)



    }
}