//Import  1
// import { add, multiply, ID, restDivision}  from './views/searchView';
// console.log(`${add(3,5)} --- ${multiply(3,4)} --- ${restDivision(3, 23)}`);

//Import  2
import * as searchView from './views/searchView';
console.log(`${searchView.add(3,7)} --- ${searchView.multiply(2,4)} --- ${searchView.restDivision(searchView.ID, 23)}`);