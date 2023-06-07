import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const slider = (
  <AwesomeSlider className="h-screen" animation="cubeAnimation">
    <div className=" w-full h-full slider-1 flex justify-center items-center">
      <div className="text-white flex-col flex items-center space-y-4">
        <h3 className="text-6xl font-bold">Unlock Your Stylish Creativity</h3>
        <p className="w-3/4 mx-auto text-center">
        Elegant Edge Fashion School is your gateway to the glamorous world of fashion design. Our comprehensive programs empower aspiring designers to unleash their creativity, refine their skills, and embrace their unique fashion voice. From hands-on training in garment construction to trend analysis and ethical practices, we provide a holistic learning experience. Join us and embark on a transformative journey to become a fashion industry trailblazer.
        </p>
      </div>
    </div>
    <div className=" w-full h-full slider-2 flex justify-center items-center">
      <div className="text-white flex-col flex items-center space-y-4">
        <h3 className="text-6xl font-bold">Elevate Your Fashion Design Skills</h3>
        <p className="w-3/4 mx-auto text-center">
        Elegant Edge Fashion School is your gateway to the glamorous world of fashion design. Our comprehensive programs empower aspiring designers to unleash their creativity, refine their skills, and embrace their unique fashion voice. From hands-on training in garment construction to trend analysis and ethical practices, we provide a holistic learning experience. Join us and embark on a transformative journey to become a fashion industry trailblazer.
        </p>
      </div>
    </div>
    <div className=" w-full h-full slider-3 flex justify-center items-center">
      <div className="text-white flex-col flex items-center space-y-4">
        <h3 className="text-6xl font-bold">Ignite Your Passion for Fashion Design</h3>
        <p className="w-3/4 mx-auto text-center">
        Elegant Edge Fashion School is your gateway to the glamorous world of fashion design. Our comprehensive programs empower aspiring designers to unleash their creativity, refine their skills, and embrace their unique fashion voice. From hands-on training in garment construction to trend analysis and ethical practices, we provide a holistic learning experience. Join us and embark on a transformative journey to become a fashion industry trailblazer.
        </p>
      </div>
    </div>
  </AwesomeSlider>
);

const Banner = () => {
  return <div className="mb-20">{slider}</div>;
};

export default Banner;
