import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function CatGenerator() {
  const [isCat, setIsCat] = useState([]);

  /* Using randomCat API --> https://thatcopy.pw/catapi/docs.html */

  const fetchCat = () => {
    fetch("https://thatcopy.pw/catapi/rest/")
      .then((res) => res.json())
      .then((cats) => {
        setIsCat([...isCat, cats]);
      });
  };

  useEffect(() => {
    fetch("https://thatcopy.pw/catapi/rest/")
      .then((res) => res.json())
      .then((cats) => {
        setIsCat((isCat) => [...isCat, cats]);
      });
  }, [setIsCat]);

  return (
    <>
      <div className="p-10 h-screen flex">
        <div className="m-auto space-y-5">
          <h1 className="font-bold text-4xl text-center">
            ¡Welcome to the random cat generator!
          </h1>
          <p className="text-gray-400 text-xl text-center pb-[15vh]">
            This gallery of cat picutres was generated with
            <a
              className="text-blue-400 hover:opacity-75 duration-200"
              target="_blank"
              rel="noreferrer"
              href="https://thatcopy.pw/catapi/"
            >
              {" "}
              catAPI
            </a>
            , an API that generates random cat pictures
          </p>
          <br />
          <p className="text-gray-600 text-xl text-center pb-2">
            Scroll as much as you want
          </p>
          <svg
            className="h-6 w-6 m-auto text-gray-600 animate-bounce"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 17l-4 4m0 0l-4-4m4 4V3"
            />
          </svg>
        </div>
      </div>
      <div className="columns-1 md:columns-2 2xl:columns-3 gap-0">
        <InfiniteScroll
          dataLength={isCat.length}
          next={fetchCat}
          hasMore={true}
          style={{ height: "initial", overflow: "hidden" }}
          loader={
            <svg
              className="animate-spin mx-auto h-auto w-1/4 text-white p-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          }
        >
          {isCat.map((cat) => (
            <img
              className="w-full h-auto"
              loading="lazy"
              src={cat.webpurl}
              key={Math.random()}
              alt="cat"
            />
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}
