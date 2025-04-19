import AboutImg1 from "../assets/AboutImg.png";
import AboutImg2 from "../assets/AboutImg2.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div
      className="md:px-14 p-4 max-w-screen-2xl mx-auto space-y-10"
      id="about"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <img src={AboutImg1} alt="AboutImg" />
        </motion.div>

        {/* about content */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-2/5"
        >
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-8 leading-normal">
            We Have Been Improuving Our Skills Since We Started{" "}
            <span className="text-secondary">Our Journey.</span>
          </h2>
          <p className="text-tatiary text-lg mb-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
            quae consectetur ipsam ad hic repellendus corporis laboriosam! Saepe
          </p>
          <button
            className="py-3 px-8 bg-secondary font-semibold text-white rounded
                     hover:bg-primary transition-all duration-300"
          >
            Get Started
          </button>
        </motion.div>
      </div>

      {/* 2 Part */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8">
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <img src={AboutImg2} alt="AboutImg" />
        </motion.div>

        {/* about content */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-8 leading-normal">
            Time Is Money We Are Here{" "}
            <span className="text-secondary">To Save Your Time.</span>
          </h2>
          <p className="text-tatiary text-lg mb-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
            quae consectetur ipsam ad hic repellendus corporis laboriosam! Saepe
          </p>
          <button
            className="py-3 px-8 bg-secondary font-semibold text-white rounded
                     hover:bg-primary transition-all duration-300"
          >
            Get Started
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
