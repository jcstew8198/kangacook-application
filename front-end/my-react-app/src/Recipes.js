import React, {useState, useEffect} from 'react'
import './Recipes.css';

function Recipes() {

    const [loading, setLoading] = useState(true)
    const [recipes, setRecipes] = useState([])

    async function callApi() {
        let response = await fetch('http://127.0.0.1:8000/api/recipes/')
        if (!response.ok)
          return []
        else {
          response.json().then(data => setRecipes(data));
        }
      }

    useEffect(() => {
        callApi()
      }, []);

    useEffect(() => {
        if(recipes != []) {
            setLoading(false)
        }
      }, [recipes]);

  if(loading) return <h1>Loading Recipes...</h1>

  return (
    <div className="RecipesContainer">
      {recipes.map(recipe => {return(
        <div id={`Recipe-${recipe.id}`} className="Recipe">
            <div className="RecipeName">
                {recipe.name}
            </div>
            <div className="RecipeDescription">
                {recipe.description}<br/>
            </div>
        </div>
      )}
      )}
    </div>
  );
}

export default Recipes;
