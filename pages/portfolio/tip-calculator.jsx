import React, { useState } from "react";
import PopupCalc from "../../components/PopupCalc";

export default function TipCalculator() {
  const [total, setTotal] = useState(0.0);
  const [tipAmount, setTip] = useState(0.0);
  const [isActive, setActive] = useState(false);
  const [isPopup, setPopup] = useState(false);

  function handlePeople(e) {
    setTotal(
      (total) =>
        document.getElementById("bill").value / e.target.value + tipAmount
    );
  }

  function handleTip(e) {
    if (
      document.getElementById("people").value !== "" &&
      document.getElementById("bill").value !== ""
    ) {
      setTip(
        (tipAmount) =>
          (document.getElementById("bill").value * e) /
          document.getElementById("people").value
      );
    }
  }

  function handleTipButton(e) {
    setActive((isActive) => {
      const a = [];
      a[e] = true;
      return { b1: a[0], b2: a[1], b3: a[2], b4: a[3], b5: a[4], b6: a[5] };
    });
  }

  function handleTotal(e) {
    setTotal(e.target.value);
    if (
      document.getElementById("people").value !== "" &&
      e.target.value !== ""
    ) {
      setTotal(e.target.value / document.getElementById("people").value);
    }
  }

  function resetState() {
    setTotal(0.0);
    setTip(0.0);
    document.getElementById("bill").value = "";
    document.getElementById("people").value = "";
    setActive(false);
  }

  return (
    <div className="bg-LightCyan">
      {isPopup ? (
        <PopupCalc
          setPopup={setPopup}
          handleTipButton={handleTipButton}
          handleTip={handleTip}
        ></PopupCalc>
      ) : (
        ""
      )}
      <div className="flex h-screen flex-col">
        <div className="m-auto font-mono bg-white rounded-3xl drop-shadow-2xl p-5 md:p-10 grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="text-2xl">
            <h1 className=" text-DarkCyan pb-3">Bill</h1>
            <input
              type="number"
              placeholder="0"
              onInput={handleTotal}
              id="bill"
              className="w-full p-2 bg-gray-200 rounded-md text-right text-DarkCyan focus:outline-none focus:ring-2 focus:ring-ChillonCyan duration-300"
            />
            <svg
              className="absolute m-3 top-[66px] md:top-[86px]"
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="17"
            >
              <path
                fill="#9EBBBD"
                d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"
              />
            </svg>

            <h1 className=" text-DarkCyan py-3">Number of people</h1>
            <input
              type="number"
              placeholder="0"
              onInput={handlePeople}
              id="people"
              className="w-full p-2 bg-gray-200 rounded-md text-right text-DarkCyan focus:outline-none focus:ring-2 focus:ring-ChillonCyan duration-300"
            />

            <svg
              className="absolute m-3 top-[173px] md:top-[193px]"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
            >
              <path
                fill="#9EBBBD"
                d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"
              />
            </svg>

            <h1 className=" text-DarkCyan py-3">Select tip %</h1>
            <div className="h-32 grid grid-cols-3 grid-rows-2 gap-2 md:gap-4 text-lg lg:text-2xl">
              <button
                onClick={() => {
                  handleTip(0.05);
                  handleTipButton(0);
                }}
                className={
                  isActive.b1
                    ? "outline-none ring-4 ring-ChillonCyan duration-300 hover:opacity-80 hover:cursor-pointer bg-DarkCyan rounded-md flex items-center justify-center text-white font-extrabold"
                    : "focus:outline-none focus:ring-2 focus:ring-ChillonCyan duration-300 hover:opacity-80 hover:cursor-pointer bg-DarkCyan rounded-md flex items-center justify-center text-white font-extrabold"
                }
              >
                5%
              </button>
              <button
                onClick={() => {
                  handleTip(0.1);
                  handleTipButton(1);
                }}
                className={
                  isActive.b2
                    ? "outline-none ring-4 ring-ChillonCyan duration-300 hover:opacity-80 hover:cursor-pointer bg-DarkCyan rounded-md flex items-center justify-center text-white font-extrabold"
                    : "focus:outline-none focus:ring-2 focus:ring-ChillonCyan duration-300 hover:opacity-80 hover:cursor-pointer bg-DarkCyan rounded-md flex items-center justify-center text-white font-extrabold"
                }
              >
                10%
              </button>
              <button
                onClick={() => {
                  handleTip(0.15);
                  handleTipButton(2);
                }}
                className={
                  isActive.b3
                    ? "outline-none ring-4 ring-ChillonCyan duration-300 hover:opacity-80 hover:cursor-pointer bg-DarkCyan rounded-md flex items-center justify-center text-white font-extrabold"
                    : "focus:outline-none focus:ring-2 focus:ring-ChillonCyan duration-300 hover:opacity-80 hover:cursor-pointer bg-DarkCyan rounded-md flex items-center justify-center text-white font-extrabold"
                }
              >
                15%
              </button>
              <button
                onClick={() => {
                  handleTip(0.2);
                  handleTipButton(3);
                }}
                className={
                  isActive.b4
                    ? "outline-none ring-4 ring-ChillonCyan duration-300 hover:opacity-80 hover:cursor-pointer bg-DarkCyan rounded-md flex items-center justify-center text-white font-extrabold"
                    : "focus:outline-none focus:ring-2 focus:ring-ChillonCyan duration-300 hover:opacity-80 hover:cursor-pointer bg-DarkCyan rounded-md flex items-center justify-center text-white font-extrabold"
                }
              >
                20%
              </button>
              <button
                onClick={() => {
                  handleTip(0.25);
                  handleTipButton(4);
                }}
                className={
                  isActive.b5
                    ? "outline-none ring-4 ring-ChillonCyan duration-300 hover:opacity-80 hover:cursor-pointer bg-DarkCyan rounded-md flex items-center justify-center text-white font-extrabold"
                    : "focus:outline-none focus:ring-2 focus:ring-ChillonCyan duration-300 hover:opacity-80 hover:cursor-pointer bg-DarkCyan rounded-md flex items-center justify-center text-white font-extrabold"
                }
              >
                25%
              </button>
              <button
                onClick={() => {
                  setPopup(true);
                }}
                className={
                  isActive.b6
                    ? "outline-none ring-4 ring-ChillonCyan duration-300 p-5 hover:bg-LightCyan hover:cursor-pointer bg-gray-200 rounded-md flex items-center justify-center text-DarkCyan font-extrabold"
                    : "focus:outline-none focus:ring-2 focus:ring-ChillonCyan duration-300 p-5 hover:bg-LightCyan hover:cursor-pointer bg-gray-200 rounded-md flex items-center justify-center text-DarkCyan font-extrabold"
                }
              >
                Custom
              </button>
            </div>
          </div>

          <div className="bg-DarkCyan rounded-xl p-5 lg:p-10 text-2xl flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex flex-row justify-between text-white">
                <div>
                  <h1 className="text-white pr-10">Tip amount</h1>
                  <p className="text-white text-sm py-1 opacity-50">/ person</p>
                </div>
                <h1 className="text-4xl text-ChillonCyan font-extrabold overflow-hidden">
                  ${tipAmount}
                </h1>
              </div>

              <div className="flex flex-row justify-between text-white">
                <div>
                  <h1 className="text-white pr-10">Bill</h1>
                  <p className="text-white text-sm py-1 opacity-50">/ person</p>
                </div>
                <h1 className="text-4xl text-ChillonCyan font-extrabold overflow-hidden">
                  ${total}
                </h1>
              </div>
            </div>

            <button
              onClick={resetState}
              className="duration-300 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white text-white font-extrabold bg-ChillonCyan rounded-xl p-2 mt-20"
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
