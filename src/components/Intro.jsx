"use client";

const Intro = () => {
  return (
    <div
      className="w-full h-[60vh] lg:h-screen flex flex-col justify-center items-center bg-cover bg-center mt-2 gap-4 font-helvetica"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/aed9h6xneawaaqh9aqz4.jpg)",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex flex-col justify-center items-center gap-4 bg-[#00000056] w-full h-full px-7 lg:px-52 xl:px-[26rem]">
        <span className="font-bold text-2xl tracking-widest text-white block lg:hidden">
          Moroccan <br /> Soul Food
        </span>
        <p className="text-base md:text-lg text-center text-white block lg:hidden">
          {`Le Salama is a celebration of flavors, an ode to balance, and an invitation to sensory journey in the heart of Marrakech.`}
        </p>
        <span className="font-bold text-4xl text-center text-white hidden lg:block">
          {`Le Salama is a celebration of flavors, an ode to balance, and an invitation to sensory journey in the heart of Marrakech.`}
        </span>
        <p className="text-base md:text-lg text-center text-white hidden lg:block">
          {`Le Salama was born from a dream: to create a place where Moroccan tradition meets contemporary culture, where every dish tells a story, and where every meal becomes an unforgettable moment of sharing.`}
          <br />
          {`Nestled in the heart of the mythical Djema el Fna square, Le Salama is a true refuge after an immersion in the colorful and effervescent souks.`}
        </p>
      </div>
    </div>
  );
};

export default Intro;
