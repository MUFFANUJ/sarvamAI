import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/context";

export default function ChatSpace() {
  const {
    chatHistory,
    readLatestMessage,
    setSelectedVoice,
    setUserInput,
    userInput,
    aiResponse,
    voices,
    setVoices,
    selectedVoice,
    isMute,
    setIsMute,
    stopSpeaking,
    readMessage,
    setSendReq,
    isLoading,
  } = useContext(GlobalContext);

  useEffect(() => {
    const getVoices = () => {
      const allVoices = window.speechSynthesis.getVoices();
      const availableVoices = [
        allVoices[0],
        allVoices[18],
        allVoices[22],
        allVoices[33],
        allVoices[46],
        allVoices[90],
        allVoices[93],
        allVoices[100],
      ];
      if (availableVoices.length > 0) {
        setVoices(availableVoices);
        if (selectedVoice) return;
        readLatestMessage();
      }
    };

    window.speechSynthesis.onvoiceschanged = getVoices;
    getVoices();

    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);
  const [isDropdown, setIsDropdown] = useState(true);

  return (
    <div className="flex flex-col h-screen bg-[rgb(249,243,235)]">
      <div className="flex-1 overflow-hidden">
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-end px-4 sm:px-6 lg:px-8 py-4 ">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  setIsMute((prev) => !prev);
                  readMessage();
                }}
                className="p-2 rounded-full transition-colors"
              >
                {isMute ? (
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 "
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z" />
                  </svg>
                ) : !isDropdown ? (
                  <>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      class="h-5 w-5 text-primary-700 lg:h-6 lg:w-6"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => {
                        stopSpeaking();
                        setIsMute((prev) => !prev);
                      }}
                    >
                      <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z"></path>
                      <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z"></path>
                    </svg>
                  </>
                ) : (
                  <div className="absolute end-8 z-10 w-44">
                    <div class="relative flex flex-col-reverse bg-[rgb(242,233,219)]">
                      <div class="t-action-m -mt-5 flex flex-col rounded-b-xl  p-2 pt-5">
                        {voices.map((voice, index) => (
                          <button
                            onClick={() => {
                              setSelectedVoice(voice);
                              setIsMute((prev) => !prev);
                            }}
                            type="button"
                            className={`${
                              voice === selectedVoice
                                ? "bg-[rgb(220,183,245)]"
                                : selectedVoice === false && index == 0
                                ? "bg-[rgb(220,183,245)]"
                                : ""
                            } mb-1 rounded px-2 py-3 text-center hover:bg-[rgb(234,224,209)] border-neutral-500`}
                          >
                            Pi {index + 1}{" "}
                            {[0, 1, 2].includes(index) ? "✨" : ""}
                          </button>
                        ))}
                      </div>
                      <div
                        class="relative flex items-center justify-end self-end overflow-hidden p-2"
                        style={{ borderRadius: "12px" }}
                      >
                        <div
                          class="absolute inset-0 -z-10 bg-neutral-200"
                          style={{ borderRadius: "12px" }}
                        ></div>
                        <button
                          class="group z-10 flex items-center text-neutral-800"
                          type="button"
                        >
                          <div>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              class="h-5 w-5 text-primary-700 lg:h-6 lg:w-6"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                              onClick={() => {
                                stopSpeaking();
                                setIsMute((prev) => !prev);
                              }}
                            >
                              <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z"></path>
                              <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z"></path>
                            </svg>
                          </div>
                          <span class="t-label pl-4">Voice on</span>
                        </button>
                        <button
                          class="z-10 pl-4 text-neutral-900"
                          type="button"
                        >
                          <div
                            style={{
                              transform: "rotate(-180deg) translateZ(0px)",
                            }}
                          >
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              class="h-5 w-5 lg:h-6 lg:w-6"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="max-w-3xl mx-auto space-y-6">
              {chatHistory.map((chat, index) => (
                <div
                  key={index}
                  className={`flex ${
                    chat.bot ? "justify-start" : "justify-end"
                  } space-x-2`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[75%] rounded-lg p-3 sm:p-4 ${
                      chat.bot
                        ? "text-gray-900"
                        : "bg-[rgb(243,234,221)] text-gray-800"
                    }`}
                  >
                    <p className="text-sm sm:text-base whitespace-pre-wrap">
                      {chat.msg}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-2 bg-white rounded-full shadow-lg border border-neutral-200 hover:border-[#c9b597] transition-colors p-2">
                <input
                  type="text"
                  placeholder="Talk with Pi"
                  className="flex-1 px-4 py-2 sm:py-0 text-base sm:text-lg lg:text-xl focus:outline-none"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setSendReq(true);
                      aiResponse();
                    }
                  }}
                />
                <button
                  className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-colors
                    ${
                      !isLoading && userInput.trim()
                        ? "bg-[#038247] text-white hover:bg-[#026435]"
                        : "bg-[#FAF3EA] text-[#6B6255]"
                    } 
                    disabled:opacity-50`}
                  onClick={() => {
                    setSendReq(true);
                    aiResponse();
                  }}
                  disabled={isLoading || !userInput.trim()}
                >
                  {isLoading ? (
                    <svg
                      className="animate-spin h-4 w-4 sm:h-5 sm:w-5"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      viewBox="0 0 12 16"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M.852 7.648a1.2 1.2 0 0 1 0-1.696l4.8-4.8a1.2 1.2 0 0 1 1.696 0l4.8 4.8a1.2 1.2 0 1 1-1.697 1.696L7.7 4.897V14a1.2 1.2 0 0 1-2.4 0V4.897L2.548 7.648a1.2 1.2 0 0 1-1.696 0Z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 py-2">
            <p className="text-center text-sm text-neutral-600">
              By using Pi, you agree to our{" "}
              <Link
                to="https://pi.ai/policy#terms"
                className="text-green-600 underline"
              >
                Terms
              </Link>{" "}
              and{" "}
              <Link
                to="https://pi.ai/policy#privacy"
                className="text-green-600 underline"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
