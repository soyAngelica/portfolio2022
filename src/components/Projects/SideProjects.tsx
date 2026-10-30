import Projects1 from "@assets/img/p1.png";

const SideProjects = () => {
  return (
    <div className="pt-16">
      <div className="rounded-2xl bg-[#f3f7f6] px-6 py-10 md:px-10">
        <h2 className="text-left text-2xl font-bold md:font-normal md:text-3xl text-teal">
          Side Projects
        </h2>
        <a
          href="https://explainthis-rho.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-8 block md:flex md:items-center md:gap-10"
        >
          <img
            src={Projects1}
            alt="Explain this"
            className="w-full md:w-1/3 shrink-0 rounded-md shadow-lg transition-transform group-hover:-translate-y-1"
          />
          <div className="pt-4 md:pt-0 md:w-2/3 text-left">
            <p className="text-xl text-slate-400 group-hover:text-teal">
              Explain this • (AI-powered tool)
            </p>
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
    </div>
  );
};

export default SideProjects;
