import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.scss';


function Menu(props) {

    return (
        <div id="menu">
            <NavLink exact to='/'>photos</NavLink>
            <br />
            <NavLink to='/favorite'>favorite</NavLink>
        </div>
    )
}

export default Menu;
