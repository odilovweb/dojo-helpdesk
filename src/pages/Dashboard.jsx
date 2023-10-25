import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="pt-5">
      <div className="mb-8">
        <h2 className="font-extrabold text-lg text-primary mb-5 opacity-80">
          Dahsboard
        </h2>
        <p className="font-semibold text-gray-600 opacity-90 mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aut
          modi, delectus libero nostrum quasi. Tempore vel, harum adipisci rerum
          consequatur inventore esse sed alias facilis quis quasi autem
          voluptas? Eaque asperiores, ab perspiciatis culpa libero quas impedit
          rem. Autem minima placeat vitae illo earum consequuntur ab aperiam
          blanditiis voluptate.
        </p>
        <Link
          to="/tickets"
          className="bg-primary py-2 px-1 rounded-sm block max-w-[110px] text-center mx-auto  opacity-80 text-white"
        >
          View Tickets
        </Link>
      </div>
      <div>
        <h2 className="font-extrabold text-lg text-primary mb-5 opacity-80">
          Comnay updates
        </h2>
        <div>
          <div className="bg-blue-50 py-2 text-sm rounded-lg px-4 mb-5">
            <h1 className="font-bold mb-5">
              New member of the web dev team...
            </h1>
            <p className="font-medium mb-7 opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              at quam. Dolores omnis possimus quam soluta rerum illo laborum
              ullam pariatur molestiae, modi beatae corrupti.
            </p>
          </div>
          <div className="bg-blue-50 py-2 text-sm rounded-lg px-4 mb-5">
            <h1 className="font-bold mb-5">New website live!</h1>
            <p className="font-medium mb-7 opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              at quam. Dolores omnis possimus quam soluta rerum illo laborum
              ullam pariatur molestiae, modi beatae corrupti, assumenda
              distinctio adipisci, cupiditate minima eum vitae? Similique dicta
              est facilis debitis, autem temporibus quo repellat illum unde id
              iste veritatis eveniet, aspernatur enim quas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
