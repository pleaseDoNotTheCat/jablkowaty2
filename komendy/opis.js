const db = require('quick.db');
module.exports = {
    name: 'profil-opis',
    async execute(message, args) {
        const arg = args.join(' ')
        if (!arg) return message.reply('to nie może być puste')
        db.set(`opis_${message.author.id}`, `${arg}`)
        let msg = await message.reply('czekaj...')
        await new Promise(tm => setTimeout(tm, require('ms')('2s')))
        msg.edit('ustawiono')
    }
}