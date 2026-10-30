import { FiTerminal } from "react-icons/fi";
import StackSlider from "../StackSlider";
import OctoIcon from "./OctoIcon";

const Hero = () => {
  return (
    <div className="md:flex justify-between pb-14 mb:pb-20 border-b-2 border-b-zinc-200">
      <div className="md:w-1/3">
        <p className="text-2xl md:text-5xl text-left font-bold md:font-normal mb-3 text-teal">
          Software Developer
        </p>
        <p className="text-lg text-left mb-2 ">
          Mexican developer, mom, and neurodivergent thinker.
          <br />I enjoy working with JavaScript, improving processes, and
          turning ideas into real projects.
        </p>
        <p className="text-left text-lg">
          <a href="/about" className="text-teal hover:text-gray-500">
            See more about me
          </a>
        </p>
      </div>
      <div className="md:w-2/3 md:text-right pt-4 md:pt-0">
        <div>
          <p className="text-lg md:text-3xl mb-1 md:mb-2">
            React Native (Apps) - React JS - TypeScript - Next JS - REST APIs
          </p>
          <p className="text-lg md:text-3xl mb-1 md:mb-2">
            {" "}
            Tailwind CSS & Ant Design
          </p>
          <p className="text-sm md:text-2xl mb-2">
            Node JS - Express JS - PostgreSQL - MySQL - GraphQL - Redux | Mobx
          </p>
        </div>
        <div className="flex text-right md:justify-end mt-6">
          <StackSlider />
        </div>
        <p className="flex items-center gap-2 md:justify-end mt-4 text-sm text-zinc-600">
          <FiTerminal className="text-teal" aria-hidden="true" />
          <OctoIcon className="text-teal" />
          I build with Claude Code as my AI pair programmer.
        </p>
      </div>
    </div>
  );
};

export default Hero;
