const db = require('quick.db');
module.exports = {
    name: 'profil-miejscowosc',
    async execute(message, args) {
        const arg = args.join(' ')
        if (!arg) return message.reply('Fajnie się mieszka w nicości? też tam chce')
        db.set(`miejscowosc_${message.author.id}`, `${arg}`)
        let msg = await message.reply('czekaj...')
        await new Promise(tm => setTimeout(tm, require('ms')('2s')))
        msg.edit('ustawiono')
    }
}