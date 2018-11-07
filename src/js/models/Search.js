import axios from 'axios';

export default class Search{
    constructor(query) {
        this.query = query;
    }
    async getResults(){
        const key = '2f79c2fafa205094b251e14ad38182e1';
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