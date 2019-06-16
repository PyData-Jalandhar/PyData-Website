import React from 'react';
import Hero from './components/Hero';
import './App.css';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';


export default class App extends React.Component {
  render(){
    return(
      <div>
        <Hero />
        <AboutUs />
        <Contact />
      </div>
    )
  }
}

