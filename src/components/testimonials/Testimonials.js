import React from "react";
import Title from "../layouts/Title";
import { testimonials } from "../../data/profile";

// Renders nothing until real recommendations are added in src/data/profile.js
const Testimonials = () => {
  if (!testimonials.length) return null;
  return (
    <section id="testimonials" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Recommendations" des="What people say" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="p-6 rounded-lg bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne"
          >
            <blockquote className="text-base leading-7 text-gray-300">{t.quote}</blockquote>
            <figcaption className="mt-4 text-sm text-gray-400">
              <span className="text-white font-semibold">{t.name}</span>, {t.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
