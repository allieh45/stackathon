import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../store/recipes';
import RecipeCard from './RecipeCard';

export class Recipes extends React.Component {
  componentDidMount() {
    this.props.getRecipes();
  }
  render() {
    const recipes = this.props.recipes;

    return recipes && recipes.length > 0 ? (
      <div className='row'>
        <h1>Cocktail Recipes</h1>
        <div className='row all_recipes_inner'>
          <ul className='row'>
            {recipes.map((recipe) => {
              return (
                <li
                  className='col-lg-4 col-md-6 col-sm-6 recipeCard'
                  key={recipe.id}
                >
                  <div>
                    <RecipeCard recipe={recipe} />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    ) : (
      'Recipes are loading...'
    );
  }
}

const mapState = (state) => {
  return { recipes: state.recipes };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    getRecipes: (recipe) => dispatch(fetchRecipes(recipe, history)),
  };
};

export default connect(mapState, mapDispatch)(Recipes);
