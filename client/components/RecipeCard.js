import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = (props) => {
  const { recipe } = props;

  return (
    <div className='row recipe-card'>
      <div className='col-lg-4 col-md-6 col-sm-6'>
        <div className='card mb-50 text-center' style={{ width: '20rem' }}>
          <img
            className='card-img-top'
            src={recipe.imageUrl}
            alt='Recipe Image'
          />
          <div className='card-body'>
            <Link to={`/recipes/${recipe.id}`}>
              <h5 className='card-title'>{recipe.name}</h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
