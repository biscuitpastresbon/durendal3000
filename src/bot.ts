import * as sc from '@nyakimov/senscritique-api'


enum Type {
    All,
    Film,
    Série,
    Jeu,
    Livre,
    BD,
    Album,
    Morceau
}


function doSearch(query:string, type?:Type|string){
    function typeMatch(toMatch:Type|string=Type.All): boolean {
        if (typeof toMatch === 'string'){
            toMatch = Type[toMatch as keyof typeof Type]
        }
        return type == toMatch||toMatch==Type.All
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
        console.log(`no match found for ${Type[type as keyof typeof Type]} ${query} :(`)
				return null
    })
}

doSearch(`the witcher 3`, Type.Jeu)
doSearch(`spongebob`, Type.Série)
doSearch(`eraserhead`, Type.Film)
doSearch(`eraserhead`, Type.Jeu)
