import React, { useContext, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { ScrollText } from "lucide-react";
import { RiShareForwardLine } from "react-icons/ri";
import { HiOutlineFlag } from "react-icons/hi2";
import { GlobalContext } from "../../context/context";
import { ToastContainer, toast } from "react-toastify";

export default function ReplyInThreads({
  showSecondElement,
  setShowSecondElement,
  chat,
}) {
  const { chatHistory, setChatHistory, setSideOptions } =
    useContext(GlobalContext);
  const handleSecondButtonClick = () => {
    setShowSecondElement((prev) => !prev);
  };

  function storeAllChatHistory() {
    const allChatArr = JSON.parse(localStorage.getItem("allchat")) || [];
    const newRecord = [...allChatArr, chatHistory];
    localStorage.setItem("allchat", JSON.stringify(newRecord));
  }

  function startnewChat() {
    setChatHistory([chat]);
    setSideOptions(3);
    storeAllChatHistory();
  }

  function copyToClipboard() {
    navigator.clipboard
      .writeText(chat)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((error) => {
        console.error("Error copying text: ", error);
      });

    toast.success("💬 Message Copied To ClipBoard successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  return (
    <div className="pl-4 flex h-8">
      <div className="flex gap-2 items-center rounded-md bg-primary-100 border border-primary-200 p-1 rounded animate-fadeIn">
        <button
          className="border-r border-primary-200 h-full text-xs flex items-center gap-0.5 p-1"
          onClick={() => {
            startnewChat();
          }}
        >
          <ScrollText size={15} /> Reply in Threads
        </button>
        <button onClick={handleSecondButtonClick}>
          <HiDotsHorizontal />
        </button>
      </div>
      <div className="flex items-center mt-2">
        {showSecondElement && (
          <div className="ml-1 border border-primary-200 rounded-md bg-primary-100 flex w-60 flex-col justify-evenly items-center text-md absolute z-10">
            <button
              className="h-10 w-full hover:bg-primary-200 flex justify-between items-center pl-7 pr-7"
              onClick={copyToClipboard}
            >
              <span>Share</span>
              <RiShareForwardLine size={20} />
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
            <a
              className="h-10 w-full hover:bg-primary-200 flex justify-between items-center pl-7 pr-7"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdMhPRt5Ty4wdFEQFU4qv0v-4fSdaa0EeaR-kUWXEIs4yzkbg/viewform?usp=header"
              target="blank"
            >
              <span>Report</span>

              <HiOutlineFlag size={20} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
