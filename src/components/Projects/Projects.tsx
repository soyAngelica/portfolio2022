import eternos from "assets/img/eternos.jpg";
import manada from "assets/img/manada.jpg";
import orbents from "assets/img/orbents.jpg";
import pokedex from "assets/img/pokedex.jpg";
import rushing from "assets/img/rushing.jpg";
import tresor from "assets/img/tresor.jpg";
import { useContext, useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { LanguageContext } from "utils/context";
import { prettyJoin } from "utils/string";
import { translations } from "utils/translations";
import { $LanguagesKey } from "../../customTypes";
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
                  <img src={eternos} alt='' />
                  <figure
                    className={prettyJoin([
                      "rounded-sm p-8 dark:bg-slate-800 mr-6",
                      styles.cardTwo,
                    ])}>
                    <div className='pt-6 space-y-4'>
                      <figcaption className='font-medium'>
                        <div>
                          <a
                            href='http://www.loseternos.com.mx/'
                            target='_blank'
                            rel='noreferrer'>
                            LOS ETERNOS CREATIVOS
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
                      <p className={styles.stack}>WORDPRESS</p>
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
                      <p className={styles.stack}>SHOPIFY</p>
                    </div>
                  </figure>
                </div>
              </div>
              <div className='lg:pt-40 xl:pt-60 lg:flex items-center relative z-10 container mx-auto md:px-12'>
                <div
                  className={prettyJoin([
                    "lg:w-1/6",
                    "xl:w-1/6",
                    styles.projectCard,
                    styles.left,
                  ])}>
                 
                </div>
                
                <div
                  className={prettyJoin([
                    "lg:w-2/3",
                    "xl:w-1/3",
                    styles.projectCard,
                    styles.left,
                  ])}>
                  <img src={orbents} alt='' />
                  <figure
                    className={prettyJoin([
                      "rounded-sm p-8 dark:bg-slate-800 mr-6",
                      styles.cardTwo,
                    ])}>
                    <div className='pt-6 space-y-6'>
                      <figcaption className='font-medium'>
                        <div>
                          <a
                            href='https://orbents.com.mx/'
                            target='_blank'
                            rel='noreferrer'>
                            ORBENTS
                          </a>
                        </div>
                      </figcaption>
                      <p className={styles.stack}>SHOPIFY</p>
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
                  <img src={rushing} alt='' />
                  <figure
                    className={prettyJoin([
                      " rounded-sm p-8 dark:bg-slate-800 mr-6",
                      styles.cardTwo,
                    ])}>
                    <div className='pt-6 space-y-4'>
                      <figcaption className='font-medium'>
                        <div>
                          <a
                            href='https://www.luxmo.car/'
                            target='_blank'
                            rel='noreferrer'>
                            LUXMO
                          </a>
                        </div>
                      </figcaption>
                      <p className={styles.stack}>WEBFLOW</p>
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
            <div className={prettyJoin(["pt-0", styles.soonContainer])}>
              <a href="https://pokeproject-2024.vercel.app/" target="_blank" rel="noopener noreferrer">
                <h3
                  className={prettyJoin([
                    "text-center w-full mb-4",
                    styles.title,
                  ])}>
                  {translations.projectsSoon_2[language]}
                </h3>
                <p className={prettyJoin([
                    "text-center w-full text-2xl",
                    styles.stack,
                  ])}>TYPESCRIPT - REACT JS - VITE JS - TAILWIND CSS
                </p>
              </a>
              <div className='w-full py-8 mx-auto text-center'>
                 <div
                  className={prettyJoin([
                    styles.ownProjectCard,
                  ])}>
                  <a href="https://pokeproject-2024.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img src={pokedex} className="mx-auto" alt='' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwipeableViews>
        <SwipeButton fixed={fixed} />
      </div>
    </section>
  );
};

export default Projects;
