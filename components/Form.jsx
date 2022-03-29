import React, { useEffect, useRef } from "react";
import { useForm } from "@formcarry/react";
import { index } from "../content";
import { useRouter } from "next/router";

export default function Form() {
  const handleSubmit = useRef();
  const router = useRouter();

  const content = index[router.locale];

  const { state, submit } = useForm({
    id: "e8938LqnpHt",
  });

  useEffect(() => {
    if (state.submitted) {
      handleSubmit.current.reset();
    }
  }, [state]);

  return (
    <form
      ref={handleSubmit}
      data-aos="fade-in"
      data-aos-delay="250"
      onSubmit={submit}
      className="grid grid-cols-2 gap-4 w-full"
      acceptCharset="UTF-8"
    >
      <input
        required
        className="bg-gray-800 placeholder-white placeholder-opacity-50 rounded p-2 text-lg col-span-2 sm:col-span-1"
        placeholder={content.formName}
        type="text"
        name="name"
      />

      <input
        required
        className="bg-gray-800 placeholder-white placeholder-opacity-50 rounded p-2 text-lg col-span-2 sm:col-span-1"
        placeholder="Email"
        type="email"
        name="email"
      />

      <input
        required
        className="bg-gray-800 placeholder-white placeholder-opacity-50 col-span-2 rounded p-2 text-lg"
        placeholder={content.formSubject}
        type="text"
        name="subject"
      />

      <textarea
        required
        className="bg-gray-800 placeholder-white placeholder-opacity-50 col-span-2 rounded p-2 h-36 text-lg md:h-40 lg:h-52 xl:h-56"
        placeholder={content.formMessage}
        type="text"
        name="message"
      />

      <input type="hidden" name="_gotcha" />

      <div />

      <span className="relative inline-flex rounded-md justify-self-end">
        {!state.submitted && !state.submitting ? (
          <button
            type="submit"
            className="items-center px-2 py-2 text-lg leading-6 font-medium rounded-md text-gray-300 bg-gray-800 hover:text-myPrimary focus:border-myPrimary transition ease-in-out duration-500"
          >
            {content.formBtn0}
          </button>
        ) : null}

        {state.submitting ? (
          <button
            type="button"
            className="items-center flex px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-gray-300 bg-myPrimary hover:bg-myPrimary focus:border-myPrimary active:bg-myPrimary transition ease-in-out duration-150 cursor-default hover:cursor-default"
            disabled=""
          >
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-300"
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
            {content.formBtn1}
          </button>
        ) : null}
        {state.submitted ? (
          <button
            disabled
            className="items-center px-2 py-2 text-lg leading-6 font-medium rounded-md text-gray-300 bg-green-700 opacity-50 focus:border-myPrimary transition ease-in-out duration-500"
          >
            {content.formBtn2}
          </button>
        ) : null}

        <span
          className={
            state.submitted && !state.submitting
              ? "hidden"
              : "flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1"
          }
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-myPrimary to-mySecondary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-mySecondary to-myPrimary"></span>
        </span>
      </span>
    </form>
  );
}
