const { MessageEmbed } = require('discord.js');
const ms = require('ms')
module.exports = {
    name: 'unmute',
    async execute(message, args) {
        if (!message.member.roles.cache.some(role => role.id === '950683762088362004')) return message.reply('Nie masz permisji');
const m = message.mentions.members.first()
if (!m) return;
m.roles.remove('950726730165940255', `unmute od ${message.author.tag}`)
await new Promise(r => setTimeout(r, ms('3s')))
message.channel.send(`Stivek ${m} został odciszony`)
    }
}