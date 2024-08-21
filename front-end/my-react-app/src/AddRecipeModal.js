import React, {useState, useEffect} from 'react';
import './App.css';

const AddRecipeModal = (props) => {
    const{
        modalOpen,
        setModalOpen,
    } = props

    async function handleSubmit(name, description) {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        let response = await fetch('http://127.0.0.1:8000/api/recipes/', {
            method: "POST",
            body: JSON.stringify({ name: name, description: description }),
            headers
        })
        setModalOpen(false)
    }

  return (
    <div className="LoginModal" style={{visibility: modalOpen ? 'visible' : 'hidden'}}>
                <div className="LoginModalContent">
                    <span class="close" onClick={() => setModalOpen(false)}>&times;</span>
                    <h4>Create New Recipe</h4>
                    <form>
                        <div className="TextFieldsContainer">
                            <div className="LabelsContainer">
                                <div className="InputLabel">
                                    <label for="recipe-name">Recipe Name:</label>
                                </div>
                                <div className="InputLabel">
                                    <label for="recipe-description">Recipe Description:</label>
                                </div>
                            </div>
                            <div className="InputsContainer">
                                <div className="InputField">
                                    <input type="text" id="recipe-name" name="recipe-name"/>
                                </div>
                                <div className="InputField">
                                    <input type="text" id="recipe-description" name="recipe-description"/>
                                </div>   
                            </div>
                        </div>
                        <input type="button" value="Submit" onClick={() => {handleSubmit(document.getElementById('recipe-name').value, document.getElementById('recipe-description').value)}}/>
                    </form>
                </div>
            </div>
  );
}

export default AddRecipeModal;