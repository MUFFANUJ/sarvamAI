import React from "react";
import gridOrderObjects from "../store/data.js"
import { Link } from "react-router-dom";

export default function CollapseSideBar() {
  
    return (
    <div>
      <div class="no-scrollbar bg-[rgb(246,239,228)] lg:pt-8 w-[27vw] h-[100vh] overflow-y-scroll">
        <h2 class="mb-6 px-6">
          <div class="font-condensed text-h-m text-primary-700">
            Good morning
          </div>
        </h2>
        <h2 class="mb-6 px-6">
          <div class="mb-6 flex items-center rounded-20 border border-white bg-[rgb(249,243,235)] p-4 shadow-card transition-all rounded-10 duration-150 hover:scale-95 hover:bg-neutral-50-hover"
          style={{
            borderRadius: "15px",
          }}
          >
            <div class="pr-4">
              <svg
                width="56"
                height="56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-[56px] w-[56px]"
              >
                <path
                  d="M48.8704 49.3235C44.8104 48.273 41.1849 45.6309 38.9427 42.0872C38.7299 41.7512 38.507 41.3872 38.1452 41.2226C37.8675 41.096 37.5494 41.1083 37.2436 41.1207C33.9508 41.2539 30.6043 41.1475 27.4425 40.2168C23.2392 38.9792 19.6115 36.2341 18.2361 31.9669C18.1096 31.576 18.0569 31.0429 18.4209 30.8536C18.5777 30.7719 18.7659 30.7886 18.9417 30.8054C23.2907 31.2355 27.8525 30.9376 31.731 28.9239C35.6096 26.9101 38.656 22.9084 38.6011 18.5392C38.5955 18.0879 38.6033 17.5447 38.9875 17.3072C39.2272 17.1594 39.5329 17.1919 39.8118 17.2367C42.3285 17.6376 44.7566 18.5829 46.8835 19.9874C48.3899 20.9831 49.7596 22.2251 50.7195 23.7551C52.7825 27.0434 52.6392 31.5749 50.3723 34.7266C48.5613 37.2443 46.1958 38.2702 45.852 39.4283C45.7489 39.7755 45.8116 44.185 48.8704 49.3224V49.3235Z"
                  fill="#F96C00"
                ></path>
                <path
                  d="M7.65108 38.4685C7.75972 38.2859 7.84483 38.147 7.92547 38.0059C8.46867 37.0651 8.97715 36.1087 9.30643 35.0693C9.62451 34.0635 10.3234 30.2455 10.3749 29.3002C10.4063 28.7301 10.273 27.4275 10.273 27.4275C10.273 27.4275 9.5674 27.1061 9.50804 27.0736C9.35796 26.9896 7.37219 25.8517 6.28691 24.6779C2.66259 20.7568 4.01555 16.9018 4.24179 16.1066C4.95411 13.6011 6.62627 11.8349 7.79219 10.7239C10.833 7.82866 15.8786 7.1309 17.4264 6.88674C19.1714 6.6101 24.2484 6.5037 28.361 8.00226C32.5711 9.53778 35.4125 11.3163 37.8597 15.1187C38.2618 15.7437 38.4724 16.4392 38.6359 17.1549C38.7647 17.7194 38.805 18.2917 38.7804 18.8674C38.6415 22.1098 37.47 23.9074 37.116 24.3464C35.2916 26.6088 33.084 29.3629 26.2554 30.4527C25.3784 30.5927 22.6535 30.801 21.7653 30.8211C21.4293 30.829 17.917 30.521 17.917 30.521C17.917 30.521 17.6907 30.7831 17.6067 30.9309C17.357 31.3655 15.7084 33.5461 15.1943 34.1229C14.6645 34.7187 14.1191 35.3056 13.4672 35.7704C12.9397 36.1467 12.3853 36.4861 11.8298 36.8199C11.1612 37.2219 10.4824 37.6139 9.74323 37.8727C9.13171 38.0866 8.50339 38.2546 7.88179 38.4405C7.82803 38.4562 7.7698 38.4551 7.65108 38.4696V38.4685Z"
                  fill="#E3B5FA"
                ></path>
                <path
                  d="M20.2007 31.7474C19.6754 31.7115 19.1502 31.6656 18.6271 31.6096C18.327 31.5783 18.0066 31.5335 17.7815 31.3319C17.6079 31.1762 17.5094 30.8323 17.6583 30.6251C17.8252 30.3922 18.131 30.4795 18.3796 30.4986C19.1703 30.5602 19.9611 30.6195 20.754 30.6531C24.3929 30.8066 28.1371 30.4135 31.4097 28.8152C34.6823 27.2159 37.4274 24.2702 38.1409 20.6986C38.319 19.8059 38.3705 18.8931 38.4915 17.9904C38.5351 17.6623 38.7042 17.2411 39.0335 17.2837C39.309 17.3195 39.4121 17.6589 39.4423 17.9344C39.7907 21.0984 38.515 24.3274 36.3556 26.6659C34.1962 29.0045 31.2249 30.4997 28.1258 31.2254C25.5386 31.8314 22.8585 31.9277 20.203 31.7474H20.2007Z"
                  fill="#0D3C26"
                ></path>
                <path
                  d="M27.2738 20.8251C27.2503 20.8251 27.2267 20.8251 27.2043 20.8229C26.5503 20.7971 26.1202 20.5922 25.6543 20.1319C25.1872 19.6693 24.9655 18.8237 25.0371 18.1707C25.2051 16.6487 26.7575 15.7605 28.1821 16.1928C28.9907 16.4392 29.6515 17.1347 29.8375 17.9602C30.0234 18.7856 29.7199 19.7063 29.0691 20.245C28.5741 20.6549 27.9167 20.8363 27.2738 20.824V20.8251Z"
                  fill="#0D3C26"
                ></path>
                <path
                  d="M14.8427 16.0987C15.3926 16.0875 15.956 16.2667 16.4387 16.6889C17.216 17.3677 17.4881 18.5627 17.0838 19.5113C16.6784 20.46 15.6267 21.0883 14.5985 20.9965C13.5715 20.9046 12.6475 20.0982 12.4179 19.0925C12.0438 17.455 13.4001 16.1278 14.8416 16.0998L14.8427 16.0987Z"
                  fill="#0D3C26"
                ></path>
                <path
                  d="M21.2243 20.7221C20.4213 20.7277 19.6216 20.2707 19.1557 19.6256C18.2048 18.3085 19.0885 16.4851 20.6599 16.0718C21.7597 15.7829 22.9951 16.4885 23.4296 17.5222C23.9179 18.6825 23.153 20.059 22.0509 20.5429C21.9568 20.5843 21.8594 20.6201 21.7597 20.6481C21.5839 20.6985 21.4035 20.7221 21.2243 20.7232V20.7221Z"
                  fill="#0D3C26"
                ></path>
              </svg>
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
          <div className={card.imageDivClass}>
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
    </div>
  );
}
