// Main Imports
import React, { useState } from 'react';

// Styling
import 'animate.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../src/App.css'


// Components/Functions
import Body from './pages/Body';
import Header from './components/Header';
import Footer from './components/Footer';
import { OpeningTitle, TitleAway }  from './components/OpeningTitle'


// Entrance
export function Title() {
  return (
    <OpeningTitle />
  )
};

export function NoTitle() {
  return (
    <TitleAway />
  )
};

// Main Page
export function App() {

  return (

    <div  className='background' > 

      <div className='left'>
        <Header />
      </div>

      <div className='center'>
        <Body />
      </div>

      <div className='center'>
        <Footer />
      </div>

    </div>
  
  );
};
