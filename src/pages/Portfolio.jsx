import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  const projects = [
    { title: 'Project 1', image: '/path/to/image1.jpg', liveLink: '#', repoLink: '#' },
    { title: 'Project 2', image: '/path/to/image2.jpg', liveLink: '#', repoLink: '#' },
    // Add more projects here
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;