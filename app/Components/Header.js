import React from "react";

function Header() {
  return (
    <div className=" bg-black  px-2  py-1 text-white ">
      <h1 className="text-white text-center text-4xl font-bold m-1">
        Random-React 
      </h1>
      <div className="text-2xl font-bold">
        <a href="http://localhost:3000/" className="mx-5">
          Home
        </a>
      </div>
      <div>
        <item className="px-70 my-70 flex justify-end items-center text-xl font-bold">
          {/* <a href="" className="mx-5 justify-end">
          Product
        </a> */}
          <a
            href="https://www.linkedin.com/in/rahul-kumar-maurya/"
            className="mx-5"
          >
            Contact us
          </a>
          <a href="https://github.com/Rahulmaurya2/" className="mx-5">
            About
          </a>
        </item>
      </div>
    </div>
  );
}

export default Header;
