
import Footer from "components/Footer";
import { ReactNode, useContext } from "react";
import { LanguageContext } from "utils/context";
import { prettyJoin } from "utils/string";
import { translations } from "utils/translations";
import { $LanguagesKey } from "../../customTypes";
import styles from "./JobSection.module.scss";

interface JobDataInterface {
    icon: ReactNode;
    name: string;
    role: string,
    description: string,
    timelapse: string,
    cover: ReactNode;
}

interface JobSectionProps {
  data: JobDataInterface;
}

const JobSection = ({data}: JobSectionProps) => {
  const language = useContext(LanguageContext) as $LanguagesKey;
  return (
   <section className={styles.container}>
    <div className='p-20 lg:flex items-center relative z-10 container mx-auto'>
            <div className={prettyJoin(["w-full lg:w-2/3 h-full", styles.intro])} >
                {data.cover}
            </div>
            <div className={prettyJoin(["w-full lg:w-1/3 h-full text-center lg:text-left", styles.intro])}>
                {data.icon}
                <h2 className={prettyJoin(["text-white pb-2 pt-2", styles.text])}>{data.name}</h2>
                <p className={prettyJoin(["text-white font-regular", styles.role])}>
                {data.role}
                </p>
                 <p className={prettyJoin(["text-white", styles.text])}>
                {data.description}
                </p>
                <p className={prettyJoin(["text-white", styles.text])}>
                {data.timelapse}
                </p>
            </div>
           
        </div>
    </section>
  );
};

export default JobSection;
