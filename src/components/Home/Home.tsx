import Footer from "../Footer";
import Header from "../Header";
import Hero from "../Hero";
import Portfolio from "../Portfolio";
import Projects from "../Projects";
import SideProjects from "../Projects/SideProjects";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Portfolio />
      <SideProjects />
      <Footer />
    </div>
  );
};

export default Home;
