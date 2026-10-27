import React, { useState } from "react";
import { profile } from "../../data/profile";

const RightBanner = () => {
  const [hasPhoto, setHasPhoto] = useState(Boolean(profile.photo));
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <div className="relative w-[260px] h-[344px] lgl:w-[340px] lgl:h-[450px] rounded-2xl overflow-hidden bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex items-center justify-center">
        {hasPhoto ? (
          <img
            src={process.env.PUBLIC_URL + profile.photo}
            alt={profile.name}
            onError={() => setHasPhoto(false)}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <span
            aria-label={profile.name}
            className="font-titleFont font-bold text-8xl lgl:text-9xl text-designColor opacity-90"
          >
            {profile.initials}
          </span>
        )}
      </div>
    </div>
  );
};

export default RightBanner;
