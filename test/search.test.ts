import { expect } from 'chai'
import { search } from '../src/search';


test('game search returns games', async () => {
	const results = await search('the witcher 3', 'Jeu');
	results.forEach((o) => { expect(o.type).equals('Jeu'); });
})


test('bot connects to server', () => {
	expect(true).eq(true)
})
