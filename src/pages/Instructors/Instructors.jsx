import { GrAddCircle } from "react-icons/gr";
import { Link } from "react-router-dom";
import instructorBG from "../../assets/images/instructor-bg.svg";
import { Typewriter } from "react-simple-typewriter";

const Instructors = () => {
  return (
    <div className="pt-36 mx-10 lg:mx-0">
      <div className="grid lg:grid-cols-2 gap-5 lg:w-3/4 lg:mx-auto mt-10">
        <div className="flex items-center">
          <div className="space-y-3">
            <h3 className="lg:text-5xl text-3xl font-bold">
              Fashion is{" "}
              <span className="text-[#A69BFB]">
                <Typewriter
                  words={[
                    "Creativity",
                    "Personal",
                    "Expression",
                    "Art",
                    "Style",
                    "Revolution",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h3>
            <p className="lg:w-3/4 ">
              Meet Our Exceptional Instructors - Seasoned Fashion Professionals
              with Extensive Expertise. Experience Top-notch Guidance and
              Unleash Your Fashion Potential. Join Us to Learn from the Best and
              Elevate Your Skills to New Heights.
            </p>
          </div>
        </div>
        <img
          src={instructorBG}
          alt="Teacher is lecturing"
          className="mx-auto"
        />
      </div>
      <h3 className="lg:text-5xl text-3xl text-center mt-20 mb-10 font-semibold">Meet Our Fashion Experts</h3>
      <div className="grid lg:grid-cols-3 gap-5 lg:w-3/4 mx-auto mt-10">
        {/* Card 1 */}
        <div className="space-y-3 border shadow-xl shadow-[#CDC7F8] rounded-lg p-10">
          <img
            className="mx-auto rounded-lg w-full"
            src="https://i.ibb.co/J3x1GBC/instructor-1.png"
            alt="Class Image"
          />

          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">Runway Ready</h3>
            <div className="flex justify-between items-center">
              <p>Total Classes: 10</p>
            </div>

            <div className="flex justify-center">
              <Link className="w-full">
                <button className="flex gap-2 justify-center items-center bg-[#CDC7F8] px-3 py-2 font-semibold rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#A69BFB] duration-300 w-full">
                  <GrAddCircle className="text-2xl" />
                  See Classes
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="space-y-3 border shadow-xl shadow-[#CDC7F8] rounded-lg p-10">
          <img
            className="mx-auto rounded-lg w-full"
            src="https://i.ibb.co/J3x1GBC/instructor-1.png"
            alt="Class Image"
          />

          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">Runway Ready</h3>
            <div className="flex justify-between items-center">
              <p>Total Classes: 10</p>
            </div>

            <div className="flex justify-center">
              <Link className="w-full">
                <button className="flex gap-2 justify-center items-center bg-[#CDC7F8] px-3 py-2 font-semibold rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#A69BFB] duration-300 w-full">
                  <GrAddCircle className="text-2xl" />
                  See Classes
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="space-y-3 border shadow-xl shadow-[#CDC7F8] rounded-lg p-10">
          <img
            className="mx-auto rounded-lg w-full"
            src="https://i.ibb.co/J3x1GBC/instructor-1.png"
            alt="Class Image"
          />

          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">Runway Ready</h3>
            <div className="flex justify-between items-center">
              <p>Total Classes: 10</p>
            </div>

            <div className="flex justify-center">
              <Link className="w-full">
                <button className="flex gap-2 justify-center items-center bg-[#CDC7F8] px-3 py-2 font-semibold rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#A69BFB] duration-300 w-full">
                  <GrAddCircle className="text-2xl" />
                  See Classes
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="space-y-3 border shadow-xl shadow-[#CDC7F8] rounded-lg p-10">
          <img
            className="mx-auto rounded-lg w-full"
            src="https://i.ibb.co/J3x1GBC/instructor-1.png"
            alt="Class Image"
          />

          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">Runway Ready</h3>
            <div className="flex justify-between items-center">
              <p>Total Classes: 10</p>
            </div>

            <div className="flex justify-center">
              <Link className="w-full">
                <button className="flex gap-2 justify-center items-center bg-[#CDC7F8] px-3 py-2 font-semibold rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#A69BFB] duration-300 w-full">
                  <GrAddCircle className="text-2xl" />
                  See Classes
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Card 5 */}
        <div className="space-y-3 border shadow-xl shadow-[#CDC7F8] rounded-lg p-10">
          <img
            className="mx-auto rounded-lg w-full"
            src="https://i.ibb.co/J3x1GBC/instructor-1.png"
            alt="Class Image"
          />

          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">Runway Ready</h3>
            <div className="flex justify-between items-center">
              <p>Total Classes: 10</p>
            </div>

            <div className="flex justify-center">
              <Link className="w-full">
                <button className="flex gap-2 justify-center items-center bg-[#CDC7F8] px-3 py-2 font-semibold rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#A69BFB] duration-300 w-full">
                  <GrAddCircle className="text-2xl" />
                  See Classes
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Card 6 */}
        <div className="space-y-3 border shadow-xl shadow-[#CDC7F8] rounded-lg p-10">
          <img
            className="mx-auto rounded-lg w-full"
            src="https://i.ibb.co/J3x1GBC/instructor-1.png"
            alt="Class Image"
          />

          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">Runway Ready</h3>
            <div className="flex justify-between items-center">
              <p>Total Classes: 10</p>
            </div>

            <div className="flex justify-center">
              <Link className="w-full">
                <button className="flex gap-2 justify-center items-center bg-[#CDC7F8] px-3 py-2 font-semibold rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#A69BFB] duration-300 w-full">
                  <GrAddCircle className="text-2xl" />
                  See Classes
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
