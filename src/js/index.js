import Search from './models/Search';
import * as searchView from './views/searchView.js';
import {
    elements
} from './views/base.js';

const state = {};

const controlResults = async () => {
    console.log(searchView.getInput());
    const query = searchView.getInput();
    if (query) {
        searchView.clearResult();
        state.search = new Search(query);
        await state.search.getResults();
        searchView.clearInput();
        console.log(state.search.result);

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
