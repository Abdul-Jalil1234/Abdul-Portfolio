import React from "react";
import { Link } from "react-scroll";
import Logo from "../layouts/Logo";
import SocialLinks from "../layouts/SocialLinks";
import { navLinks, profile } from "../../data/profile";

const Footer = () => (
  <div className="w-full py-16 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 gap-10">
    <div className="flex flex-col gap-6">
      <Logo />
      <p className="text-base max-w-sm">
        {profile.name}, {profile.role.toLowerCase()} based in Mauritius, open to internships.
      </p>
      <SocialLinks />
    </div>
    <div>
      <h3 className="text-xl text-designColor tracking-wider">Quick links</h3>
      <ul className="grid grid-cols-2 gap-4 font-titleFont font-medium py-6">
        {navLinks.map((item) => (
          <li key={item._id}>
            <Link to={item.link} smooth duration={500} offset={-70}>
              <span className="text-lg relative hover:text-designColor duration-300 cursor-pointer">
                {item.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Footer;
