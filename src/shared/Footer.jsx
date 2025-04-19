import logo from "../assets/TFLORENTINA-White.svg";
import Fasbook from "../assets/ant-design_facebook-outlined.svg";
import Twitter from "../assets/ant-design_twitter-square-filled.svg";
import Instagram from "../assets/ant-design_instagram-outlined.svg";
import LinkedIn from "../assets/ant-design_linkedin-outlined.svg";

const Footer = () => {
  return (
    <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
      <div className="my-12 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-8">
          <div className="">
            <a href="/">
              <img src={logo} alt="logo" className="lg:w-50 md:w-30 sm:w-50" />
            </a>
          </div>
          <p className="md:w-1/2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            cupiditate distinctio dicta exercitationem sit, et sint voluptatibus
            nobis error?
          </p>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none"
            />
            <input
              type="submit"
              value={"Subscribe"}
              className="px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary transition-all duration-300"
            />
          </div>
        </div>

        {/* footer navigations */}
        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
          <div className="space-y-6 mt-5">
            <h4 className="text-3xl">Platform</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-gray-300">
                Overview
              </a>
              <a href="/" className="block hover:text-gray-300">
                Features
              </a>
              <a href="/" className="block hover:text-gray-300">
                About
              </a>
              <a href="/" className="block hover:text-gray-300">
                Pricing
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-3xl">Help</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-gray-300">
                How does it works?
              </a>
              <a href="/" className="block hover:text-gray-300">
                Where to find it?
              </a>
              <a href="/" className="block hover:text-gray-300">
                How to use it?
              </a>
              <a href="/" className="block hover:text-gray-300">
                What's need to be done?
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-3xl">Contacts</h4>
            <ul className="space-y-3">
              <p className="hover:text-gray-300">06387224...</p>
              <p className="hover:text-gray-300">anas.elassri.01@gmail.com</p>
              <p className="hover:text-gray-300">Tokyo streat 52 - 5000</p>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <div className="flex flex-col md:flex-row gap-8 sm:items-center justify-between my-8">
        <p>@ Anas El Assri -- all right reserved. &copy;2025</p>
        <dir className="flex items-center space-x-5">
          <img
            src={Fasbook}
            alt="Fasbook"
            className="w-8 cursor-pointer hover:-translate-y-4 duration-300"
          />
          <img
            src={Twitter}
            alt="Twitter"
            className="w-8 cursor-pointer hover:-translate-y-4 duration-300"
          />
          <img
            src={Instagram}
            alt="Instagram"
            className="w-8 cursor-pointer hover:-translate-y-4 duration-300"
          />
          <img
            src={LinkedIn}
            alt="LinkedIn"
            className="w-8 cursor-pointer hover:-translate-y-4 duration-300"
          />
        </dir>
      </div>
    </div>
  );
};

export default Footer;
