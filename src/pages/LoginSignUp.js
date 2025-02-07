import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/context";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export default function LoginSignUp() {
  const {singInWithGoogle,onBoarding} = useContext(GlobalContext)
  return (
    <div className="relative grow overflow-x-auto flex flex-col bg-primary-50 overflow-y-scroll h-[100vh]">
      <div className="bg-card-background">
      
        <div className="flex items-center py-5 mt-2 rounded-t-card md:mt-0 md:rounded-none px-4 lg:px-10">
          {
            onBoarding ? (<Link
              aria-label="Go back"
              className="flex h-9 w-9 items-center justify-center rounded-full p-1.5 text-primary-700 bg-primary-200"
              type="button"
              to="/"
            >
              <ImCross />
            </Link>): (<Link
            aria-label="Go back"
            className="flex h-9 w-9 items-center justify-center rounded-full p-1.5 text-primary-700 bg-primary-200"
            type="button"
            to="/profile"
          >
            <FaArrowLeft />
          </Link>)
          }
          

          
          <div className="grow text-primary-700">
            <h1 className="t-body-m m-0 pr-9 text-center text-3xl">Account</h1>
          </div>
        </div>
      </div>
      <div className="flex grow flex-col overflow-y-auto px-6 pb-5 z-70">
        <div className="flex grow justify-center">
          <div data-projection-id="42" style={{opacity: "1"}}>
            <div className="mt-8 max-w-2xl md:mt-14">
              <div>
                <p className="t-heading-m text-primary-700 md:text-center text-center">
                  Create an account or sign in to save and see your conversation
                  history.
                </p>
                <div className="mx-auto mt-14 max-w-[353px]">
                  <div className="space-y-4">
                    <button
                    onClick={singInWithGoogle}
                      type="button"
                      className="flex items-center justify-center whitespace-nowrap t-action-m h-14 w-full max-w-[353px] rounded-full p-4 border-[1.5px] border-neutral-500 text-primary-600"
                    >
                      <FcGoogle size={30} />
                      <span className="grow">Continue with Google</span>
                    </button>
                    <button
                      type="button"
                      className="flex items-center justify-center whitespace-nowrap t-action-m h-14 w-full max-w-[353px] rounded-full p-4 bg-[#1877F2] text-white"
                    >
                      <BsFacebook size={30}/>
                      <span className="grow">Continue with Facebook</span>
                    </button>
                    <button
                      type="button"
                      className="flex items-center justify-center whitespace-nowrap t-action-m h-14 w-full max-w-[353px] rounded-full p-4 bg-black text-white"
                    >
                      <FaApple size={30}/>
                      <span className="grow">Continue with Apple</span>
                    </button>
                  </div>
                  <div className="t-body-s lines-around-text my-6 text-center text-neutral-900 md:my-12">
                    or
                  </div>
                  <button
                    className="flex items-center justify-center whitespace-nowrap t-action-m h-14 w-full max-w-[353px] rounded-full p-4 border-[1.5px] border-neutral-500 bg-neutral-50 text-primary-600"
                    type="button"
                  >
                    <FaMobileAlt size={30}/>
                    <span className="grow">Use phone number</span>
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
