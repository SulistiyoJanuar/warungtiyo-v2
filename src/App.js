import React from "react";
import { Header, CreateContainer, MainContainer } from "./components";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-white">
        <Header />

        <main className="  w-screen">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="createitem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
