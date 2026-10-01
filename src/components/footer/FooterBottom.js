import React from "react";
import { profile } from "../../data/profile";

const FooterBottom = () => (
  <div className="w-full py-10">
    <p className="text-center text-gray-500 text-base">
      © {new Date().getFullYear()} {profile.name}. All rights reserved.
    </p>
  </div>
);

export default FooterBottom;
