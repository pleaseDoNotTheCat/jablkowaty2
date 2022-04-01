const { MessageButton, MessageActionRow, MessageEmbed } = require('discord.js')
module.exports = {
name: 'kolor',
execute(message, args) {
    const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId('brazdaj')
            .setLabel('Brazowy')
            .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('rozowydaj')
                .setLabel('Rozowy')
                // .setDisabled(true)
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('czarnydaj')
                .setLabel('Czarny')
                // .setDisabled(true)
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('zoltydaj')
                .setLabel('Zolty')
                // .setDisabled(true)
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('bezowydaj')
                .setLabel('Bezowy')
                .setStyle('PRIMARY'),

        );
        const row2 = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId('brazzabierz')
            .setLabel('Brazowy')
            .setStyle('DANGER'),
            new MessageButton()
                .setCustomId('rozowyzabierz')
                .setLabel('Rozowy')
                // .setDisabled(true)
                .setStyle('DANGER'),
            new MessageButton()
                .setCustomId('czarnyzabierz')
                .setLabel('Czarny')
                // .setDisabled(true)
                .setStyle('DANGER'),
            new MessageButton()
                .setCustomId('zoltyzabierz')
                .setLabel('Zolty')
                // .setDisabled(true)
                .setStyle('DANGER'),
            new MessageButton()
                .setCustomId('bezowyzabierz')
                .setLabel('Bezowy')
                .setStyle('DANGER'),
       
        );
    
        const embed = new MessageEmbed()
        .setTitle('Kolory')
        .addField('Dostępne kolory', ' <@&959483425016905728> \n <@&959065759961735198> \n <@&959067151317237761> \n <@&959066273403252776>  \n <@&959065930741203034>')
        .addField('Czerwony', 'Zabiera kolor')
        .addField('Taki jakby jasnoniebieski', 'Daje kolor')
        .setColor('RANDOM')
        message.reply({embeds: [embed], content: 'ok łap kolory :) ', components: [row, row2]})
}
}