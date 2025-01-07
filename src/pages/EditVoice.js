import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/context";

export default function EditVoice() {
  const { voices, setSelectedVoice ,setIsMute,selectedVoice} = useContext(GlobalContext);
  return (
    <div class="relative grow overflow-x-auto flex flex-col bg-[rgb(249,243,235)] overflow-y-scroll h-[100vh]">
      <div class="bg-card-background">
        <div class="flex items-center py-5 mt-2 rounded-t-card md:mt-0 md:rounded-none px-4 lg:px-10">
          <Link
            aria-label="Go back"
            class="flex h-9 w-9 items-center justify-center rounded-full p-1.5 text-primary-700 bg-neutral-300 hover:bg-neutral-300-hover active:bg-neutral-300-tap"
            type="button"
            to="/profile"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.1408 17.6558C10.9157 17.8808 10.6106 18.0072 10.2924 18.0072C9.97418 18.0072 9.66902 17.8808 9.44398 17.6558L4.64398 12.8558C4.41902 12.6308 4.29264 12.3256 4.29264 12.0074C4.29264 11.6892 4.41902 11.3841 4.64398 11.159L9.44398 6.35902C9.55468 6.24441 9.68709 6.15299 9.8335 6.0901C9.9799 6.02721 10.1374 5.99411 10.2967 5.99272C10.456 5.99134 10.6141 6.0217 10.7615 6.08204C10.909 6.14237 11.043 6.23148 11.1557 6.34415C11.2683 6.45682 11.3574 6.5908 11.4178 6.73828C11.4781 6.88575 11.5085 7.04377 11.5071 7.2031C11.5057 7.36244 11.4726 7.5199 11.4097 7.66631C11.3468 7.81271 11.2554 7.94512 11.1408 8.05582L8.38918 10.8074L17.4924 10.8074C17.8106 10.8074 18.1159 10.9339 18.3409 11.1589C18.566 11.3839 18.6924 11.6892 18.6924 12.0074C18.6924 12.3257 18.566 12.6309 18.3409 12.8559C18.1159 13.081 17.8106 13.2074 17.4924 13.2074L8.38918 13.2074L11.1408 15.959C11.3657 16.1841 11.4921 16.4892 11.4921 16.8074C11.4921 17.1256 11.3657 17.4308 11.1408 17.6558Z"
                fill="currentColor"
              ></path>
            </svg>
          </Link>
          <div class="grow text-primary-700">
            <h1 class="t-body-m m-0 pr-9 text-center">Voice settings</h1>
          </div>
        </div>
      </div>
      <div class="mx-auto w-full max-w-[576px] px-6 py-10">
        <div class="grid grid-cols-2 gap-4">
          {voices.map((voice, index) => (
            <button
              onClick={() => {
                setSelectedVoice(voice);
                setIsMute(false)
              }}
              type="button"
              className={`${
                voice === selectedVoice ? "bg-[rgb(220,183,245)]" : selectedVoice === false && index === 0 ? "bg-[rgb(220,183,245)]" : ""
              } flex items-center justify-between rounded-lg border px-3 py-5 font-sans text-body-m-mobile text-primary-700 border-neutral-500`}
              
            >
              Pi {index + 1} {[0, 1, 2].includes(index) ? "✨" : ""}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
