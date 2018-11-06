import axios from 'axios';

export default class Search{
    constructor(query) {
        this.query = query;
    }
    async getResults(){
        const key = '0f23071ff333722d90aea063d80c4c45';
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        try{
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            console.log(res);
           
        }catch(err){
            console.log(err);
        }
    }
}