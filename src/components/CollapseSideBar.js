import React, { useContext, useEffect } from "react";
import gridOrderObjects from "../store/data.js";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/context.js";
import downloadPiHistory from "../assets/downloadPiHistory.svg"

export default function CollapseSideBar() {
  const { setUserInput, userInput, aiResponse, sendReq, setSendReq,userName } = useContext(GlobalContext);
  function getGreeting() {
    const currentHour = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata', hour: 'numeric', hour12: false });
  
    if (currentHour >= 5 && currentHour < 12) {
      return 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 17) {
      return 'Good Afternoon';
    } else if (currentHour >= 17 && currentHour < 21) {
      return 'Good Evening';
    } else {
      return 'Good Night';
    }
  }
  useEffect(() => {
    if (!sendReq) return;
    if (userInput) {
      aiResponse();
    }
    setSendReq(false)
  }, [userInput, sendReq]);

  return (

      <div className="bg-primary-100 pt-8 h-screen overflow-y-scroll scrollbar-hide">
        <h2 className="mb-6 px-6">
          <div className=" text-h-m text-primary-700 text-2xl">
            {getGreeting()}, {userName} 
          </div>
        </h2>
        <h2 className="mb-6 px-6">
          <div
            className="mb-6 flex items-center rounded-20 bg-[rgb(249,243,235)] p-4 shadow-card transition-all rounded-10 duration-150 hover:scale-95 hover:bg-neutral-50-hover "
            style={{
              borderRadius: "15px",
            }}
          >
            <div className="pr-4">
              <img src={downloadPiHistory}/>
            </div>
            <div>
              <h2 className="font-normal text-h-m text-primary-700">
                Download your Pi conversation history
              </h2>
              <Link
                className="t-body-s mt-4 block text-success-500"
                to="/profile/manage-history"
              >
                Manage history
              </Link>
            </div>
          </div>
        </h2>
        <div className="px-6 pb-6">
          <div className="grid grid-cols-2 gap-4  sm:grid-cols-4 lg:grid-cols-2 font-semibold" >
            {gridOrderObjects.map((card) => (
              <button
                key={card.gridOrder}
                className={card.btnClass}
                type="button"
                style={card.style}
              >
                <div
                  className={card.imageDivClass}
                  onClick={() => {
                    setSendReq(true);
                    setUserInput(card.text);
                  }}
                >
                  <div className={card.imageInnerDivClass}>
                    <img
                      alt={card.text}
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-cover"
                      sizes="(max-width: 639px) 284px, (max-width: 1023px) 230px, 150px"
                      src={card.imageSrc}
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                        borderRadius: "15px",
                      }}
                    />
                  </div>
                  <div className={card.textDivClass}></div>
                  <div className={card.textDivInnerClass}>{card.text}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

  );
}
