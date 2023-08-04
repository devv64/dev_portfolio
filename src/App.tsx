import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import PortfolioPage from './components/PortfolioPage';
import About from './components/About';
import SkillsPage from './components/Skills';
import ExperienceTimeline from './components/Experiences';
import { Element } from 'react-scroll';

const App: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Router>
      <div className='bg-[#001427]'>
        <Routes>
          <Route
            path="/dev_portfolio"
            element={
              <>
                <Navbar title="dp" />
                <HomePage portfolioRef={ref} />
                <Element name="portfolio" className="element">
                  <PortfolioPage />
                </Element>
                <Element name="about" className="element">
                  <About
                    imageSrc="https://media.gettyimages.com/id/685132245/photo/mature-businessman-smiling-over-white-background.jpg?s=612x612&w=gi&k=20&c=ELBLmT-KQ6vhI5xiWnQcWWw0QJiELKt6STlga4fwRC8="
                    title="About Me"
                    description="Hey there, I'm Dev Patel – a tech enthusiast, problem solver, and creative thinker. With an insatiable curiosity and a love for building, I'm on a journey to merge my passion for technology with my knack for innovation. Whether it's crafting elegant code or finding beauty in data, I thrive on the thrill of turning ideas into tangible solutions. Beyond the keyboard, you'll often find me watching NBA games, playing chess, or playing poker. Don't hesitate to get in touch – I'm looking forward to connecting with like-minded individuals!"
                  />
                </Element>
                {/* <Element name="skills" className="element">
                  <SkillsPage />
                </Element> */}
                <Element name="experience" className="element">
                  <ExperienceTimeline />
                </Element>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
