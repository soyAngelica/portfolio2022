import styles from "./SocialBar.module.scss";

import {
  FiCodepen,
  FiTwitter,
  FiGithub,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";

const SocialBar = () => {
  return (
    <ul className={styles.bar}>
      <li>
        <a
          href='https://github.com/soyAngelica'
          target='_blank'
          rel='noreferrer'>
          <FiGithub />
        </a>
      </li>
      <li>
        <a
          href='https://codepen.io/soyangelica'
          target='_blank'
          rel='noreferrer'>
          <FiCodepen />
        </a>
      </li>
      <li>
        <a
          href='https://twitter.com/sisoyangelica'
          target='_blank'
          rel='noreferrer'>
          <FiTwitter />
        </a>
      </li>
      <li>
        <a
          href='https://www.instagram.com/sisoyangelica/'
          target='_blank'
          rel='noreferrer'>
          <FiInstagram />
        </a>
      </li>
      <li>
        <a
          href='https://www.instagram.com/sisoyangelica/'
          target='_blank'
          rel='noreferrer'>
          <FiLinkedin />
        </a>
      </li>
    </ul>
  );
};

export default SocialBar;
