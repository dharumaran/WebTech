import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Section from './components/Section';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';

export default function App(){
const sections = [
{id:'home', label:'Home'},
{id:'education', label:'Education'},
{id:'experience', label:'Experience'},
{id:'skills', label:'Skills'},
{id:'projects', label:'Projects'},
{id:'contact', label:'Contact'},
];

const data = {
name: 'Dharini Manimaran',
title: 'IoT Engineer & Full Stack Developer',
summary: 'I build simple, accessible, and responsive frontends. I enjoy turning designs into fast UI with clean code.',
education: [
{degree: 'B.Tech, CSE(IoT)', institution: 'Shiv Nadar University Chennai', year: '2023-2027', details: 'GPA: 7.91', grade: 'Ongoing'}
],
experience: [
{role: 'Editorial Board Member', company: 'Scintilla SNUC', period: 'Dec 2024 - ', location: 'Chennai', responsibilities: ['Edited entries for clarity and conciseness', 'Selected articles for publication']},
{role: 'Mentee', company: 'SheFi Learning Cohort', period: 'Feb 2025 - Jul 2025', location: 'Remote', responsibilities: ['Learned about Blockchain technology', 'Experimented with different Altcoins and wallets']},
{role: 'Mentee', company: 'Infosys Springboard', period: 'Feb 2025 - Jul 2025', location: 'Remote', responsibilities: ['Learned about software development fundamentals', 'Learned about Agile and Scrum methodologies']}

],
skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Git', 'Responsive Design'],
projects: [
  {
    title: 'Vehicle Rental Management System',
    tech: ['Node.js', 'MySQL', 'Express.js', 'EJS', 'JavaScript'],
    period: 'Sep 2024 - Nov 2024',
    organization: 'Shiv Nadar University Chennai',
    summary:
      'Developed a Vehicle Rental Management System to streamline booking, fleet management, and customer interactions. Features include real-time vehicle availability, automated pricing calculations, secure payment integration, and a user-friendly dashboard for efficient rental operations. Focused on optimizing user experience and operational efficiency.',
    repo: 'https://github.com/dharumaran/VehicleRentalandServicesManagement',
  },
  {
    title: 'DeepFake Detection System',
    tech: ['Artificial Intelligence', 'Machine Learning', 'Python', 'OpenCV'],
    period: 'Aug 2024 - Aug 2024',
    organization: 'Shiv Nadar University Chennai',
    summary:
      'Deepfake detection project that leverages AI to identify manipulated videos. The system analyzes video content for synthetic alterations and provides alerts on potential deepfakes, enhancing media authenticity verification. Aimed at improving digital trust and combating misinformation.',
    repo: 'https://github.com/dharumaran/Deepfake',
  },
]
};

return (
<div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
<Nav sections={sections} />
<main className="pt-16">
<Hero name={data.name} title={data.title} summary={data.summary} />


<Section id="education" title="Education">
<Education items={data.education} />
</Section>


<Section id="experience" title="Experience">
<Experience items={data.experience} />
</Section>


<Section id="skills" title="Skills">
<Skills list={data.skills} />
</Section>


<Section id="projects" title="Projects">
<Projects items={data.projects} />
</Section>


<Section id="contact" title="Contact">
<div className="grid md:grid-cols-2 gap-6">
<div>
<p className="text-gray-700">Want to work together? I am open to internships and freelance work. You can reach me at:</p>
<ul className="mt-4 text-sm text-gray-600">
<li>Email: dharinimanimaran2005@gmail.com</li>
<li>Phone: +91 7305566771</li>
</ul>
</div>
<div>
<ContactForm />
</div>
</div>
</Section>


<footer className="py-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} {data.name}. Built with React + Tailwind.</footer>
</main>
</div>
);
}