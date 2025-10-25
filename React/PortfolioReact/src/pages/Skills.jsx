// src/pages/Skills.jsx

import React from 'react';
import Card from '..\components\Card.jsx';

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">Skills</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-2xl font-semibold mb-3 border-b pb-2 dark:border-gray-700">Languages & Tools</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Python, C, C++, HTML, CSS, **JavaScript**, Git, Arduino IDE
          </p>
        </Card>
        <Card>
          <h3 className="text-2xl font-semibold mb-3 border-b pb-2 dark:border-gray-700">Technologies</h3>
          <p className="text-gray-700 dark:text-gray-300">
            NodeMCU-ESP8266, MediaPipe, **scikit-learn**, TensorFlow, Flask, Blynk, **MySQL**, Node.js, Express, OpenCV, LCD Module, MQ135 Sensor, DHT11 Sensor
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Skills;