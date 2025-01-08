import React from "react";
import shareWithOthers from "../assets/share.svg";
import { FaArrowLeft } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
export default function ShareWithOthers() {
  function copyToClipboard() {
    navigator.clipboard
      .writeText("https://pi.ai/referral")
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((error) => {
        console.error("Error copying text: ", error);
      });
  }
  return (
    <div className="relative grow overflow-x-auto flex flex-col bg-primary-50 overflow-y-scroll h-screen">
      <div className="relative">
        <div className="mx-auto px-5 pt-[100px]">
          <div className="h-40 flex justify-center">
            <img src={shareWithOthers} alt="share With Others"/>
          </div>
          <p className="t-heading-m  md:text-center py-6 text-center md:py-9 text-xl">
            Spread the word
          </p>
          <p className="t-body-m text-center  text-2xl">
            Share a link to Pi with a friend...
          </p>
          <button
            className="flex items-center justify-center whitespace-nowrap t-action-m h-12 rounded-lg px-8 text-neutral-50 bg-success-500 hover:bg-success-400  mx-auto mt-14"
            type="button"
            onClick={() => {
              copyToClipboard();
              toast.success("🔗 Link Copied To ClipBoard successfully!", {
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
            Copy link
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
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full p-1.5 text-primary-700 bg-primary-200 absolute left-4 top-8 lg:left-10"
          type="button"
        >
          <FaArrowLeft />
        </button>
      </div>
    </div>
  );
}
