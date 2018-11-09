import axios from 'axios';
import {
    key,
    proxy
} from './config.js';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }
    async getRecipe() {
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);
            this.title = res.data.recipe.title;
            this.publisher = res.data.recipe.publisher;
            this.image = res.data.recipe.image_url;
            this.ingredients = res.data.recipe.ingredients;
            console.log(res);
        } catch (error) {
            console.log(`Not possible to render some result ${error}`);
        }
    }
    getrIgredients() {
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng / 3);
        this.time = periods;
    }

}
// const r = new Recipe(46956);
// console.log(r)