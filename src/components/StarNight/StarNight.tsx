import anime from "animejs";
import React from "react";
import { prettyJoin } from "utils/string";
import styles from "./StarNight.module.scss";

interface StarrySkyProps {
  dark?: boolean;
  height?: "small" | "middle" | "large";
}

class StarryNight extends React.Component<StarrySkyProps> {
  skyMode = this.props.dark ? styles.darkSky : styles.lightSky;

  getHeight = () => {
    switch (this.props.height) {
      case "small":
        return styles.smallHeight;
      case "middle":
        return styles.middleHeight;
      case "large":
        return styles.largeHeight;
      default:
        return "middle";
    }
  };

  state = {
    num: 60,
    vw: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    vh: Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    ),
  };
  starryNight = () => {
    anime({
      targets: ["#stars"],
      opacity: [
        {
          duration: 700,
          value: "0",
        },
        {
          duration: 700,
          value: "1",
        },
      ],
      easing: "linear",
      loop: true,
      delay: (el, i) => 50 * i,
    });
  };
  shootingStars = () => {
    anime({
      targets: ["#wish"],
      easing: "linear",
      loop: true,
      delay: (el, i) => 1000 * i,
      opacity: [
        {
          duration: 700,
          value: "1",
        },
      ],
      width: [
        {
          value: "150px",
        },
        {
          value: "0px",
        },
      ],
      translateX: 350,
    });
  };
  randomRadius = () => {
    return Math.random() * 0.7 + 0.6;
  };
  getRandomX = () => {
    return Math.floor(Math.random() * Math.floor(this.state.vw)).toString();
  };
  getRandomY = () => {
    return Math.floor(Math.random() * Math.floor(this.state.vh)).toString();
  };

  componentDidMount() {
    this.starryNight();
    this.shootingStars();
  }

  render() {
    const { num } = this.state;
    return (
      <div
        className={prettyJoin([
          styles.container,
          this.skyMode,
          this.getHeight(),
        ])}>
        <div id='starsContainer' className='smooth'>
          <svg className={styles.sky}>
            {[...Array(num)].map((x, y) => (
              <circle
                id='stars'
                className={styles.stars}
                cx={this.getRandomX()}
                cy={this.getRandomY()}
                r={this.randomRadius()}
                stroke='none'
                strokeWidth='0'
                fill='white'
                key={y}
              />
            ))}
          </svg>
        </div>
        <div className={styles.shootingstars}>
          {[...Array(60)].map((x, y) => (
            <div
              key={y}
              id='wish'
              className={styles.wish}
              style={{
                left: `${this.getRandomY()}px`,
                top: `${this.getRandomX()}px`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default StarryNight;
