import { Card } from './Card';
import './projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: 'RizaShop',
      description: 'A modern e-commerce platform with a sleek design and smooth user experience.',
      tech: ['React', 'JavaScript', 'CSS'],
      link: 'https://rizashop.onrender.com',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Coming Soon',
      description: 'Exciting new project in development. Stay tuned for more updates!',
      tech: ['React', 'Node.js'],
      link: '#',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Coming Soon',
      description: 'Another amazing project on the way. Check back soon!',
      tech: ['JavaScript', 'CSS'],
      link: '#',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Coming Soon',
      description: 'More innovative solutions coming your way. Watch this space!',
      tech: ['React', 'API'],
      link: '#',
      image: 'https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div id="projects" className="projects-container">
      <div className="project-content">
        <h3 className="project-content-heading">ACCOMPLISHMENTS</h3>
        <h1 className="project-content-title">My Projects</h1>
      </div>
      <div className="grid-containers">
        {projectsData.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
