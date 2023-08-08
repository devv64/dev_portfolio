import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaBasketballBall, FaChess } from 'react-icons/fa';
import { CgCardSpades } from 'react-icons/cg';
import backgroundImage from './layered-waves-haikei.svg';

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
          <div className="absolute top-0 left-4/12 w-4/6 h-full bg-gradient-to-br border-2 border-black from-blue-500 to-blue-100 rounded-full mix-blend-multiply"></div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
