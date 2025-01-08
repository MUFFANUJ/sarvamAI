import React, { useContext } from "react";
import { GlobalContext } from "../../context/context";

export default function VoicesDropDown({handleVoiceSelection}) {
    const {
        voices,
        selectedVoice
      } = useContext(GlobalContext);
  return (
    <div className="t-action-m -mt-5 flex flex-col rounded-b-xl  p-2 pt-5">
      {voices.map((voice, index) => (
        <button
          onClick={() => {
            handleVoiceSelection(voice);
          }}
          type="button"
          className={`${
            voice === selectedVoice
              ? "bg-selected-50"
              : selectedVoice === false && index == 0
              ? "bg-selected-50"
              : ""
          } mb-1 rounded px-2 py-3 text-center hover:bg-neutral-200 border-neutral-500`}
        >
          Pi {index + 1} {[0, 1, 2].includes(index) ? "✨" : ""}
        </button>
      ))}
    </div>
  );
}
