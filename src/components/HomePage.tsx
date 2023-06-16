import React from 'react';
import './HomePage.css';
import ParticleEffect from './ParticleEffect';

const HomePage: React.FC = () => {
  return (
    <section className="border-blue-500 border-2 homepage-section">
      <div className="border-black border-2 homepage-container">
        <div className="border-black border-2 homepage-content">
          <h1 className="homepage-title">Welcome to My Portfolio</h1>
          <p className="homepage-description">I'm a passionate developer ready to take on new challenges and create amazing web experiences.</p>
          <button className="homepage-button">View Portfolio</button>
        </div>
        <div className='particle-constraint'>
          <ParticleEffect />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
