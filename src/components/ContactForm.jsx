"use client";

import { useState } from "react";

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log("Full name: ", fullname);
    // console.log("Email: ", email);
    // console.log("Message: ", message);

    await fetch("api/email", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFullname("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="mx-auto max-w-80 md:max-w-2xl xl:max-w-3xl mt-8 font-serif">
      <div className="">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Let&apos;s Connect
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600 text-justify">
          Thank you for visiting my website! <br></br> Whether you have a
          question, want to discuss a potential project or just want to say
          Hello, I&apos;d love to hear from you.<br></br> Please fill out the
          form below, and I will get back to you as soon as possible.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="py-4 mt-4 border-t flex flex-col gap-5"
      >
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            placeholder="Dr. Edwige"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="edwige@email.com"
          />
        </div>

        <div>
          <label htmlFor="message">Your Message</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="h-32"
            id="message"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <button
          className="bg-cyan-500 rounded-lg w-72 sm:w-96 mx-auto shadow-lg shadow-cyan-500/50 hover:shadow-indigo-500/40 p-3 text-white font-bold "
          type="submit"
        >
          Send
        </button>
      </form>

      <div className="bg-slate-100 flex flex-col">
        {error &&
          error.map((e) => (
            <div
              key={e.id}
              className={`${
                success ? "text-green-800" : "text-red-600"
              } px-5 py-2`}
            >
              {e}
            </div>
          ))}
      </div>
    </div>
  );
}
