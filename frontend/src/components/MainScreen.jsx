import React from 'react';
import logo from '../logo.svg';



function MainScreen(props) {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>
        Kitalált tréningcég belső tréning.
        </h1>
      <h2>
        Üdvözöllek!
        </h2>
      <button onClick={() => props.setLoggedIn(true)} >
        Kattins ide a belépéshez
        </button>
    </>
  )
}

export default MainScreen
