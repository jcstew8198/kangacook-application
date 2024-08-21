import React from 'react'
import './Recipes.css';

function RecipeComponent(props) {
  const {
    recipeId,
    recipeName,
    recipeDescription
  } = props

  return (
    <div id={`Recipe-${recipeId}`} className="Recipe">
        <div className="RecipeName">
            {recipeName}
        </div>
        <div className="RecipeDescription">
            {recipeDescription}<br/>
        </div>
    </div>
  );
}

export default RecipeComponent;
