import { search } from '../search';


test('game search returns only games', async () => {
	const results = await search('the witcher 3', 'Jeu');
	results.forEach((o) => { expect(o.type).toBe('Jeu'); });
})

