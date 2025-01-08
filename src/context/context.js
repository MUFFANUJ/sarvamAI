import React, { createContext, useContext, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getAuth, signInWithPopup ,GoogleAuthProvider,signOut} from "firebase/auth";
import {app} from "../firebase/firebase.js"
export const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
  const [chatHistory, setChatHistory] = useState([
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
  ]);
  const [userInput, setUserInput] = useState("");
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(false);
  const [aiRes, setAiRes] = useState("");
  const [isMute, setIsMute] = useState(true);
  const [sendReq, setSendReq] = useState(false)
  const [isLoading,setIsLoading] = useState(false);
  const [userName,setUserName] = useState(localStorage.getItem('name'))

  const [logged,setLogged] = useState(false)
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const singInWithGoogle = () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    setUserName(user.displayName)
    localStorage.setItem("name",user.displayName)
    localStorage.setItem("loggedIn",true)
    setLogged(true)
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  })};
  
  const logOut = () => {
    signOut(auth).then(() => {
        
    }).catch((error) => {
      console.error(error.message);
    });
    setUserName("")
    setLogged(false)
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("name")
  };

  function simplifyText(inputText) {
    let simplifiedText = inputText.replace(/[*?\/\\&#]/g, '');
  
    simplifiedText = simplifiedText
      .replace(/-\s+\*\*/g, '\n- ')  
      .replace(/\*\*/g, '')          
      .replace(/(##|\*\*|\#)/g, '')  
      .replace(/\n\s*\n/g, '\n')     
      .replace(/(\d+\.)/g, '\n$1')   
      .replace(/([A-Z][a-z]+):/g, '$1'); 
  
    return simplifiedText.trim();
  }

  const aiResponse = () => {
    setIsLoading(true)
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
        history: [],
      });

      setChatHistory((prev) => [...prev, { msg: userInput, bot: false }]);
      setUserInput("");
      const result = await chatSession.sendMessage(userInput);
      const formattedText = simplifyText(result.response.text())
      
      setIsLoading(false)
      setAiRes(formattedText);
      setSendReq(false)
      setChatHistory((prev) => {
        const newHistory = [
          ...prev,
          { msg: formattedText, bot: true },
        ];
        if(selectedVoice && !isMute){
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(
            result.response.text()
          );
          utterance.voice = selectedVoice;
          window.speechSynthesis.speak(utterance);
        }
        
        return newHistory;
      });
      
    }
    run();
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
  };

  const readLatestMessage = () => {
    if (!selectedVoice || chatHistory.length === 0) return;

    const utterance = new SpeechSynthesisUtterance(
      chatHistory[chatHistory.length - 1].msg
    );
    
    utterance.voice = selectedVoice;
    window.speechSynthesis.speak(utterance);
  };


  const handleVoiceChange = (event) => {
    const voiceURI = event.target.value;
    const voice = voices.find((v) => v.voiceURI === voiceURI);
    setSelectedVoice(voice);

    if (voice) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(
        chatHistory[chatHistory.length - 1].msg
      );
      utterance.voice = voice;
      window.speechSynthesis.speak(utterance);
    }
  };
  const data = {
    chatHistory,
    setChatHistory,
    userInput,
    setUserInput,
    aiResponse,
    voices,
    setVoices,
    selectedVoice,
    setSelectedVoice,
    aiRes,
    setAiRes,
    readLatestMessage,
    handleVoiceChange,
    isMute,
    setIsMute,
    stopSpeaking,
    sendReq, 
    setSendReq,
    isLoading,
    setIsLoading,
    userName,
    singInWithGoogle,
    setLogged,
    logged,
    logOut
  };
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export default ContextProvider;
