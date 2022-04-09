const db = require('quick.db');
module.exports = {
    name: 'profil-imie',
    async execute(message, args) {
        const arg = args.join(' ')
        if (!arg) return message.reply('nie sadze ze tak masz na imie')
        db.set(`imie_${message.author.id}`, `${arg}`)
        let msg = await message.reply('czekaj...');
        await new Promise(tm => setTimeout(tm, require('ms')('2s')))
                          msg.edit('ustawiono')
    }
}