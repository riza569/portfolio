import { Card } from "./Card";
import "./projects.css";
const Projects = () => {
  return (
    <div className="projects-container">
      <div className="project-content">
        <h3 className="project-content-heading">ACCOMPLISHMENTS</h3>
        <h1 className="project-content-title">My Projects</h1>
      </div>
      <div className="grid-containers">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Projects;
