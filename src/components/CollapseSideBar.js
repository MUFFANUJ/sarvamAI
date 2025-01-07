import React, { useContext, useEffect } from "react";
import gridOrderObjects from "../store/data.js";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/context.js";
import downloadPiHistory from "../assets/downloadPiHistory.svg"

export default function CollapseSideBar() {
  const { setUserInput, userInput, aiResponse, sendReq, setSendReq,userName } = useContext(GlobalContext);
  useEffect(() => {
    if (!sendReq) return;
    if (userInput) {
      aiResponse();
    }
    setSendReq(false)
  }, [userInput, sendReq]);

  return (

      <div className="bg-[rgb(246,239,228)] lg:pt-8 h-[100vh] overflow-scroll scrollbar-hide">
        <h2 class="mb-6 px-6">
          <div class="font-condensed text-h-m text-primary-700 text-2xl font-openSans">
            Good morning, {userName} 
          </div>
        </h2>
        <h2 class="mb-6 px-6">
          <div
            class="mb-6 flex items-center rounded-20 bg-[rgb(249,243,235)] p-4 shadow-card transition-all rounded-10 duration-150 hover:scale-95 hover:bg-neutral-50-hover "
            style={{
              borderRadius: "15px",
            }}
          >
            <div class="pr-4">
              <img src={downloadPiHistory}/>
            </div>
            <div>
              <h2 class="font-condensed text-h-m text-primary-700">
                Download your Pi conversation history
              </h2>
              <Link
                class="t-body-s mt-4 block text-primary-600"
                to="/profile/manage-history"
              >
                Manage history
              </Link>
            </div>
          </div>
        </h2>
        <div class="px-6 pb-6">
          <div class="grid grid-cols-2 gap-4 overflow-y-auto sm:grid-cols-4 lg:grid-cols-2">
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
