import React, { forwardRef } from 'react';
import PortfolioCard from './PortfolioCard';
import CMS from '../assets/CMS.png'
import blog from '../assets/blog.jpg'
import splitit from '../assets/splitit.png'
import stevensCampus from '../assets/stevensCampus.png'
import ShuPU from '../assets/ShuPU.png'
import liquorBG from '../assets/liquorBG.jpg'

// const PortfolioPage: React.FC = () => {
const PortfolioPage = forwardRef<HTMLDivElement>((props, ref) => {
  const portfolioItems = [
    {
      title: 'SG Headless CMS',
      shortdesc: 'A headless CMS built with Flask and React',
      description: 'As part of the Sage Giraffe CMS project, I played a key role in developing the database and API, along with contributing to the frontend. This highly versatile and developer-friendly headless CMS offers advanced functionality for creating, managing, updating, and deleting posts and users. With seamless integration capabilities and intuitive interfaces, it enables the creation of dynamic content across multiple platforms while ensuring efficient user management and granular control over data.',
      imageUrl: CMS,
      tag: 'Flask',
      link: 'http://devv64.pythonanywhere.com/',
      videoUrl: '',
    },
    {
      title: 'Dev\'s Blog Site',
      shortdesc: 'A blog site built with Next.js and Tailwind CSS',
      description: 'My blogsite is a dynamic website built with React, Next.js, GraphQL, and Tailwind CSS. It offers a seamless browsing experience and utilizes GraphQL for efficient storage of blog posts and comments. Explore a collection of engaging articles and interact with the content effortlessly.',
      imageUrl: blog,
      tag: 'React',
      link: 'https://devsblogsite.vercel.app/',
      videoUrl: '',
    },
    {
      title: 'SplitIt',
      shortdesc: 'A receipt splitting app built with React, Firebase, and Tailwind CSS',
      description: 'SplitIt is a dynamic web application created during a hackathon in April 2023. Powered by React, Firebase, and Tailwind CSS, it simplifies the process of splitting receipts among friends or groups. With intuitive user interfaces and real-time data storage, SplitIt ensures a seamless and efficient experience. Utilizing Firebase, user data is securely stored, and personalized statistics are generated on the user dashboard, providing valuable insights.',
      imageUrl: splitit,
      tag: 'React',
      link: 'https://splitit-djs.vercel.app/',
      videoUrl: '',
    },
    {
      title: 'WiseQuackers',
      shortdesc: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: stevensCampus,
      tag: 'Flask',
      link: 'https://wisequackers.wisequackers.repl.co/',
      videoUrl: '',
    },
    {
      title: 'ShuPU',
      shortdesc: 'A programming language and CPU architecture built with Python and Logisim',
      description: 'Here you\'ll discover my involvement in the fascinating ShuPU project. As part of the team, I played a pivotal role in developing the Shu++ programming language and its accompanying CPU architecture. Shu++ offers an exciting programming experience, allowing users to write code that can be assembled into binary machine code. With a focus on simplicity and efficiency, the CPU architecture features four versatile general-purpose registers, instruction memory, and data memory. This enables seamless data loading, storage, and various computations. Throughout the project, we encountered challenges such as designing optimal component layouts, tackling intricate binary encoding puzzles, and conducting rigorous testing. Despite the obstacles, we persevered and created a user-friendly manual to guide you through the ShuPU experience.',
      imageUrl: ShuPU,
      tag: 'Logisim',
      link: 'https://github.com/devv64/ShuPU/tree/main',
      videoUrl: '',
    },
    {
      title: 'Weather App',
      shortdesc: 'A blog site built with Next.js and Tailwind CSS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://media.psg.nexstardigital.net/kswb/weather/7daycoastal.jpg',
      tag: 'Flask',
      link: 'https://devv64.github.io/weatherApp2/',
      videoUrl: '',
    },
    {
      title: 'All Star Site',
      shortdesc: 'A blog site built with Next.js and Tailwind CSS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: liquorBG,
      tag: 'React',
      link: 'https://devv64.github.io/allstarsite/',
      videoUrl: '',
    },
  ];

  return (
    <div ref={ref}>
      <PortfolioCard items={portfolioItems} />
    </div>
  );
});

export default PortfolioPage;
