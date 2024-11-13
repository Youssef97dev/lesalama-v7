import Link from "next/link";
import { BsInstagram, BsFacebook, BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center md:items-start bg-primary py-10">
        <div className="w-full h-full flex flex-col justify-center items-center gap-2 text-primary_2 px-10 py-3">
          <span className="uppercase text-sm lg:text-base font-semibold tracking-widest">
            Share concept
          </span>
          <p className="text-center text-sm lg:text-lg">{`Experience a memorable dining adventure at Le Salama, one of Marrakech's finest restaurants. Perfect for celebrations like birthdays or reconnecting with friends and family, our sharing concept dinner promotes warmth and togetherness.`}</p>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center gap-2 text-primary_2 px-10 py-3 text-sm lg:text-base">
          <span className="uppercase font-semibold tracking-widest">
            Reservations
          </span>
          <Link
            href="https://www.sevenrooms.com/explore/lessalamamarrakech/reservations/create/search/"
            target="_blank"
            className="uppercase border border-primary_2 px-3 py-1 hover:bg-primary_2 hover:text-primary transition-all ease-linear text-sm md:text-base"
          >
            Book a table
          </Link>
          <span className="uppercase font-semibold tracking-widest pt-1">
            Opening Hours
          </span>
          <span className="text-center text-sm md:text-base">
            Daily : 12.00 PM to 02.00 AM
          </span>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center gap-2 text-primary_2 px-10 py-3 text-sm lg:text-base">
          <span className="uppercase font-semibold tracking-widest">
            Location
          </span>
          <span className="text-center text-sm md:text-base">
            40 Rue des Banques, Marrakech 40000, Maroc
          </span>
          <span className="uppercase font-semibold tracking-widest pt-1">
            Phone
          </span>
          <Link
            href="http://wa.me/212675480018"
            className="text-center cursor-pointer"
          >
            +212 675-480018
          </Link>
          <span className="uppercase font-semibold tracking-widest">Email</span>
          <span className="text-center">
            reservations@lesalamamarrakech.com
          </span>
        </div>
      </div>
      <div className="w-full h-full flex flex-row justify-center items-center py-5 bg-primary_9 text-primary_1 text-sm lg:text-base">
        <div className="w-full flex justify-start items-center gap-2 px-5 text-sm md:text-base">
          <span>Join Us :</span>
          <Link
            href="https://www.instagram.com/lesalamamarrakech/"
            target="_blank"
          >
            <BsInstagram size={15} />
          </Link>
          <Link
            href="https://www.facebook.com/lesalamamarrakech/"
            target="_blank"
          >
            <BsFacebook size={15} />
          </Link>
          <Link
            href="https://www.pinterest.com/lesalamamarrakech/"
            target="_blank"
          >
            <BsPinterest size={15} />
          </Link>
        </div>
        <div className="w-full flex justify-end items-center px-5">
          © 2024 Le Salama. All Right Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
