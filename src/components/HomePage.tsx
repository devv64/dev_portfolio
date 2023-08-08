import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './HomePage.css';

interface HomePageProps {
  portfolioRef: React.RefObject<HTMLDivElement>;
}

const HomePage: React.FC<HomePageProps> = ({ portfolioRef }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [roles, setRoles] = useState<string[]>(['Software Engineer', 'Student', 'Problem Solver', 'Entrepreneur']);
  const [isTypingFinished, setIsTypingFinished] = useState(false);

  const titleRef = React.useRef<HTMLHeadingElement>(null);
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
      } else {
        setIsTypingFinished(true);
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

  useEffect(() => {
    if (isTypingFinished) {
      const interval = setInterval(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isTypingFinished, roles.length]);

  return (
    <section className="homepage-section">
      <div className="homepage-container">
        <div className="homepage-content mt-16">
          <h1 ref={titleRef} className="homepage-title"></h1>
          {isTypingFinished && (
            <div className="homepage-description side flex">
              <h2 className="title">{roles[currentRoleIndex]}</h2>
            </div>
          )}
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            className="homepage-button"
            onClick={scrollToPortfolio}
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
