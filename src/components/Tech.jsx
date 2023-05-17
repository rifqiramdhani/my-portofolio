import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center">
      <OwlCarousel
        className="owl-theme"
        margin={5}
        items={8}
        dots={false}
        lazyLoad={true}
        autoplay={true}
      >
        {technologies.map((technology) => (
          <div className="item" key={technology.name}>
            <LazyLoadImage
              src={technology.icon}
              alt={technology.name}
              width={50}
              height={50}
            />
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
