import React, { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import { profile } from "../../data/profile";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const Field = ({ id, label, children }) => (
  <div className="flex flex-col gap-3">
    <label htmlFor={id} className="text-sm text-gray-400 tracking-wide">
      {label}
    </label>
    {children}
  </div>
);

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errMsg, setErrMsg] = useState("");
  const [notice, setNotice] = useState("");

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  // Opens the visitor's email app with the message filled in.
  // No server is involved, so nothing is claimed as "sent" until they send it.
  const handleSend = (e) => {
    e.preventDefault();
    setNotice("");
    if (!form.name.trim()) return setErrMsg("Enter your name.");
    if (!emailPattern.test(form.email.trim())) return setErrMsg("Enter a valid email address.");
    if (!form.subject.trim()) return setErrMsg("Enter a subject.");
    if (!form.message.trim()) return setErrMsg("Enter a message.");
    setErrMsg("");
    const body = `${form.message.trim()}\n\n— ${form.name.trim()} (${form.email.trim()})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject.trim()
    )}&body=${encodeURIComponent(body)}`;
    setNotice("Your email app should open with the message ready to send. If it doesn't, email me directly at " + profile.email + ".");
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Contact" des="Get in touch" />
      </div>
      <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-6">
        <ContactLeft />
        <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
          <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5" onSubmit={handleSend} noValidate>
            {errMsg && (
              <p role="alert" className="py-3 shadow-shadowOne text-center text-orange-500 text-base tracking-wide">
                {errMsg}
              </p>
            )}
            {notice && (
              <p role="status" className="py-3 px-4 shadow-shadowOne text-center text-green-500 text-base tracking-wide">
                {notice}
              </p>
            )}
            <div className="w-full flex flex-col lgl:flex-row gap-6">
              <div className="w-full lgl:w-1/2">
                <Field id="c-name" label="Your name">
                  <input id="c-name" className="contactInput" type="text" autoComplete="name" value={form.name} onChange={update("name")} />
                </Field>
              </div>
              <div className="w-full lgl:w-1/2">
                <Field id="c-email" label="Your email">
                  <input id="c-email" className="contactInput" type="email" autoComplete="email" value={form.email} onChange={update("email")} />
                </Field>
              </div>
            </div>
            <Field id="c-subject" label="Subject">
              <input id="c-subject" className="contactInput" type="text" value={form.subject} onChange={update("subject")} />
            </Field>
            <Field id="c-message" label="Message">
              <textarea id="c-message" className="contactTextArea" rows="8" value={form.message} onChange={update("message")}></textarea>
            </Field>
            <button
              type="submit"
              className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider hover:text-white duration-300 border border-transparent hover:border-designColor"
            >
              Email me
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
