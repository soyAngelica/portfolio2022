import { prettyJoin } from "utils/string";
import styles from "./SwipeButton.module.scss";

interface SwipeButtonProps {
  fixed?: boolean;
}

const SwipeButton: React.FC<SwipeButtonProps> = ({ fixed }) => {
  return (
    <div className={prettyJoin([styles.swipe, fixed && styles.fixed])}>
      <div className={styles.hand}>☝️</div>
      Swipe
    </div>
  );
};

export default SwipeButton;
