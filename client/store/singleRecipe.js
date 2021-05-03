import axios from 'axios';

const GET_RECIPE = 'GET_RECIPE';

const getRecipe = (recipe) => {
  return {
    type: GET_RECIPE,
    recipe,
  };
};

export const fetchSingleRecipe = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/recipes/${id}`);
      dispatch(getRecipe(data));
    } catch (error) {
      console.log('Error');
    }
  };
};

const initialState = {};
export default function singleRecipeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPE:
      return action.recipe;
    default:
      return state;
  }
}
