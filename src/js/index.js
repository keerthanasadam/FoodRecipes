import Search from './models/Search';
import * as searchView from './views/serachView'
import { elements } from './views/base';

/**
 * Global state of the app
 * -Search Object
 * -Current Recipie Object
 * -Shopping list Object
 * -Liked Recipies
 * 
 */
const state = {};

const controlSearch = async () => {
    //1. Get search query from view
    // const query = document.querySelector('.search__field').value;
    const query = searchView.getInput();
    if (query) {
        //2.create new search object in state
        state.search = new Search(query);

        //3. prepare UI for results
        searchView.clearInput();
        searchView.clearRecipes();

        //4. search for recipies
        await state.search.getResults();

        //5. render results in UI
        searchView.renderResults(state.search.result);
    }


}

elements.searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    controlSearch();
});