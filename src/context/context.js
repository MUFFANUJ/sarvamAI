import React, { createContext, useContext, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getAuth, signInWithPopup ,GoogleAuthProvider} from "firebase/auth";
import {app} from "../firebase/firebase.js"
import { useNavigate } from "react-router-dom";
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
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  // const navigate = useNavigate();

  const singInWithGoogle = () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    localStorage.setItem("loggedIn",true)
    // navigate("/profile");
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  })};

  function convertFormattedText(inputText) {
    let outputText = inputText
        .replace(/^\*\*(.*?)\*\*\n/gm, '<h2>$1</h2>') 
        .replace(/^\*(.*?)\*\n/gm, '<li>$1</li>') 
        .replace(/^\d+\.\s*(.*)$/gm, '<h3>$1</h3>') 

    outputText = outputText.replace(/(<li>.*?<\/li>)/g, '<ul>$1</ul>');
    outputText = outputText.replace(/<\/ul>\s*<ul>/g, '');

    outputText = outputText.split('\n\n').map(paragraph => {
        return `<p>${paragraph.trim().replace(/\n/g, '<br>')}</p>`;
    }).join('');

    outputText = outputText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); 

    return  convertToNormalText(outputText);
}

function convertToNormalText(htmlText) {
    let text = htmlText
        // Remove HTML tags but keep their content
        .replace(/<[^>]+>/g, '')
        // Replace HTML entities
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        // Preserve list formatting
        .replace(/•/g, '-')  // Replace bullet points with dashes
        // Handle multiple spaces and line breaks while preserving formatting
        .replace(/[ \t]+/g, ' ')  // Replace multiple spaces with single space
        .replace(/\n{3,}/g, '\n\n')  // Replace multiple line breaks with double line break
        .replace(/^\s+|\s+$/gm, '')  // Trim each line
        .replace(/^(-|\d+\.)\s*/gm, '\n$1 ')  // Ensure list items start on new lines
        .trim();
    
    // Fix spacing around list items and headers
    text = text
        .split('\n')
        .map(line => line.trim())
        .join('\n')
        .replace(/\n{3,}/g, '\n\n');  // Final cleanup of multiple line breaks
    
    return text;
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
      const formattedText = convertFormattedText(result.response.text())
      
      setIsLoading(false)
      setAiRes(formattedText);
      setSendReq(false)
      setChatHistory((prev) => {
        const newHistory = [
          ...prev,
          { msg: formattedText, bot: true },
        ];
        if (selectedVoice && !isMute) {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(
            result.response.text()
          );
          utterance.voice = selectedVoice;
          window.speechSynthesis.speak(utterance);
        }else{
            if(!isMute){
            window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(
            formattedText
          );
          utterance.voice = voices[0];
          window.speechSynthesis.speak(utterance);
        }}
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

  const readMessage = () => {
    const utterance = new SpeechSynthesisUtterance(
      chatHistory[chatHistory.length - 1].msg
    );
    utterance.voice = voices[0];
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
    readMessage,
    sendReq, 
    setSendReq,
    isLoading,
    setIsLoading,
    userName,
    singInWithGoogle
  };
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export default ContextProvider;
