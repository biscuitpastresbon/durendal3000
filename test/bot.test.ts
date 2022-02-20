// import { DurendalBot } from '../src/durendalBot'
// import { ready } from '../src/listeners/ready';
// import { interactionCreate } from '../src/listeners/interaction_create';

// const BOT_TOKEN = 'OTM2MTI3Mzg4MDgzOTUzNzE0.YfIqkQ.K3dsovdcGsSPorj245gcYDGKAAM'

// describe("DurendalBot", () => {
//   let bot: DurendalBot;

//   beforeEach(() => {
//     bot = new DurendalBot({
// 		intents: []
// 	});
// 	ready(bot)
// 	interactionCreate(bot)
// 	bot.login(BOT_TOKEN)
//   })

//   test('!ping message should respond with "pong"', () => {
//     const messageContent = '!ping';
//     const expectedResponse = 'pong';

//     const message = new Message(chatRoom, messageContent);

//     bot.handleMessage(message);

//     // Only one message should be sent
//     expect(chatRoom.sendMessage).toBeCalledTimes(1);
//     // The message sent should be 'pong'
//     expect(chatRoom.sendMessage).toBeCalledWith(expectedResponse);
//   })
// })
