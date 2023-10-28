"use client";
import React, { useCallback, useEffect, useState } from "react";

const PasswaordG = () => {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789";
    if (charAllow) str += "''@!#$%&'()*+";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);

  //passwordGenerator();

  // useEffect(()=>{
  //     passwordGenerator();
  // },[length,charAllow,numAllow])

  return (
    <>
      <div className="text-center text-4xl m-30 font-bold text-black bg-teal-500 hover:bg-teal-300 py-10 px-5">
        Passwaord Generator
      </div>

      <div className="w-full max-w-md mx-auto shodow-md rounded-lg px-2 my-8 text-black-500 bg-gray-600 border-emerald-400">
        <div className="flex shodow rounded-lg overflow-hidden mb-3">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 m-1"
            placeholder="Password"
            // onChange={(e)=>{
            //     setPassword(e.target.value)
            // }}
          />
        </div>
        <button
          onClick={passwordGenerator}
          className="px-5 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md focus:outline-none"
        >
          Generate Passwaord
        </button>

        <div className=" flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={16}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllow}
              id="numberInput"
              onChange={() => {
                setNumAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="CharInput"
              onChange={() => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label htmlFor="CharInput">Charcter</label>
          </div>
        </div>
      </div>

      {/* <div class="px-60 py-2 m-5 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md focus:outline-none">
        <input
          type="text"
          class="px-4 py-2 border border-gray-300 rounded-md"
        />
      </div> */}
    </>
  );
};

export default PasswaordG;
