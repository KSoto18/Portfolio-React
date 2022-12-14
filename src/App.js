import React, { useState } from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../src/App.css'

import Body from './pages/Body';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (

    <div className='background'>

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
}

export default App;