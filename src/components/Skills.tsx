import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaJs } from 'react-icons/fa';

interface SkillItem {
  name: string;
  description?: string;
  icon: JSX.Element;
  proficiency: number;
  color: string;
}

interface SkillCategory {
  category: string;
  items: SkillItem[];
}

const SkillsPage: React.FC = () => {
  const skills: SkillCategory[] = [
    {
      category: 'Languages',
      items: [
        {
          name: 'Python',
          description: 'Python is a versatile and powerful programming language used in various domains.',
          icon: <FaPython className="text-blue-500 text-6xl mb-4" />,
          proficiency: 90,
          color: 'bg-blue-100',
        },
        {
          name: 'C',
          description: 'C is a general-purpose programming language widely used for system programming and embedded systems.',
          icon: <span className="text-blue-500 text-6xl mb-4">C</span>,
          proficiency: 85,
          color: 'bg-yellow-100',
        },
        {
          name: 'JavaScript',
          description: 'JavaScript is a high-level programming language used for web development.',
          icon: <FaJs className="text-yellow-500 text-6xl mb-4" />,
          proficiency: 80,
          color: 'bg-yellow-100',
        },
        {
          name: 'Java',
          description: 'Java is an object-oriented programming language commonly used for enterprise applications.',
          icon: <span className="text-red-600 text-6xl mb-4">J</span>,
          proficiency: 85,
          color: 'bg-red-100',
        },
      ],
    },
    {
      category: 'Web Development Technologies',
      items: [
        {
          name: 'React',
          description: 'I have experience building user interfaces using React.',
          icon: <FaReact className="text-blue-500 text-6xl mb-4" />,
          proficiency: 95,
          color: 'bg-blue-100',
        },
        {
          name: 'Tailwind',
          description: 'Tailwind CSS is a utility-first CSS framework used to quickly build custom user interfaces.',
          icon: <span className="text-blue-500 text-6xl mb-4">TW</span>,
          proficiency: 80,
          color: 'bg-indigo-100',
        },
        {
          name: 'Express',
          description: 'Express is a popular backend web framework for Node.js.',
          icon: <FaNodeJs className="text-green-500 text-6xl mb-4" />,
          proficiency: 85,
          color: 'bg-green-100',
        },
        {
          name: 'Django',
          description: 'Django is a high-level Python web framework known for its simplicity and speed.',
          icon: <span className="text-blue-500 text-6xl mb-4">Dj</span>,
          proficiency: 90,
          color: 'bg-blue-100',
        },
      ],
    },
    {
      category: 'Other Tools',
      items: [
        {
          name: 'Excel',
          description: 'Proficient in Microsoft Excel for data analysis and visualization.',
          icon: <span className="text-green-500 text-6xl mb-4">E</span>,
          proficiency: 65,
          color: 'bg-green-100',
        },
        {
          name: 'Jira',
          description: 'Experience using Jira for project management and issue tracking.',
          icon: <span className="text-yellow-500 text-6xl mb-4">J</span>,
          proficiency: 85,
          color: 'bg-yellow-100',
        },
        {
          name: 'RESTful APIs',
          description: 'Experienced in designing and consuming RESTful APIs for web applications.',
          icon: <span className="text-green-500 text-6xl mb-4">API</span>,
          proficiency: 80,
          color: 'bg-green-100',
        },
        {
          name: 'Data Visualization',
          description: 'Skilled in creating interactive and insightful data visualizations.',
          icon: <span className="text-indigo-500 text-6xl mb-4">DV</span>,
          proficiency: 85,
          color: 'bg-indigo-100',
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-8 overflow-x-hidden">
      <h1 className="text-5xl font-bold mb-8 mt-16 text-[#DBDFAC]">Skills</h1>

      {skills.map((category) => (
        <div key={category.category} className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#DBDFAC]">{category.category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Skill cards */}
            {category.items.map((skill) => (
              <motion.div
                key={skill.name}
                className={`p-8 rounded-lg shadow-md ${skill.color} skill-card`}
                whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
              >
                <motion.div
                  className="flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill.icon}
                </motion.div>
                <motion.h2
                  className="text-2xl font-bold mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill.name}
                </motion.h2>
                <p className="mb-4">{skill.description}</p>
                <div className="w-full h-4 bg-gray-300 rounded-full">
                  <motion.div
                    className={`h-4 rounded-full ${
                      skill.proficiency >= 75 ? 'bg-green-500' : 'bg-yellow-500'
                    }`}
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
                <motion.p
                  className="mt-2 text-sm text-gray-600"
                  whileHover={{ scale: 1.1 }}
                >
                  Proficiency: {skill.proficiency}%
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsPage;