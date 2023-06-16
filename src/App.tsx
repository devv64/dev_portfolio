import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PortfolioCard from './components/PortfolioCard';
import HomePage from './components/HomePage';
import PortfolioPage from './components/PortfolioPage';

const App: React.FC = () => {
  const links = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Contact', url: '/contact' },
  ];

  const handleViewPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Define your portfolio items
  const portfolioItems = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'http://devv64.pythonanywhere.com/static/images/sageGiraffeReading.png',
      tag: 'Flask',
      colSpan: 3,
      rowSpan: 1,
      link: 'http://devv64.pythonanywhere.com/',
    },
    {
      title: 'Project 2',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      imageUrl: 'https://media.graphassets.com/9kTzcfcVQqILlQwqOoPg',
      tag: 'React',
      colSpan: 2,
      rowSpan: 2,
      link: 'https://devsblogsite.vercel.app/',
    },
  ];

  return (
    <div>
      <Navbar title="dp" links={links} />
      <HomePage onClickViewPortfolio={handleViewPortfolio} />
      <div className="h-96"></div>
      <PortfolioCard items={portfolioItems} />
      <PortfolioPage />
    </div>
  );
};

export default App;