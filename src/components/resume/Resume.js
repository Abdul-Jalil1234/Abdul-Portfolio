import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";

const tabs = [
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
];

const Resume = () => {
  const [active, setActive] = useState("education");
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Background" des="My Resume" />
      </div>
      <div role="tablist" className="w-full grid grid-cols-1 md:grid-cols-3">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={active === t.id}
            onClick={() => setActive(t.id)}
            className={`${
              active === t.id ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            {t.label}
          </button>
        ))}
      </div>
      {active === "education" && <Education />}
      {active === "skills" && <Skills />}
      {active === "experience" && <Experience />}
    </section>
  );
};

export default Resume;
