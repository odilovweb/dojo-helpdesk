import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function TicketDetail() {
  const { id } = useParams();
  const api = `http://localhost:3000/tickets/${id}`;
  const [data, setData] = useState();
  useEffect(() => {
    axios(api)
      .then((responce) => {
        setData(responce.data);
      })
      .catch((err) => err);
  }, [api]);

  return (
    <>
      {data && (
        <div>
          <h1 className="my-20 text-primary text-3xl font-bold">
            Ticket Details
          </h1>
          <div
            to={`${data.id}`}
            key={data.id}
            className="bg-blue-50 py-2 text-sm rounded-lg px-4 mb-5 relative block "
          >
            <h2 className="font-bold mb-2 text-2xl">{data.title}</h2>
            <h3 className="mb-3">
              <span className="font-bold">Created by </span>{" "}
              <span className="font-medium">{data.user_email}</span>
            </h3>
            <p className="font-medium mb-7 opacity-80">{data.body}</p>
            <span className="absolute bottom-0 right-0 ">
              {data.priority === "low" && (
                <span className="bg-green-300 pt-1 rounded-sm pl-[6px] text-green-700">
                  Low priority
                </span>
              )}
              {data.priority === "medium" && (
                <span className="bg-orange-300 pt-1 rounded-sm pl-[6px]  text-orange-700">
                  Medium priority
                </span>
              )}
              {data.priority === "high" && (
                <span className="bg-red-300 pt-1 rounded-sm pl-[6px]  text-red-700">
                  High priority
                </span>
              )}
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default TicketDetail;
