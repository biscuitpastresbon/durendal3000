import { expect } from 'chai'
import { search } from '../search';


test('game search returns onlygames', async () => {
	const results = await search('the witcher 3', 'Jeu');
	results.forEach((o) => { expect(o.type).equals('Jeu'); });
})

