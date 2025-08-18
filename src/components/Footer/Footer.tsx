import { FaXTwitter } from "react-icons/fa6";
import { FiCodepen, FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="flex justify-between pt-8 border-t-2 border-t-zinc-200">
      <div className="w-1/4">
        <p className="text-xl">
          <a href="mailto:soyangelica.aguilar@gmail.com">
            soyangelica.aguilar@gmail.com
          </a>
        </p>
        <ul className="flex text-xl gap-2 mt-2">
          <li>
            <a
              href="https://github.com/soyAngelica"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/angelica-aguilar-developer/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/sisoyangelica"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/soyangelica"
              target="_blank"
              rel="noreferrer"
            >
              <FiCodepen />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-xl">SoyAngélica © 2025</p>
      </div>
    </div>
  );
};

export default Footer;
