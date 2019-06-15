import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
    background-color: transparent;
    padding-top: 1rem;
`;

export default class Header extends React.Component{
    render(){
        return(
            <div className="container" id="home">
            <Navbar className="navbar is-transparent">
                <div className="navbar-brand">
                    <span className="is-size-3 has-text-white has-text-weight-bold">PyData</span>
                </div>
                <div id="navbarExampleTransparentExample" className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item has-text-white is-size-5" href="#home">
                            Home
                        </a>
                        <a className="navbar-item has-text-white is-size-5" href="https://bulma.io/">
                            About Us
                        </a>
                        <a className="navbar-item has-text-white is-size-5" href="https://bulma.io/">
                            Events
                        </a>
                        <a className="navbar-item has-text-white is-size-5" href="https://bulma.io/">
                            Team
                        </a>
                    </div>
                </div>
            </Navbar>
            </div>
        )
    }
}