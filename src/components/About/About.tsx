import Footer from "../Footer";
import Header from "../Header";
import MentesAmbulantes from "@assets/img/mentesAmbulantes.png";
import MentesLogo from "@assets/img/mentes-ambulantes-logo.png";

const About = () => {
  return (
    <div>
      <Header />
      <div className="pb-12">
        <h2 className="text-left text-2xl mb-2 md:text-3xl text-teal">
          About me
        </h2>
        <p className="text-lg text-left mb-2">
          I'm a Mexican software developer, coding since 2012.
        </p>
        <p className="text-lg text-left mb-2">
          Over the years, I’ve contributed to multiple projects, including
          leading the development of platforms and working in teams at companies
          like
          <a
            href="https://www.sofiasalud.com/"
            target="_blank"
            className="text-teal ml-1 mr-1"
          >
            Sofía Salud
          </a>
          and
          <a
            href="https://www.meltwater.com/en"
            target="_blank"
            className="text-teal ml-1 mr-1"
          >
            Meltwater
          </a>
          . I've also had the opportunity to mentor aspiring developers, sharing
          my knowledge in web development and programming.
        </p>

        <p className="text-lg text-left mb-2">
          Throughout my career, I've had the chance to work with various
          programming languages, frameworks, and tools. However, I truly flow
          when working with JavaScript.
        </p>
        <p className="text-lg text-left mb-2">
          I love traveling, riding my bike, Instagram, music, and tea.
        </p>
      </div>
      <div className="pb-20 pt-8 block border-t-2 border-t-zinc-200">
        <h2 className="text-left text-2xl mb-6 md:text-3xl text-teal">
          Volunteering & Education
        </h2>
        <div className="md:flex md:items-start md:gap-10">
          <a
            href="https://mentes-ambulantes.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group shrink-0 w-full md:w-1/4 mb-8 md:mb-0 rounded-md shadow-lg bg-teal py-10 md:py-6 md:aspect-[3/4] md:max-h-[420px] flex flex-col items-center justify-center gap-6 p-6 transition-transform hover:-translate-y-1"
          >
            <img
              src={MentesLogo}
              alt="Mentes Ambulantes"
              className="w-full max-w-[220px]"
            />
            <span className="text-white text-lg">
              Visit the site{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </a>
          <div className="md:flex-1">
            <p className="text-lg text-left mb-2">
              In 2017 my parner Gustavo Merckel and I started an educative roadtrip
              called Mentes ambulantes. Helped by a crowdfunding campaign, we teach
              workshops on sustainable use of technology and programming to more
              than 120 kids around of 9 communities in the Maya region from Southern
              Mexico and Northern Guatemala.
            </p>
            <img
              src={MentesAmbulantes}
              alt="Mentes Ambulantes workshops"
              className="block pt-6 w-full"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
