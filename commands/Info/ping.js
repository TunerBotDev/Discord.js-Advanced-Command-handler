const {
    MessageEmbed,
    MessageButton,
    MessageActionRow,
    MessageSelectMenu
} = require("discord.js")
const embed = require("../../configure/embed.json")
const config = require("../../configure/embed.json")

module.exports = {
    name: "ping",
    aliases: ['pong', 'pingg'],
    description: `Basic Ping Command For The Command Handler!`,


    run: async (client, message, args) => {
        message.channel.send({
        embeds: [new MessageEmbed()
        .setTitle(`Pong!`)
        .setDescription(`My Ping is: ${client.ws.ping}ms!`)
        .setColor(embed.color)
        .setTimestamp()]
        })
    }
}