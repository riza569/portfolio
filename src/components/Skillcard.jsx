import { Circle } from 'rc-progress';

export const Skillcard = ({ title, percentage }) => {
  return (
    <div className="skills-card-container">
      <div className="progress-value">
        <Circle
          percent={percentage}
          strokeColor={{
            '0%': '#00d4ff',
            '100%': '#7b2ff7',
          }}
          strokeWidth={4}
          trailColor="rgba(255, 255, 255, 0.1)"
          trailWidth={4}
          strokeLinecap="round"
        />
        <span className="skills-card_perc">{percentage}%</span>
      </div>
      <span className="skills-card_text">{title}</span>
    </div>
  );
};
