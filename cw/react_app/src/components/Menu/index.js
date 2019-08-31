import React from 'react';
import './style.scss'

function Menu(props) {

    const {changePage} = props;

    return (
        <div id="menu">
            <a onClick={changePage} href='/photos'>photos</a>
            <br/>
            <a onClick={changePage} href='/favorit'>favorit</a>
            <br/>
            <span>Menu</span>
        </div>
    )
}

export default Menu;