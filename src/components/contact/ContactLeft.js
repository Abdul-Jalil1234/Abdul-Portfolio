import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import SocialLinks from "../layouts/SocialLinks";
import Logo from "../layouts/Logo";
import { profile } from "../../data/profile";

const Row = ({ icon, children }) => (
  <p className="text-base text-gray-400 flex items-center gap-3">
    <span className="text-designColor shrink-0" aria-hidden="true">{icon}</span>
    {children}
  </p>
);

const ContactLeft = () => (
  <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
    <Logo className="w-16 h-16 text-2xl" />
    <div className="flex flex-col gap-4">
      <h3 className="text-3xl font-bold text-white">{profile.name}</h3>
      <p className="text-lg font-normal text-gray-400">{profile.role}</p>
      <p className="text-base text-gray-400 tracking-wide">{profile.contactBio}</p>
      <Row icon={<FaMapMarkerAlt />}>
        <span className="text-lightText">{profile.location}</span>
      </Row>
      <Row icon={<FaPhoneAlt />}>
        <a className="text-lightText hover:text-designColor duration-300" href={`tel:${profile.phoneHref}`}>
          {profile.phone}
        </a>
      </Row>
      <Row icon={<FaEnvelope />}>
        <a className="text-lightText hover:text-designColor duration-300 break-all" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </Row>
    </div>
    <div className="flex flex-col gap-4">
      <h2 className="text-base mb-2">Find me on</h2>
      <SocialLinks />
    </div>
  </div>
);

export default ContactLeft;
