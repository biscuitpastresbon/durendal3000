import * as sc from '@nyakimov/senscritique-api'
import { SearchResponse } from '../senscritique-api/out/utils/typedef';

interface Result {
    title: String,
    cover: String,
    rating: String,
    rating_details: { 
        rating: Number,
        recommend: Number, 
        wish: Number, 
        current: Number 
    },
    resume: String,
    type: String,
    creators: [String],
    genres: [String],
    date: String,
    versus: [{
        author: String, //Person with a positive opinion
        rating: String,
        title: String,
        description: String,
        url: String
    },{
        author: String, //Person with a negative opinion
        rating: String,
        title: String,
        description: String,
        url: String
    }]
}


sc.search(`the witcher 3`).then(res => {
    for (let index = 0; index < res.items.length; index++) {
        const entry = res.items[index];
        console.log(entry.title);
    }
})
