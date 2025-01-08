import React, { useContext, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/context";
import { ChevronDown } from "lucide-react";
import { RiArrowDownSLine } from "react-icons/ri";
import { FaVolumeMute } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { AiFillSound } from "react-icons/ai";
import SpinAnimation from "../assets/SpinAnimation";
import ReplyInThreads from "../components/subComponents/ReplyInThreads";
import VoicesDropDown from "../components/subComponents/VoicesDropDown";
import ChatFooter from "../components/subComponents/ChatFooter";
import { ToastContainer, toast } from "react-toastify";
export default function ChatSpace() {
  const {
    chatHistory,
    readLatestMessage,
    setSelectedVoice,
    setUserInput,
    userInput,
    aiResponse,
    selectedVoice,
    isMute,
    setIsMute,
    stopSpeaking,
    setSendReq,
    isLoading,
    logged
  } = useContext(GlobalContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const dropdownRef = useRef(null);
  const chatEndRef = useRef(null);
  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };
  const handleVoiceSelection = (voice) => {
    setSelectedVoice(voice);
    setIsMute(false);
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    stopSpeaking();
    if (!isMute) {
      readLatestMessage();
    }
  }, [selectedVoice, isMute]);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const textSubmit = ()=>{
    if(userInput.length === 0){
      toast.error("❌ Cant Give An Empty Request!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return
    }
    setSendReq(true);
    aiResponse();
  }

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isDropdownOpen]);

  const [showSecondElement, setShowSecondElement] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-primary-50 font-semibold">
      <div className="flex-1 overflow-hidden">
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-end px-4 sm:px-6 lg:px-8 py-4 ">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMute((prev) => !prev)}
                className="p-2 rounded-full transition-colors"
              >
                {isMute ? (
                  <div className="bg-primary-200 rounded-full p-2">
                    <FaVolumeMute size={25} color="#696255" />
                  </div>
                ) : (
                  <div
                    className="flex items-center"
                    onClick={() => {
                      stopSpeaking();
                      setIsMute((prev) => !prev);
                    }}
                  >
                    <svg
                      stroke-width="0"
                      viewBox="0 0 24 24"
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
                    <button
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                      className="p-2 ml-2 rounded-full transition-colors"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </button>

              {isDropdownOpen && (
                <div>
                  <div
                    className="absolute end-6 top-6 z-10 w-44"
                    ref={dropdownRef}
                  >
                    <div class="relative flex flex-col-reverse bg-neutral-100">
                      <VoicesDropDown handleVoiceSelection={handleVoiceSelection} />
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
                            <AiFillSound size={25}/>
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
                            onClick={() => setIsDropdownOpen((prev) => !prev)}
                          >
                            <RiArrowDownSLine size={28} />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="max-w-3xl mx-auto space-y-6">
              {chatHistory.map((chat, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    chat.bot ? "items-start" : "items-end"
                  } space-y-2`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                    setShowSecondElement(false);
                  }}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[75%] rounded-lg p-3 sm:p-4 ${
                      chat.bot
                        ? "text-gray-900"
                        : "bg-primary-800 text-gray-800"
                    }`}
                  >
                    {chat.image && (
                      <div>
                        <img
                          src={chat.image}
                          className="w-3/4 rounded-xl"
                          alt={chat.title}
                        />
                        <p className="relative top-[-35px] w-3/4 text-end text-sm md:text-xl text-white">
                          {chat.title}
                        </p>
                      </div>
                    )}

                    <p className="text-sm sm:text-base whitespace-pre-wrap">
                      {chat.msg}
                    </p>
                  </div>

                  {hoveredIndex === index && chat.bot && logged ? (
                    <ReplyInThreads showSecondElement={showSecondElement} setShowSecondElement={setShowSecondElement} chat={chat} />
                  )
                : ("")}
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
                      textSubmit()
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
                    textSubmit()
                  }}
                  disabled={isLoading || !userInput.trim()}
                >
                  {isLoading ? (
                    <SpinAnimation />
                  ) : (
                    <FaArrowUp />
                  )}
                </button>
                <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
              </div>
            </div>
          </div>

          <ChatFooter />
        </div>
      </div>
    </div>
  );
}
