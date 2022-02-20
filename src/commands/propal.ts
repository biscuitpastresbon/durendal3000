import { Command } from '../command';
import { Client, BaseCommandInteraction } from 'discord.js';


export const Propal: Command = {
	name: 'propal',
	description: "Propal a fouiller sur SC",
	type: "CHAT_INPUT",
	run: async (client: Client, interaction: BaseCommandInteraction) => {
		const content = "Hello there!"

		await interaction.followUp({
			ephemeral: true,
			content
		})
}
}
