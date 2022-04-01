const { MessageEmbed, message } = require("discord.js");
const Discord = require('discord.js');
const fs = require('fs')
const db = require('quick.db')
const client = new Discord.Client({
    intents: 32767,
        ws: { properties: { $browser: "Discord iOS" } },
});
const mute = '950726730165940255'
const administracja = '950683762088362004'
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./komendy').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./komendy/${file}`);
    if(command.name) {
        client.commands.set(command.name, command);
        console.log(`Zaladowano poprawnie komendy ✅ ${file}`);
    } else {
        console.log(`Nie zaladowano poprawnie komend ❌ ${file}`);
    }
}
console.log('ready')
process.on("unhandledRejection", async (rejection) => {
    if (rejection === undefined) {
        return;
    }
    console.log("błąd node:", rejection)
});
client.on('messageCreate', (message, guild) => {
    const prefix =  "jablko"
    const prefix2 = "jabłko"
    message.client.uptime+29134
    if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot) 
    if (!message.content.toLowerCase().startsWith(prefix2) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return message.reply('Ta komenda nie istnieje');

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
message.reply(`Wystąpił błąd, zgłoś go do <@939126215040704542>`)
console.error(error)
    }
});
client.on('messageCreate', (message) => {
    if (!message.content.toLowerCase().includes('nigg')) return;
    message.delete();
})
client.on('interactionCreate', interaction => {
  if (!interaction.isButton()) return;
        switch (interaction.customId) {
            case 'rozowydaj':
                interaction.reply({ content: `ok juz`, ephemeral: true });
                interaction.member.roles.add('959067151317237761')
                break;
            case 'bezowydaj':
                interaction.reply({ content: 'ok juz', ephemeral: true });
                interaction.member.roles.add('959065930741203034')
                break;
            case 'czarnydaj':
                interaction.reply({ content: 'ok juz', ephemeral: true });
                interaction.member.roles.add('959066273403252776')
                break;
            case 'brazdaj':
                interaction.reply({ content: `ok juz`, ephemeral: true });
                interaction.member.roles.add('959483425016905728')
                break;     
            case 'zoltydaj':
                interaction.reply({ content: `ok juz`, ephemeral: true });
                interaction.member.roles.add('959065759961735198')
                break;
                         case 'rozowyzabierz':
                interaction.reply({ content: `ok juz`, ephemeral: true });
                interaction.member.roles.remove('959067151317237761')
                break;
            case 'bezowyzabierz':
                interaction.reply({ content: 'ok juz', ephemeral: true });
                interaction.member.roles.remove('959065930741203034')
                break;
            case 'czarnyzabierz':
                interaction.reply({ content: 'ok juz', ephemeral: true });
                interaction.member.roles.remove('959066273403252776')
                break;
            case 'brazzabierz':
                interaction.reply({ content: `ok juz`, ephemeral: true });
                interaction.member.roles.remove('959483425016905728')
                break;     
            case 'zoltyzabierz':
                interaction.reply({ content: `ok juz`, ephemeral: true });
                interaction.member.roles.remove('959065759961735198')
                break;
                
        }
})


client.login('token')