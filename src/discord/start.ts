import { BOT_TOKEN } from './token';
import { DurendalBot } from './durendalBot';
import { interactionCreate } from './listeners/interactionCreate';
import { ready } from './listeners/ready';


const bot = new DurendalBot()
ready(bot)
interactionCreate(bot)
bot.login(BOT_TOKEN)
