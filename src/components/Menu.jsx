"use client";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4 py-5">
      <span className="text-center text-primary px-7 text-base lg:text-lg">
        {
          "We don't simply want to offer an exceptional service, we want to provide a unique experience."
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
