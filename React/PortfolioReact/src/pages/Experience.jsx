// src/pages/Experience.jsx

import React from 'react';
import Card from 'PortfolioReact\src\components\Card.jsx';

const experienceData = [
  {
    title: 'Editorial Board Member',
    organization: 'Scintilla – Shiv Nadar University Student Magazine',
    duration: 'Dec 2024 – Present',
    location: 'Chennai, Tamil Nadu, India',
    description: 'Reviewed content, coordinated submissions, contributed to layout and editorial decisions.',
  },
  {
    title: 'Mentee',
    organization: 'SheFi Learning Cohort',
    duration: 'Feb 2025 – Jul 2025 · Remote',
    location: 'Remote',
    description: 'Learned blockchain fundamentals, smart contracts, DAOs, and Web3 practices.',
  },
  {
    title: 'Mentee',
    organization: 'Infosys Springboard',
    duration: 'Feb 2025 – Jul 2025 · Hybrid',
    location: 'Hybrid',
    description: 'Completed technical training and mentorship in software development fundamentals.',
  },
  {
    title: 'Contributor',
    organization: 'GirlScript Summer of Code',
    duration: 'May 2024 – Feb 2025 · Remote',
    location: 'Remote',
    description: 'Contributed to open-source projects with frontend, docs, and GitHub collaboration.',
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">Experience</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {experienceData.map((exp, index) => (
          <Card key={index}>
            <h3 className="text-2xl font-semibold mb-1">{exp.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <strong>Organization:</strong> {exp.organization}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <strong>Duration:</strong> {exp.duration}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              <strong>Location:</strong> {exp.location}
            </p>
            <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;