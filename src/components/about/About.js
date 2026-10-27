import React from "react";
import Title from "../layouts/Title";
import Tag from "../layouts/Tag";
import ZoomableImage from "../layouts/ZoomableImage";
import { about, quizzes, externship, asset } from "../../data/profile";

const About = () => {
  return (
    <section id="about" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="About" des="About Me" />
      </div>

      {/* Story */}
      <div className="max-w-3xl mx-auto flex flex-col gap-5 text-base leading-7 tracking-wide">
        {about.paragraphs.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>

      {/* Externship */}
      <div className="mt-20">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-300 font-titleFont mb-8">
          National Geographic and Nature Conservancy externship
        </h3>
        <div className="w-full flex flex-col lgl:flex-row gap-8 p-4 lgl:p-8 rounded-lg bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne">
          <div className="w-full lgl:w-1/2">
            <ZoomableImage
              src={asset(externship.image)}
              alt="Marine and Community Conservation Remote Externship certificate"
            />
          </div>
          <div className="w-full lgl:w-1/2 flex flex-col gap-4 justify-center">
            <h4 className="text-xl md:text-2xl font-semibold text-white">{externship.title}</h4>
            <p className="text-sm text-gray-400">
              {externship.partners}. Issued {externship.issued}. Certificate ID {externship.certificateId}.
            </p>
            {externship.description.map((p) => (
              <p key={p.slice(0, 24)} className="text-base leading-7">
                {p}
              </p>
            ))}
            <div className="flex flex-wrap gap-2 mt-2">
              {externship.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quiz competitions */}
      <div className="mt-20">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-300 font-titleFont mb-8">
          Quiz competitions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
          {quizzes.map((q) => (
            <div
              key={q.title}
              className="p-6 rounded-lg bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne flex flex-col gap-5"
            >
              <div className="flex flex-col gap-3">
                {(q.result || q.year) && (
                  <p className="self-start px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg text-sm font-medium">
                    {[q.result, q.year].filter(Boolean).join(" · ")}
                  </p>
                )}
                <h4 className="text-xl font-semibold text-white">{q.title}</h4>
                <p className="text-sm text-gray-400">
                  Represented {q.school} ({q.level})
                </p>
                {q.note && <p className="text-sm leading-6">{q.note}</p>}
              </div>
              {q.certificate && (
                <div className="mt-auto">
                  <ZoomableImage src={asset(q.certificate)} alt={`${q.title} certificate`} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
