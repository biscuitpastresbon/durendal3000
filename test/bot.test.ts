import { DurendalBot } from '../src/discord/durendalBot'
import { ready } from '../src/discord/listeners/ready';
import { handleSlashCommand, interactionCreate } from '../src/discord/listeners/interactionCreate';
import { BOT_TOKEN } from '../src/discord/token';
import { Message, Guild, Channel, TextChannel, Interaction, AnyChannel } from 'discord.js';

// https://discord.com/api/oauth2/authorize?client_id=936127388083953714&permissions=544857390161&scope=applications.commands%20bot
describe("DurendalBot", () => {
  let bot: DurendalBot;

  beforeEach(() => {
    bot = new DurendalBot({
		intents: []
	});
	ready(bot)
	interactionCreate(bot)
	bot.login(BOT_TOKEN)

	})

  test('/hello message should respond with "Hello there!"', () => {

	const channel = bot.channels.cache.get('general')
	channel.toString()
  })
})
