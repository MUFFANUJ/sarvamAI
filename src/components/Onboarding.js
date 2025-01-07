import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";

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
                    className="flex bg-[#EDE1D1] h-9 w-9 items-center justify-center rounded-full p-1.5 text-[#0D3C26] hover:bg-[#E5D5C0] active:bg-[#DEC9B0] absolute ml-4 mt-8 z-20 transition-all duration-300 ease-in-out"
                    type="button"
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.1408 17.6558C10.9157 17.8808 10.6106 18.0072 10.2924 18.0072C9.97418 18.0072 9.66902 17.8808 9.44398 17.6558L4.64398 12.8558C4.41902 12.6308 4.29264 12.3256 4.29264 12.0074C4.29264 11.6892 4.41902 11.3841 4.64398 11.159L9.44398 6.35902C9.55468 6.24441 9.68709 6.15299 9.8335 6.0901C9.9799 6.02721 10.1374 5.99411 10.2967 5.99272C10.456 5.99134 10.6141 6.0217 10.7615 6.08204C10.909 6.14237 11.043 6.23148 11.1557 6.34415C11.2683 6.45682 11.3574 6.5908 11.4178 6.73828C11.4781 6.88575 11.5085 7.04377 11.5071 7.2031C11.5057 7.36244 11.4726 7.5199 11.4097 7.66631C11.3468 7.81271 11.2554 7.94512 11.1408 8.05582L8.38918 10.8074L17.4924 10.8074C17.8106 10.8074 18.1159 10.9339 18.3409 11.1589C18.566 11.3839 18.6924 11.6892 18.6924 12.0074C18.6924 12.3257 18.566 12.6309 18.3409 12.8559C18.1159 13.081 17.8106 13.2074 17.4924 13.2074L8.38918 13.2074L11.1408 15.959C11.3657 16.1841 11.4921 16.4892 11.4921 16.8074C11.4921 17.1256 11.3657 17.4308 11.1408 17.6558Z"
                            fill="currentColor"
                        />
                    </svg>
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
                        // Images for the second page
                        <>
                            <OnboardingImage
                                alt="Balanced View"
                                src="https://pi.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbalanced-views.7a5fe202.png&w=640&q=75"
                                style={{
                                    left: 'calc(50% - 490px)',
                                    top: 'max(15%, 132px)',
                                    width: '247px',
                                }}
                                isAnimating={isAnimating}
                                delay={0}
                            />
                            <OnboardingImage
                                alt="Explore Emotions"
                                src="https://pi.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexplore-emotions.12adffe3.png&w=640&q=75"
                                style={{
                                    left: 'calc(50% + 134px)',
                                    top: 'max(10%, 36px)',
                                    width: '267px',
                                }}
                                isAnimating={isAnimating}
                                delay={0}
                            />
                            <OnboardingImage
                                alt="Relationship advice"
                                src="https://pi.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frelationship-advice.30dd9053.png&w=640&q=75"
                                style={{
                                    left: 'calc(50% - 380px)',
                                    top: 'max(47%, 360px)',
                                    width: '265px',
                                }}
                                isAnimating={isAnimating}
                                delay={0}
                            />
                            <OnboardingImage
                                alt="Learn a Language"
                                src="https://pi.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flearn-a-language.df7e175e.png&w=640&q=75"
                                style={{
                                    left: 'calc(50% + 40px)',
                                    top: 'max(60%, 366px)',
                                    width: '265px',
                                }}
                                isAnimating={isAnimating}
                                delay={0}
                            />
                            <OnboardingImage
                                alt="Unbiased Perspectives"
                                src="https://pi.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Funbiased-perspectives.b9a1f254.png&w=640&q=75"
                                style={{
                                    left: 'calc(50% + 366px)',
                                    top: 'max(30%, 234px)',
                                    width: '265px',
                                }}
                                isAnimating={isAnimating}
                                delay={0}
                            />
                            <OnboardingImage
                                alt="Get Philosophical"
                                src="https://pi.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fget-philosophical.b700044a.png&w=640&q=75"
                                style={{
                                    left: 'calc(50% - 770px)',
                                    top: 'max(47%, 360px)',
                                    width: '265px',
                                }}
                                isAnimating={isAnimating}
                                delay={0}
                            />
                            <OnboardingImage
                                alt="Create Habits"
                                src="https://pi.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcreate-habits.7f4c522f.png&w=640&q=75"
                                style={{
                                    left: 'calc(50% - 160px)',
                                    top: '-55px',
                                    width: '265px',
                                }}
                                isAnimating={isAnimating}
                                delay={0}
                            />
                        </>
                    ) : (
                        // Images for the first page
                        <>
                            <OnboardingImage
                                alt="Plan a trip"
                                src="https://pi.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplan-a-trip.c0fea154.png&w=3840&q=75"
                                style={{
                                    left: 'calc(50% - 490px)',
                                    top: 'max(15%, 132px)',
                                    width: '247px',
                                }}
                                isAnimating={isAnimating}
                                delay={0}
                            />
                            <OnboardingImage
                                alt="Write a text"
                                src="https://pi.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwrite-a-text.9e128091.png&w=3840&q=75"
                                style={{
                                    left: 'calc(50% + 134px)',
                                    top: 'max(10%, 36px)',
                                    width: '267px',
                                }}
                                isAnimating={isAnimating}
                                delay={0}
                            />
                            <OnboardingImage
                                alt="Write a story"
                                src="https://pi.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwrite-a-story.27b97ac8.png&w=3840&q=75"
                                style={{
                                    left: 'calc(50% - 380px)',
                                    top: 'max(47%, 360px)',
                                    width: '265px',
                                }}
                                isAnimating={isAnimating}
                                delay={0}
                            />
                            <OnboardingImage
                                alt="Code"
                                src="https://pi.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcode.dbd771ce.png&w=3840&q=75"
                                style={{
                                    left: 'calc(50% + 40px)',
                                    top: 'max(60%, 366px)',
                                    width: '265px',
                                }}
                                isAnimating={isAnimating}
                                delay={0}
                            />
                            <OnboardingImage
                                alt="Custom Podcast"
                                src="https://pi.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcustom-podcast.dfcef35e.png&w=640&q=75"
                                style={{
                                    left: 'calc(50% + 366px)',
                                    top: 'max(30%, 234px)',
                                    width: '265px',
                                }}
                                isAnimating={isAnimating}
                                delay={0}
                            />
                            <OnboardingImage
                                alt="Brainstorm ideas"
                                src="https://pi.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrainstorm-ideas.fcbb0d0c.png&w=640&q=75"
                                style={{
                                    left: 'calc(50% - 770px)',
                                    top: 'max(47%, 360px)',
                                    width: '265px',
                                }}
                                isAnimating={isAnimating}
                                delay={0}
                            />
                            <OnboardingImage
                                alt="Name of you Dog"
                                src="https://pi.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fname-your-dog.8c583033.png&w=640&q=75"
                                style={{
                                    left: 'calc(50% - 160px)',
                                    top: '-55px',
                                    width: '265px',
                                }}
                                isAnimating={isAnimating}
                                delay={0}
                            />
                        </>
                    )}
                </div>

                <div className={'flex justify-center items-center w-full'}>
                    <button
                        onClick={() => {
                            isSecondPage ? navigate('/persononboarding') : togglePage()
                        }}
                        className='bg-[#0D3C26] w-[350px] mx-auto absolute bottom-16 md:bottom-4 h-auto py-4 text-white text-lg md:text-xl font-medium mb-1 rounded-full font-sans my-5 mt-24 transition-all duration-300 ease-in-out hover:bg-[#0A2E1D] active:bg-[#072013]'
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
