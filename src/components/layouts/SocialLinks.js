import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { profile } from "../../data/profile";

const SocialLinks = ({ size = "" }) => {
  const items = [
    { label: "GitHub", href: profile.github, icon: <FaGithub />, external: true },
    { label: "LinkedIn", href: profile.linkedin, icon: <FaLinkedinIn />, external: true },
    { label: "Email", href: `mailto:${profile.email}`, icon: <FaEnvelope />, external: false },
  ];
  return (
    <div className="flex gap-4">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          aria-label={item.label}
          title={item.label}
          {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={`bannerIcon ${size}`}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
