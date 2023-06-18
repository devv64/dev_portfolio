import React, { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import PortfolioPage from './components/PortfolioPage';
import About from './components/About';

const App: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [theme, setTheme] = useState<string[]>(['#00A6FB', '#001427', '#DBDFAC']);

  const pickTheme = () => {
    console.log(scrollPosition)
    if (scrollPosition <= 856) {
      setTheme(['#00A6FB', '#001427', '#DBDFAC']);
    }
    else if (scrollPosition < 2160) {
      setTheme(['#FAD4D8', '#001427', '#DBDFAC']);
    }
    else {
      setTheme(['#001427', '#DBDFAC', '#FAD4D8']);
    }
  };

  window.addEventListener('scroll', () => {
    setScrollPosition(window.scrollY);
    pickTheme();
  }
  );

  const links = [
    { title: 'Portfolio', url: '/portfolio' },
    { title: 'About', url: '/about' },
    { title: 'Contact', url: '/contact' },
  ];

  const ref = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Navbar title="dp" links={links} theme={theme} />
      <HomePage portfolioRef={ref}/>
      <PortfolioPage ref={ref}/>
      <About />
    </div>
  );
};

export default App;