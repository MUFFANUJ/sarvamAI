import React,{useContext, useEffect, useState} from "react";
import { GlobalContext } from "../context/context";
import { IoMdAddCircle } from "react-icons/io";

export default function Threads() {

    const { chatHistory,setChatHistory } = useContext(GlobalContext);
    const [allHistory,setAllHistory] = useState([])
    useEffect(()=>{
        const reponse = JSON.parse(localStorage.getItem("allchat")) || []; 
        setAllHistory(reponse)
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
    <div class="w-full lg:w-[375px] lg:shrink-0 lg:border-r lg:border-neutral-300 flex flex-col p-3 pt-5 bg-primary-100">
      <div class="bg-card-background">
      </div>
      <div class="flex w-full items-center justify-between px-6 pb-6">
        <h1 class="pr-9 font-condensed text-h-l-mobile text-2xl">Threads</h1>
        <button
          class="flex items-center justify-center whitespace-nowrap t-action-s h-8 rounded-lg px-3 bg-[#F5EADC] text-primary-700 gap-0.5"
          type="button"
          onClick={()=>{
            storeAllChatHistory()
            startnewChat()
          }}
        >
          New thread{" "}
          <IoMdAddCircle size={20}/>
        </button>
      </div>
      <div class="flex flex-col overflow-y-hidden">
        <div class="overflow-y-auto px-6 pb-3">
          <div class="space-y-3">
            {allHistory.map((item,index)=> (
            <button
              type="button"
              class="flex h-[78px] w-full items-center overflow-hidden rounded-10 bg-[#F5EADC] hover:bg-neutral-200-hover active:bg-neutral-200-tap rounded-lg"
              onClick={()=>{
                setChatHistory(item)
              }}
            >
              <div class="flex flex-col justify-center gap-1 overflow-x-hidden px-4 text-left">
                <div class="t-body-s w-full truncate text-neutral-900">
                  chat {index+1}
                </div>
                <div class="t-heading-s w-full truncate text-primary-700">
                  {item[item.length-1].msg}
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
