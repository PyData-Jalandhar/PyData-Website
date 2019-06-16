import React from 'react';
import styled from 'styled-components';
import Image from '../assets/hero6.jpg';
import Header from './Header';

const Background = styled.section`
    background-image: url(${Image});
    background-size: cover;
`;

export default class Hero extends React.Component{
    render(){
        return(
            <Background>
                <Header />
                <section className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container">
                    <h1 className="title has-text-white">
                        PyData Jalandhar
                    </h1>
                    <h2 className="subtitle has-text-white">
                        Become a part of the largest open source community.
                    </h2>
                    </div>
                </div>
                </section>
            </Background>
        )
    }
}