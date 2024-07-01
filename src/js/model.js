import 'regenerator-runtime/runtime';
import { API_URL } from './config';
import { GetJSON } from './helpers';
import recipeView from './views/recipeView';
export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const data = await GetJSON(`${API_URL}/${id}`);
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(state.recipe);
  } catch (err) {
    throw err;
  }
};
