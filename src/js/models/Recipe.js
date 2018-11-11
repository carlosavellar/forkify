import axios from 'axios';
import { key, proxy } from '../config.js';
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
        this.time = periods * 15;
    }
    parseIngredientes(){
        const unitLong = ['tablespoons', 'tablespoon', 'ounce', 'ounces','teaspoon', 'teaspoons', 'cups', 'pounds' ];
        const unitShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound' ];
        const newIngredients = this.ingredients.map(el=>{
            let ingredient = el.toLoweCase();
            this.ingredients.forEach((unit, i)=>{
                ingredient = ingredient.replace(unit, unitShort[i]);
            });

            ingredient = ingredient.replace(/ *\([^)]*\) */g, '');
        });
        this.ingredients = newIngredients;

    }
}
const r = new Recipe(46956);
console.log(r)