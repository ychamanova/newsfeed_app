import React from 'react';

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
    </div>
  );
}

export default App;
