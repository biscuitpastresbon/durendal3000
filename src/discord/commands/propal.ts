import { Command } from '../command';
import { BaseCommandInteraction } from 'discord.js';
import { DurendalBot } from '../durendalBot';


export const Propal: Command = {
	name: 'propal',
	description: "Propal a fouiller sur SC",
	type: "CHAT_INPUT",
	run: async (client: DurendalBot, interaction: BaseCommandInteraction) => {
		const content = "Hello there!"

		await interaction.followUp({
			ephemeral: true,
			content
		})
}
}
