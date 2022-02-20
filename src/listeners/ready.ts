import { Client } from 'discord.js';
import { Commands } from '../commands';


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
