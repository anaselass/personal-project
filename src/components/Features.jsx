import featuresImg from "../assets/FImg.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Features = () => {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id="feature">
      <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">
        {/* Left Text Block */}
        <motion.div
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="lg:w-1/3"
        >
          <h3 className="text-4xl font-bold text-primary mb-3">
            Why we are the best
          </h3>
          <p className="text-base text-tatiary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eum.
            Suscipit nostrum officia ex saepe minima qui inventore
          </p>
        </motion.div>

        {/* Cards Section */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-full"
        >
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {[0, 1, 2].map((_, index) => (
              <div
                key={index}
                className={`bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 
                flex items-center justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer 
                ${index === 1 ? "md:mt-16" : ""}`}
              >
                <div>
                  <img src={featuresImg} alt="featuresImg" />
                  <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                    Convention study schedule
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
