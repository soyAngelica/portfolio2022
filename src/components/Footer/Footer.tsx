import reactImg from "assets/img/react.png";
import { useContext } from "react";
import { LanguageContext } from "utils/context";
import { translations } from "utils/translations";
import { $LanguagesKey } from "customTypes";
import styles from "./Footer.module.scss";
import { VscGithubInverted } from "react-icons/vsc";

const Footer = () => {
  const language = useContext(LanguageContext) as $LanguagesKey;

  return (
    <div className={styles.container}>
      <p>
          {translations.footerText1[language]} ❤️ &
          <img src={reactImg} alt='' width='18' />
          {translations.footerText2[language]}. 2024
          <VscGithubInverted className={styles.githubIcon} />
      </p>
    </div>
  );
};

export default Footer;
