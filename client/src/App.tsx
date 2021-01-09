import React from 'react';
import { NewsCollection } from './components/NewsCollection';

import './App.css';

import { Header } from './components/Header';

function App() {
  const [data, setData] = React.useState('');

  const getData = () => {
    fetch('/api')
      .then((result) => result.text())
      .then((res) => setData(res));
  };
  return (
    <div className='App'>
      <Header />
      <NewsCollection />
    </div>
  );
}

export default App;
