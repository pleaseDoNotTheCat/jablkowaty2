const db = require('quick.db');
module.exports = {
    name: 'profil-wiek',
    async execute(message, args) {
        const arg = args.join(' ')
        if (!arg) return message.reply('nie sadze ze tyle masz lat')
        db.set(`wiek_${message.author.id}`, `${arg}`)
        let msg = await message.reply('czekaj...')
        await new Promise(tm => setTimeout(tm, require('ms')('2s')))
        msg.edit('ustawiono')
    }
}