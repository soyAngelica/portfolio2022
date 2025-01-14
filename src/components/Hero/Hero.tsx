import StackSlider from "../StackSlider";

const Hero = () => {
  return (
    <div className="flex justify-between pb-20 border-b-2 border-b-zinc-200">
      <div className="w-1/3">
        <p className="text-5xl text-left mb-3 text-teal">Frontend Developer</p>
        <p className="text-lg text-left mb-2">
          Coder and mom. I'm an improvement enthusiast, deeply embedded in the
          JavaScript ecosystem.
        </p>
        <p className="text-left text-lg">
          <a href="/about" className="text-teal hover:text-gray-500">
            See more about me
          </a>
        </p>
      </div>
      <div className="w-2/3 text-right">
        <div>
          <p className="text-3xl mb-2">
            React JS - TypeScript - Next JS - Redux | Mobx - REST APIs
          </p>
          <p className="text-3xl mb-2"> Tailwind CSS & Ant Design</p>
          <p className="text-2xl mb-2">
            Node JS - Express JS - PostgreSQL - MySQL - GraphQL
          </p>
        </div>
        <div className="flex text-right justify-end mt-4">
          <StackSlider />
        </div>
      </div>
    </div>
  );
};

export default Hero;
