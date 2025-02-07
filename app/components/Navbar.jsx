"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../../public/images/logo.svg";
import Logos from "../../public/images/paves.png";
import { HiMenu } from "react-icons/hi";
import { saveNavs } from "./uidata";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showSaveNav, isSetShowSaveNav] = useState(false);
  useEffect(() => {
    window.onscroll = (ev) => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      console.log(isSticky);
    };
  }, []);

  const handleShowSaveNav = () => {
    isSetShowSaveNav(true);
  };
  const handleHideSaveNav = () => {
    isSetShowSaveNav(false);
  };
  return (
    <>
      {/* Nav For Medium/Laptop screens */}
      <nav
        className={`duration-1000 ${
          isSticky ? "bg-gradient-to-l from-[#b4a9c9] to-[#c8b5f5] shadow-md lg:py-3" : "bg-transparent lg:py-3"
        }  z-20  lg:px-10 hidden sticky top-0  lg:flex justify-between items-center`}
      >
        <ul className="flex items-center gap-x-20">
          <Link href={"/"}>
            <li className="flex justify-center items-center">
              <Image src={Logos} width={70} alt="Pave Logo" />
              <p className=" bg-gradient-to-r  from-[#5d18e5] to-[#5317c8] text-transparent bg-clip-text font-extrabold ml-2 text-2xl">
                {" "}
                PAVE
              </p>
            </li>
          </Link>
          <ul className="flex gap-x-5 relative">
            <li className="">
              <Link
                href={"/save"}
                onMouseOver={handleShowSaveNav}
                onMouseOut={handleHideSaveNav}
              >
                Save
              </Link>
            </li>
            <li>
              <Link href={"/invest"}>Invest</Link>
            </li>
            <li>
              <Link href={"/stories"}>Stories</Link>
            </li>
            <li>
              <Link href={"/faqs"}>FAQs</Link>
            </li>
            <li>
              <Link href={"/resources"}>Resources</Link>
            </li>
            <ul
              className={`bg-white absolute shadow-lg w-[150%] top-4 -left-[25%] rounded-3xl cursor-pointer p-5 ${
                showSaveNav ? "grid grid-cols-2 gap-y-3" : "hidden"
              }`}
              onMouseOver={handleShowSaveNav}
              onMouseOut={handleHideSaveNav}
            >
              {saveNavs.map((nav, index) => (
                <li key={index}>
                  <Link
                    href={"/"}
                    className={`flex gap-x-5 items-start hover:bg-[#f8fbfb] p-3 rounded-md ${nav.hover}`}
                  >
                    <Image
                      src={nav.img}
                      quality={100}
                      width={40}
                      height={40}
                      alt={nav.title}
                    />
                    <div className="">
                      <h1 className="text-sm font-bold">{nav.title}</h1>
                      <p className="text-[#3d4f60] text-sm font-light">
                        {nav.subtitle}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </ul>
        </ul>

        <ul className="flex items-center gap-x-5">
          <li>
            <Link
              href={"/auth/login"}
              className="btn btn-outline normal-case hover:text-[#122231] hover:bg-transparent"
            >
              Sign in
            </Link>
          </li>
          <li>
            <Link
              href={"/auth/register"}
              className="btn btn-neutral normal-case bg-[#122231] text-white"
            >
              Create free account
            </Link>
          </li>
        </ul>
      </nav>
      
      
      
      {/* Nav For Mobile */}
      <nav className="  block lg:hidden  md:py-8 md:px-10 fixed z-10 left-0 w-[100%]  h-[100%] ">
        <ul
          className={`duration-1000 ${
            isSticky ? "bg-white shadow-md" : "bg-transparent"
          } flex items-center justify-between px-6 py-1 `}
        >
          <li>
            <Link href={"/"}>
              <Image src={Logos} width={70} alt="Pave Logo" />
            </Link>
          </li>
          <li
            onClick={() => setShowNav(!showNav)}
            className="flex flex-col gap-y-2 items-center"
          >
            {/* <HiMenu size={40} /> */}
            <span
              className={` duration-500 h-[2px] w-6 bg-black ${
                showNav ? "rotate-[40deg]" : ""
              }`}
            ></span>
            <span
              className={`duration-500 h-[2px] w-6 bg-black ${
                showNav ? "hidden" : ""
              }`}
            ></span>
            <span
              className={` duration-500 relative h-[2px] w-6 bg-black ${
                showNav ? "rotate-[-40deg] top-[-10px]" : ""
              }`}
            ></span>
          </li>
        </ul>

        <ul
          className={`bg-[#f2f7f8] flex flex-col   text-center gap-y-6  w-[100%] h-[100vh] px-6  py-20 relative ${
            showNav ? "opacity-100" : "opacity-0"
          }  duration-1000`}
        >
          <li>
            <Link href={"/save"}>Save</Link>
          </li>
          <li>
            <Link href={"/invest"}>Invest</Link>
          </li>
          <li>
            <Link href={"/stories"}>Stories</Link>
          </li>
          <li>
            <Link href={"/faqs"}>FAQs</Link>
          </li>
          <li>
            <Link href={"/resources"}>Resources</Link>
          </li>
          <li>
            <Link
              href={"/auth/login"}
              className="btn btn-outline normal-case hover:text-[#122231] hover:bg-transparent w-[100%] btn-lg "
            >
              Sign in
            </Link>
          </li>
          <li>
            <Link
              href={"/auth/register"}
              className="btn btn-neutral normal-case bg-[#122231] text-white w-[100%]  btn-lg"
            >
              Create free account
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
