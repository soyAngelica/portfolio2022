import React, { useState } from "react";
import { prettyJoin } from "utils/string";
import styles from "./Switch.module.scss";

interface SwitchProps {
  options: string[];
  defaultValue?: string;
  handleSwitch?: (val: string) => void;
}

const Switch: React.FC<SwitchProps> = ({
  options,
  defaultValue,
  handleSwitch,
}) => {
  const [activeOption, setActiveOption] = useState<string>(
    defaultValue || options[0]
  );

  const primaryOption = activeOption === options[0];
  const secondaryOption = activeOption === options[1];

  const handleClick = (val: string) => {
    setActiveOption(val);
    handleSwitch?.(val);
  };

  return (
    <div
      className={prettyJoin([
        styles.container,
        secondaryOption && styles.onChangingSecondary,
        primaryOption && styles.onChangingPrimary,
      ])}>
      <div className='flex items-center relative z-10 container mx-auto'>
        <div
          className={prettyJoin([
            "w-full w-1/3 h-full",
            primaryOption && styles.active,
          ])}>
          <button
            onClick={() => {
              handleClick(options[0]);
            }}>
            <p>
              <span className='pr-1'>✨</span> {options[0]}
            </p>
          </button>
        </div>
        <div className={prettyJoin(["w-full w-1/3 h-full", styles.animate])}>
          <div
            className={prettyJoin([
              styles.arrow,
              primaryOption && styles.onPrimary,
              secondaryOption && styles.onSecondary,
            ])}></div>
        </div>
        <div
          className={prettyJoin([
            "w-full w-1/3 h-full",
            secondaryOption && styles.active,
          ])}>
          <button
            onClick={() => {
              handleClick(options[1]);
            }}>
            <p>
              {options[1]} <span className='pl-1'>✨</span>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Switch;
