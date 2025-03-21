import React from 'react';

function Project({ title, image, liveLink, repoLink }) {
  return (
    <div>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <a href={liveLink} target="_blank" rel="noopener noreferrer">Live</a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  );
}

export default Project;