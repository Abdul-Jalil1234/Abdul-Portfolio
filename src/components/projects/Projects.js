import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import Title from "../layouts/Title";
import Tag from "../layouts/Tag";
import ProjectsCard from "./ProjectsCard";
import { projects, miniProjects, moreProjects, asset } from "../../data/profile";

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Selected work" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-10">
        {projects.map((p) => (
          <ProjectsCard key={p.title} {...p} />
        ))}
      </div>

      <h3 className="text-2xl font-bold text-gray-300 font-titleFont mt-20 mb-2">
        Browser mini-projects
      </h3>
      <p className="mb-8 text-base">
        Small HTML, CSS and JavaScript projects I built to practise core concepts.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {miniProjects.map((p) => (
          <div
            key={p.title}
            className="p-4 rounded-lg bg-gradient-to-r from-bodyColor to-[#202327] shadow-shadowOne flex flex-col gap-4"
          >
            {p.image && (
              <img
                src={asset(p.image)}
                alt={`${p.title} screenshot`}
                loading="lazy"
                className="w-full h-40 object-cover object-top rounded-lg"
              />
            )}
            <div className="flex items-start justify-between gap-3">
              <h4 className="text-base font-semibold text-designColor">{p.title}</h4>
              <div className="flex gap-3 text-xl text-gray-400 shrink-0">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} on GitHub`} title="GitHub" className="hover:text-designColor duration-300">
                    <BsGithub />
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} live demo`} title="Live demo" className="hover:text-designColor duration-300">
                    <FaGlobe />
                  </a>
                )}
              </div>
            </div>
            <p className="text-sm leading-6">{p.des}</p>
            <div className="flex flex-wrap gap-2 mt-auto pt-1">
              {p.tags.map((tg) => (
                <Tag key={tg}>{tg}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-bold text-gray-300 font-titleFont mt-20 mb-8">
        Scripts and coursework
      </h3>
      <div className="grid grid-cols-1 lgl:grid-cols-3 gap-6">
        {moreProjects.map((p) => (
          <div
            key={p.title}
            className="p-5 rounded-lg bg-black bg-opacity-20 shadow-shadowOne flex flex-col gap-3"
          >
            <div className="flex items-start justify-between gap-3">
              <h4 className="text-base font-semibold text-white">{p.title}</h4>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.title} on GitHub`}
                className="text-xl text-gray-400 hover:text-designColor duration-300"
              >
                <BsGithub />
              </a>
            </div>
            <p className="text-sm leading-6">{p.des}</p>
            <div className="flex flex-wrap gap-2 mt-auto pt-1">
              {p.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
