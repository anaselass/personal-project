import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = ({ banner, heading, subheading, btn1, btn2 }) => {
  return (
    <div className="gradient-bg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
      <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-10">
        {/* banner img */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <img
            src={banner}
            alt="bannerImg"
            className="lg:h-[386px] hidden lg:flex"
          />
        </motion.div>
        {/* banner content */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="md:w-4/5"
        >
          <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-[1.2]">
            {heading}
          </h2>
          <p className="text-[#EBEBEB] text-2xl mb-8">{subheading}</p>
          <div className="space-x-5 space-y-4">
            <button
              className="py-3 px-8 bg-secondary font-semibold text-white rounded
                   hover:bg-primary transition-all duration-300"
            >
              {btn1}
            </button>
            <button
              className="py-3 px-8 bg-secondary font-semibold text-white rounded
                   hover:bg-primary transition-all duration-300"
            >
              {btn2}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
