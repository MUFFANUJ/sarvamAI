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
    <div className="w-full h-screen lg:w-[375px] lg:shrink-0 lg:border-r lg:border-neutral-300 flex flex-col p-3 pt-5 bg-primary-100">
      <div className="bg-card-background">
      </div>
      <div className="flex w-full items-center justify-between px-6 pb-6">
        <h1 className="pr-9 font-condensed text-h-l-mobile text-2xl">Threads</h1>
        <button
          className="flex items-center justify-center whitespace-nowrap t-action-s h-8 rounded-lg px-3 bg-[#F5EADC] text-primary-700 font-medium gap-0.5"
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
      <div className="flex flex-col overflow-y-hidden">
        <div className="overflow-y-auto px-6 pb-3">
          <div className="space-y-3">
            {allHistory.length > 0 ? (allHistory.map((item,index)=> (
            <button
              type="button"
              className="flex h-[78px] w-full items-center overflow-hidden rounded-10 bg-[#F5EADC] hover:bg-neutral-200-hover active:bg-neutral-200-tap rounded-lg"
              onClick={()=>{
                setChatHistory(item)
              }}
            >
              <div className="flex flex-col justify-center gap-1 overflow-x-hidden px-4 text-left">
                <div className="t-body-s w-full truncate text-[#696255] font-semibold">
                  chat {index+1}
                </div>
                <div className="t-heading-s text-md  font-medium w-full truncate text-primary-700">
                  {item[item.length-1].msg}
                </div>
              </div>
            </button>))):(<div className="text-center">
              Start Creating New Threads Now!
              <p>
                Click On "New Thread" To Create
              </p>
              </div>
              )}
            <div className="relative h-8 shrink-0 2xl:h-12 z-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
