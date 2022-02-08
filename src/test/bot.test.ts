import { expect } from 'chai';
import { durbot } from '../bot';
import { Client } from 'discord.js';
import { ready } from '../listeners/ready';

const BOT_TOKEN = 'OTM2MTI3Mzg4MDgzOTUzNzE0.YfIqkQ.OWWHTNSYPjUek8zVV7H20pQ_7zo'
const TEST_SERVER_NAME = '06gang'
const TEST_SERVER_TOKEN = ''

test('should be a discord bot', () => {
	expect(durbot).instanceOf(Client)
});

test('should be authenticated with Discord', () => {
	ready(durbot)
	durbot.login(BOT_TOKEN)
	expect(durbot.guilds.cache)
});
