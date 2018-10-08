import React, { Component } from 'react';
import Nav from './nav';

class Header extends Component {
    render() {
        return(
        <header className="header">
                <Nav />
        </header>
        )
    }
}

export default Header;