import { Client } from 'discord.js'
import { ready } from './listeners/ready';
import { interactionCreate } from './listeners/interaction_create';

const BOT_TOKEN = 'OTM2MTI3Mzg4MDgzOTUzNzE0.YfIqkQ.OWWHTNSYPjUek8zVV7H20pQ_7zo'

console.log("Durendal...reveille toi......");

export const durbot = new Client({
	intents: []
})

ready(durbot)
interactionCreate(durbot)

durbot.login(BOT_TOKEN)
