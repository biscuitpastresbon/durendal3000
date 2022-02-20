import { Commands } from '../commands';
import { Client } from 'discord.js';


export function ready(client: Client): void {
	console.log("Durendal...reveille toi......");
	client.on("ready", async () => {
		if(!client.user || !client.application) {
			return;
		}

		await client.application.commands.set(Commands)
		client.user.setActivity("les poti senscritiqueurs", { type: "WATCHING"})
		console.log(`${client.user.username} is online`);

	})
}
