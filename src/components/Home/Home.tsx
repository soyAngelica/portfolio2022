import Footer from "../Footer";
import Header from "../Header";
import Hero from "../Hero";
import Portfolio from "../Portfolio";
import Projects from "../Projects";
import SideProjects from "../Projects/SideProjects";
import QuoteGate from "../Quote/QuoteGate";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <SideProjects />
      <Portfolio />
      <Footer />
      <QuoteGate />
    </div>
  );
};

export default Home;
