"use client";

import Image from "next/image";
import Link from "next/link";
import {
  // RxArrowTopRight,
  RxGithubLogo,
  RxLinkedinLogo,
  RxTwitterLogo,
  // RxCrossCircled,
} from "react-icons/rx";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, React } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white z-40">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <Image
            src="https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/Dr+Edwige_Logos/Data_Portfolio_Logo_3.jpg"
            alt="My Brand or Website Logo"
            width={80}
            height={80}
            className="cursor-pointer"
            priority
          />
        </Link>

        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="ml-10 uppercase hover:border-b text-xl"
              >
                {" "}
                About{" "}
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection("blog")}
                className="ml-10 uppercase hover:border-b text-xl"
              >
                {" "}
                Projects{" "}
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="ml-10 uppercase hover:border-b text-xl"
              >
                {" "}
                Services{" "}
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="ml-10 uppercase hover:border-b text-xl"
              >
                {" "}
                Contact{" "}
              </button>
            </li>
            <li>
              <a
                href=" https://calendly.com/edwigesongong/30min"
                className="ml-10 inline-flex justify-center rounded-md bg-blue-300 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 "
              >
                {" "}
                Schedule a free consultation{" "}
              </a>
            </li>
          </ul>
        </div>

        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 w-[65%] p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end ">
          <div onClick={handleNav} className="cursor-pointer ">
            {/* <RxCrossCircled size={35} />    */}
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div>
          <ul>
            <div className=" flex flex-col py-4">
              <li onClick={() => scrollToSection("about")}>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="m-2 uppercase text-xl cursor-pointer "
                >
                  {" "}
                  About{" "}
                </button>
              </li>

              <li onClick={() => scrollToSection("blog")}>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="m-2 uppercase text-xl cursor-pointer "
                >
                  {" "}
                  Projects{" "}
                </button>
              </li>

              <li onClick={() => scrollToSection("services")}>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="m-2 uppercase text-xl cursor-pointer "
                >
                  {" "}
                  Services{" "}
                </button>
              </li>

              <li onClick={() => scrollToSection("contact")}>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="m-2 uppercase text-xl cursor-pointer "
                >
                  {" "}
                  Contact{" "}
                </button>
              </li>
              <li className="rounded-md bg-blue-300 text-sm font-semibold w-48 px-3 py-2 mt-8">
                <a href=" https://calendly.com/edwigesongong/30min">
                  {" "}
                  Book a free consultation{" "}
                </a>
              </li>
            </div>
          </ul>
        </div>

        <div className=" flex flex-row justify-around pt-4 items-center">
          <a href="https://x.com/edwige_songong">
            <RxTwitterLogo
              href="https://www.x.com/edwige_songong"
              size={30}
              className="text-blue-500 cursor-pointer"
            />
          </a>

          <a href="https://www.linkedin.com/in/edwige-f-songong">
            <RxLinkedinLogo
              href="https://www.linkedin.com/in/edwige-f-songong"
              size={30}
              className="text-blue-500 cursor-pointer"
            />
          </a>

          <a href="https://github.com/Songonge">
            <RxGithubLogo
              href="https://www.github.com/Songonge"
              size={30}
              className="text-blue-500 cursor-pointer"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
