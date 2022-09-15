import { Interaction } from 'discord.js';
import { Command } from '../command';
import { DurendalBot } from '../durendalBot';


export function interactionCreate(client: DurendalBot): void {
	client.on("interactionCreate", async (interaction: Interaction) => {
		if (!(interaction.isCommand() || interaction.isContextMenu())) return;

		const command = client.commands.get(interaction.commandName) as unknown as Command

		if (!command) return

		try {
			await command.execute(interaction)
		} catch (error) {
			console.error(error)
			await interaction.reply({content: 'There was an error while executing this command!', ephemeral: true})
		}
	})
}
