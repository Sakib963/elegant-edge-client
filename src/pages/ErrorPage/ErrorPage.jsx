import { Link } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import animationData from "../../assets/lottie/error-doodle-animation.json";
import Lottie from "react-lottie";
import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeContext";
import { Helmet } from "react-helmet-async";
const ErrorPage = () => {
  const { theme } = useContext(ThemeContext);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      className={
        theme === "light"
          ? "flex justify-center items-center min-h-screen"
          : "flex justify-center items-center min-h-screen text-white"
      }
    >
      <Helmet>
                <title>Error | Elegant Edge Fashion School</title>
            </Helmet>
      <div className="flex flex-col items-center">
        <Lottie options={defaultOptions} height={400} width={400} />
        <Link to={"/"}>
          <button
            className={
              theme === "light"
                ? "flex gap-2 items-center bg-[#CDC7F8] px-3 py-2 font-semibold rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#A69BFB] duration-300"
                : "flex gap-2 items-center bg-[#CDC7F8] px-3 py-2 font-semibold rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#A69BFB] duration-300 text-black mt-5"
            }
          >
            <AiOutlineRollback className="text-2xl" />
            Go Back To Home Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
