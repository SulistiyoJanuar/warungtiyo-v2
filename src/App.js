import React, { useEffect } from "react";
import { Header, CreateContainer, MainContainer } from "./components";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { getAllProduct } from "./utils/firebaseFunction";
import { actionType } from "./context/reducer";

const App = () => {
  const [{}, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllProduct().then((data) => {
      dispatch({
        type: actionType.SET_PRODUCTS,
        products: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-white">
        <Header />

        <main className="md:mt-0 mt-16 py-4 px-4 md:px-16 w-full ">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="createitem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
