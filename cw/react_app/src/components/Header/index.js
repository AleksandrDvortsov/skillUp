import React from 'react';
import Menu from '../Menu';
import './style.scss'

function Header(props) {
    const {changePage} = props;
    return (
        <div id="header">
            <span>Header</span>
            <Menu changePage = {changePage} />
        </div>
    )
}

export default Header;