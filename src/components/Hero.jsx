import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="w-5 h-5 rounded-full bg-[#a70c30]" />
          <div className="w-1 sm:h-80 h-40 red-gradient" />
        </div>

        <div className="">
          <h1 className={`${styles.heroHeadText} text-white mobile-s:text-[35px]`}>
            Hi, I'm <span className="text-[#a70c30]">Rifqi</span>
          </h1>

          <div className={`${styles.heroSubText} mt-4 text-white-100`}>
            <TypeAnimation
              sequence={[
                // Same String at the start will only be typed once, initially
                "I develop web aplication",
                1000,
                "I develop app aplication",
                1000,
                "I develop app aplication",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
