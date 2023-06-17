import React, { forwardRef } from 'react';
import PortfolioCard from './PortfolioCard';

// const PortfolioPage: React.FC = () => {
const PortfolioPage = forwardRef<HTMLDivElement>((props, ref) => {
  const portfolioItems = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'http://devv64.pythonanywhere.com/static/images/sageGiraffeReading.png',
      tag: 'Flask',
      colSpan: 3,
      rowSpan: 3,
      link: 'http://devv64.pythonanywhere.com/',
    },
    {
      title: 'Project 2',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      imageUrl: 'https://media.graphassets.com/9kTzcfcVQqILlQwqOoPg',
      tag: 'React',
      colSpan: 2,
      rowSpan: 3,
      link: 'https://devsblogsite.vercel.app/',
    },
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'http://devv64.pythonanywhere.com/static/images/sageGiraffeReading.png',
      tag: 'Flask',
      colSpan: 3,
      rowSpan: 3,
      link: 'http://devv64.pythonanywhere.com/',
    },
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'http://devv64.pythonanywhere.com/static/images/sageGiraffeReading.png',
      tag: 'Flask',
      colSpan: 3,
      rowSpan: 5,
      link: 'http://devv64.pythonanywhere.com/',
    },
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
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'http://devv64.pythonanywhere.com/static/images/sageGiraffeReading.png',
      tag: 'Flask',
      colSpan: 3,
      rowSpan: 3,
      link: 'http://devv64.pythonanywhere.com/',
    },
  ];

  return (
    <div ref={ref}>
      <PortfolioCard items={portfolioItems} />
    </div>
  );
});

export default PortfolioPage;
