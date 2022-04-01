    const db = require('quick.db')
module.exports = {
name: 'reset-warn',
execute(message, args) {
        if (!message.member.roles.cache.some(role => role.id === '950683762088362004')) return message.reply('Nie masz permisji');
const m = message.mentions.members.first()
if (!m) return message.reply('Nie mam komu wyczyścić warnów')
db.set(`warn_${m.user.id}`, 0)
message.reply(`Wyczyszczono warny dla użytkownika \`${m.user.tag}\` `)
}
}