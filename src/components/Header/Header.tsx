import Pic from "@assets/img/pic1.png";
import { FaHome } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div className="flex justify-between pb-4 mb:pb-16">
      <figure className="md:flex">
        <img className="w-32 h-32 md:w-40 md:h-40 rounded-full" src={Pic} />
        <div className="pt-6 md:p-8 text-left">
          <figcaption className="font-medium">
            <div className="text-slate-700 dark:text-slate-500 text-xl">
              Angélica Aguilar
              <span className="text-slate-700 dark:text-slate-500 text-xs ml-1">
                • (She, her)
              </span>
            </div>
            <div className="text-teal dark:text-teal font-bold text-lg">
              Based in Phuket, Thailand (UTC+7)
            </div>
          </figcaption>
        </div>
      </figure>
      <div className="md:flex justify-between">
        {location.pathname !== "/" && (
          <a
            href="/"
            className="cursor-pointer flex center gap-2 border-gray-300 hover:border-teal rounded-full px-4 py-4 h-10 items-center"
          >
            <FaHome />
            Home
          </a>
        )}
        <button className="cursor-pointer flex center gap-2 border-gray-300 hover:border-teal rounded-full px-4 py-4 h-10 items-center">
          <div className="w-[10px] h-[10px] bg-emerald-700 rounded-full animate-pulse"></div>
          <a
            className="text-[14px] leading-[18px] sm:text-base sm:leading-6"
            href="/docs/AngelicaCuevas-Frontend-Engineer-CV.pdf"
            target="_blank"
            download
          >
            Download resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Header;
