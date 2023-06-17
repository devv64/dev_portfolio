import React, { useRef } from 'react';
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
      <PortfolioPage ref={ref}/>
      <About />
    </div>
  );
};

export default App;