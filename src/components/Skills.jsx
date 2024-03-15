import "../skills.css";
import { Skillcard } from "./Skillcard";
const Skills = () => {
  return (
    <section className="Skilss-full-container">
      <div className="skills-container">
        <div className="skills-content">
          <h3 className="skills-content_heading">SKILLS</h3>
          <h1 className="skills-content_heading2">My Skills</h1>
        </div>
      </div>
      <div className="grid-container">
        <Skillcard title="CSS" percentage={90} />
        <Skillcard title="HTML" percentage={90} />
        <Skillcard title="JQuery" percentage={90} />
        <Skillcard title="React" percentage={90} />
        <Skillcard title="JavaScript" percentage={85} />
        <Skillcard title="Figma" percentage={90} />
      </div>
    </section>
  );
};

export default Skills;
