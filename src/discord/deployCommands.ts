import { REST } from '@discordjs/rest'
import { Routes, RESTPostAPIChatInputApplicationCommandsJSONBody, RESTPostAPIApplicationCommandsJSONBody } from 'discord-api-types/v9';
import { BOT_TOKEN } from './token';
import * as fs from 'node:fs';
import { Command } from './command';
const config = require('./config.json')


const commands = [];
const commandFiles = fs.readdirSync('./src/discord/commands').filter(file => file.endsWith('.ts'));

for (const file of commandFiles) {
	const command: Command = require(`./commands/${file}`)
	console.log(`Found command: ${command.data.name}`)

	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(BOT_TOKEN)


rest.get(Routes.applicationGuildCommands(config.clientId, config.guildId))
    .then(data => {
        const promises = [];
        for (const command of data as Array<any>) {
            const deleteUrl = `${Routes.applicationGuildCommands(config.clientId, config.guildId)}/${command.id}` as `/${string}`
			console.log(deleteUrl);
            promises.push(rest.delete(deleteUrl))
        }
        return Promise.all(promises)
    })
	.catch(console.error)

rest.put(Routes.applicationGuildCommands(config.clientId, config.guildId), {body: commands})
	.then(() => console.log(`Successfully registered applcation commands.`))
	.catch(console.error)
