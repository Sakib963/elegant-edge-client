import CompanyLogo from "../../../components/CompanyLogo";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="pt-10">
      <div className="divider"></div>
      <div>
      <div className="grid lg:grid-cols-4 gap-4 px-10 py-5">
        <CompanyLogo isFooter={true}></CompanyLogo>
        <ul className="uppercase font-semibold">
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">News</li>
          <li className="hover:underline cursor-pointer">Classes</li>
          <li className="hover:underline cursor-pointer">Career</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>
        <div className="flex">
          <div className="flex gap-4">
            <BsFacebook className="text-3xl cursor-pointer text-[#3b5998]" />
            <BsInstagram className="text-3xl cursor-pointer text-[#E4405F]" />
            <BsYoutube className="text-3xl cursor-pointer text-[#c4302b]" />
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold">
            Sign up and get discounted classes information.
          </h3>
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Your Email"
                className="input input-bordered"
              />
              <button className="btn btn-square">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 16.6667V11.6667L9.16667 10L2.5 8.33334V3.33334L18.3333 10L2.5 16.6667Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
     <div className="space-y-4 px-10 pb-10">
     <div className="lg:flex justify-between font-semibold">
        <h3>©2023 Elegant Edge Fashion School</h3>
        <p className="flex gap-6 cursor-pointer">
          Privacy Policy <span>Terms and Conditions</span>
        </p>
      </div>
      <div>
        <p>8502 Preston Rd, Inglewood, Maine 98380</p>
        <p>(808) 555-0111</p>
        <p>contact@elegantedge.com</p>
      </div>
     </div>
      </div>
    </div>
  );
};

export default Footer;
