import React, {useState, useEffect} from 'react';
import './TopToolbar.css'
import LoginModal from './LoginModal';

const TopToolbar = (props) => {
    const {
        loggedIn,
        setLoggedIn,
    } = props

  const [modalOpen, setModalOpen] = useState(false)

  function handleLoginClick() {
    if(loggedIn) {
        setLoggedIn(false)
    } else {
        setModalOpen(true)
    }
  }

  return (
    <div className="ToolbarContainer">
      <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} setLoggedIn={setLoggedIn} />
      <div className="LoginButton" onClick={() => handleLoginClick()}>{loggedIn ? 'Logout' : 'Login'}</div>
    </div>
  );
}

export default TopToolbar;