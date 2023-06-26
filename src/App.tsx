import React, { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import PortfolioPage from './components/PortfolioPage';
import About from './components/About';

const App: React.FC = () => {
  const links = [
    { title: 'Portfolio', url: '/portfolio' },
    { title: 'About', url: '/about' },
    { title: 'Contact', url: '/contact' },
  ];

  const ref = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Navbar title="dp" links={links} />
      <HomePage portfolioRef={ref}/>
      <div id='portfolio-page'ref={ref}>
        <PortfolioPage />
      </div>
      {/* <About /> */}
      <div className='p-40'></div>
    </div>
  );
};

export default App;