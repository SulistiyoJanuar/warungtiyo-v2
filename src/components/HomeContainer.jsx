import React from "react";
import heroBg from "../assets/shoppingHero.jpg";

const HomeContainer = () => {
  return (
    <section className=" grid grid-cols-1 md:grid-cols-2 rever gap-2 w-full h-screen mb-15" id="home">
      <div className=" flex-1 py-2 flex flex-col items-center text-center md:items-start md:text-left justify-center gap-6 md:mt-0 pt-12">
        <p className="text-5xl font-bold tracking-wide">
          Jangan lewatkan <span className="text-green-500">penawaran luar biasa</span> kami.
        </p>
        <p className="text-left text-xl text-gray-500">Up to 30% off your first order</p>
        <button className="bg-green-500 md:w-auto w-full px-4 py-2 rounded-lg hover:shadow-md font-semibold duration-100 text-white transition-all ease-in-out">Pesan Sekarang</button>
      </div>
      <div className="flex-1 py-2 flex items-center justify-center">
        <img src={heroBg} className="w-full h-auto" />
      </div>
    </section>
  );
};

export default HomeContainer;
