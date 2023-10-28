"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [maintask, setMaintask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMaintask([...maintask, { title, desc }]);
    setTitle("");
    setDesc("");
    console.log(maintask);
  };

  const deleteHandler = (i) => {
    let copyTask = [...maintask];
    copyTask.splice(i, 1);
    setMaintask(copyTask);
  };

  let renderTask = <h1> No Task available</h1>;

  if (maintask.length > 0) {
    renderTask = maintask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-5">
          <div className="flex justify-between mb-5 w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-xl font-semibold">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-400 text-white px-4 py-2 border rounded font-bold"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className=" bg-teal-500 hover:bg-teal-300 text-black p-5 text-4xl font-bold text-center">
        To-do-list
      </h1>
      <form onSubmit={submitHandler} >
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter the Task name "
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter the Task DSCE"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />

        <button className=" bg-blue-500 text-white px-4 py-3 texr-2xl font-bold rounded m-5 ">
          {" "}
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
