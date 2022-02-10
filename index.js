const Discord = require("discord.js")
const config = require("./configure/config.json")
const fs = require("fs")
const colors = require("colors")
/**
 * @INFO
 * BOT COADED BY:
 * ALPHACORD DEVELOPMENT
 * Discord.js
 * @INFO
 */
const client = new Discord.Client({
    allowedMentions: {
        parse: ['roles', 'users'],
        repliedUser: false
    },
    partials: ['CHANNEL', 'MESSAGE', 'REACTION'],
    intents: [ 
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES,
        //Discord.Intents.FLAGS.GUILD_BANS,
        //Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        //Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
        //Discord.Intents.FLAGS.GUILD_WEBHOOKS,
        //Discord.Intents.FLAGS.GUILD_INVITES,
        //Discord.Intents.FLAGS.GUILD_PRESENCES,
        //Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING,
        //Discord.Intents.FLAGS.DIRECT_MESSAGES,
        //Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        //Discord.Intents.FLAGS.DIRECT_MESSAGE_TYPING
    ],
})

client.login(config.token || process.env.token)

client.on('ready', () => {
    console.log(`Logged into: ${client.user.tag} !`)
})

client.commands = new Discord.Collection()
client.cooldowns = new Discord.Collection()
client.slashCommands = new Discord.Collection()
client.aliases = new Discord.Collection()
client.categories = require("fs").readdirSync(`./commands`);


// require the handler
["events", "commands", "slashCommands", "antiCrash"].filter(Boolean).forEach(handler => {
    require(`./handlers/${handler}`)(client);
})


/**
 * @INFO
 * BOT COADED BY:
 * ALPHACORD DEVELOPMENT
 * Discord.js
 * @INFO
 */