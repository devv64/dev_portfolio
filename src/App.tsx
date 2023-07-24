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
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis, elit consectetur gravida feugiat, dui erat fringilla nulla, sed tincidunt est ex ac ligula. Sed pretium orci sed egestas laoreet. Cras consectetur eros quis nulla sagittis, at porta ante porttitor. Maecenas commodo turpis vel vestibulum tincidunt. Aenean leo nibh, tristique interdum facilisis at, tristique nec nulla. Etiam hendrerit mi eu purus iaculis, vitae consequat nibh laoreet. Ut id nulla ipsum. Donec suscipit luctus augue, et suscipit elit scelerisque a. Nam non turpis a lacus gravida euismod. Ut eget augue nec est pretium venenatis. Vivamus enim nisl, hendrerit eget rhoncus ac, posuere vel dolor. Suspendisse quis accumsan massa, a pulvinar tortor. Cras et pulvinar turpis."
                  />
                </Element>
                <Element name="skills" className="element">
                  <SkillsPage />
                </Element>
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
