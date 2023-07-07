import React, { useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import './HomePage.css';

interface HomePageProps {
  portfolioRef: React.RefObject<HTMLDivElement>;
}

const HomePage: React.FC<HomePageProps> = ({ portfolioRef }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const name = 'Dev Patel.';
  const typingDelay = 250;

  let charIndex = 0;

  const type = () => {
    const title = titleRef.current;
    if (title) {
      const currentText = name.substring(0, charIndex);
      title.textContent = currentText;

      charIndex++;

      if (charIndex <= name.length) {
        setTimeout(type, typingDelay);
      }
    }
  };

  const scrollToPortfolio = () => {
    if (portfolioRef.current) {
      const { top } = portfolioRef.current.getBoundingClientRect();
      window.scrollTo({ top: window.pageYOffset + top, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    type();
  }, []);

  return (
    <section className="homepage-section">
      <div className="homepage-container">
        <div className="homepage-content mt-16">
          <h1 ref={titleRef} className="homepage-title"></h1>
          <p className="homepage-description">
            I'm a passionate developer ready to take on new challenges and create amazing web experiences.
          </p>
          <Link to="portfolio" smooth={true} duration={500} className="homepage-button" onClick={scrollToPortfolio}>
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
