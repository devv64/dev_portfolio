import React, { forwardRef } from 'react';
import PortfolioCard from './PortfolioCard';
import CMS from '../assets/SGCMS.png'
import blog from '../assets/BLOGS.png'
import splitit from '../assets/SPLIT.png'
import stevensCampus from '../assets/WISE.png'
import weather from '../assets/WEATHER.png'
import ShuPU from '../assets/ShuPU.png'
import liquorBG from '../assets/liquorBG.jpg'

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
      shortdesc: 'A website designed to help students navigate the Stevens campus',
      description: 'WiseQuackers is a website designed to help students navigate the Stevens campus. It features a map of the campus, a list of buildings and a list of sports teams. The map is interactive and allows users to click on the academic buildings to view their names and descriptions. The buildings page provides a list of all buildings on campus, along with their names, descriptions, navigation instructions, pictures, and locations. The sports pages provide a list of all sports teams on campus, their descriptions, pictures, and links to their social medias. The website was built with HTML, CSS, and JavaScript during the CS146 (Web Development) course.',
      imageUrl: stevensCampus,
      tag: 'JavaScript',
      link: 'https://wisequackers.wisequackers.repl.co/',
      videoUrl: '',
    },
    {
      title: 'ShuPU',
      shortdesc: 'A programming language and CPU architecture built with Python and Logisim',
      description: 'Here you\'ll discover my involvement in the fascinating ShuPU project. I played a pivotal role in developing the Shu++ programming language and its accompanying CPU architecture. Shu++ offers an exciting programming experience, allowing users to write code that can be assembled into binary machine code. With a focus on simplicity and efficiency, the CPU architecture features four versatile general-purpose registers, instruction memory, and data memory. This enables seamless data loading, storage, and various computations. Throughout the project, we encountered challenges such as designing optimal component layouts, tackling intricate binary encoding puzzles, and conducting rigorous testing. Despite the obstacles, we persevered and created a user-friendly manual to guide you through the ShuPU experience.',
      imageUrl: ShuPU,
      tag: 'Logisim',
      link: 'https://github.com/devv64/ShuPU/tree/main/FinalShuPU',
      videoUrl: '',
    },
    {
      title: 'Weather App',
      shortdesc: 'A website created to display the weather in different cities',
      description: 'This website was created to display the weather in different cities. It features a search bar that allows users to search for a city and view its current weather. The background image also changes depending on which city you searched for. The website was built with HTML, CSS, and JavaScript. This was one of my earlier projects and it taught me a lot about how to use APIs. I learned how to use the OpenWeatherMap API to get the weather data and how to use the Unsplash API to get the background image.',
      imageUrl: weather,
      tag: 'JavaScript',
      link: 'https://devv64.github.io/weatherApp2/',
      videoUrl: '',
    },
    {
      title: 'All Star Site',
      shortdesc: 'A sample react website created for a fictional company',
      description: 'This website was created as a sample website to test my react skills. It features a home page, menu page, about page, and contact page. I created this website to brush up on my react skills, including react hooks and react router. Overall, this was a quick weekend project that I had a lot of fun with.',
      imageUrl: liquorBG,
      tag: 'React',
      link: 'https://devv64.github.io/allstarsite/',
      videoUrl: '',
    },
    {
      title: 'Dev\'s Fun Site',
      shortdesc: 'A fun website made to cure boredom',
      description: 'This website was created to cure boredom. It features a bunch of fun games and activities to do when you\'re bored. This project started when I saw a cool effect on a website and I tried to replicate it. I liked the way it turned out but I didn\'t have anywhere to put it. So I decided to make a website with a bunch of fun things to do. I added a bunch of games and activities that I thought were fun. I also added a bunch of cool effects that I found on the internet. This was a fun project that I worked on in my free time.',
      imageUrl: liquorBG,
      tag: 'Javascript',
      link: 'https://devv64.github.io/dev-fun/',
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
