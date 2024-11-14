import React from "react";

import Link from "next/link";

const ImageShow = ({ src }) => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${src})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full h-full flex-col justify-center items-center gap-6 py-5 bg-[#00000056] hidden lg:flex px-72">
        <span className="text-center text-white text-4xl">
          {
            "We don't simply want to offer an exceptional service, we want to provide a unique experience."
          }
        </span>
        <Link
          href="https://www.lesalamamarrakech.com/menu/"
          target="_blank"
          className="uppercase border border-white text-white text-2xl px-4 py-1 hover:bg-white hover:text-primary transition-all ease-linear"
        >
          Menu
        </Link>
      </div>
    </div>
  );
};

export default ImageShow;
