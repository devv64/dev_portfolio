import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaBasketballBall, FaChess, FaDice } from 'react-icons/fa';
import { CgCardSpades } from 'react-icons/cg';
import kute from 'kute.js';
import backgroundImage from './layered-waves-haikei.svg';

// Import the SVGs
import blob1Path from './blob-haikei.svg';
import blob2Path from './blob-haikei-2.svg';

interface AboutProps {
  imageSrc: string;
  title: string;
  description: string;
}

const About: React.FC<AboutProps> = ({ imageSrc, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const fadeAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const tween = kute.fromTo(
    '#blob1',
    { path: '#blob1' },
    { path: '#blob2' },
    { repeat: 999, duration: 3000, yoyo: true }
  )

  tween.start();

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen overflow-x-hidden pt-80"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      <div ref={ref} className="flex items-center bg-[#81d5ff] rounded-lg p-6">
        <div className="relative w-1/3 flex justify-center">
          {/* <div className="absolute top-0 left-4/12 w-4/6 h-full bg-gradient-to-br border-2 border-black from-blue-500 to-blue-100 rounded-full mix-blend-multiply"></div> */}
          <svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(460.5532557363372 261.4922545353779)"><path id="blob1" d="M148.3 -172.6C177 -152.6 174.7 -91.5 173.5 -39.3C172.3 12.9 172.3 56.2 160.7 108.3C149.1 160.3 125.9 221.1 82.3 245.2C38.8 269.4 -25.1 256.8 -74.9 228.8C-124.8 200.7 -160.7 157.1 -178.9 110.6C-197 64 -197.5 14.6 -192.5 -37.4C-187.5 -89.4 -177 -143.9 -144 -163.1C-111 -182.3 -55.5 -166.1 2.1 -168.7C59.8 -171.2 119.6 -192.5 148.3 -172.6" fill="#004b90"></path></g><g transform="translate(472.83498340047396 301.10967299413664)"><path id="blob2" d="M117.8 -129.5C158 -106.6 199.6 -74.6 214.3 -31.8C229 11 216.7 64.5 188.9 105.7C161.1 147 117.8 175.9 75.2 179.7C32.6 183.6 -9.4 162.3 -65.1 153.1C-120.8 144 -190.3 147 -228.7 115.2C-267.1 83.4 -274.4 16.9 -258 -40.2C-241.5 -97.2 -201.4 -144.7 -154.5 -166.5C-107.6 -188.2 -53.8 -184.1 -7.5 -175.2C38.8 -166.2 77.6 -152.4 117.8 -129.5" fill="#004b90"></path></g></svg>
          <div className="rounded-full w-40 h-40 relative overflow-hidden">
            <motion.img
              src={imageSrc}
              alt="About"
              className="rounded-full w-full h-full object-cover border-8 border-white shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeAnimation}
              transition={{ duration: 2 }}
            />
          </div>
        </div>
        <div className="w-1/2 ml-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight whitespace-normal">
            {title}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed whitespace-normal">
            {description}
          </p>
          <div className="mt-8">
            <div className="flex items-center">
              <FaBasketballBall className="w-16 h-16 text-purple-500" />
              <FaChess className="w-16 h-16 text-pink-500 mx-8" />
              <CgCardSpades className="w-16 h-16 text-blue-500" />
              {/* <GiPlayingCardDiamond className="w-8 h-8 text-blue-500" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
