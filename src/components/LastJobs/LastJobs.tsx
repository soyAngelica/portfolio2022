
import Footer from "components/Footer";
import { useContext } from "react";
import { LanguageContext } from "utils/context";
import { prettyJoin } from "utils/string";
import { translations } from "utils/translations";
import styles from "./LastJobs.module.scss";
import JobSection from "components/JobSection";
import { $LanguagesKey } from "../../customTypes";
import IconSofia from "assets/img/sofia_app.png";
import IconXYB from "assets/img/xyb_app.png";
import CoverSofia from "assets/img/app_shots.png";
import CoverXYB from "assets/img/app_xyb_shots.png";


const data = {
    sofia: {
        icon: <img src={IconSofia} width="60" height="60"  alt="" className="lg:mx-0 mx-auto lg:pt-0 pt-4"/>,
        name: "Sofía",
        role: "Software Engineer",
        description: "",
        timelapse: "2020 - 2023",
        cover: <img className="rounded-lg mx-auto" src={CoverSofia} width="auto" height="auto"  alt="" style={{maxWidth: "550px"}}/>,
    },
    xyb: {
        icon: <img src={IconXYB} width="60" height="60"  alt="" className="lg:mx-0 mx-auto lg:pt-0 pt-4"/>,
        name: "XY Booster",
        role: "Software Engineer",
        description: "",
        timelapse: "2024 - now",
        cover: <img className="rounded-lg mx-auto" src={CoverXYB} width="auto" height="auto"  alt="" style={{maxWidth: "550px"}}/>,
    }
}


const LastJobs = () => {
  const language = useContext(LanguageContext) as $LanguagesKey;
  return (
   <section className={styles.container}>
        <JobSection data={data.xyb}/>
        <JobSection data={data.sofia}/>
    </section>
  );
};

export default LastJobs;
