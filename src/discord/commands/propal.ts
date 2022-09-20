import { SlashCommandBuilder, SlashCommandStringOption } from '@discordjs/builders';
import { BaseCommandInteraction } from 'discord.js';
import { search } from '../../search';
import { Media } from "../../Media";


function getOption (name: string, description: string, required: boolean) {
	return new SlashCommandStringOption()
		.setName(name)
		.setDescription(description)
		.setRequired(required)
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('propal')
		.setDescription('Pick a choice! Any choice!')
		.addStringOption(getOption('title', 'Title to seach for', true))
		.addStringOption(getOption('category', 'Category to search in', true)),
	async execute(interaction: BaseCommandInteraction) {
		const title = interaction.options.get('title')
		const category = interaction.options.get('category')
		console.log(`Searching for ${title?.value} in ${category?.value}...`)
		await search(title?.value as string, category as unknown as Media).then( r => {
			console.log(r.toString())
			interaction.reply(`Found these: ${r.toString()}~~`)
		}
		)
	},
}
