import React, { useRef, useEffect } from 'react';
import './HomePage.css';

interface HomePageProps {
  portfolioRef: React.RefObject<HTMLDivElement>;
}

const HomePage: React.FC<HomePageProps> = ({ portfolioRef }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const name = 'Dev Patel.';
  const typingDelay = 250; // Delay between each character typing

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

  useEffect(() => {
    type();
  }, []);

  const scrollDown = () => {
    window.scrollTo({ 
      top: portfolioRef.current?.offsetTop, 
      behavior: 'smooth',
    });
  };

  return (
    <section className="homepage-section">
      <div className="homepage-container">
        <div className="homepage-content mt-16">
          <h1 ref={titleRef} className="homepage-title"></h1>
          <p className="homepage-description">
            I'm a passionate developer ready to take on new challenges and create amazing web experiences.
          </p>
          <button ref={buttonRef} className="homepage-button" onClick={scrollDown}>
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
