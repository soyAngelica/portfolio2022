import StackSlider from "../StackSlider";

const Hero = () => {
  return (
    <div className="md:flex justify-between pb-14 mb:pb-20 border-b-2 border-b-zinc-200">
      <div className="md:w-1/3">
        <p className="text-2xl md:text-5xl text-left font-bold md:font-normal mb-3 text-teal">
          Frontend Developer
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
            React JS - TypeScript - Next JS - Redux | Mobx - REST APIs
          </p>
          <p className="text-lg md:text-3xl mb-1 md:mb-2">
            {" "}
            Tailwind CSS & Ant Design
          </p>
          <p className="text-sm md:text-2xl mb-2">
            Node JS - Express JS - PostgreSQL - MySQL - GraphQL
          </p>
        </div>
        <div className="flex text-right md:justify-end mt-6">
          <StackSlider />
        </div>
      </div>
    </div>
  );
};

export default Hero;
