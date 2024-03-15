import { Circle } from "rc-progress";

export const Skillcard = ({ title, percentage }) => {
  return (
    <div className="skills-card-container">
      <div className="progress-value">
        <Circle
          percent={percentage}
          strokeColor="#E178C5"
          strokeWidth={4}
          trailColor="#FFE6E6"
          trailWidth={4}
          strokeLinecap="square"
        />
        <span className="skills-card_perc">{percentage}%</span>
      </div>
      <span className="skills-card_text">{title}</span>
    </div>
  );
};
