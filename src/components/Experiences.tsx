import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import backgroundImage from './layered-waves-flipped.svg';

interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  image: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Research Fellow',
    company: 'Stevens Institute of Technology',
    duration: 'May 2023 - Present',
    description:
      'Conducted comprehensive literature review on supply chain topics to identify research areas and gaps. Implemented topic modeling techniques to extract meaningful themes from a large corpus of supply chain literature. Developed a front-end visualization tool for presenting topic modeling results.',
    image: 'data:image/jpeg;base64,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'  },
  {
    id: 2,
    title: 'Software Engineering Intern',
    company: 'Omnidya',
    duration: 'Dec 2022 - Present',
    description:
      'Managed and guided a team of interns in executing several data analysis campaigns focused on marketing objectives. Developed a data visualization tool for tracking and analyzing weather conditions and accidents in multiple states. Implemented data preprocessing techniques for accuracy. Utilized data visualization libraries (Pandas, Matplotlib, Seaborn) to generate comprehensive graphs. Optimized code for scalability, readability, and maintainability. Developed an optimized seatbelt detection model specifically designed for mobile devices, leveraging computer vision and machine learning techniques.',
    image: 'https://image.pitchbook.com/1ZEW09DxtEjhKRX3dv4KUtvEdhm1660214552319_200x200',
  },
  {
    id: 3,
    title: 'Discrete Structures Course Assistant',
    company: 'Stevens Institute of Technology',
    duration: 'Jan 2023 - May 2023',
    description:
      'Led weekly lab sessions and assisted students with debugging their code in Racket. Hosted 2-hour weekly office hours for student assistance. Evaluated and graded homework and laboratory assignments.',
    image: 'data:image/jpeg;base64,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'  },
  {
    id: 4,
    title: 'IT Intern',
    company: 'Salvatore Ferragamo',
    duration: 'May 2022 - Aug 2022',
    description:
      'Automated repetitive tasks in Excel to streamline workflow and increase efficiency. Wrote code to transfer data between systems utilizing APIs and vendor collaboration. Managed the deployment of technology at a new store location in SoHo. Improved network speeds by over 900 Mbps.',
    image: 'https://jingdaily.com/wp-content/uploads/2022/09/ferragamo-new-logo-1240x698.jpg'  },
  {
    id: 5,
    title: 'Web Design and Development Intern',
    company: 'Open Doors Technology',
    duration: 'Oct 2020 - May 2021',
    description:
      'Designed and developed website templates using HTML, CSS, and JavaScript for customer presentations. Proficient in using design software such as Adobe for efficient website creation.',
    image: 'https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/d6e6238f-658d-499b-be6e-8c32b48c54e2.jpeg',
  },
];

const ExperienceTimeline = () => {
    return (
      <div className="pt-36"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="container mx-auto p-8">
          <h1 className="text-5xl font-bold mb-8 mt-16 text-[#DBDFAC]">Experience</h1>
    
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
              key={experience.id}
              className={`vertical-timeline-element${index % 2 === 0 ? '' : ' vertical-timeline-element-reverse'}`}
              date={experience.duration}
              iconStyle={{
                background: '#4299e1',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              dateClassName='text-[#fbffd4]'
              icon={
                <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img src={experience.image} alt={experience.title} className="object-fill w-full h-full" />
                  </div>
                }
                >
                <div>
                  <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                  <h4 className="text-lg font-medium mb-4">{experience.company}</h4>
                  <p className="text-gray-700">{experience.description}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    );
  };
  
  export default ExperienceTimeline;