const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
    const db = require('quick.db');
    module.exports = {
    name: "profil",
    execute(message, args) {
    const ping = message.mentions.members.first()
    const pingu = message.mentions.users.first()
    if (!ping) return message.reply('nie wyszło, co nie?')
         const d = new MessageActionRow() 
        .addComponents(
                    new MessageButton()
                        .setCustomId('usun')
                        .setLabel('Usun profil')
                        .setStyle('DANGER'),
                );
    const embed = new MessageEmbed()
    .setTitle(`Profil użytkownika ${pingu.tag}`)
    .addField('Imie', `${db.get(`imie_${pingu.id}`) || 'Imie jest nieznane'}`)
    .addField('Wiek', `${db.get(`wiek_${pingu.id}`) || 'Wiek jest nieznany'}` )
    .addField('Miejscowość', `${db.get(`miejscowosc_${pingu.id}`) || 'Miejscowość jest nieznana'}`)
    .addField('Opis', `${db.get(`opis_${pingu.id}`) || 'Nieznany'}`)
    .addField('Warny', `${db.get(`warn_${pingu.id}`) || 'Brak warnów'}`)
    .addField('Założono konto', `<t:${Math.floor(pingu.createdTimestamp/1000)}:d>`)
    .addField('Dołączono na serwer', `<t:${Math.floor(ping.joinedTimestamp/1000)}:d> `)
    .addField('Administracja', `${ping.roles.cache.some(role => role.id === '950683762088362004') ? 'Tak' : 'Nie'}`)
    .setColor('cb6a1c')
    message.reply({embeds: [embed], components: [d]});
        message.client.on('interactionCreate', async (interaction) => {
                if (!interaction.isButton()) return;
        if (interaction.customId == `usun`) {
            if (!interaction.member.roles.cache.some(role => role.id === '950683762088362004')) return await interaction.reply({content: '? XD', ephemeral: true})
            db.delete(`imie_${pingu.id}`)
            db.delete(`wiek_${pingu.id}`)
            db.delete(`miejscowosc_${pingu.id}`)
     db.delete(`opis_${pingu.id}`)
            
            await interaction.message.edit({ content: `Profil został usunięty przez ${interaction.user}`, components: [], embeds: [] })
        }
    })
}
    }