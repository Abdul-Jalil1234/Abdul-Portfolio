import React from "react";
import Title from "../layouts/Title";
import ZoomableImage from "../layouts/ZoomableImage";
import { certificates, asset } from "../../data/profile";

const Certificates = () => (
  <section id="certificates" className="w-full py-20 border-b-[1px] border-b-black">
    <div className="flex justify-center items-center text-center">
      <Title title="Learning" des="Certificates" />
    </div>
    <p className="max-w-2xl mb-10 text-base leading-7">
      Each certificate below was issued by IBM through Coursera. Select an image to view it full size, or use Verify to check it on Credly.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-10">
      {certificates.map((c) => (
        <div
          key={c.title}
          className="p-4 rounded-lg bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne flex flex-col gap-4"
        >
          <ZoomableImage src={asset(c.image)} alt={`${c.title} certificate`} />
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold text-white">{c.title}</h3>
            <p className="text-sm text-gray-400">
              {c.issuer} · {c.date}
            </p>
          </div>
          <a
            href={c.verify}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center justify-center h-11 rounded-lg bg-[#141518] text-gray-300 hover:text-white border border-transparent hover:border-designColor duration-300"
          >
            Verify on Credly
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Certificates;
