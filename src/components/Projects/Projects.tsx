import duracell from "assets/img/duracell.jpg";
import ferrari from "assets/img/ferrari.jpg";
import heroes from "assets/img/heroes.jpg";
import manada from "assets/img/manada.jpg";
import rushing from "assets/img/rushing.jpg";
import tresor from "assets/img/tresor.jpg";
import { useContext, useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { LanguageContext } from "utils/context";
import { prettyJoin } from "utils/string";
import { translations } from "utils/translations";
import { $LanguagesKey } from "customTypes";
import SwipeButton from "../SwipeButton";
import styles from "./Projects.module.scss";

const Projects = () => {
  const language = useContext(LanguageContext) as $LanguagesKey;
  const [fixed, setFixed] = useState<boolean>(false);

  useEffect(() => {
    const projects = document.getElementById("projectContainer");

    window.addEventListener("scroll", () => {
      const positionTop = projects?.offsetTop;
      const currentHeight = projects?.offsetHeight;
      setFixed(
        window.scrollY > positionTop! &&
          window.scrollY < positionTop! + currentHeight! - 800
      );
    });

    window.addEventListener("resize", async () => {
      const positionTop = projects?.offsetTop;
      const currentHeight = projects?.offsetHeight;
      setFixed(
        window.scrollY > positionTop! &&
          window.scrollY < positionTop! + currentHeight! - 800
      );
    });
  }, []);

  return (
    <section className={styles.container} id='projectContainer'>
      <div className='pt-20 pb-12 px-12 xl:px-0'>
        <SwipeableViews enableMouseEvents>
          <div className={prettyJoin(["pb-20", styles.slide])}>
            <h3
              className={prettyJoin([
                "xl:mb-8  text-center w-full",
                styles.title,
              ])}>
              - {translations.projectsTitle_2[language]} -
            </h3>
            <div className={styles.projects}>
              <div className='lg:pt-10 xl:pt-20 lg:flex items-center relative z-10 container mx-auto md:px-12'>
                <div
                  className={prettyJoin([
                    "lg:w-2/3",
                    "xl:w-1/3",
                    styles.projectCard,
                  ])}>
                  <img src={manada} alt='' />
                  <figure
                    className={prettyJoin([
                      " rounded-sm p-8 dark:bg-slate-800 mr-6",
                      styles.cardTwo,
                    ])}>
                    <div className='pt-6 space-y-4'>
                      <figcaption className='font-medium'>
                        <div>
                          <a
                            href='http://architecturalboundaries.com/'
                            target='_blank'
                            rel='noreferrer'>
                            MANADA
                          </a>
                        </div>
                      </figcaption>
                      <p className={styles.stack}>Wordpress</p>
                    </div>
                  </figure>
                </div>
                <div
                  className={prettyJoin([
                    "lg:w-2/3",
                    "xl:w-1/3",
                    styles.projectCard,
                  ])}>
                  <img src={rushing} alt='' />
                  <figure
                    className={prettyJoin([
                      "rounded-sm p-8 dark:bg-slate-800 mr-6",
                      styles.cardTwo,
                    ])}>
                    <div className='pt-6 space-y-4'>
                      <figcaption className='font-medium'>
                        <div>
                          <a
                            href='https://www.therushinghour.com/collections/all'
                            target='_blank'
                            rel='noreferrer'>
                            THE RUSHING HOUR
                          </a>
                        </div>
                      </figcaption>
                      <p className={styles.stack}>Shopify</p>
                    </div>
                  </figure>
                </div>
                <div
                  className={prettyJoin([
                    "lg:w-2/3",
                    "xl:w-1/3",
                    styles.projectCard,
                  ])}>
                  <img src={tresor} alt='' />
                  <figure
                    className={prettyJoin([
                      "rounded-sm p-8 dark:bg-slate-800 mr-6",
                      styles.cardTwo,
                    ])}>
                    <div className='pt-6 space-y-4'>
                      <figcaption className='font-medium'>
                        <div>
                          <a
                            href='https://www.tresordezoe.com/'
                            target='_blank'
                            rel='noreferrer'>
                            TRESOR DE ZÖE
                          </a>
                        </div>
                      </figcaption>
                      <p className={styles.stack}>Shopify</p>
                    </div>
                  </figure>
                </div>
              </div>
              <div className='lg:pt-40 xl:pt-60 lg:flex items-center relative z-10 container mx-auto md:px-12'>
                <div
                  className={prettyJoin([
                    "lg:w-2/3",
                    "xl:w-1/3",
                    styles.projectCard,
                    styles.left,
                  ])}>
                  <img src={ferrari} alt='' />
                  <figure
                    className={prettyJoin([
                      " rounded-sm p-8 dark:bg-slate-800 mr-6",
                      styles.cardTwo,
                    ])}>
                    <div className='pt-6 space-y-4'>
                      <figcaption className='font-medium'>
                        <div>
                          <a
                            href='http://soyangelica.com/archives/panini-ferrari/'
                            target='_blank'
                            rel='noreferrer'>
                            PANINI: FERRARI GT COLLECTION
                          </a>
                        </div>
                      </figcaption>
                      <p className={styles.stack}>HTML - CSS - JQUERY </p>
                    </div>
                  </figure>
                </div>
                <div
                  className={prettyJoin([
                    "lg:w-2/3",
                    "xl:w-1/3",
                    styles.projectCard,
                    styles.left,
                  ])}>
                  <img src={duracell} alt='' />
                  <figure
                    className={prettyJoin([
                      "rounded-sm p-8 dark:bg-slate-800 mr-6",
                      styles.cardTwo,
                    ])}>
                    <div className='pt-6 space-y-6'>
                      <figcaption className='font-medium'>
                        <div>
                          <a
                            href='http://duracellauto.com.mx/'
                            target='_blank'
                            rel='noreferrer'>
                            DURACELL AUTO MÉXICO
                          </a>
                        </div>
                      </figcaption>
                      <p className={styles.stack}>HTML - CSS - JQUERY </p>
                    </div>
                  </figure>
                </div>
                <div
                  className={prettyJoin([
                    "lg:w-2/3",
                    "xl:w-1/3",
                    styles.projectCard,
                    styles.left,
                  ])}>
                  <img src={heroes} alt='' />
                  <figure
                    className={prettyJoin([
                      "rounded-sm p-8 dark:bg-slate-800 mr-6",
                      styles.cardTwo,
                    ])}>
                    <div className='pt-6 space-y-4'>
                      <figcaption className='font-medium'>
                        <div>
                          <a
                            href='http://soyangelica.com/archives/panini-heroes/'
                            target='_blank'
                            rel='noreferrer'>
                            PANINI: HÉROES DE COLECCIÓN
                          </a>
                        </div>
                      </figcaption>
                      <p className={styles.stack}>HTML - CSS - JQUERY </p>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.slide}>
            <h3
              className={prettyJoin(["text-center w-full mb-4", styles.title])}>
              - {translations.projectsTitle_1[language]} -
            </h3>
            <div className={prettyJoin(["pt-20", styles.soonContainer])}>
              <h3
                className={prettyJoin([
                  "text-center w-full mb-4",
                  styles.title,
                ])}>
                {translations.projectsSoon_1[language]} <br />
                {translations.projectsSoon_2[language]}
              </h3>
            </div>
          </div>
        </SwipeableViews>
        <SwipeButton fixed={fixed} />
      </div>
    </section>
  );
};

export default Projects;
