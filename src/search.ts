import * as sc from '@nyakimov/senscritique-api'
import { SearchResponse, Entry } from '../../senscritique-api/out/utils/typedef';
import { Media } from './Media';


export async function search(query:string, type?:Media): Promise<Entry[]>{
	const results = await sc.search(query)
	return Promise.resolve((getEntriesByType(results, type)))
}


function getEntriesByType(results:SearchResponse, type:Media='All'): Entry[] {
	return results.items.filter((o) => {
		return o.type == type||type=='All'
	})
}
