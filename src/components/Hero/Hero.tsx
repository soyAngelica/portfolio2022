import profile from "assets/img/perfil.png";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "utils/context";
import { prettyJoin } from "utils/string";
import { translations } from "utils/translations";
import styles from "./Hero.module.scss";

export enum Languages {
  Es = "Es",
  En = "En",
}

export type $LanguagesKey = keyof typeof Languages;

const Hero = () => {
  const language = useContext(LanguageContext) as $LanguagesKey;


  return (
    <section className={`${styles.container} pb-20`}>
      <div className='w-full relative pb-10 px-6 xl:px-0'>
        <div className='pt-32 lg:flex items-center relative z-10 container mx-auto'>
          <div className={prettyJoin(["w-full lg:w-1/2 h-full", styles.intro])}>
            <div className={prettyJoin([styles.introContent, styles.mask])}>
              <div className={styles.contentWrapper}>
                <div>
                  <h1 className={prettyJoin(["mb-4", "md:mb-8", styles.title])}>
                    {translations.heroTitle[language]}
                  </h1>
                  <p className={prettyJoin([" mb-4", styles.subtitle])}>
                    Frontend Developer
                  </p>
                  <p
                    className={prettyJoin([
                      "dark:text-white font-regular mb-8",
                      styles.text,
                    ])}>
                    {translations.heroText[language]}
                  </p>
                </div>
              </div>
            </div>
          </div>
           <div className='w-full lg:w-1/2 h-full '>
            <img className={styles.profile} src={profile} alt='Soy Angelica' />
            <Link to="/about"  className={prettyJoin([
                "dark:text-white mb-8 mt-2 text-center",
                styles.about,
              ])}>{translations.aboutMeLink[language]}</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
