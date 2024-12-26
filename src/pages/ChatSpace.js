import React, { useEffect, useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Link } from 'react-router-dom';


export default function ChatSpace() {
  const [userInput, setUserInput] = useState('')
  const [aiRes, setAiRes] = useState('')
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [chatHistory, setChatHistory] = useState([{msg:`Hey there, great to meet you. I’m Pi, your
  personal AI.`, bot: true}, {msg:`My goal is to be useful, friendly and fun. Ask
  me for advice, for answers, or let’s talk
  about whatever’s on your mind.`,bot:true}])
  useEffect(() => {
    const getVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      if (availableVoices.length > 0) {
        setVoices(availableVoices);
        setSelectedVoice(availableVoices[0]);
      }
    };
 // Some browsers need a small delay to load voices
 window.speechSynthesis.onvoiceschanged = getVoices;
 getVoices();

 return () => {
   window.speechSynthesis.cancel();
 };
}, []);


const readLatestMessage = () => {
  if (!selectedVoice || chatHistory.length === 0) return;

  const utterance = new SpeechSynthesisUtterance(chatHistory[chatHistory.length - 1].msg);
  utterance.voice = selectedVoice;
  window.speechSynthesis.speak(utterance);
};


const handleVoiceChange = (event) => {
  const voiceURI = event.target.value;
  const voice = voices.find(v => v.voiceURI === voiceURI);
  setSelectedVoice(voice);
  
  if (voice) {
    window.speechSynthesis.cancel(); // Stop any ongoing speech
    const utterance = new SpeechSynthesisUtterance(chatHistory[chatHistory.length - 1].msg);
    utterance.voice = voice;
    window.speechSynthesis.speak(utterance);
  }
};

  const aiResponse = () => {
  
    const apiKey = "AIzaSyBcYndL_3k3KkXXHRPZIo5kQz-oNeeK0OQ";
    const genAI = new GoogleGenerativeAI(apiKey);
    
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
    });
    
    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 40,
      maxOutputTokens: 8192,
      responseMimeType: "text/plain",
    };
    
    async function run() {
      const chatSession = model.startChat({
        generationConfig,
        history: [
        ],
      });
    
      setChatHistory(prev => [...prev,{msg:userInput,bot:false}])
      setUserInput("")
      const result = await chatSession.sendMessage(userInput);
      // console.log(result.response.text());
      setAiRes(result.response.text())
      setChatHistory(prev => {
        const newHistory = [...prev, {msg:result.response.text(), bot:true}];
        // Only speak if there's a selected voice and it's a bot message
        if(selectedVoice) {
          window.speechSynthesis.cancel(); // Cancel any ongoing speech
          const utterance = new SpeechSynthesisUtterance(result.response.text());
          utterance.voice = selectedVoice;
          window.speechSynthesis.speak(utterance);
        }
        return newHistory;
      });
      // if(selectedVoice){
      //   readLatestMessage()
      // }
    }
    
    run();
  }
  return (
    <div className="flex h-dscreen bg-[rgb(249,243,235)] h-full w-full ">
        <div className="w-full lg:w-[375px] lg:shrink-0 lg:border-r lg:border-neutral-300 hidden"></div>
        <div className="relative grow overflow-x-auto flex flex-col">
          <div className="relative flex flex-col overflow-hidden sm:overflow-x-visible h-[100vh] pt-8 grow ">
            <div className="relative w-full mx-auto max-w-1.5xl 2xl:max-w-[47rem]">
              <div className="absolute w-full bg-[rgb(249,243,235)] from-neutral-50 to-transparent lg:h-[50px] z-10 h-[50px]"></div>
            </div>
            <div className="relative grow overflow-y-hidden">
              <div className="h-full" style={{opacity: 1}}>
                <div className="scrollbar-gutter-both-edges relative h-full overflow-y-auto overflow-x-hidden">
                  <div className="t-body-chat relative h-full space-y-6 px-5 text-primary-700 w-full mx-auto max-w-1.5xl 2xl:max-w-[47rem]">
                    <div className="relative h-8 shrink-0 2xl:h-12 z-30"></div>
                    <div className="w-full h-14"></div>
                    <div className="pb-6 lg:pb-8 min-h-[calc(100%-60px)] sm:min-h-[calc(100%-120px)]">
                      <div className="relative space-y-6">
                        <div className="space-y-6">
                          <div className="break-anywhere">
                            <div className="flex items-center">
                              <div className="w-full flex flex-col justify-center align-center">
                                {chatHistory.map((chat)=> (
                                  <>
                                  { chat.bot ? ( <div className="whitespace-pre-wrap mb-4 last:mb-0 " style={{float:"left"}}>
                                      {chat.msg}
                                  </div>): (
                                    <div className="whitespace-pre-wrap mb-4 last:mb-0" style={{float:"right"}}>
                                    {chat.msg}
                                  </div>
                                  )}
                                  </>
                                  )
                                )}
                                
                              </div>
                            </div>
                            <div style={{opacity: "0", height: "0px"}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mx-auto max-w-1.5xl 2xl:max-w-[47rem]"></div>
            <div
              className="max-h-[40%] px-5 sm:px-0 z-15 w-full mx-auto max-w-1.5xl 2xl:max-w-[47rem]"
              style={{opacity: "1"}}
            >
              <div className="relative flex  items-center h-full w-full cursor-text items-end border border-transparent bg-neutral-25 shadow-input transition-all duration-300 focus-within:border-neutral-400 focus-within:shadow-none hover:border-neutral-400 hover:shadow-none rounded-[30px] w-3/4">
                <div className="h-full grow overflow-y-auto py-3 pl-[1.185rem] pr-4 lg:py-2.5 2xl:py-[8.5px]">
                  <input
                    role="textbox"
                    className="t-body-chat block w-full resize-none overflow-y-hidden whitespace-pre-wrap bg-transparent text-primary-700 outline-none placeholder:text-neutral-600 bg-[rgb(252,250,247)]  pl-5 outline-none "
                    spellcheck="false"
                    placeholder="Talk with Pi"
                    value={userInput}
                    enterkeyhint="enter"
                    style={{height: "32px !important", borderRadius:"35px"}}
                    onChange={(e)=> setUserInput(e.target.value)}
                    onKeyDown={(e)=> {
                      if(e.key === "Enter"){
                        aiResponse()
                      }
                        return
                    }}
                  />
                </div>
                <button
                  aria-label="Submit text"
                  className="flex h-9 w-9 items-center justify-center rounded-full p-1.5 text-neutral-600 bg-neutral-50 m-2 transition-colors duration-300"
                  type="button"
                  disabled=""
                  onClick={aiResponse}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="16"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M.852 7.648a1.2 1.2 0 0 1 0-1.696l4.8-4.8a1.2 1.2 0 0 1 1.696 0l4.8 4.8a1.2 1.2 0 1 1-1.697 1.696L7.7 4.897V14a1.2 1.2 0 0 1-2.4 0V4.897L2.548 7.648a1.2 1.2 0 0 1-1.696 0Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="px-5 py-6 w-full mx-auto max-w-1.5xl 2xl:max-w-[47rem]">
              <div style={{opacity: "1"}}>
                <div className="t-label mx-auto text-center text-neutral-900">
                  By using Pi, you agree to our{" "}
                  <Link
                    to="/profile/terms"
                    className="text-primary-600 underline"
                  >
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/profile/policy"
                    className="text-primary-600 underline"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-4 top-8 flex items-start lg:inset-x-10 lg:flex-row-reverse z-40">
            <div className="flex grow items-center lg:hidden">
              <button
                aria-label="Go back to discover"
                className="flex h-9 w-9 items-center justify-center rounded-full p-1.5 text-primary-700 bg-neutral-300 hover:bg-neutral-300-hover active:bg-neutral-300-tap"
                type="button"
              >
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.3 5C8.90751 5 9.4 5.49249 9.4 6.1V7.2H10.5C11.1075 7.2 11.6 7.69249 11.6 8.3C11.6 8.90751 11.1075 9.4 10.5 9.4H9.4V10.5C9.4 11.1075 8.90751 11.6 8.3 11.6C7.69249 11.6 7.2 11.1075 7.2 10.5V9.4H6.1C5.49249 9.4 5 8.90751 5 8.3C5 7.69249 5.49249 7.2 6.1 7.2H7.2V6.1C7.2 5.49249 7.69249 5 8.3 5ZM17.1 5C17.5735 5 17.9938 5.30295 18.1435 5.7521L20.4922 12.797L26.2863 14.9701C26.7156 15.1311 27 15.5415 27 16C27 16.4585 26.7156 16.8689 26.2863 17.0299L20.4922 19.203L18.1435 26.2479C17.9938 26.697 17.5735 27 17.1 27C16.6265 27 16.2062 26.697 16.0565 26.2479L13.7078 19.203L7.91372 17.0299C7.48441 16.8689 7.2 16.4585 7.2 16C7.2 15.5415 7.48441 15.1311 7.91372 14.9701L13.7078 12.797L16.0565 5.7521C16.2062 5.30295 16.6265 5 17.1 5ZM9.4 20.4C10.0075 20.4 10.5 20.8925 10.5 21.5V22.6H11.6C12.2075 22.6 12.7 23.0925 12.7 23.7C12.7 24.3075 12.2075 24.8 11.6 24.8H10.5V25.9C10.5 26.5075 10.0075 27 9.4 27C8.79249 27 8.3 26.5075 8.3 25.9V24.8H7.2C6.59249 24.8 6.1 24.3075 6.1 23.7C6.1 23.0925 6.59249 22.6 7.2 22.6H8.3V21.5C8.3 20.8925 8.79249 20.4 9.4 20.4Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <div className="grow"></div>
              <button
                aria-label="Go to threads"
                className="flex h-9 w-9 items-center justify-center rounded-full p-1.5 text-primary-700 bg-neutral-300 hover:bg-neutral-300-hover active:bg-neutral-300-tap mr-2"
                type="button"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                >
                  <path
                    d="M2 6V20.6667C2 21.403 2.59695 22 3.33333 22H18"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M7.14286 18L20.8571 18C21.4883 18 22 17.4883 22 16.8571L22 3.14286C22 2.51168 21.4883 2 20.8571 2L7.14286 2C6.51167 2 6 2.51168 6 3.14286L6 16.8571C6 17.4883 6.51167 18 7.14286 18Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19 9H9V7H19V9Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17 13H9V11H17V13Z"
                    fill="currentColor"
                  ></path>
                  <path d="M19 9H9V7H19V9Z" fill="currentColor"></path>
                  <path d="M9 13H17V11H9V13Z" fill="currentColor"></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.8571 1H7.14286C5.95939 1 5 1.95939 5 3.14286V16.8571C5 18.0406 5.95939 19 7.14286 19H20.8571C22.0406 19 23 18.0406 23 16.8571L23 3.14286C23 1.95939 22.0406 1 20.8571 1ZM7.14286 3L20.8571 3C20.936 3 21 3.06396 21 3.14286L21 16.8571C21 16.936 20.936 17 20.8571 17H7.14286C7.06396 17 7 16.936 7 16.8571V3.14286C7 3.06396 7.06396 3 7.14286 3Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M3 6C3 5.44772 2.55228 5 2 5C1.44772 5 1 5.44772 1 6V20.6667C1 21.9553 2.04467 23 3.33333 23H18C18.5523 23 19 22.5523 19 22C19 21.4477 18.5523 21 18 21H3.33333C3.14924 21 3 20.8508 3 20.6667V6Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="">
            <div className="w-full max-w-xs">
        <select
          value={selectedVoice?.voiceURI || ''}
          onChange={handleVoiceChange}
          className="w-full p-2 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700"
        >
          <option value="">Select a voice</option>
          {voices.map((voice) => (
            <option key={voice.voiceURI} value={voice.voiceURI}>
              {voice.name} ({voice.lang})
            </option>
          ))}
        </select>
      </div>
              {/* <div className="relative flex flex-col-reverse">
                <div className="t-action-m -mt-5 flex flex-col rounded-b-xl bg-neutral-200 text-neutral-900"></div>
                <div
                  className="relative flex items-center justify-end self-end overflow-hidden p-2 bg-neutral-200 hover:bg-neutral-200-hover"
                  style={{borderRadius: "9999px"}}
                >
                  <div
                    className="absolute inset-0 -z-10 bg-neutral-200"
                    style={{borderRadius: "9999px"}}
                  ></div>
                  <div
                    className="t-label overflow-visible whitespace-nowrap text-neutral-900"
                    style={{opacity: "0", width: "0px"}}
                  >
                    Choose Pi's voice
                  </div>
                  <button
                    className="group z-10 flex items-center text-neutral-800"
                    type="button"
                  >
                    <div>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-5 w-5 lg:h-6 lg:w-6"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z"></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>  */}
              {/* <div className="relative flex items-center justify-end self-end overflow-hidden p-2" style={{borderRadius: "18px"}}><div className="absolute inset-0 -z-10 bg-neutral-200" style={{borderRadius: "18px"}}></div><button className="group z-10 flex items-center text-neutral-800" type="button"><div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-primary-700 lg:h-6 lg:w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z"></path><path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z"></path></svg></div></button><button className="z-10 bg-neutral-200 pl-4 text-neutral-900" type="button"><div style={{transform: "none"}}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5 lg:h-6 lg:w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></div></button></div> */}
            </div>
          </div>
        </div>
      </div>
  )
}
