import axios from 'axios';

const SET_RECIPES = 'SET_RECIPES';

const setRecipes = (recipes) => {
  return {
    type: SET_RECIPES,
    recipes,
  };
};

export const fetchRecipes = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/recipes');
      dispatch(setRecipes(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = [];

export default function recipesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_RECIPES:
      return action.recipes;
    default:
      return state;
  }
}
