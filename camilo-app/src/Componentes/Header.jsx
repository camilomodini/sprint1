import React from 'react';
import logo from '../img/MYtineraryLogo.png'



class Header extends React.Component {
    render () {
        return (
            <div className="container">
                <div className="center"><img src={logo} className="logo" alt="logo"></img></div>
            </div>
        )
    }
}

export default Header
