import { Client } from 'discord.js';


export function ready(client: Client): void {
	console.log("Durendal...reveille toi......");
	client.once("ready", async () => {
		if(!client.user || !client.application) {
			return;
		}

		client.user.setActivity("les poti senscritiqueurs", { type: "WATCHING"})
		console.log(`${client.user.username} is online`);

	})
}
