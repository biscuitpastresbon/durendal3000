import * as sc from '@nyakimov/senscritique-api'

sc.search(`the witcher 3`).then(res => {
    for (let index = 0; index < res.items.length; index++) {
        const entry = res.items[index];
        console.log(entry.title);
    }
})
