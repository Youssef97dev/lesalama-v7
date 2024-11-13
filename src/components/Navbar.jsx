"use client";
import { useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-30 p-3 md:p-5`}>
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-center items-center">
            {/* Menu Icon */}
            <div className="">
              <button onClick={() => setIsOpen(!isOpen)}>
                <IoMenu size={40} color="#fff" />
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center">
            {/* Langue */}
            <div
              className="relative "
              onMouseLeave={() => setIsDropdownOpen(false)}
              onMouseEnter={() => setIsDropdownOpen(true)}
            >
              <button className="text-white px-4 py-2 flex justify-center items-center gap-2">
                <img
                  src="/icons/english.png"
                  className="w-7 h-7 md:w-8 md:h-8"
                />
                <IoMdArrowDropdown size={18} />
              </button>
              {isDropdownOpen && (
                <ul className="absolute top-8 bg-primary_9 mt-2 py-2 w-32 shadow-lg flex justify-center items-center">
                  <li className="px-4 py-2 hover:bg-primary_3 rounded-lg cursor-pointer">
                    <Link href="#">
                      <img
                        src="/icons/english.png"
                        className="w-5 h-5 md:w-7 md:h-7"
                      />
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-primary_3 rounded-lg cursor-pointer">
                    <Link href="/fr">
                      <img
                        src="/icons/france.png"
                        className="w-5 h-5 md:w-7 md:h-7"
                      />
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            {/* Book table button */}
            <div className="hidden md:block">
              <Link
                href="https://www.sevenrooms.com/explore/lessalamamarrakech/reservations/create/search/"
                target="_blank"
                className="border border-white bg-transparent text-white px-4 py-2 hover:bg-white hover:text-primary transition-all ease-linear"
              >
                Book a Table
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Full-screen mobile menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-700"
        enterFrom="transform -translate-x-full"
        enterTo="transform translate-x-0"
        leave="transition ease-in duration-500"
        leaveFrom="transform translate-x-0"
        leaveTo="transform -translate-x-full"
      >
        <div className="fixed top-0 left-0 w-[80%] md:w-[50%] lg:w-[30%] xl:w-[20%] h-screen bg-primary z-20 flex flex-col items-center justify-center">
          <ul className="space-y-5 md:space-y-10 text-center text-white text-xl">
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(!isOpen)}
                className="hover:text-primary_2"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setIsOpen(!isOpen)}
                className="hover:text-primary_2"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href="https://www.lesalamamarrakech.com/menu/lunch/"
                target="_blank"
                className="hover:text-primary_2"
              >
                MENU
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-primary_2">
                GALLERY
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary_2">
                EVENTS
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </>
  );
};

export default Navbar;
