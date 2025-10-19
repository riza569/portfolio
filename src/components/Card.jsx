import React from 'react';

export const Card = ({ title, description, tech, link, image }) => {
  return (
    <div className="projects-card-container">
      <div className="projects-card-content">
        <img
          className="project-image"
          src={image}
          alt={title}
        />
        <div className="project-overlay">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
          <div className="project-tech">
            {tech.map((technology, index) => (
              <span key={index} className="tech-tag">{technology}</span>
            ))}
          </div>
          <a
            href={link}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        </div>
      </div>
    </div>
  );
};
