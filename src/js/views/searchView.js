import { elements } from './base.js';
export const getInput = () => elements.searchInput.value;

export const clearInput = () => elements.searchInput.value = '';

export const clearResult = () => elements.searchResults.innerHTML = '';

const reduceTitle = (title, limit = 17) => {
    const newTitle = [];
    if (title.length > limit) {
        title.split(" ").reduce((prev, cur) => {
            if (prev + cur.length  <= limit) {
                newTitle.push(cur);
            }
            return prev + cur.length;
        }, 0);
        return `${newTitle.join(' ')} ...`;
    }
    return title;
};
const renderRecipe = recipe =>{
    const string = `
          <li>
              <a class="results__link results__link--active" href="${recipe.recipe_id}">
              <figure class="results__fig">
              <img src="${recipe.image_url}" alt="Test">
              </figure> <div class="results__data">
              <h4 class="results__name"> ${reduceTitle(recipe.title)}</h4> 
              <p class="results__author"> ${recipe.publisher}</p></div></a></li>
    `;
    elements.searchResults.insertAdjacentHTML("beforeend", string);
}




export const renderResult = recipes =>{
    recipes.forEach(renderRecipe);
}
// export const add = (a, b ) => a + b;
// export const multiply = (a, b ) => a * b;
// export const ID = 23;
// export const restDivision = (a, b) =>  a % b === 0 ? 'ok' : 'not ok' ;