import React, { useState } from "react";
import { LanguageContext } from "../src/utils/context";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Projects from "./components/Projects";
import SocialBar from "./components/SocialBar";
import Switch from "./components/Switch";
import "./styles/main.scss";
import { Languages } from "./customTypes";

const SwitchOptions = [Languages.Es, Languages.En];

interface AppProps {
  title: string;
}

const App: React.FC<AppProps> = ({ title }) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>(Languages.Es);

  return (
    <LanguageContext.Provider value={currentLanguage}>
      <Layout>
        <Switch
          options={SwitchOptions}
          defaultValue={Languages.Es}
          handleSwitch={lang => {
            setCurrentLanguage(lang);
          }}
        />
        <SocialBar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Layout>
    </LanguageContext.Provider>
  );
};

export default App;
