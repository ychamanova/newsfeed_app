import React, { useState } from 'react';
import './styles.css';

export const Header = () => {
  return (
    <header>
      <div className='header-top'>
        <div className='header-logo'>NewsFeed</div>
      </div>
      <div className='header-slogan'>
        <div className='header-slogan-large'>The Best News</div>
        <br />
        <div className='header-slogan-small'>From Around the World</div>
      </div>
    </header>
  );
};
