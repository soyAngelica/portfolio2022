import Footer from "../Footer";
import Header from "../Header";
import MentesAmbulantes from "@assets/img/mentesAmbulantes.png";
import MentesSite from "@assets/img/mentes-ambulantes-site.jpg";

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
          <div className="shrink-0 w-full md:w-1/3 mb-8 md:mb-0">
            <a
              href="https://mentes-ambulantes.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-md overflow-hidden shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <img
                src={MentesSite}
                alt="Mentes Ambulantes website"
                className="w-full"
              />
            </a>
          </div>
          <div className="md:flex-1">
            <a
              href="https://mentes-ambulantes.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-left text-2xl md:text-3xl text-teal mb-3 hover:underline"
            >
              Mentes Ambulantes
            </a>
            <p className="text-lg text-left mb-2">
              In 2017, my partner Gustavo Merckel and I started Mentes
            Ambulantes, an educational road trip. With the help of a
            crowdfunding campaign, we taught workshops on the sustainable use
            of technology and programming to more than 120 kids in 9
            communities across the Maya region of southern Mexico and northern
            Guatemala.
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
