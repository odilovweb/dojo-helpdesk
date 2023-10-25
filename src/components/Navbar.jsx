import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="mb-5">
      <div className="flex gap-5 items-center py-5">
        <h1 className="text-2xl font-bold text-primary">Dojo Helpdesk</h1>
        <nav className="flex gap-3">
          <Link
            to="/"
            className="text-xl text-gray-600 opacity-80 hover:opacity-100 hover:text-black"
          >
            Dashboard
          </Link>
          <Link
            to="/tickets"
            className="text-xl text-gray-600 opacity-80 hover:opacity-100 hover:text-black"
          >
            Tickets
          </Link>
        </nav>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
