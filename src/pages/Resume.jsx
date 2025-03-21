import React from 'react';

function Resume() {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <div className="resume-content">
        <a href="/path/to/resume.pdf" download className="resume-download">
          Download Resume
        </a>
        
        <div className="proficiencies">
          <h3>Technical Proficiencies</h3>
          <div className="skills-list">
            <h4>Front-end</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>

            <h4>Back-end</h4>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;