const { MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');
module.exports = {
    name: 'panel',
    async execute(message, args) {
        if (message.author.id !== '939126215040704542')
        if (message.author.id !== '508258776134975499') 
        if (message.author.id !== '526711537373806592') return message.reply('Nie masz permisji');
        
const row = new MessageActionRow()
.addComponents(
new MessageButton()
.setCustomId('poweroff')
.setLabel('Wylacz bota')
.setStyle('DANGER'),
new MessageButton()
.setCustomId('reload')
.setLabel('Deploy')
.setStyle('SUCCESS'),
);
const embed = new MessageEmbed()
.setTitle('Panel developerski')
.setDescription('Wybierz co chcesz zrobić')
.setColor('247d83')
message.reply({embeds: [embed], components: [row]})

        message.client.on('interactionCreate', async (interaction) => {
                if (!interaction.isButton()) return;
        if (interaction.customId == `poweroff`) {
            if (interaction.user.id !== '939126215040704542') return await interaction.reply({content: '? XD', ephemeral: true})
                  await interaction.message.edit({ embeds: [], components: [], content: 'Wyłączono'})
          process.exit();
           }    
        if (interaction.customId == `reload`) {
            if (interaction.user.id !== '939126215040704542') return await interaction.reply({content: '? XD', ephemeral: true})
          require('child_process').execSync('node deploy')
            
            await interaction.message.edit({ content: `reloadowanie`, components: [], embeds: [] })
        }
    })
    }
}