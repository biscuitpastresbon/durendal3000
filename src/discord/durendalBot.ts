import { Client, ClientOptions } from 'discord.js'


export class DurendalBot extends Client {
	constructor(options: ClientOptions = {intents: []}){
		super(options)
	}
}
