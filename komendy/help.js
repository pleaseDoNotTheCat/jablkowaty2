const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'help',
    execute(message, args) {
        const help = new MessageEmbed()
        .setAuthor(`${message.guild.name}`, message.guild.iconURL())
        .addField('Administracja', ' `mute <użytkownik> <czas> (powód) - Wycisza użytkownika`\n `warn <użytkownik> (powód) - daje warna użytkownikowi` \n `clear <liczba wiadomości> - Czyści wiadomości` \n `reset-warn - czysci warny`', true)
        .addField('Wspierający', '`Brak`', true)
        .addField('Booster', '`nuke - nukuje serwer `', true)
        .addField('Stivki', '`help - Lista pomocy `\n `kolor - cos jak reaction roles`', true)
        .addField('Developer', '`exec <kod> - uruchamia kod w konsoli ` \n `eval <kod> - uruchamia kod js`', true)
        .addField('Informacja', ' przydatna wiedza :) : `<wymagane> (opcjonalne)` \n Dla tych co nie rozumieja: `komenda (nazwa komendy) - opis (opis jako informacja o komendzie)`', true)
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL())
        .setColor('9B59B6')
        message.reply({ embeds: [help], allowedMentions: {repliedUser: false}});
    }
}