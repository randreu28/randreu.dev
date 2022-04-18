import React from "react";
import { XIcon } from "@heroicons/react/solid";

export default function PopupCalc(props) {
  return (
    <div className="absolute z-10 w-full h-full flex font-mono">
      <div className="absolute z-20 w-full h-full flex">
        <div className="m-auto bg-white p-8 rounded-3xl drop-shadow-2xl flex-col space-y-4">
          <div className="flex-row flex items-center">
            <h1 className="text-ChillonCyan text-3xl">
              Please input your custom tip percent
            </h1>
            <XIcon
              className="h-12 sm:h-5 text-ChillonCyan transform translate-x-3 -translate-y-8 md:translate-x-5 md:-translate-y-5 hover:opacity-80 duration-300 cursor-pointer"
              onClick={() => {
                props.setPopup(false);
              }}
            ></XIcon>
          </div>

          <p className="text-gray-400">
            This will allow you to enter a costumized tip percent value.
          </p>
          <div className="flex space-x-4">
            <input
              id="inputPopup"
              type="number"
              placeholder="ex: 20"
              className="w-full p-2 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-ChillonCyan duration-300"
            />
            <button
              onClick={() => {
                if (document.getElementById("inputPopup").value !== "") {
                  props.setPopup(false);
                  props.handleTipButton(5);
                  const inputValue =
                    document.getElementById("inputPopup").value * 0.01;
                  props.handleTip(inputValue);
                } else {
                  document.getElementById("popupError").innerHTML =
                    "Please provide a value";
                }
              }}
              className="bg-ChillonCyan text-white rounded-lg p-3 hover:opacity-80 duration-300 focus:outline-none focus:ring-2 focus:ring-DarkCyan"
            >
              Submit
            </button>
          </div>
          <h1 id="popupError" className="text-red-300">
            {""}
          </h1>
        </div>
      </div>
      <div className="bg-gray-900 w-full h-full opacity-50"></div>
    </div>
  );
}
