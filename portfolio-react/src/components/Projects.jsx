import React from 'react';

export default function Projects({ items }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {items.map((p, i) => (
        <div key={i} className="p-4 rounded-lg border hover:shadow-md transition">
          {/* Project Title and Period */}
          <div className="flex justify-between items-center">
            <div className="font-semibold text-lg">{p.title}</div>
            <div className="text-xs text-gray-500 font-medium">{p.period}</div>
          </div>
          
          {/* Organization */}
          {p.organization && (
            <div className="text-sm text-gray-600 italic mt-1">{p.organization}</div>
          )}
          
          {/* Technologies Used */}
          <div className="text-sm text-gray-700 mt-2 font-mono">
            {p.tech.join(' • ')}
          </div>
          
          {/* Summary */}
          <p className="mt-3 text-gray-700">{p.summary}</p>
          
          {/* Links (Demo and Repo) */}
          <div className="mt-4 flex gap-4">
            {p.demo && (
              <a 
                href={p.demo} 
                className="text-sm text-blue-600 hover:text-blue-800 underline transition"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Demo
              </a>
            )}
            {p.repo && (
              <a 
                href={p.repo} 
                className="text-sm text-blue-600 hover:text-blue-800 underline transition"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Repository
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}