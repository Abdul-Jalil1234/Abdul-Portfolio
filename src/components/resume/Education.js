import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { education } from "../../data/profile";

const Education = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}
    className="w-full"
  >
    <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
      <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
    </div>
    <div className="w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 py-2">
      {education.map((e) => (
        <ResumeCard key={e.title} {...e} />
      ))}
    </div>
  </motion.div>
);

export default Education;
