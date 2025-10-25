// src/pages/Projects.jsx

import React from 'react';
import Card from 'PortfolioReact\src\components\Card.jsx';

const projectsData = [
  {
    title: 'ASL Recognition System',
    description: 'Developed with MediaPipe and scikit-learn, 99% accuracy for sign language interpretation.',
  },
  {
    title: 'Air Quality Index Monitor',
    description: 'IoT monitor using NodeMCU with MQ135 and DHT11, live data via Blynk app and LCD display.',
  },
  {
    title: 'Vehicle Rental Management System',
    description: 'Full-stack system (Node.js + MySQL) with booking, pricing logic, and admin dashboards.',
  },
  {
    title: 'DeepFake Detection System',
    description: 'CNN + RNN video detector with Flask UI, mesoscopic features, and temporal sequence analysis.',
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">Projects</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;