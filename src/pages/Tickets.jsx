import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Tickets() {
  const [data, setData] = useState("");
  const api = "http://localhost:3000/tickets";
  useEffect(() => {
    axios(api)
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => err);
  }, [api]);

  return (
    <div className="py-5">
      <div className="flex items-center py-4 mb-4">
        <div className="mr-auto">
          <h2 className="font-extrabold text-lg text-primary  opacity-80">
            Tickets
          </h2>
          <p className="opacity-80">Currently open tickets.</p>
        </div>
        <Link
          to="/create"
          className="bg-primary py-2 px-1 rounded-sm  text-center   opacity-80 text-white"
        >
          New Ticket
        </Link>
      </div>
      {data && (
        <div>
          {data.map((item) => {
            return (
              <Link
                to={`${item.id}`}
                key={item.id}
                className="bg-blue-50 py-2 text-sm rounded-lg px-4 mb-5 relative block"
              >
                <h1 className="font-bold mb-5">{item.title}</h1>
                <p className="font-medium mb-7 opacity-80">
                  {item.body.substring(0, 200)}...
                </p>
                <span className="absolute bottom-0 right-0 ">
                  {item.priority === "low" && (
                    <span className="bg-green-300 pt-1 rounded-sm pl-[6px] text-green-700">
                      Low priority
                    </span>
                  )}
                  {item.priority === "medium" && (
                    <span className="bg-orange-300 pt-1 rounded-sm pl-[6px]  text-orange-700">
                      Medium priority
                    </span>
                  )}
                  {item.priority === "high" && (
                    <span className="bg-red-300 pt-1 rounded-sm pl-[6px]  text-red-700">
                      High priority
                    </span>
                  )}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Tickets;
