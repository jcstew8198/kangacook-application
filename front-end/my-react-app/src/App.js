import React, {useState, useEffect} from 'react'
import './App.css';
import Recipes from './Recipes';
import TopToolbar from './TopToolbar';
import AddRecipeButton from './AddRecipeButton';
import AddRecipeModal from './AddRecipeModal';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

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
    callApi()
  }, [modalOpen]);

  useEffect(() => {
      if(recipes != []) {
          setLoading(false)
      }
    }, [recipes]);

  return (
    <div className="App">
      <h2 className="Logo">Jason Stewart's Mock Website</h2>
      <TopToolbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Recipes recipes={recipes} loading={loading} />
      <AddRecipeModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <AddRecipeButton setModalOpen={setModalOpen} />
    </div>
  );
}

export default App;
