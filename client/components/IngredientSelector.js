import React from 'react';

export default (props) => {
  return (
    <select onChange={props.onChange} value={props.selectedIngredient}>
      {props.ingredients.map((ingredient) => (
        <option key={ingredient} value={ingredient}>
          {ingredient}
        </option>
      ))}
    </select>
  );
};
