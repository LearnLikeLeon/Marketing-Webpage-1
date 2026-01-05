"use client";

import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="mt-4 h-full bg-gray-200 p-1 lg:p-4">
      {/*  Background Image */}
      <div className="w-full">
        <Image
          src="https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/Dr+Edwige_Profile/profile-background.jpg"
          alt="profile section background image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-44 sm:h-full rounded-tl-lg rounded-tr-lg"
        />
      </div>

      {/* Photo */}
      <div className="flex flex-col items-center -mt-20 lg:-mt-32">
        <Image
          src="https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/Dr+Edwige_Profile/Edwige_Profile+Picture.jpg"
          alt="Author Logo"
          width={190}
          height={190}
          className="object-none object-top w-40 h-40 lg:w-60 lg:h-60 border-4 border-white rounded-full"
        />
        <div className="flex items-center space-x-2 mt-2">
          <p className="text-2xl md:text-3xl font-serif italic">
            Dr. Edwige Songong
          </p>
          <span className="bg-blue-500 rounded-full p-1" title="Verified">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-100 h-2.5 w-2.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </span>
        </div>
        <p className="text-gray-700 font-serif font-medium  ">
          Data Analyst | Higher Ed Educator
        </p>
        <p className="text-sm text-gray-500 font-serif font-light">
          Washington DC , USA
        </p>
      </div>

      <div className="mx-auto max-w-xs sm:max-w-lg lg:max-w-4xl xl:max-w-7xl text-justify items-center font-serif text-black text-xl pt-4">
        <p className="indent-12">
          I’m a Microsoft Certified Data Analyst with a passion for turning data
          into actionable insights. My journey is about making a difference and
          is driven by a desire to positively impact the world using data.
          {/* Whether through Teaching, Collaboration, advancing STEM education, or
          Mentoring others to be confident & dynamic.*/}
        </p>

        <p className="indent-12">
          My experience spans various roles, from Research assistantships to
          Teaching, where I&apos;ve not only developed technical skills but also
          learned the importance of clear communication, collaboration, and
          leadership. I believe that data can change lives and I am committed to
          using my data analytics skills to help organizations make informed
          decisions that lead to meaningful progress.
        </p>
      </div>

      {/* Other details :*/}
      <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
        <div className="flex items-center space-x-4 mt-2">
          <Link
            href="https://www.linkedin.com/in/edwige-f-songong"
            className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <svg
              className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
              <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
            </svg>
            <span className="font-serif">Message</span>
          </Link>

          <Link
            href="https://calendly.com/edwigesongong/30min"
            className="inline-flex justify-center rounded-md  bg-blue-300 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <svg
              className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-serif">Book a free consultation</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
