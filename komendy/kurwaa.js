module.exports = {
name: 'powiedz', 
execute(message, args) {
        if (!message.member.roles.cache.some(role => role.id === '950683762088362004')) return message.reply('Nie masz permisji');
message.channel.send(`${args.join(' ')}`)
    message.delete();
}
}