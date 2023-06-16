import React, { useRef } from 'react';
import './HomePage.css';

interface HomePageProps {
  onClickViewPortfolio: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onClickViewPortfolio }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleViewPortfolio = () => {
    onClickViewPortfolio();
    buttonRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="homepage-section">
      <div className="homepage-container">
        <div className="homepage-content">
          <h1 className="homepage-title">Dev Patel</h1>
          <p className="homepage-description">I'm a passionate developer ready to take on new challenges and create amazing web experiences.</p>
          <button ref={buttonRef} className="homepage-button" onClick={handleViewPortfolio}>
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
