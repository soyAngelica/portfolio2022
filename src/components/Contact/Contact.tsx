import Footer from "components/Footer";
import StarNight from "components/StarNight";
import { useContext } from "react";
import { LanguageContext } from "utils/context";
import { prettyJoin } from "utils/string";
import { translations } from "utils/translations";
import { $LanguagesKey } from "customTypes";
import styles from "./Contact.module.scss";

const Contact = () => {
  const language = useContext(LanguageContext) as $LanguagesKey;

  return (
    <section className={styles.container}>
      <StarNight height='small' dark />
      <div className='pt-20 pb-20 px-12 xl:w-3/5 xl:pb-40 mx-auto'>
        <h3 className={prettyJoin(["text-center w-full mb-4", styles.title])}>
          💌 hola@soyangelica.com
        </h3>
        <p className={prettyJoin(["font-regular mb-8", styles.tel])}>
          Tel: +52 55 6974-7205
        </p>
        <p className={prettyJoin([" font-regular mb-8", styles.text])}>
          {translations.contactText[language]}
        </p>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
