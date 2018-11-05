import axios from 'axios';
export default class Search {   
    constructor(query) {
        this.query = query;
    }
    async getRes() {
        const proxy = "https://cors-anywhere.herokuapp.com";
        const key = "0f23071ff333722d90aea063d80c4c45";
        try {
            const res = await axios(`${proxy}/https://food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.recipes = res.data.recipes;
            // console.log(this.recipes);
        } catch (err) {
            alert(err);
        }
    }
}
