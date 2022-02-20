import { DurendalBot } from './durendalBot';
import { ready } from './listeners/ready';
import { interactionCreate } from './listeners/interactionCreate';
import { TOKEN_KEY } from './constants';



const BOT_TOKEN = process.env[TOKEN_KEY]
const bot = new DurendalBot()
ready(bot)
interactionCreate(bot)
bot.login(BOT_TOKEN)
