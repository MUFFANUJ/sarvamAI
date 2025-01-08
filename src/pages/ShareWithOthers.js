import React from "react";
import  shareWithOthers  from '../assets/share.svg';
import { FaArrowLeft } from "react-icons/fa6";
export default function ShareWithOthers() {
  function copyToClipboard() {
    navigator.clipboard.writeText("https://pi.ai/referral")
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch((error) => {
        console.error('Error copying text: ', error);
      });
  }
  return (
    <div className="relative grow overflow-x-auto flex flex-col bg-[rgb(249,243,235)] overflow-y-scroll h-[100vh]">
      <div className="relative">
        <div className="mx-auto px-5 pt-[100px]">
          <div className="h-40 flex justify-center">

          <img src={shareWithOthers} />
          </div>
          <p class="t-heading-m  md:text-center py-6 text-center md:py-9 text-xl">
            Spread the word
          </p>
          <p class="t-body-m text-center  text-2xl">
            Share a link to Pi with a friend...
          </p>
          <button
            class="flex items-center justify-center whitespace-nowrap t-action-m h-12 rounded-lg px-8 text-neutral-50 bg-[#038247] hover:bg-[rgb(28,59,40)]  mx-auto mt-14"
            type="button"
            onClick={copyToClipboard}
          >
            Copy link
          </button>
        </div>
        <button
          class="flex h-9 w-9 items-center justify-center rounded-full p-1.5 text-primary-700 bg-[#EDE1D1]  absolute left-4 top-8 lg:left-10"
          type="button"
        >
          <FaArrowLeft />
        </button>
      </div>
    </div>
  );
}
