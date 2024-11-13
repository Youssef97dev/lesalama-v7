"use client";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4 py-5">
      <span className="text-center text-primary px-7 text-sm xl:text-lg">
        {
          "WE DON’T SIMPLY WANT TO OFFER AN EXCEPTIONAL SERVICE, WE WANT TO PROVIDE A UNIQUE EXPERIENCE."
        }
      </span>
      <Link
        href="https://www.lesalamamarrakech.com/menu/"
        target="_blank"
        className="uppercase border border-primary text-primary text-sm px-4 py-1 hover:bg-primary hover:text-primary_2 transition-all ease-linear"
      >
        Menu
      </Link>
    </div>
  );
};

export default Menu;
