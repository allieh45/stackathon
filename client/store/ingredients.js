import axios from 'axios';

export const AVAILABLE_INGREDIENTS = [
  'vodka',
  'tequila',
  'whiskey',
  'rum',
  'gin',
  'lime juice',
  'lemon juice',
  'club soda',
  'tonic water',
  'simple syrup',
  'bitters',
  'orange liqueur',
  'ginger beer',
  'coke',
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

//do I need a thunk? maybe later??

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
