import StackSlider from "../StackSlider";

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
            React Native - React - Next JS - TypeScript
          </p>
          <p className="text-lg md:text-3xl mb-1 md:mb-2">
            REST APIs - GraphQL
            <span className="text-zinc-300 mx-3" aria-hidden="true">
              |
            </span>
            Tailwind CSS - Ant Design
          </p>
          <p className="text-sm md:text-2xl mb-2">
            Node JS - Express - PostgreSQL - MySQL - Redux | Mobx
          </p>
        </div>
        <p className="flex items-center gap-2 md:justify-end mt-4 text-sm text-zinc-600">
          <span
            className="inline-block shrink-0"
            style={{ width: "24px", height: "24px" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                clip-rule="evenodd"
                d="M20.998 10.949H24v3.102h-3v3.028h-1.487V20H18v-2.921h-1.487V20H15v-2.921H9V20H7.488v-2.921H6V20H4.487v-2.921H3V14.05H0V10.95h3V5h17.998v5.949zM6 10.949h1.488V8.102H6v2.847zm10.51 0H18V8.102h-1.49v2.847z"
                fill="#7C9C9A"
                fill-rule="evenodd"
              />
            </svg>
          </span>
          I build with Claude Code as my AI pair programmer.
        </p>
        <div className="flex text-right md:justify-end mt-6">
          <StackSlider />
        </div>
      </div>
    </div>
  );
};

export default Hero;
