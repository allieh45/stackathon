import axios from 'axios';

export const AVAILABLE_INGREDIENTS = [
  'vodka',
  'tequila',
  'whiskey',
  'rum',
  'gin',
];

//action types
const PICK_INGREDIENT = 'PICK_INGREDIENT';

//action creators

export const pickIngredient = (ingredient) => {
  return {
    type: PICK_INGREDIENT,
    ingredient,
  };
};

export const fetchIngredients = () => {
  return (dispatch) => {
    try {
      dispatch(pickIngredient());
      console.log('in thunk');
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = {
  selectedIngredient: AVAILABLE_INGREDIENTS[0],
};

export default function ingredientReducer(state = initialState, action) {
  switch (action.type) {
    case PICK_INGREDIENT:
      state.selectedIngredient = action.ingredient;
      return state;
    default:
      return state;
  }
}
