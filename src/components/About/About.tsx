import Footer from "../Footer";
import Header from "../Header";
import MentesAmbulantes from "@assets/img/mentesAmbulantes.png";

const About = () => {
  return (
    <div>
      <Header />
      <div className="pb-12">
        <h2 className="text-left text-2xl mb-2 md:text-3xl text-teal">
          About me
        </h2>
        <p className="text-lg text-left mb-2">
          I'm a mexican frontend developer, coding since 2012.
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
            href="https://www.xy.group/"
            target="_blank"
            className="text-teal ml-1 mr-1"
          >
            XY Booster
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
        <h2 className="text-left text-2xl mb-2 md:text-3xl text-teal">
          Volunteering & Education
        </h2>
        <p className="text-lg text-left mb-2">
          In 2017 my parner Gustavo Merckel and I started an educative roadtrip
          called Mentes ambulantes. Helped by a crowdfunding campaign, we teach
          workshops on sustainable use of technology and programming to more
          than 120 kids around of 9 communities in the Maya region from Southern
          Mexico and Northern Guatemala.
        </p>
        <img
          src={MentesAmbulantes}
          alt="Mentes Ambulantes"
          className="block pt-10 md:max-w-[85%]"
        />
      </div>
      <Footer />
    </div>
  );
};

export default About;
