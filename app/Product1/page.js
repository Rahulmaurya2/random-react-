"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const GetImage = () => {
  const [images, setImages] = useState([]);
  const getimage = async () => {
    try {
      const response = await axios.get(
        "https://picsum.photos/v2/list?page=2&limit=100"
      );
      const data = response.data;
      setImages(data);
      console.log(images);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteImage = () => {
    const copyImage = [...images];
    copyImage.splice(0,1);
    setImages(copyImage);
  };

  // useEffect(()=>{
  //   getimage();
  // },[])

  return (
    <>
    
      <div className="text-center text-4xl m-30 font-bold text-black bg-teal-500 hover:bg-teal-300 py-10 px-5">
       Generate Random Images
      </div>
      <div className="text-center">
        <button
          className="px-5 py-2 bg-blue-500 hover:bg-green-500 text-white font-semibold rounded-md focus:outline-none"
          onClick={getimage}
        >
          Get Random Images
        </button>
        <button
          onClick={deleteImage}
          className=" m-5 px-5 py-2 bg-blue-500 hover:bg-red-500 text-white font-semibold rounded-md focus:outline-none"
        >
          Delete
        </button>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((imgElm, i) => {
            return (
              <img
                key={i}
                src={imgElm.download_url}
                className=" m-10 w-full h-auto border border-gray-200 rounded-md hover:shadow-md transition-transform transform hover:scale-105"
                alt={`Image ${imgElm.id}`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GetImage;
