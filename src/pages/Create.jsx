import { data } from "autoprefixer";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const api = "http://localhost:3000/tickets";
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPrority] = useState("low");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(api, {
        title,
        user_email: email,
        priority,
        body,
      })
      .then((data) => data)
      .then((err) => err);
    navigate("/tickets");
  };
  return (
    <div className="flex items-center gap-5 flex-col">
      <h1 className="text-2xl font-bold text-primary">Open a new Ticket</h1>
      <form
        className="bg-purple-100 items-center gap-5 flex flex-col max-w-[400px] w-full py-4 px-3"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label className="flex flex-col gap-1 w-full">
          <span className="text-xs font-bold opacity-80">
            Title of your Ticket:
          </span>
          <input
            type="text"
            placeholder="New Title..."
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <label className="flex flex-col gap-1 w-full">
          <span className="text-xs font-bold opacity-80">Your Gmail:</span>
          <input
            type="email"
            placeholder="your@gmail.com"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label className="flex flex-col gap-1 w-full">
          <span className="text-xs font-bold opacity-80">
            Body of your Ticket:
          </span>
          <textarea
            placeholder="type anything..."
            required
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
        </label>
        <label className="flex flex-col gap-1 w-full">
          <span className="text-xs font-bold opacity-80">Ticket prority:</span>
          <select
            onChange={(e) => {
              setPrority(e.target.value);
            }}
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
        </label>
        <button
          to="/tickets"
          className="bg-primary py-1 px-1 rounded-sm block max-w-[110px] text-center mx-auto  opacity-80 text-white"
        >
          Add Tickets
        </button>
      </form>
    </div>
  );
}

export default Create;
