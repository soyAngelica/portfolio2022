import { prettyJoin } from "utils/string";
import styles from "./Tooltip.module.scss";

interface TooltipProps {
  text: string;
  icon?: string;
  visible: boolean;
  bottom?: boolean;
  positionX?: number;
  positionY?: number;
}

const Tooltip: React.FC<TooltipProps> = ({
  text,
  icon,
  visible,
  bottom,
  positionX,
  positionY = bottom ? "40" : "-40",
}) => {
  const isVisible = visible ? styles.visible : undefined;
  const leftPosition = positionX + "px";
  const topPosition = positionY + "px";
  const arrow = bottom ? styles.arrowTop : styles.arrowBottom;
  return (
    <div
      className={prettyJoin([styles.container, isVisible])}
      style={{ left: leftPosition, top: topPosition }}>
      <div className={styles.box}>
        {text} {icon}
      </div>
      <span className={arrow} />
    </div>
  );
};

export default Tooltip;
