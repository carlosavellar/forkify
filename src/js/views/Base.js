// alert(document.querySelector(".search__field").className);
export const elements = {
    searchInput: document.querySelector(".search__field"),
    searchForm: document.querySelector(".search"),
    searchResults: document.querySelector(".results__list"),
    searchRes: document.querySelector(".results"),
    navPages: document.querySelector(".results__pages"),
    btnClosest: document.querySelector(".btn-inline"),
    recipeBase:  document.querySelector(".recipe")
};

export const elementStrings = {
    loader: "loader"
};

export const rendeLoader = (parent) =>{
    const loader  = `
        <div class='${elementStrings.loader}'>
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;
    parent.insertAdjacentHTML("afterbegin", loader);
}

export const clearLeader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if(loader) loader.parentElement.removeChild(loader);
}