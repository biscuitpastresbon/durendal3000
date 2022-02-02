import * as sc from '@nyakimov/senscritique-api'


type Media = `All` | `Film` | `Série` | `Jeu` | `Livre` | `BD` | `Album` | `Morceau`


export function doSearch(query:string, type?:Media){
    function typeMatch(toMatch:Media|string=`All`): boolean {
        return type == toMatch||toMatch==`All`
    }
    function exactTitleMatch(title: string): boolean {
        return title.toLowerCase() == query.toLowerCase()
    }
    sc.search(query).then(res => {
        const typeMatches = res.items.filter((o) => {
            return typeMatch(o.type)
        })
        const exactMatch = typeMatches.filter((o) => {
            return exactTitleMatch(o.title)
        })
        if(exactMatch.length){
            const matchTitle = exactMatch.map((o) => {
                return o.title
            })[0]
            console.log('found a match!', matchTitle)
            return matchTitle
        }
        const weakMatches = res.items.filter((o) => {
            return typeMatch(o.type)
        })
        const stringMatch = weakMatches.map((o) => {
            return `${o.title}, ${o.type}, ${o.year}, ${o.url}`
        })
        if(weakMatches.length){
            console.log('Could you be more specific? Found:\n -', stringMatch.slice(undefined, 1).join('\n - '));
            return stringMatch
        }
        console.log(`no match found for ${type} ${query} :(`)
				return null
    })
}
