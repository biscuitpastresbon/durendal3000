import { Commands } from '../commands';
import { Client } from 'discord.js';


export function ready(client: Client): void {
	console.log("Durendal...reveille toi......");
	client.on("ready", async () => {
		if(!client.user || !client.application) {
			return;
		}

		await client.application.commands.set(Commands)

		console.log(`${client.user.username} is online`);

	})
}

const bot = new Client({
	intents: []
})
ready(bot)

bot.login(process.env['TOKEN_DURENDAL'])

