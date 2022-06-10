import SkillList from "components/SkillList";
import { Skills } from "data/dataSkills";
import React, { useContext } from "react";
import {
  HiOutlineAcademicCap,
  HiOutlineCode,
  HiOutlineDatabase,
  HiOutlineSparkles,
  HiOutlineTemplate,
  HiOutlineTerminal,
} from "react-icons/hi";
import { $LanguagesKey, Languages } from "customTypes";
import { LanguageContext } from "utils/context";
import { prettyJoin } from "utils/string";
import { translations } from "utils/translations";
import styles from "./About.module.scss";

const About = () => {
  const language = useContext(LanguageContext) as $LanguagesKey;

  const sofiaString =
    language === Languages.Es ? (
      <>
        {translations.aboutText_4[language]}
        <a
          href='https://www.sofiasalud.com/'
          target='_blank'
          rel='noreferrer'
          className={styles.link}>
          Sofia
        </a>
        . <br />
      </>
    ) : (
      <>
        {translations.aboutText_4_1[language]}
        <a
          href='https://www.sofiasalud.com/'
          target='_blank'
          rel='noreferrer'
          className={styles.link}>
          Sofía's
        </a>
        {translations.aboutText_4_2[language]} <br />
      </>
    );

  return (
    <section>
      <div className='pb-12 px-12 xl:px-0'>
        <div className='pt-40 lg:flex items-center relative z-10 container mx-auto px-8'>
          <div className='w-full lg:w-3/5 h-full md:px-10'>
            <h3 className={prettyJoin(["mb-8  w-full", styles.title])}>
              - {translations.aboutTitle[language]}
            </h3>
            <p
              className={prettyJoin([
                "dark:text-white font-regular mb-8",
                styles.text,
              ])}>
              {translations.aboutText_1[language]}
            </p>
            <p
              className={prettyJoin([
                "dark:text-white font-regular mb-8",
                styles.text,
              ])}>
              {translations.aboutText_2[language]}
            </p>
            <p
              className={prettyJoin([
                "dark:text-white font-regular mb-8",
                styles.text,
              ])}>
              {translations.aboutText_3_1[language]}
              <a
                href='http://gustavomerckel.com/'
                target='_blank'
                rel='noreferrer'
                className={styles.link}>
                Gustavo Merckel
              </a>{" "}
              {translations.aboutText_3_2[language]}
              <a
                href='http://mentesambulantes.org'
                target='_blank'
                rel='noreferrer'
                className={styles.link}>
                Mentes ambulantes
              </a>
              {translations.aboutText_3_3[language]}
            </p>
            <p
              className={prettyJoin([
                "dark:text-white font-regular mb-8",
                styles.text,
              ])}>
              {sofiaString}
            </p>
            <p
              className={prettyJoin([
                "dark:text-white font-regular mb-8",
                styles.text,
              ])}>
              {translations.aboutText_5[language]}
            </p>
          </div>
          <div className='w-full lg:w-2/5 h-full lg:pr-10 xl:pr-0 md:px-14 relative'>
            <p className={prettyJoin(["uppercase mb-4", styles.skills])}>
              <HiOutlineCode className={styles.icon} />
              Frontend Development
            </p>
            <div className={prettyJoin(["mb-4 ml-7", styles.skillsList])}>
              <SkillList skills={Skills.BasicFrontend} type='knowledge' />
              <SkillList skills={Skills.JS} type='knowledge' bottom />
            </div>
            <p className={prettyJoin(["uppercase  mb-4", styles.skills])}>
              <HiOutlineDatabase className={styles.icon} />
              Backend Development
            </p>
            <div className={prettyJoin(["mb-4 ml-7", styles.skillsList])}>
              <SkillList skills={Skills.Backend} type='knowledge' />
            </div>
            <p className={prettyJoin(["uppercase  mb-4", styles.skills])}>
              <HiOutlineTemplate className={styles.icon} />
              CMS
            </p>
            <div className={prettyJoin(["mb-4 ml-7", styles.skillsList])}>
              <SkillList skills={Skills.CMS} type='knowledge' />
            </div>
            <p className={prettyJoin(["uppercase  mb-4", styles.skills])}>
              <HiOutlineTerminal className={styles.icon} />
              Tools
            </p>
            <div className={prettyJoin(["mb-4 ml-7", styles.skillsList])}>
              <SkillList skills={Skills.Tools} type='tool' />
            </div>
            <p className={prettyJoin(["uppercase mb-4", styles.skills])}>
              <HiOutlineSparkles className={styles.icon} />
              Design
            </p>
            <div className={prettyJoin(["mb-4 ml-7", styles.skillsList])}>
              <SkillList skills={Skills.Design} type='knowledge' />
            </div>
            <p className={prettyJoin(["uppercase mb-4", styles.skills])}>
              <HiOutlineAcademicCap className={styles.icon} />
              Learning
            </p>
            <div className={prettyJoin(["mb-4 ml-7", styles.skillsList])}>
              <SkillList skills={Skills.Learning} type='learning' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
