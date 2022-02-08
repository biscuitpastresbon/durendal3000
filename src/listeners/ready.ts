import { Client } from 'discord.js';


export function ready(client: Client): void {
	client.on("ready", async () => {
		if(!client.user || !client.application) {
			return;
		}
		console.log(`${client.user.username} is online`);

	})
}
