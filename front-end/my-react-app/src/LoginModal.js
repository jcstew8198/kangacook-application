import React, {useState, useEffect} from 'react';
import './App.css';

const LoginModal = (props) => {
    const{
        modalOpen,
        setModalOpen,
        setLoggedIn,
    } = props

    const [creatingAccount, setCreatingAccount] = useState(false)

    async function handleLoginSubmit(username, password) {
        let response = await fetch('http://127.0.0.1:8000/api/users/')
        if(response.ok) {
            response.json().then(data => {
                for(let user in data) {
                    if(username = data[user].username) {
                        if(password = data[user].password && data[user].loggedIn === false) {
                            setLoggedIn(true)
                        }
                    }
                }
            })
        }
        setModalOpen(false)
    }

    async function handleAccountCreateSubmit(username, password, confirmPassword) {
        if(password === confirmPassword) {
            const headers = new Headers();
            headers.append("Content-Type", "application/json");
            let response = await fetch('http://127.0.0.1:8000/api/users/', {
                method: "POST",
                body: JSON.stringify({ username: username, password: password, loggedIn: false }),
                headers
            })
            alert('Account created successfully. You can now login with your new credentials!')
            setCreatingAccount(false)
            setModalOpen(false)
        } else {
            alert('Passwords did not match. Please make sure both passwords completely match and then try again.')
        }
    }

    if(creatingAccount) {
        return (
            <div className="LoginModal" style={{visibility: modalOpen ? 'visible' : 'hidden'}}>
                <div className="LoginModalContent">
                    <span class="close" onClick={() => setModalOpen(false)}>&times;</span>
                    <h4>Create New Account</h4>
                    <form>
                        <div className="TextFieldsContainer">
                            <div className="LabelsContainer">
                                <div className="InputLabel">
                                    <label for="username">Your Username:</label>
                                </div>
                                <div className="InputLabel">
                                    <label for="password">Your Password:</label>
                                </div>
                                <div className="InputLabel">
                                    <label for="confirmPassword">Confirm Your Password:</label>
                                </div> 
                            </div>
                            <div className="InputsContainer">
                                <div className="InputField">
                                    <input type="text" id="username" name="username"/>
                                </div>
                                <div className="InputField">
                                    <input type="text" id="password" name="password"/>
                                </div>
                                <div className="InputField">
                                    <input type="text" id="confirmPassword" name="confirmPassword"/>
                                </div>   
                            </div>
                        </div>
                        <input type="button" value="Submit" onClick={() => {handleAccountCreateSubmit(document.getElementById('username').value, document.getElementById('password').value, document.getElementById('confirmPassword').value)}}/>
                    </form>
                </div>
            </div>
        )
    }

  return (
    <div className="LoginModal" style={{visibility: modalOpen ? 'visible' : 'hidden'}}>
        <div className="LoginModalContent">
            <span class="close" onClick={() => setModalOpen(false)}>&times;</span>
            <h4>Login</h4>
            <form>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username"/><br/><br/>
                <label for="password">Password:</label>
                <input type="text" id="password" name="password"/><br/><br/>
                <input type="button" value="Submit" onClick={() => {handleLoginSubmit(document.getElementById('username').value, document.getElementById('password').value)}}/>
            </form>
            <div className="NewAccount" onClick={() => setCreatingAccount(true)}><span style={{color: 'blue'}}>Click here to create a new account!</span></div> 
        </div>
    </div>
  );
}

export default LoginModal;
