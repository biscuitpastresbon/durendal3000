import { DurendalBot } from '../src/durendalBot'
import { ready } from '../src/listeners/ready';
import { interactionCreate } from '../src/listeners/interactionCreate';
import { BOT_TOKEN } from '../src/token';
import { Message, Guild, Channel, TextChannel } from 'discord.js';

https://discord.com/api/oauth2/authorize?client_id=936127388083953714&permissions=544857390161&scope=applications.commands%20bot
describe("DurendalBot", () => {
  let bot: DurendalBot;

  beforeEach(() => {
    bot = new DurendalBot({
		intents: []
	});
	ready(bot)
	interactionCreate(bot)
	bot.login(BOT_TOKEN)
	const testGuild = new Guild(bot, )
	})

  test('/hello message should respond with "Hello there!"', () => {
    const messageContent = new APIMess('/hello');
    const expectedResponse = 'Hello there!';

    const message = message

    // Only one message should be sent
    expect(chatRoom.sendMessage).toBeCalledTimes(1);
    // The message sent should be 'pong'
    expect(chatRoom.sendMessage).toBeCalledWith(expectedResponse);
  })
})
