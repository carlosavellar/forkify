import { elements } from './base.js';
export const getInput = () => elements.searchInput.value;

export const clearInput = () => elements.searchInput.value = '';

const renderRecipe = recipe =>{
    const string = `
          <li>
              <a class="results__link results__link--active" href="${recipe.recipe_id}">
              <figure class="results__fig">
              <img src="${recipe.image_url}" alt="Test">
              </figure> <div class="results__data">
              <h4 class="results__name"> ${recipe.title}</h4> 
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