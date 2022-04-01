module.exports = {
    name: 'clear',
    async execute(message, args) {
        if (!message.member.roles.cache.some(role => role.id === '950683762088362004')) return message.reply('Nie masz permisji');
        const maximum = args[0]
        if (maximum > 100) {
            message.reply('Za dużo')
            return;
        }
        message.channel.bulkDelete(`${args[0]}`)
        await message.channel.send(`Wyczyszczono ${args[0]} wiadomości przez ${message.author}`)
    }
}