import Tooltip from "components/Tooltip";
import { useState } from "react";
import styles from "./SkillList.module.scss";

export type SkillType = {
  title: string;
  icon: JSX.Element;
};

interface SkillListProps {
  skills: SkillType[];
  type?: "knowledge" | "tool" | "learning";
  bottom?: boolean;
}

const SkillList: React.FC<SkillListProps> = ({ skills, type, bottom }) => {
  const [tooltipText, setTooltipText] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);
  const [positionX, setPositionX] = useState<number>();
  const [positionY, setPositionY] = useState<number>();

  const tooltipIcon = () => {
    switch (type) {
      case "knowledge":
        return "💻";
      case "learning":
        return "✏️";
      case "tool":
        return "🔧";
    }
  };

  const handleHover = (text: string) => {
    const active = document.getElementById(text);
    setPositionX(active!.offsetLeft - 7);
    setPositionY(bottom ? 40 : -40);
    setTooltipText(text);
    setVisible(true);
  };

  const handleLeave = () => {
    setVisible(false);
    setPositionY(bottom ? 50 : -50);
  };

  return (
    <div className='relative'>
      <Tooltip
        text={tooltipText}
        icon={tooltipIcon()}
        visible={visible}
        positionX={positionX}
        positionY={positionY}
        bottom={bottom}
      />
      <ul className={styles.skills}>
        {skills.map((skill, idx) => {
          return (
            <li
              id={skill.title}
              key={idx}
              onMouseEnter={ev => handleHover(skill.title)}
              onMouseLeave={() => handleLeave()}>
              {skill.icon}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillList;
