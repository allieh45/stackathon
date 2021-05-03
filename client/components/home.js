import React from 'react';
import { connect } from 'react-redux';
import { AVAILABLE_INGREDIENTS, pickIngredient } from '../store/ingredients';
import IngredientSelector from './IngredientSelector';

/**
 * COMPONENT
 */

export class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log('props:', this.props);
    console.log('state:', this.state);
    this.handleIngredientChange = this.handleIngredientChange.bind(this);
  }

  handleIngredientChange(evt) {
    // this.setState({ [evt.target.name]: evt.target.value });
    console.log('this:', this);
    this.props.dispatch(pickIngredient(evt.target.value));
    console.log('this:', this);
    console.log('state:', this.state);
  }

  render() {
    return (
      <div className='home-page'>
        <h3>Ingredients</h3>
        <div>
          <IngredientSelector
            ingredients={AVAILABLE_INGREDIENTS}
            selectedIngredient={this.props.selectedIngredient}
            onChange={this.handleIngredientChange}
          />
        </div>
        <h3>Recipes</h3>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    ingredients: state.ingredients,
  };
};
// const mapDispatch=(dispatch)=>{
//   return(

//   )
// }

export default connect(mapState)(Home);
