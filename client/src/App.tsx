import React from 'react';
import { NewsCollection } from './components/NewsCollection';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <NewsCollection />
      <Footer />
    </div>
  );
}

export default App;
