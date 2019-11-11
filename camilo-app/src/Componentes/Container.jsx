import React from 'react';
import flecha from '../img/circled-right-2.png'



class Container extends React.Component {
    render () {
        return (
            <div className= "container"><p className="center">
        Find your perfect trip, designed by insiders who know and love their cities.
    </p>
    <br/>
    <h2 className= "center">
        Start browsing
    </h2>
    <div className="center"> 
    <a href="/cities" ><img className= "responsive-img image" src={flecha}></img></a>
    </div>
    <br/>
    <p className="center">
        Want to build your own MYtinerary?
    </p>
    <div className="container">
        <div className="left"><a href="/login">Log in</a></div>
    <div className="right"><a href="/createacount">Create Account</a></div>
    </div>
</div>
        )
    }
}

export default Container;