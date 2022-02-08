import { BaseCommandInteraction, Client, Interaction } from 'discord.js';


export function interactionCreate(client: Client): void {
	client.on("interactionCreate",async (interaction: Interaction) => {
		if (interaction.isCommand() || interaction.isContextMenu()) {
			await handleSlashCommand(client, interaction)
		}
	})
}

const handleSlashCommand = async (client: Client, interaction: BaseCommandInteraction) => {
	// handle slash command here
}
