import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { experience, leadership } from "../../data/profile";

const Column = ({ heading, items }) => (
  <div className="w-full lgl:w-1/2">
    <div className="py-6 lgl:py-12 font-titleFont">
      <h2 className="text-3xl md:text-4xl font-bold">{heading}</h2>
    </div>
    <div className="w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 py-2">
      {items.map((e) => (
        <ResumeCard key={e.title + e.subTitle} {...e} />
      ))}
    </div>
  </div>
);

const Experience = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}
    className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-16"
  >
    <Column heading="Work experience" items={experience} />
    <Column heading="Leadership and activities" items={leadership} />
  </motion.div>
);

export default Experience;
