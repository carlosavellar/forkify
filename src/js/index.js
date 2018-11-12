import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import { elements, rendeLoader, clearLeader } from './views/base.js';

const state = {};

const controlResults = async () => {
    // console.log(searchView.getInput());
    const query = searchView.getInput;
    // const query = 'pizza';
    if (query) {
        searchView.clearResult();
        state.search = new Search(query);

        window.r = state.search;

        rendeLoader(elements.searchRes);

        await state.search.getResults();
         
        state.search.parseIngredients();

        searchView.clearInput();

        clearLeader();
        searchView.renderResult(state.search.result);

    }
}
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    if (searchView.getInput() !== '' && searchView.getInput() !== ' ') {
        controlResults();
    } else {
        alert("Caralho! Prrencha essa MERDA FILHA DA PUTA");
    }
});
// window.addEventListener('load', e => {
//     e.preventDefault();
//     controlResults();

// });


elements.navPages.addEventListener('click', e => {
    const btn = e.target.closest(".btn-inline");
    if (btn) {
        searchView.clearResult();
        const gotoToPage = parseInt(btn.dataset.goto, 10);
        searchView.renderResult(state.search.result, gotoToPage);
    }
});

// const r = new Recipe(46956);
// r.getRecipe();
// console.log(r);

// r.getrIgredients(r);

const controlRecipe = async () => {
    const id = window.location.hash.replace('#', '');
    console.log(id);
    
    if (id){
        rendeLoader(elements.recipeBase);
        state.recipe = new Recipe(id);
        try{
            await state.recipe.getRecipe();
            state.recipe.getrIgredients();
            state.recipe.
            recipeView.renderRecipe(state.recipe);
            recipeView.getrIgredients();



            console.log(state.recipe);
            clearLeader();
        }catch(err){
            console.log(err);
        }
    }
}

["hashchange", "onload"].forEach(event=>window.addEventListener(event, controlRecipe));

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
