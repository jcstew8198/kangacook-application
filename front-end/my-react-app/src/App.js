import React, {useState, useEffect} from 'react'
import './App.css';
import Recipes from './Recipes';
import TopToolbar from './TopToolbar';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className="App">
      <h2 className="Logo">Jason Stewart's Mock Website</h2>
      <TopToolbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Recipes />
    </div>
  );
}

export default App;
