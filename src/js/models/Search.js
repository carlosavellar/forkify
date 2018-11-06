import axios from 'axios';
export default class Search {
    constructor(query) {
        this.query = query;
    }
    async getResult(query) {
        const proxy = 'https://cors-anywhere.herokuapp.com';
        const key = '0f23071ff333722d90aea063d80c4c45';
        try {
            const res = await axios(`${proxy}/https://www.food2fork.com/api/search?key=${key}&q=${query}`);
            this.results = res.data.recipes;
        } catch (err) {
            alert(`${err} Teste`);
        }
    }
}
console.log(new Search('Tomato'));