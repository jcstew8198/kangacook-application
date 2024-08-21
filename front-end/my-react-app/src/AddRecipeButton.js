import React from 'react'
import './Recipes.css';

function AddRecipeButton(props) {
  const {
    setModalOpen
  } = props

  return (
    <div className="AddRecipeButton" onClick={() => setModalOpen(true)}>
      Add New Recipe
    </div>
  );
}

export default AddRecipeButton;
