import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {onBoardImages1,onBoardImages2} from "../store/onBoardImages"

export const Onboarding = () => {
    const navigate = useNavigate();
    const [isSecondPage, setIsSecondPage] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const togglePage = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsSecondPage(!isSecondPage);
            setIsAnimating(false);
        }, 0); 
    };

    useEffect(() => {
        setIsAnimating(true);
        const timer = setTimeout(() => setIsAnimating(false), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="h-screen w-full md:h-screen bg-[#FAF3EA] overflow-hidden">
            <div className="h-full relative">
                <button
                    onClick={() => {
                        !isSecondPage ? navigate('/') : togglePage()
                    }}
                    aria-label="Go back"
                    className="flex bg-primary-200 h-9 w-9 items-center justify-center rounded-full p-1.5 text-[#0D3C26] hover:bg-[#E5D5C0] active:bg-[#DEC9B0] absolute ml-4 mt-8 z-20 transition-all duration-300 ease-in-out"
                    type="button"
                >
                <FaArrowLeft />
                </button>

                <div className="flex flex-col h-full items-center justify-center text-center">
                    <h1
                        className={`p-4 text-[#0D3C26] font-[550] text-3xl md:text-5xl transition-all duration-300 ${
                            isAnimating ? "opacity-0" : "opacity-100"
                        }`}
                    >
                        <i className="text-4xl md:text-6xl font-[600]">
                            {isSecondPage ? "Grow" : "Create"}
                        </i>
                        <br/>
                        with Pi
                    </h1>
                </div>

                <div className="absolute inset-0 overflow-hidden">
                    {isSecondPage ? (
                        onBoardImages1.map((image, index) => (
                            <OnboardingImage
                              key={index}
                              alt={image.alt}
                              src={image.src}
                              style={image.style}
                              isAnimating={isAnimating}
                              delay={0}
                            />
                          ))
                    ) : (
                        onBoardImages2.map((image, index) => (
                            <OnboardingImage
                              key={index}
                              alt={image.alt}
                              src={image.src}
                              style={image.style}
                              isAnimating={isAnimating}
                              delay={0}
                            />
                          ))
                    )}
                </div>

                <div className='flex justify-center items-center w-full'>
                    <button
                        onClick={() => {
                            isSecondPage ? navigate('/persononboarding') : togglePage()
                        }}
                        className='bg-[#0D3C26] w-[350px] mx-auto absolute bottom-16 md:bottom-2 h-auto py-4 text-white text-lg md:text-xl font-medium mb-1 rounded-full font-sans my-5 mt-24 transition-all duration-300 ease-in-out hover:bg-[#0A2E1D] active:bg-[#072013]'
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

const OnboardingImage = ({alt, src, style, isAnimating, delay}) => (
    <div
        className={`absolute transition-all duration-300 ease-in ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
        style={{...style, transitionDelay: `${delay}ms`}}
    >
        <img
            alt={alt}
            loading="lazy"
            width="795"
            height="573"
            decoding="async"
            className="object-cover"
            sizes="275px"
            src={src}
            style={{color: 'transparent'}}
        />
    </div>
);

export default Onboarding;
