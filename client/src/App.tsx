import React from 'react';
import { NewsCollection } from './components/NewsCollection';
import { Header } from './components/Header';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <NewsCollection />
    </div>
  );
}

export default App;
