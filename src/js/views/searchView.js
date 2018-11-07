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

const createButton = (pages, type) => {
    const button = `
                <button class="btn-inline results__btn--${type}">
                    <svg class="search__icon">
                        <use href = "img/icons.svg#icon-triangle-${type === 'left' ? 'prev' : 'right'}"> </use>
                    </svg>
                    <span>Page ${type === 'prev' ? page - 1 : page + 1} </span>
                </button>
               <button class="btn-inline results__btn--prev">
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-left"></use>
                    </svg>
                    <span>Page 1</span>
                </button>
                <button class="btn-inline results__btn--next">
                    <span>Page 3</span>
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-right"></use>
                    </svg>
                </button>`;
}


const navPages = (page, totalResult, numPerPage) => {
    const pages = totalResult / numPerPage;
    if(page === pages && pages > 1){
        // Prev button
    }else if(page === pages){

    }else if(page === pages && pages > 1){

    }
}

export const renderResult = (recipes, page = 1, resPerPage = 10  )=>{
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;
     console.log(`${start} end: ${end} `);
    recipes.slice(start, end).forEach(renderRecipe);
}
// export const add = (a, b ) => a + b;
// export const multiply = (a, b ) => a * b;
// export const ID = 23;
// export const restDivision = (a, b) =>  a % b === 0 ? 'ok' : 'not ok' ;