//Import  1
// import { add, multiply, ID, restDivision}  from './views/searchView';
// console.log(`${add(3,5)} --- ${multiply(3,4)} --- ${restDivision(3, 23)}`);

//Import  2
// import * as searchView from './views/searchView';
// console.log(`${searchView.add(3,7)} --- ${searchView.multiply(2,4)} --- ${searchView.restDivision(searchView.ID, 23)}`);

//Import  3
// import { add as a, multiply as b, ID as i, restDivision as r }from './views/searchView';
// console.log(`${a(3,13)} --- ${b(9,3)} --- ${r(i, 23)}`);

//https: //www.food2fork.com/api/search
// 0f23071ff333722d90aea063d80c4c45


// #Error: Uncaught ReferenceError: regeneratorRuntime is not defined.
// Solution: https: //babeljs.io/docs/en/babel-plugin-transform-regenerator/

import axios from 'axios';
async function getResult(query) {
    const key = '0f23071ff333722d90aea063d80c4c45';
    const proxy = 'https://cors-anywhere.herokuapp.com';
    try {
        const res = await axios(`${proxy}/https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch (err) {
        console.log(`${err} Teste`);
    }
}
getResult('pizza');