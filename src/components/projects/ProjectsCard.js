import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe, FaCode } from "react-icons/fa";
import Tag from "../layouts/Tag";
import { asset } from "../../data/profile";

const IconLink = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    title={label}
    className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300"
  >
    {children}
  </a>
);

const ProjectsCard = ({ title, des, tags = [], image, github, live, role }) => {
  return (
    <div className="w-full p-4 xl:px-8 h-full xl:py-8 rounded-lg shadow-shadowOne flex flex-col gap-5 bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 transition-colors duration-1000">
      <div className="w-full overflow-hidden rounded-lg">
        {image ? (
          <img
            className="w-full h-52 object-cover object-top group-hover:scale-105 duration-300"
            src={asset(image)}
            alt={`${title} screenshot`}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-52 flex items-center justify-center bg-gradient-to-br from-[#1e2024] to-black text-designColor text-6xl">
            <FaCode aria-hidden="true" />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg text-designColor font-semibold">{title}</h3>
          <div className="flex gap-2 shrink-0">
            {github && (
              <IconLink href={github} label={`${title} on GitHub`}>
                <BsGithub />
              </IconLink>
            )}
            {live && (
              <IconLink href={live} label={`${title} live demo`}>
                <FaGlobe />
              </IconLink>
            )}
          </div>
        </div>
        {role && <p className="text-sm text-gray-300">{role}</p>}
        <p className="text-sm tracking-wide leading-6">{des}</p>
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
