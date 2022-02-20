import { Client, ClientOptions } from 'discord.js'


export class DurendalBot extends Client {
	constructor(options: ClientOptions = {intents: []}){
		console.log('hello');
		super(options)
	}
}


