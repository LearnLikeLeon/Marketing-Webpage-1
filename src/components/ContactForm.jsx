"use client";

import { useState } from "react";

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [training, setTraining] = useState("");
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
        service,
        training,
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
        service,
        training,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFullname("");
      setEmail("");
      setService("");
      setTraining("");
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
          <label
            htmlFor="fullname"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Full Name
          </label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            placeholder="Dr. Edwige"
            className="block w-full h-11 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="edwige@email.com"
            className="block w-full h-11 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Select your service:
          </label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
            className="block w-full h-11 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option value="" disabled>
              Select a service
            </option>
            <option value="Github Profile Optimization">
              Github Profile Optimization
            </option>
            <option value="Data Analysis">Data Analysis</option>
            <option value="Research and Consulting">
              Research and Consulting
            </option>
            <option value="Training">Training</option>
            <option value="Website Development">Website Development</option>
            <option value="Portfolio Building "> Portfolio Building</option>
            <option value=" Mentorship and Coaching">
              {" "}
              Mentorship and Coaching
            </option>
            <option value="Teaching ">Teaching </option>
            <option value="Tutoring "> Tutoring</option>
            <option value="Collaboration ">Collaboration </option>
          </select>
        </div>

        <div>
          <label
            htmlFor="training"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Select your training:
          </label>
          <select
            id="training"
            value={training}
            onChange={(e) => setTraining(e.target.value)}
            className="block w-full h-11 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          >
            <option value="" disabled>
              Select a training
            </option>
            <option value="SQL">SQL</option>
            <option value="Excel">Excel</option>
            <option value="Power BI">Power BI</option>
            <option value="Data Analysis">Data Analysis</option>
            <option value="Cloud Computing">Cloud Computing</option>
            <option value="Professional Development">
              Professional Development
            </option>
            <option value="Workshops">Workshops</option>
            <option value="Research and Methodology">
              Research and Methodology{" "}
            </option>
            <option value="Other">Others</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Your Message
          </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            id="message"
            placeholder="Type your message here..."
            className="block w-full h-32 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
