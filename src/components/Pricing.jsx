import { useState } from "react";
import Green from "../assets/Rectangle1.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const packages = [
    {
      name: "Start",
      monthlyPrice: 19,
      yearlyPrice: 199,
      descreption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      green: Green,
    },
    {
      name: "Advance",
      monthlyPrice: 39,
      yearlyPrice: 399,
      descreption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      green: Green,
    },
    {
      name: "Premium",
      monthlyPrice: 69,
      yearlyPrice: 699,
      descreption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      green: Green,
    },
  ];

  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto py-10" id="pricing">
      <div className="text-center">
        <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">
          Here Are All Our Plans
        </h2>
        <p className="text-tatiary md:w-1/3 mx-auto px-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
          cupiditate, asperiores culpa nemo
        </p>

        {/* toogle pricing */}
        <div className="mt-16">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer"
          >
            <span className="mr-8 text-2xl font-semibold">Monthly</span>
            <div className="w-14 h-8 bg-gray-300 rounded-full transition duration-200 ease-in-out flex items-center">
              <div
                className={`w-6 h-6 rounded-full transition-all duration-300 ${
                  isYearly ? "bg-primary ml-6" : "bg-gray-500 ml-2"
                }`}
              ></div>
            </div>
            <span className="ml-8 text-2xl font-semibold">Yearly</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
        </div>
      </div>

      {/* Pricing Crads */}

      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto"
      >
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-[rgba(255,255,255,0.04)] py-10 md:px-6 px-4 rounded-lg shadow-3xl"
          >
            <h3 className="text-3xl font-bold text-center text-primary">
              {pkg.name}
            </h3>
            <p className="text-tatiary text-center my-5">{pkg.descreption}</p>
            <p className="mt-5 text-center text-secondary text-4xl font-bold">
              {isYearly ? `$ ${pkg.yearlyPrice}` : `$ ${pkg.monthlyPrice}`}{" "}
              <span className="text-base text-tatiary font-medium">
                / {isYearly ? "Year" : "Month"}
              </span>
            </p>
            <ul className="mt-4 space-y-2 px-4">
              <li className="flex gap-2 items-center">
                <img src={pkg.green} alt="circle" className="w-4 h-4" />
                Vides of lessons
              </li>
              <li className="flex gap-2 items-center">
                <img src={pkg.green} alt="circle" className="w-4 h-4" />
                Home work check
              </li>
              <li className="flex gap-2 items-center">
                <img src={pkg.green} alt="circle" className="w-4 h-4" />
                Monthly conferences
              </li>
              <li className="flex gap-2 items-center">
                <img src={pkg.green} alt="circle" className="w-4 h-4" />
                Additiona practical tasks
              </li>
              <li className="flex gap-2 items-center">
                <img src={pkg.green} alt="circle" className="w-4 h-4" />
                Personal advices from teachers
              </li>
            </ul>
            <div className="w-full mx-auto mt-8 flex items-center justify-center">
              <button
                className="py-3 px-8 bg-secondary font-semibold text-white rounded
                   hover:bg-primary transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Pricing;
