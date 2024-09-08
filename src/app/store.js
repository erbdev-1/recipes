import { createStore, combineReducers } from "redux";
import { favoriteRecipesReducer } from "../features/favoriteRecipes.js/favoriteRecipesSlice.js";
import { searchTermReducer } from "../features/searchTerm.js/searchTermSlice.js";
import { allRecipesReducer } from "../features/allRecipes.js/allRecipesSlice.js";

export const store = createStore(
  combineReducers({
    favoriteRecipes: favoriteRecipesReducer,
    searchTerm: searchTermReducer,
    allRecipes: allRecipesReducer,
  })
);
