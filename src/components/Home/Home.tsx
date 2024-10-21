import About from "components/About";
import Contact from "components/Contact";
import Hero from "components/Hero";
import LastJobs from "components/LastJobs";
import Projects from "components/Projects";
import SocialBar from "components/SocialBar"

const Home = () => {
    return (
        <>
            <SocialBar />
            <Hero />
            <LastJobs />
            <Projects />
            <Contact />
        </>
    )
}

export default Home;