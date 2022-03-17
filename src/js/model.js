import { async } from 'regenerator-runtime';
import { API_URL, GET_CONFIG } from './config';
import { getJSON } from './views/helper';

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const data = getJSON(`${API_URL}/${id}`, GET_CONFIG);
    const recipe = structuredClone(data.data.recipe);
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
    alert(err);
  }
};
