import { Link } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import animationData from "../../assets/lottie/error-doodle-animation.json";
import Lottie from "react-lottie";
const ErrorPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center">
        <Lottie options={defaultOptions} height={400} width={400} />
        <Link to={'/'}>
          <button className="flex gap-2 items-center bg-[#CDC7F8] px-3 py-2 font-semibold rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#A69BFB] duration-300">
            <AiOutlineRollback className="text-2xl" />
            Go Back To Home Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
