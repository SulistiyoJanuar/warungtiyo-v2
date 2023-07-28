import React from "react";
import { motion } from "framer-motion";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import HomeContainer from "./HomeContainer";
import RowContainer from "./RowContainer";

const MainContainer = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />

      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between ">
          <p className="text-3xl font-semibold capitalize relative before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-3 before:left-0 before:bg-green-600 transition-all ease-in-out duration-100">
            Product Terlaris
          </p>

          <div className="hidden md:flex gap-4 items-center">
            <motion.div whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-lg bg-green-300 hover:bg-green-500 flex items-center justify-center transition-all ease-in-out duration-100">
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-lg bg-green-300 hover:bg-green-500 flex items-center justify-center transition-all ease-in-out duration-100">
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer flag={true}/>
      </section>
    </div>
  );
};

export default MainContainer;
