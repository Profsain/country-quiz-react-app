import React from 'react';
import Logo from './Logo';
import '../App.css';


const Quiz = () => {
  return (
    <div className="Container">
        <div  className="Logo">
            <Logo />
        </div>
        {/* add svg here */}
        {/* <img src={Logo} alt="logo" className="Logo" /> */}
        <div className="Question"></div>
    </div>
  )
}

export default Quiz