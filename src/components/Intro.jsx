"use client";

const Intro = () => {
  return (
    <div
      className="w-full h-[70vh] flex flex-col justify-center items-center bg-cover bg-center mt-2 px-7 gap-4"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/aed9h6xneawaaqh9aqz4.jpg)",
        backgroundAttachment: "fixed",
      }}
    >
      <span className="font-bold text-xl tracking-widest text-white">
        Moroccan <br /> Soul Food
      </span>
      <p className="text-lg text-center text-white">
        {`Le Salama is a celebration of flavors, an ode to balance, and an invitation to sensory journey in the heart of Marrakech.`}
      </p>
    </div>
  );
};

export default Intro;
