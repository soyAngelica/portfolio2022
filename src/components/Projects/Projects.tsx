import Projects1 from "@assets/img/p1.png";
import SofiaSlider from "./SofiaSlider";

const storeBtn =
  "inline-block rounded-full border-2 border-teal px-5 py-1.5 text-teal font-semibold hover:bg-teal hover:text-white transition-colors";

const Projects = () => {
  return (
    <div className="pt-16">
      <h2 className="text-left text-2xl font-bold md:font-normal md:text-3xl text-teal">
        My Projects
      </h2>
      <div className="md:flex md:space-x-10 lg:space-x-24 mt-10 w-[80%] md:w-full">
        <div className="relative mb-14 md:mb-0 md:w-2/4">
          <a href="https://explainthis-rho.vercel.app/" target="_blank">
            <img
              src={Projects1}
              alt="Explain this"
              className="w-full rounded-md shadow-lg"
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center"></div>
            <div className="py-4">
              <p className="text-xl text-slate-400">
                Explain this • (AI-powered tool)
              </p>
              <p className="text-lg"></p>
              <p className="text-lg">
                A thoughtful assistant designed to break down complex
                instructions into clear, understandable steps. Whether you’re
                neurodivergent, easily distracted, or just want guidance made
                simple, this project uses AI to provide concise, emoji-friendly
                explanations, translation options, and suggested next steps.
              </p>
            </div>
          </a>
        </div>

        <div className="relative mb-14 md:mb-0 md:w-2/4">
          <SofiaSlider />
          <div className="py-4">
            <a
              href="https://mwm.ai/apps/sofia/1463424996"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-slate-400 hover:text-teal"
            >
              Sofía • (Mobile app)
            </a>
            <p className="text-lg">Mobile app · built at Sofía Salud</p>
            <p className="text-lg">
              Digital health insurance app for Mexico: members manage their
              plan, coverage, and every process directly from their phone.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://apps.apple.com/us/app/sof%C3%ADa/id1463424996"
                target="_blank"
                rel="noopener noreferrer"
                className={storeBtn}
              >
                iOS
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.sofiasalud.app"
                target="_blank"
                rel="noopener noreferrer"
                className={storeBtn}
              >
                Android
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
