import React from "react";
import { motion } from "framer-motion";
import { skills } from "../../data/profile";

const Group = ({ heading, note, items }) => (
  <div className="w-full">
    <h3 className="text-xl font-semibold text-white font-titleFont">{heading}</h3>
    {note && <p className="text-sm text-gray-400 mt-1">{note}</p>}
    <div className="flex flex-wrap gap-3 mt-5">
      {items.map((s) => (
        <span
          key={s}
          className="px-4 py-2 rounded-lg bg-black bg-opacity-25 text-gray-200 text-sm shadow-shadowOne hover:text-designColor duration-300"
        >
          {s}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}
    className="w-full flex flex-col gap-12 py-12"
  >
    <Group
      heading="Core technical skills"
      note="Backed by certificates and projects on this site."
      items={skills.core}
    />
    <Group heading="Also familiar with" items={skills.familiar} />
    <Group heading="Strengths" items={skills.soft} />
  </motion.div>
);

export default Skills;
