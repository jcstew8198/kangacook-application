import React, {useState, useEffect} from 'react'
import './Recipes.css';
import RecipeComponent from './RecipeComponent';

const Recipes = (props) => {
  const {
    recipes,
    loading
  } = props

  if(loading) return <h1>Loading Recipes...</h1>

  return (
    <div className="RecipesContainer">
      {recipes.map(recipe => {return(
        <RecipeComponent recipeId={recipe.id} recipeName={recipe.name} recipeDescription={recipe.description} />
      )})}
    </div>
  );
}

export default Recipes;
