import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function RooterLayout() {
  return (
    <div className="">
      <div className="max-w-4xl w-full mx-auto">
        <header>
          <Navbar />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default RooterLayout;
