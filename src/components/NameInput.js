import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";

const NameInput = ({setOnBoarding}) => {
    const navigate = useNavigate();
    const [isSending, setIsSending] = useState(false);
    const [inputName, setInputName] = useState("");

    const handleSubmit = () => {
        localStorage.setItem('name', inputName);
        if (!inputName.trim() || isSending) return;
        setIsSending(true);
        localStorage.setItem("onBoarding",false)
        navigate('/onboarding/voices');
    };

    return (
        <div className='w-full h-screen bg-[#FAF3EA] flex justify-start items-center p-4 flex-col animate-fadeIn'>
            <header className='w-full mt-7 fixed px-5 top-0'>
                <div className='bg-[#F5EADC] text-[#0D3C26] h-10 w-10 rounded-full flex items-center justify-center cursor-pointer' onClick={()=> {navigate("/onboarding")}}>
                    <FaArrowLeft />
                </div>
            </header>

            <div className='px-6 flex flex-col justify-start items-start mt-16 text-[#0D3C26] font-semibold tracking-tighter'>
                <div className={'flex flex-col justify-center items-start mt-10 w-full'}>
                    <div className='flex w-full items-end'>
                        <p className='text-3xl'>Hello! I'm Pi.</p>
                        <img src="https://pi.ai/illustrations/high-five.svg" alt="welcome-clap" className='w-11 h-11'/>
                    </div>
                    <p className='text-3xl mb-3'>What's your name?</p>
                    <div className='flex flex-col justify-center items-start mt-2 text-[#6B6255] font-medium font-sans text- tracking-normal'>
                        <p>I take data privacy seriously. Our chats stay between us.</p>
                        <p>We never share your data for ads or marketing.</p>
                    </div>
                </div>

                <div className='mt-10 w-full'>
                    <div className="flex items-center md:w-[65vw] w-[80vw] max-w-[800px] bg-white rounded-full shadow-lg overflow-hidden hover:border hover:border-[#c9b597] px-2">
                        <input
                            type="text"
                            placeholder="Your first name"
                            className="flex-grow px-5 font-normal py-3 text-[24px] h-auto text-black placeholder-[#c9b597] focus:outline-none placeholder:tracking-wide placeholder:text-[24px] w-full"
                            value={inputName}
                            onChange={(e) => setInputName(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                        />
                        <button
                            className={`flex items-center justify-center w-10 h-10 rounded-full
                              ${inputName.trim() && !isSending ? 'bg-green-600' : 'bg-[#FAF3EA]'} 
                              ${inputName.trim() && !isSending ? 'text-white' : 'text-[#6B6255]'}
                              hover:${inputName.trim() && !isSending ? 'bg-[#8d6d42]' : ''} 
                              disabled:opacity-50`}
                            aria-label="Send"
                            onClick={handleSubmit}
                            disabled={!inputName.trim() || isSending}
                        >
                            {isSending ? (
                                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16" width="12" height="16" fill="currentColor">
                                    <path fillRule="evenodd" d="M.852 7.648a1.2 1.2 0 0 1 0-1.696l4.8-4.8a1.2 1.2 0 0 1 1.696 0l4.8 4.8a1.2 1.2 0 1 1-1.697 1.696L7.7 4.897V14a1.2 1.2 0 0 1-2.4 0V4.897L2.548 7.648a1.2 1.2 0 0 1-1.696 0Z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NameInput;