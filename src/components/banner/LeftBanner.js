import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-scroll";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import SocialLinks from "../layouts/SocialLinks";
import { profile } from "../../data/profile";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: profile.titles,
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-12">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">Welcome to my portfolio</h4>
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor">{profile.name}</span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide max-w-xl">
          {profile.heroBio}
        </p>
        <div className="flex flex-wrap gap-4 mt-2">
          <Link to="projects" smooth duration={500} offset={-70}>
            <span className="inline-flex items-center h-12 px-6 rounded-lg bg-designColor text-white font-medium cursor-pointer hover:opacity-90 duration-300">
              View my projects
            </span>
          </Link>
          <Link to="contact" smooth duration={500} offset={-70}>
            <span className="inline-flex items-center h-12 px-6 rounded-lg border border-gray-600 text-gray-200 font-medium cursor-pointer hover:border-designColor hover:text-white duration-300">
              Get in touch
            </span>
          </Link>
          {profile.cv && (
            <a
              href={process.env.PUBLIC_URL + profile.cv}
              download
              className="inline-flex items-center h-12 px-6 rounded-lg border border-gray-600 text-gray-200 font-medium hover:border-designColor hover:text-white duration-300"
            >
              Download CV
            </a>
          )}
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base mb-4">Find me on</h2>
          <SocialLinks />
        </div>
        <div>
          <h2 className="text-base mb-4">Tech I use most</h2>
          <div className="flex gap-4">
            {[
              { icon: <SiJavascript />, label: "JavaScript" },
              { icon: <FaReact />, label: "React" },
              { icon: <FaNodeJs />, label: "Node.js" },
              { icon: <FaPython />, label: "Python" },
            ].map((t) => (
              <span key={t.label} className="bannerIcon" title={t.label} aria-label={t.label}>
                {t.icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
