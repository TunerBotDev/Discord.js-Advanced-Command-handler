const config = require("../../configure/config.json")
module.exports = (client, message) => {
    if(!message.guild || message.author.bot) return;// if the message is not sent in a server / the message is sent by a bot then do nothing (Just Dont Respond)
    const prefix = config.prefix;
    if(!message.content.toLowerCase().startsWith(prefix)) return; // if there is no prefix before the message then simply do nothing.
    const args = message.content.slice(prefix.length).trim().split(/ +/).filter(Boolean);
    const command = args.length > 0 ? args.shift().toLowerCase() : null;
    if(!command || command.length == 0) return; // if the command is not executed then return
    


    let cmd = client.commands.get(command)
    if(!cmd) cmd = client.commands.get(client.aliases.get(cmd));// if the command is executed as an alias
    if(cmd){// if command is there then try to execute it
        try {
            cmd.run(client, message, args);
        } catch(e) {
            console.log(`===UKNOWN ERROR===\n ${e} \n===UKNOWN ERROR===`)
        }
    }
}