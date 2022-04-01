const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'eval',
    async execute(message, args) {
        if (message.author.id !== '939126215040704542')
        if (message.author.id !== '508258776134975499') 
        if (message.author.id !== '526711537373806592') return message.reply('Nie masz permisji');
        console.log(message.author.id)
try {
    const d = args.join(' ').replaceAll('token', 'hmmmmmmmm')
    const data = require('util').inspect(eval(d));
    const embed = new MessageEmbed()
    .setTitle('ok dziala')
    .setDescription(` \`\`\`js\n${data}\`\`\` `)
    .setColor('16c60c')
    message.reply({ embeds: [embed]})
} catch(error) {
    const er = new MessageEmbed()
    .setTitle('Błąd')
    .setDescription(`${error}`)
    .setColor('f03a17')
    message.reply({ embeds: [er]})
}
    }
}