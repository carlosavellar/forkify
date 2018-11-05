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


// ** Global state of the app
  // * Searcj\h object
  // * Current recipe object
  // * Shopping list object
// ** Liked recipes
import Search from './models/Search';
const state = {};
const controlSearch = async () => {
    const query = 'Pizza';
    if (query) {
        state.search = new Search(query);
        await state.search.getRes();
        console.log(state.search.recipes);
    }
};


document.querySelector('.search').addEventListener('submit', e =>{
    e.preventDefault();
    controlSearch();
});

const search = new Search('pizza');

console.log(search);