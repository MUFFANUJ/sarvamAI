import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/context";
import shareWithOthers from "../assets/share.svg";
import { FaArrowLeft } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

export default function DownloadHistory() {
  const { chatHistory } = useContext(GlobalContext);
  function downloadChatHistory() {
    const jsonString = JSON.stringify(chatHistory, null, 2);

    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "chat_history.json";
    a.click();
    URL.revokeObjectURL(url);
  }
  return (
    <div className="relative grow overflow-x-auto flex flex-col bg-primary-50 overflow-y-scroll h-screen">
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
              Manage history
            </h1>
          </div>
        </div>
      </div>
      <div className="mx-auto h-[calc(100%-6.25rem)] max-w-[50rem] overflow-y-auto px-6 pb-5 text-center text-neutral-900">
        <div className="h-40 flex justify-center">
          <img src={shareWithOthers} alt="share With Others"/>
        </div>
        <p className="t-body-m text-center">
          Inflection is proud to support the{" "}
          <a
            target="_blank"
            title="Data Transfer Initiative"
            href="https://dtinit.org/"
            className="text-success-500"
          >
            <u>Data Transfer Initiative</u>
          </a>{" "}
          framework for portability and interoperability of conversational AI
          chat histories.
        </p>
        <p className="t-body-m mt-8 text-center">
          You can download your entire chat history with Pi in a format you can
          read easily and bring with you.
        </p>
        <button
          className="flex items-center justify-center whitespace-nowrap t-action-m h-14 w-full max-w-[353px] rounded-full p-4 text-neutral-50 bg-success-500 hover:bg-success-400 mx-auto mt-5"
          type="button"
          onClick={() => {
            downloadChatHistory();
            toast.success("🦄 Chat Data Downloaded successfully!", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }}
        >
          Download your Pi history
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
  );
}
