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
      <About 
        imageSrc="https://media.gettyimages.com/id/685132245/photo/mature-businessman-smiling-over-white-background.jpg?s=612x612&w=gi&k=20&c=ELBLmT-KQ6vhI5xiWnQcWWw0QJiELKt6STlga4fwRC8="
        title="About Me"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis, elit consectetur gravida feugiat, dui erat fringilla nulla, sed tincidunt est ex ac ligula. Sed pretium orci sed egestas laoreet. Cras consectetur eros quis nulla sagittis, at porta ante porttitor. Maecenas commodo turpis vel vestibulum tincidunt. Aenean leo nibh, tristique interdum facilisis at, tristique nec nulla. Etiam hendrerit mi eu purus iaculis, vitae consequat nibh laoreet. Ut id nulla ipsum. Donec suscipit luctus augue, et suscipit elit scelerisque a. Nam non turpis a lacus gravida euismod. Ut eget augue nec est pretium venenatis. Vivamus enim nisl, hendrerit eget rhoncus ac, posuere vel dolor. Suspendisse quis accumsan massa, a pulvinar tortor. Cras et pulvinar turpis."
        />
    </div>
  );
};

export default App;