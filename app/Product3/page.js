"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Adv = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async (event) => {
    if (event) {
      event.preventDefault();
    }
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
  };
  const deleteData = () => {
    const copyData = [...users];
    copyData.splice(0, 1);
    setUsers(copyData);
  };

  return (
    <>
      <div className="text-center text-4xl m-30 font-bold text-black bg-teal-500 hover:bg-teal-300 py-10 px-5">
        Get Random  Data
      </div>
      <div className="content-center">
        <button
          onClick={getUsers}
          class=" content-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-10 flex-center"
        >
          Get Data
        </button>

        <button
          onClick={deleteData}
          className=" m-5 px-5 py-2 bg-blue-500 hover:bg-red-500 text-white font-semibold rounded-md focus:outline-none"
        >
          Delete Data
        </button>
      </div>
      <div className="p-8 bg-slate-100 mt-50">
        <ul>
          {users.map((e) => {
            return (
              <li>
                {/* {e.username}{e.email}--------<a href={`{e.id}`}>link explor</a> */}
                <div key={e.id}>
                  <div class="grid grid-cols-2 ">
                    <div className="box-content h-60 w-full md:w-50 p-4 border-4 m-5 hover:text-lg hover:font-semibold ">
                      <ul>
                        <li>Name : {e.username}</li>
                        <li>Mobile No.: {e.phone}</li>
                        <li>Email Id : {e.email}</li>
                        <li>
                          Address : {e.address.street + " "}
                          <br />
                          {"ZipCode : " + e.address.zipcode}
                        </li>
                        <li>
                          Company Details:{" "}
                          <li>{"Comapany Name : " + e.company.name} </li>
                          <li>{"Comapany Business : " + e.company.bs} </li>
                        </li>
                        <li>Origaination Web-Page: {e.website}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Adv;
