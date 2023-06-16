import React from 'react';
import PortfolioCard from './PortfolioCard';

const PortfolioPage: React.FC = () => {
  // Define your portfolio items
  const portfolioItems = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'http://devv64.pythonanywhere.com/static/images/sageGiraffeReading.png',
      tag: 'React',
      colSpan: 3,
      rowSpan: 1,
      link: 'http://devv64.pythonanywhere.com/',
    },
    {
      title: 'Project 2',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      imageUrl: 'https://media.graphassets.com/9kTzcfcVQqILlQwqOoPg',
      tag: 'Vue',
      colSpan: 2,
      rowSpan: 2,
      link: 'https://www.github.com/devv64',
    },
    // Add more portfolio items as needed
  ];

  return (
    <div>
      <h1>Portfolio Page</h1>
      <PortfolioCard items={portfolioItems} />
    </div>
  );
};

export default PortfolioPage;
