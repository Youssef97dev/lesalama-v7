import React from "react";

const ImageShow = ({ src }) => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${src})`,
        backgroundAttachment: "fixed",
      }}
    ></div>
  );
};

export default ImageShow;
