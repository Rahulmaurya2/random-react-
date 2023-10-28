import React, { useState} from "react";

const Fact = () => {
  const [jokeData, setJokeData] = useState("");

  const getData = async () => {
    const jokeData = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const jokeObj = await jokeData.json();
    setJokeData(jokeObj.joke+"😁😁");
  };


  return (
    <>
      <div className=" text-center">
        <button
          className="	px-5 py-2 m-10 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md focus:outline-none center"
          onClick={getData}
        >
          Get Random Joke!!
        </button>

        <div className="text-4xl text-gray-500 font-bold hover:text-black content-center text-center">
          {jokeData}
        </div>
      </div>
    </>
  );
};

export default Fact;
