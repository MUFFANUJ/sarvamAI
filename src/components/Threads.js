import React,{useContext, useEffect, useState} from "react";
import { GlobalContext } from "../context/context";

export default function Threads() {

    const { chatHistory,setChatHistory } = useContext(GlobalContext);
    const [allHistory,setAllHistory] = useState([])
    useEffect(()=>{
        const reponse = JSON.parse(localStorage.getItem("allchat")) || []; 
        setAllHistory(reponse)
        console.log(reponse);
    },[chatHistory])
    function storeAllChatHistory() {
        const allChatArr = JSON.parse(localStorage.getItem("allchat")) || []; 
        const newRecord = [...allChatArr, chatHistory];
        localStorage.setItem("allchat", JSON.stringify(newRecord)); 
    }

    function startnewChat(){
        setChatHistory([
            {
              msg: `Hey there, great to meet you. I’m Pi, your
          personal AI.`,
              bot: true,
            },
            {
              msg: `My goal is to be useful, friendly and fun. Ask
          me for advice, for answers, or let’s talk
          about whatever’s on your mind.`,
              bot: true,
            },
          ])
    }
  return (
    <div class="w-full lg:w-[375px] lg:shrink-0 lg:border-r lg:border-neutral-300 flex flex-col p-3 ">
      <div class="bg-card-background">
      </div>
      <div class="flex w-full items-center justify-between px-6 pb-6">
        <h1 class="pr-9 font-condensed text-h-l-mobile text-2xl">Threads</h1>
        <button
          class="flex items-center justify-center whitespace-nowrap t-action-s h-8 rounded-lg px-3 bg-[rgb(208,196,165)] text-primary-700 hover:bg-neutral-200-hover active:bg-neutral-200-tap"
          type="button"
          onClick={()=>{
            storeAllChatHistory()
            startnewChat()
          }}
        >
          New thread{" "}
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="ml-1 h-4 w-4"
          >
            <g id="Iconography/16px" clip-path="url(#clip0_9738_8426)">
              <path
                id="Exclude"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.55544 1.34824C4.87103 0.469192 6.41775 0 8 0C10.1205 0.00406613 12.153 0.848227 13.6524 2.34764C15.1518 3.84705 15.9959 5.87952 16 8C16 9.58225 15.5308 11.129 14.6518 12.4446C13.7727 13.7602 12.5233 14.7855 11.0615 15.391C9.59966 15.9965 7.99113 16.155 6.43928 15.8463C4.88743 15.5376 3.46197 14.7757 2.34315 13.6569C1.22433 12.538 0.462403 11.1126 0.153721 9.56072C-0.15496 8.00887 0.00346624 6.40034 0.608967 4.93853C1.21447 3.47672 2.23985 2.22729 3.55544 1.34824ZM3.00002 8C3.00002 7.44772 3.44773 7 4.00002 7H7.00002V4C7.00002 3.44772 7.44774 3 8.00002 3C8.5523 3 9.00002 3.44772 9.00002 4V7H12C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9H9.00002V12C9.00002 12.5523 8.5523 13 8.00002 13C7.44773 13 7.00002 12.5523 7.00002 12V9H4.00002C3.44773 9 3.00002 8.55229 3.00002 8Z"
                fill="currentColor"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_9738_8426">
                <rect width="16" height="16" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <div class="flex flex-col overflow-y-hidden">
        <div class="overflow-y-auto px-6 pb-3">
          <div class="space-y-3">
            {allHistory.map((item,index)=> (
            <button
              type="button"
              class="flex h-[78px] w-full items-center overflow-hidden rounded-10 bg-[rgb(208,194,165)] hover:bg-neutral-200-hover active:bg-neutral-200-tap rounded-lg"
            >
              <div class="flex flex-col justify-center gap-1 overflow-x-hidden px-4 text-left">
                <div class="t-body-s w-full truncate text-neutral-900">
                  chat {index+1}
                </div>
                <div class="t-heading-s w-full truncate text-primary-700">
                  {item[0].msg}
                </div>
              </div>
            </button>))}
            <div class="relative h-8 shrink-0 2xl:h-12 z-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
