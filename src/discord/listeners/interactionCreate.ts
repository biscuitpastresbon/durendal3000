import { BaseCommandInteraction, Interaction } from 'discord.js';
import { Commands } from '../commands';
import { DurendalBot } from '../durendalBot';


export function interactionCreate(client: DurendalBot): void {
	client.on("interactionCreate", async (interaction: Interaction) => {
		if (!(interaction.isCommand() || interaction.isContextMenu())) return;

		await handleSlashCommand(client, interaction)
	})
}

export async function handleSlashCommand(client: DurendalBot, interaction: BaseCommandInteraction): Promise<void> {
	const slashCommand = Commands.find(c => c.name === interaction.commandName)
	if (!slashCommand) {
		interaction.followUp({ content: `command ${interaction.commandName} doesn't exist!` })
		return
	}
	await interaction.deferReply()
	slashCommand.run(client, interaction)
}
