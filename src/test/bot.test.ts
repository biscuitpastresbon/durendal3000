import { DurendalBot } from "../discord/durendalBot";
import { interactionCreate } from "../discord/listeners/interactionCreate";
import { ready } from '../discord/listeners/ready';
import { BOT_TOKEN } from "../discord/token";

async function start(): Promise<DurendalBot> {
	const bot = new DurendalBot()
	ready(bot)
	interactionCreate(bot)
	await bot.login(BOT_TOKEN)
	return bot
}

describe('DurendalBot', () => {
	let botPromise: Promise<DurendalBot>

	beforeAll( (done) => {
		botPromise = start()
		done()
	})

	test('hello command should respond with "Hello there!"', async () => {
		console.log('hello');

		await botPromise.then(b =>
			b.channels.cache.forEach(ch => console.log(ch.id))
		)
	})

	afterAll( async (done) => {
		botPromise.then(b => b.destroy())
		done()
	})
})
