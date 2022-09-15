import { SlashCommandBuilder, SlashCommandStringOption } from '@discordjs/builders';
import { BaseCommandInteraction } from 'discord.js';
import { search, Media } from '../../search';


const stringOption = new SlashCommandStringOption()
stringOption.setName('title')
stringOption.setDescription('Title to search for')
stringOption.setRequired(true)

module.exports = {
	data: new SlashCommandBuilder()
		.setName('propal')
		.addStringOption(stringOption),
	async execute(interaction: BaseCommandInteraction) {
		const title = interaction.options.get('title')
		console.log('Searching for %s...', title);
		const results = await search(interaction.options.get('title') as unknown as string, interaction.options.get('category') as unknown as Media)
		console.log(results.toString())
		await interaction.reply(results.toString())
	},
}
