import axios from 'axios';
import { key, proxy } from '../config.js';
import { parse } from 'path';
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
            let ingredient = el.toLowerCase();
            unitLong.forEach((unit, i)=>{
                ingredient = ingredient.replace(unit, unitShort[i]);
            });
            ingredient = ingredient.replace(/ *\([^)]*\) */g, '');
            const units = ingredient.split(' ');
            const unitIndex = units.findIndex(el2 => unitShort.includes(el2));
            let objUit;
            if (unitIndex > -1) { 
                  let arrayCount = units.slice(0, unitIndex);

                  let count;
                  if (arrayCount.length === 1) {
                    count = units[0];
                  }else{
                    count = eval(units.slice(0, unitIndex).joing('+'));
                  }
                  objUit={
                    count,
                    unit: units[unitIndex],
                    ingredient: units.slice(unitIndex + 1).join(' ')
                  };
            } else if (parseInt(units - 1, 10)) {
                objUit = {
                    coult: parseInt(units - 1, 10),
                    unit: '',
                    ingredient: units.slice(1).join(' ')
                }
            } else if (unitIndex === -1) {
                objUit = {
                    coult: -1,
                    unit: '',
                    ingredient
                }
            }
            return objUit;
        });
        this.ingredients = newIngredients;
    }
}
const r = new Recipe(46956);
console.log(r);