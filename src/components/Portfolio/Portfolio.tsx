import Portfolio1 from "@assets/img/nadiya.jpg";
import Portfolio2 from "@assets/img/2.png";
import Portfolio3 from "@assets/img/3.png";
import Portfolio4 from "@assets/img/resonantia.jpg";
import Portfolio6 from "@assets/img/duracell-2018.jpg";
import Portfolio7 from "@assets/img/wordtorque.jpg";

const Portfolio = () => {
  return (
    <div className="mt-16 pt-16 pb-20 border-t border-t-zinc-200">
      <h2 className="text-left text-2xl font-bold md:font-normal md:text-3xl text-teal">
        Freelance Web & Web Apps
      </h2>
      <div className="md:flex md:space-x-10 lg:space-x-24 mt-10 w-[80%] md:w-full">
        <div className="relative mb-14 md:mb-0">
          <a href="https://wordtorque.com/platform/welcome/" target="_blank">
            <img
              src={Portfolio7}
              alt="WordTorque Platform"
              className="w-full rounded-md shadow-lg"
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center"></div>
            <div className="py-4">
              <p className="text-xl text-slate-400">WordTorque Platform</p>
              <p className="text-lg">WordPress • Elementor</p>
            </div>
          </a>
        </div>
        <div className="relative mb-14 md:mb-0">
          <a href="https://resonantia.mx/" target="_blank">
            <img
              src={Portfolio4}
              alt="Resonantia"
              className="w-full rounded-md shadow-lg"
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center"></div>
            <div className="py-4">
              <p className="text-xl text-slate-400">Resonantia</p>
              <p className="text-lg">VITE JS • REACT JS • TAILWIND CSS</p>
            </div>
          </a>
        </div>

        <div className="relative mb-14 md:mb-0">
          <a href="https://manada.mx/" target="_blank">
            <img
              src={Portfolio2}
              alt="MANADA"
              className="w-full rounded-md shadow-lg"
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center"></div>
            <div className="py-4">
              <p className="text-xl text-slate-400">MANADA</p>
              <p className="text-lg">Wordpress</p>
            </div>
          </a>
        </div>

      </div>
      <div className="md:flex md:space-x-10 lg:space-x-24 mt-10 w-[80%] md:w-full">
        <div className="relative mb-14 md:mb-0">
          <a href="http://www.loseternos.com.mx/" target="_blank">
            <img
              src={Portfolio3}
              alt="Los Eternos Creativos"
              className="w-full rounded-md shadow-lg"
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center"></div>
            <div className="py-4">
              <p className="text-xl text-slate-400">Los Eternos Creativos</p>
              <p className="text-lg">HTML • CSS • JS • JQUERY • PHP</p>
            </div>
          </a>
        </div>
        <div className="relative mb-14 md:mb-0">
          <a href="https://www.nadiyashah.com/" target="_blank">
            <img
              src={Portfolio1}
              alt="Nadiya Shah"
              className="w-full rounded-md shadow-lg"
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center"></div>
            <div className="py-4">
              <p className="text-xl text-slate-400">Nadiya Shah</p>
              <p className="text-lg">Wordpress</p>
            </div>
          </a>
        </div>

        <div className="relative mb-14 md:mb-0">
          <a href="https://duracel.vercel.app/" target="_blank">
            <img
              src={Portfolio6}
              alt="Duracell MX"
              className="w-full rounded-md shadow-lg"
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center"></div>
            <div className="py-4">
              <p className="text-xl text-slate-400">
                Duracell MX (Version 2018)
              </p>
              <p className="text-lg">HTML • CSS • JS • JQUERY • PHP</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
