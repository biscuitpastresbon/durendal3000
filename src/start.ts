import { DurendalBot } from './durendalBot';
import { ready } from './listeners/ready';
import { interactionCreate } from './listeners/interactionCreate';
import { BOT_TOKEN } from './token';



const bot = new DurendalBot()
ready(bot)
interactionCreate(bot)
bot.login(BOT_TOKEN)
