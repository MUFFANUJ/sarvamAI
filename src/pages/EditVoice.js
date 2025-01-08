import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/context";
import { FaArrowLeft } from "react-icons/fa";

export default function EditVoice() {
  const { voices, setSelectedVoice ,setIsMute,selectedVoice} = useContext(GlobalContext);
  return (
    <div class="relative grow overflow-x-auto flex flex-col bg-[rgb(249,243,235)] overflow-y-scroll h-[100vh]">
      <div class="bg-card-background">
        <div class="flex items-center py-5 mt-2 rounded-t-card md:mt-0 md:rounded-none px-4 lg:px-10">
          <Link
            aria-label="Go back"
            class="flex h-9 w-9 items-center justify-center rounded-full p-1.5 text-primary-700 bg-[#EDE1D1]"
            type="button"
            to="/profile"
          >
            <FaArrowLeft />
          </Link>
          <div class="grow text-primary-700">
            <h1 class="t-body-m m-0 pr-9 text-center text-3xl">Voice settings</h1>
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
