import React from 'react';
import portfolio from './portfolio.png';

export default function Hero({name, title, summary}) {
return (
<header id="home" className="min-h-[60vh] flex items-center">
  <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center md:items-start gap-8">
    {/* Text */}
    <div className="flex-1">
      <h1 className="text-4xl md:text-5xl font-bold">Hi, I'm {name}.</h1>
      <p className="text-sky-600 font-medium mt-2">{title}</p>
      <p className="mt-4 text-gray-700 leading-relaxed">{summary}</p>
      <div className="mt-6 flex gap-4">
        <a href="#projects" className="px-4 py-2 rounded-md bg-sky-600 text-white">See projects</a>
        <a href="#contact" className="px-4 py-2 rounded-md border">Contact me</a>
      </div>
    </div>

    {/* Photo */}
    <div className="flex-1 flex justify-center md:justify-end">
      <div className="w-56 h-56 md:w-72 md:h-72 bg-sky-100 rounded-2xl flex items-center justify-center text-3xl font-medium text-sky-700">
        <img
            src={portfolio}
            alt="Portfolio"
            className="w-56 h-56 md:w-72 md:h-72 rounded-2xl object-cover shadow-lg"
          />
      </div>
    </div>
  </div>
</header>
);
}