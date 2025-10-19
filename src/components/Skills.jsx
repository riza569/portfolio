import '../skills.css';
import { Skillcard } from './Skillcard';

const Skills = () => {
  return (
    <section id="skills" className="Skilss-full-container">
      <div className="skills-container">
        <div className="skills-content">
          <h3 className="skills-content_heading">SKILLS</h3>
          <h1 className="skills-content_heading2">My Skills</h1>
        </div>
      </div>
      <div className="grid-container">
        <Skillcard title="CSS" percentage={90} />
        <Skillcard title="HTML" percentage={90} />
        <Skillcard title="JavaScript" percentage={85} />
        <Skillcard title="React" percentage={90} />
        <Skillcard title="jQuery" percentage={80} />
        <Skillcard title="Figma" percentage={85} />
      </div>
    </section>
  );
};

export default Skills;
