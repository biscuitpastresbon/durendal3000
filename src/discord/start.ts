import { BOT_TOKEN } from './token';
import { DurendalBot } from './durendalBot';
import { ready } from './listeners/ready';
import { interactionCreate } from './listeners/interactionCreate';
import * as fs from 'node:fs'


const client = new DurendalBot()
const commandFiles = fs.readdirSync('./src/discord/commands', ).filter(file => file.endsWith('.ts'))

for (const file of commandFiles) {
	const command = require(`./commands/${file}`)
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command)
}
ready(client)
interactionCreate(client)
client.login(BOT_TOKEN)
