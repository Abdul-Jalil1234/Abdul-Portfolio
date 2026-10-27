import React from "react";
import { profile } from "../../data/profile";

const Logo = ({ className = "" }) => (
  <span
    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg border-2 border-designColor text-white font-titleFont font-bold text-lg tracking-wide ${className}`}
    aria-label={profile.name}
  >
    {profile.initials}
  </span>
);

export default Logo;
