import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleRecipe } from '../store/singleRecipe';
const styles = {
  card: {
    maxWidth: 500,
  },
};
export class SingleRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getSingleRecipe(id);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    const recipe = this.props.recipe;
    console.log('recipe:', recipe);
    return (
      <div className='container'>
        <div className='row s_product_inner'>
          <div className='col-lg-5'>
            <img src={recipe.imageUrl} />
          </div>
          <div className='col-lg-5 offset-lg-1'>
            <div className='s_product_text'>
              <h3>{recipe.name}</h3>
              <p>{recipe.ingredients}</p>
              <div className='card-area'>
                <div className='product_count_button'>
                  {/* <span className="material-icons">remove_circle_outline</span> */}
                  <div className='social_icon'>
                    <i className='ti-facebook'></i>
                    <i className='ti-twitter-alt'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapState = (state) => ({
  recipe: state.singleRecipe,
});
const mapDispatch = (dispatch, { history }) => {
  return {
    getSingleRecipe: (id) => dispatch(fetchSingleRecipe(id)),
  };
};
export default connect(mapState, mapDispatch)(SingleRecipe);
