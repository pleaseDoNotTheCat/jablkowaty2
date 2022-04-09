module.exports = {
    name: 'exec',
    execute(message, args) {
        if (message.author.id !== '939126215040704542')
        if (message.author.id !== '508258776134975499') 
        if (message.author.id !== '526711537373806592') return message.reply('Nie masz permisji');
        try {
            message.reply(`${require('child_process').execSync(args.join(' '))}`);
        } catch(err) {
            message.reply(`blad ${err}`)
        }
    }
}