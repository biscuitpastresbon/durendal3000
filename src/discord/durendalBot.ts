import { Client, ClientOptions, Collection, Message } from 'discord.js';


export interface RunEvent {
    message: Message,
    client: Client,
    args: string[],
    dev: boolean
}

export class DurendalBot extends Client {
	constructor(options: ClientOptions = {intents: []}){
		super(options)
	}
	commands: Collection<string, (event: RunEvent) => any> = new Collection()
}
