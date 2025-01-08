import React, { createContext, useState, useEffect, useContext } from 'react';
import { GlobalContext } from './context';

export const VoiceContext = createContext();

export const useVoiceContext = () => {
  return useContext(VoiceContext);
};

const VoiceProvider = ({ children }) => {
    const {chatHistory,voices,setVoices,selectedVoice,setSelectedVoice} = useContext(GlobalContext)
  

    const fetchVoices = () => {
        const allVoices = window.speechSynthesis.getVoices();
      
        const fixedIndices = [0, 18, 22, 33, 46, 90, 93, 100];
        
        const availableVoices = fixedIndices
          .map(index => allVoices[index])
          .filter(voice => voice); 
      
        if (availableVoices.length > 0) {
          setVoices(availableVoices);
          if (!selectedVoice) {
            setSelectedVoice(availableVoices[0]);
          }
        }
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

  const readLatestMessage = () => {
    stopSpeaking()
    if (!selectedVoice || chatHistory.length === 0) return;

    const utterance = new SpeechSynthesisUtterance(
      chatHistory[chatHistory.length - 1]?.msg || ''
    );
    utterance.voice = selectedVoice;
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
  };

  useEffect(() => {
    const onVoicesChanged = () => {
      fetchVoices();
    };

    window.speechSynthesis.onvoiceschanged = onVoicesChanged;
    fetchVoices();
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <VoiceContext.Provider value={{ voices, selectedVoice, handleVoiceChange, readLatestMessage,stopSpeaking,fetchVoices }}>
      {children}
    </VoiceContext.Provider>
  );
};

export default VoiceProvider;