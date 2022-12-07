import React, { useState } from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (

    <div>

      <div>
        <Header />
      </div>

      <div>
        <Home />
      </div>

      <div>
        <Footer />
      </div>

    </div>

  );
}

export default App;