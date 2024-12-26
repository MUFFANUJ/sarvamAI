import React from "react";

export default function LoginSignUp() {
  return (
    <div class="relative grow overflow-x-auto flex flex-col bg-[rgb(249,243,235)] overflow-y-scroll h-[100vh]">
      <div class="bg-card-background">
        <div class="flex items-center py-5 mt-2 rounded-t-card md:mt-0 md:rounded-none px-4 lg:px-10">
          <button
            aria-label="Go back"
            class="flex h-9 w-9 items-center justify-center rounded-full p-1.5 text-primary-700 bg-neutral-300 hover:bg-neutral-300-hover active:bg-neutral-300-tap"
            type="button"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.1408 17.6558C10.9157 17.8808 10.6106 18.0072 10.2924 18.0072C9.97418 18.0072 9.66902 17.8808 9.44398 17.6558L4.64398 12.8558C4.41902 12.6308 4.29264 12.3256 4.29264 12.0074C4.29264 11.6892 4.41902 11.3841 4.64398 11.159L9.44398 6.35902C9.55468 6.24441 9.68709 6.15299 9.8335 6.0901C9.9799 6.02721 10.1374 5.99411 10.2967 5.99272C10.456 5.99134 10.6141 6.0217 10.7615 6.08204C10.909 6.14237 11.043 6.23148 11.1557 6.34415C11.2683 6.45682 11.3574 6.5908 11.4178 6.73828C11.4781 6.88575 11.5085 7.04377 11.5071 7.2031C11.5057 7.36244 11.4726 7.5199 11.4097 7.66631C11.3468 7.81271 11.2554 7.94512 11.1408 8.05582L8.38918 10.8074L17.4924 10.8074C17.8106 10.8074 18.1159 10.9339 18.3409 11.1589C18.566 11.3839 18.6924 11.6892 18.6924 12.0074C18.6924 12.3257 18.566 12.6309 18.3409 12.8559C18.1159 13.081 17.8106 13.2074 17.4924 13.2074L8.38918 13.2074L11.1408 15.959C11.3657 16.1841 11.4921 16.4892 11.4921 16.8074C11.4921 17.1256 11.3657 17.4308 11.1408 17.6558Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <div class="grow text-primary-700">
            <h1 class="t-body-m m-0 pr-9 text-center">Account</h1>
          </div>
        </div>
      </div>
      <div class="flex grow flex-col overflow-y-auto px-6 pb-5 z-70">
        <div class="flex grow justify-center">
          <div data-projection-id="42" style={{opacity: "1"}}>
            <div class="mt-8 max-w-2xl md:mt-14">
              <div>
                <p class="t-heading-m text-primary-700 md:text-center text-center">
                  Create an account or sign in to save and see your conversation
                  history.
                </p>
                <div class="mx-auto mt-14 max-w-[353px]">
                  <div class="space-y-4">
                    <button
                      type="button"
                      class="flex items-center justify-center whitespace-nowrap t-action-m h-14 w-full max-w-[353px] rounded-full p-4 border-[1.5px] border-neutral-500 bg-[#FFF] text-primary-600"
                    >
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-black"
                      >
                        <path
                          d="M11.9995 10.1818V14.0546H17.3814C17.145 15.3 16.4358 16.3546 15.3722 17.0637L18.6177 19.5819C20.5086 17.8365 21.5995 15.2728 21.5995 12.2274C21.5995 11.5183 21.5359 10.8364 21.4177 10.1819L11.9995 10.1818Z"
                          fill="#4285F4"
                        ></path>
                        <path
                          d="M6.3957 13.9033L5.66372 14.4636L3.07275 16.4818C4.71822 19.7454 8.09072 22 11.9998 22C14.6998 22 16.9634 21.1091 18.618 19.5818L15.3725 17.0636C14.4816 17.6636 13.3452 18.0273 11.9998 18.0273C9.3998 18.0273 7.19076 16.2728 6.39979 13.9091L6.3957 13.9033Z"
                          fill="#34A853"
                        ></path>
                        <path
                          d="M3.07266 7.51816C2.39087 8.86357 2 10.3818 2 11.9999C2 13.6181 2.39087 15.1363 3.07266 16.4817C3.07266 16.4908 6.40001 13.8999 6.40001 13.8999C6.20001 13.2999 6.08179 12.6636 6.08179 11.9998C6.08179 11.3361 6.20001 10.6998 6.40001 10.0998L3.07266 7.51816Z"
                          fill="#FBBC05"
                        ></path>
                        <path
                          d="M12 5.98184C13.4728 5.98184 14.7818 6.49092 15.8273 7.47276L18.6909 4.60914C16.9546 2.99098 14.7001 2 12 2C8.09092 2 4.71822 4.24547 3.07275 7.51823L6.4 10.1001C7.19087 7.73639 9.40001 5.98184 12 5.98184Z"
                          fill="#EA4335"
                        ></path>
                      </svg>
                      <span class="grow">Continue with Google</span>
                    </button>
                    <button
                      type="button"
                      class="flex items-center justify-center whitespace-nowrap t-action-m h-14 w-full max-w-[353px] rounded-full p-4 bg-[#1877F2] text-[#FFF]"
                    >
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-black"
                      >
                        <g clip-path="url(#clip0_1698_1078)">
                          <path
                            d="M22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47715 2 12C2 16.9912 5.65684 21.1283 10.4375 21.8785V14.8906H7.89844V12H10.4375V9.79688C10.4375 7.29063 11.9305 5.90625 14.2146 5.90625C15.3088 5.90625 16.4531 6.10156 16.4531 6.10156V8.5625H15.1922C13.95 8.5625 13.5625 9.3334 13.5625 10.1242V12H16.3359L15.8926 14.8906H13.5625V21.8785C18.3432 21.1283 22 16.9914 22 12Z"
                            fill="white"
                          ></path>
                          <path
                            d="M15.8926 14.8906L16.3359 12H13.5625V10.1242C13.5625 9.3334 13.95 8.5625 15.1922 8.5625H16.4531V6.10156C16.4531 6.10156 15.3088 5.90625 14.2146 5.90625C11.9305 5.90625 10.4375 7.29063 10.4375 9.79688V12H7.89844V14.8906H10.4375V21.8785C10.9467 21.9584 11.4684 22 12 22C12.5316 22 13.0533 21.9584 13.5625 21.8785V14.8906H15.8926Z"
                            fill="#1877F2"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_1698_1078">
                            <rect
                              width="20"
                              height="20"
                              fill="white"
                              transform="translate(2 2)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      <span class="grow">Continue with Facebook</span>
                    </button>
                    <button
                      type="button"
                      class="flex items-center justify-center whitespace-nowrap t-action-m h-14 w-full max-w-[353px] rounded-full p-4 bg-[#000] text-[#FFF]"
                    >
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-black"
                      >
                        <path
                          d="M20.4571 7.15962C20.336 7.25412 18.1976 8.46595 18.1976 11.1605C18.1976 14.2772 20.9186 15.3798 21 15.4071C20.9875 15.4743 20.5677 16.9172 19.5654 18.3873C18.6717 19.6811 17.7382 20.9727 16.3183 20.9727C14.8983 20.9727 14.5329 20.1431 12.8936 20.1431C11.2962 20.1431 10.7282 21 9.42931 21C8.13045 21 7.22417 19.8029 6.18216 18.3327C4.97519 16.6064 4 13.9244 4 11.3789C4 7.29613 6.63948 5.13081 9.23719 5.13081C10.6175 5.13081 11.7681 6.0423 12.6347 6.0423C13.4595 6.0423 14.7459 5.07621 16.3162 5.07621C16.9113 5.07621 19.0496 5.13081 20.4571 7.15962ZM15.5707 3.34773C16.2201 2.57276 16.6795 1.49745 16.6795 0.422142C16.6795 0.273027 16.667 0.121812 16.6398 0C15.5832 0.039904 14.3261 0.707771 13.5681 1.59196C12.973 2.27243 12.4175 3.34773 12.4175 4.43774C12.4175 4.60156 12.4447 4.76538 12.4572 4.81788C12.524 4.83048 12.6326 4.84518 12.7412 4.84518C13.6892 4.84518 14.8816 4.20672 15.5707 3.34773Z"
                          fill="white"
                        ></path>
                      </svg>
                      <span class="grow">Continue with Apple</span>
                    </button>
                  </div>
                  <div class="t-body-s lines-around-text my-6 text-center text-neutral-900 md:my-12">
                    or
                  </div>
                  <button
                    class="flex items-center justify-center whitespace-nowrap t-action-m h-14 w-full max-w-[353px] rounded-full p-4 border-[1.5px] border-neutral-500 bg-neutral-50 active:bg-neutral-50-tap hover:bg-neutral-50-hover text-primary-600"
                    type="button"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="h-6 w-6"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M15.5 1h-8A2.5 2.5 0 005 3.5v17A2.5 2.5 0 007.5 23h8a2.5 2.5 0 002.5-2.5v-17A2.5 2.5 0 0015.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"></path>
                    </svg>
                    <span class="grow">Use phone number</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
