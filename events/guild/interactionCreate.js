const config = require(`../../configure/config.json`);
const ee = require(`../../configure/embed.json`);
const Discord = require("discord.js");
module.exports = (client, interaction) => {
	const CategoryName = interaction.commandName;
	let command = false;
	try{
    	    if (client.slashCommands.has(CategoryName + interaction.options.getSubcommand())) {
      		command = client.slashCommands.get(CategoryName + interaction.options.getSubcommand());
    	    }
  	}catch{
    	    if (client.slashCommands.has("normal" + CategoryName)) {
      		command = client.slashCommands.get("normal" + CategoryName);
   	    }
	}
	if(command) {
		command.run(client, interaction, interaction.member, interaction.guild)
	}
}
