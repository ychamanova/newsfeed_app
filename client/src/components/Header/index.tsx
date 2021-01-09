import React, { useState } from 'react';
import './styles.css';

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <header>
      <div className='header-top'>
        <div className='header-logo'>NewsFeed</div>
        <form className='header-search'>
          <label>
            Search Articles
            <input
              className='header-search-input'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              defaultValue='e.x. recipes'
              type='text'
            />
          </label>
        </form>
      </div>
      <div className='header-slogan'>
        <div className='header-slogan-large'>The Best News</div>
        <br />
        <div className='header-slogan-small'>From Around the World</div>
      </div>
    </header>
  );
};
