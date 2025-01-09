import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/context";
import { FaArrowLeft } from "react-icons/fa";
import { VoiceContext } from "../context/voiceContext";

export default function EditVoice() {
  const navigate = useNavigate()
  const { readLatestMessage } = useContext(VoiceContext);
  const {setOnBoarding,onBoarding} = useContext(GlobalContext)

  function takeHome(){
    localStorage.setItem("onBoarding",false)
      setOnBoarding(false)
      setIsMute(true)
      navigate("/")
  }

  const { voices, setSelectedVoice, setIsMute, selectedVoice } =
    useContext(GlobalContext);
  return (
    <div className="relative grow overflow-x-auto flex flex-col bg-primary-50 overflow-y-scroll h-[100vh] animate-fadeIn">
      <div className="bg-card-background">
        <div className="flex items-center py-5 mt-2 rounded-t-card md:mt-0 md:rounded-none px-4 lg:px-10">
          <Link
            aria-label="Go back"
            className="flex h-9 w-9 items-center justify-center rounded-full p-1.5 text-primary-700 bg-primary-200"
            type="button"
            to="/profile"
          >
            <FaArrowLeft />
          </Link>
          <div className="grow text-primary-700">
            <h1 className="t-body-m m-0 pr-9 text-center text-3xl">
              Voice settings
            </h1>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[576px] px-6 py-10">
        <div className="grid grid-cols-2 gap-4">
          {voices.map((voice, index) => (
            <button
              onClick={() => {
                setSelectedVoice(voice);
                setIsMute(false);
                readLatestMessage()
              }}
              type="button"
              className={`${
                voice === selectedVoice
                  ? "bg-selected-50"
                  : selectedVoice === false && index === 0
                  ? "bg-selected-50"
                  : ""
              } flex items-center justify-between rounded-lg border px-3 py-5 font-sans text-body-m-mobile text-primary-700 border-neutral-500`}
            >
              Pi {index + 1} {[0, 1, 2].includes(index) ? "✨" : ""}
            </button>
          ))}
        </div>
      </div>

      {onBoarding ? (
        <div className="flex flex-col items-center justify-center gap-3 pt-8 md:flex-row-reverse">
          <button
            className="flex items-center justify-center whitespace-nowrap t-action-m h-14 w-full max-w-[353px] rounded-full p-4 text-white bg-success-500 "
            type="button"
            onClick={takeHome}
          >
            Choose voice
          </button>
          <button
            className="flex items-center justify-center whitespace-nowrap t-action-m h-14 w-full max-w-[353px] rounded-full p-4 border-[1.5px] border-neutral-500 bg-neutral-50 active:bg-neutral-50-tap hover:bg-neutral-50-hover text-primary-600"
            type="button"
            onClick={takeHome}
          >
            I’ll do it later
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
