import React, { useContext } from "react";
import { GlobalContext } from "../context/context"
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function LoggedIn() {
    const {logOut,username} = useContext(GlobalContext)
    
  return (
    <div className="px-6 pb-5 text-center bg-primary-100 h-screen w-full">
      <div className="pt-5">
      <Link
            aria-label="Go back"
            className="flex h-9 w-9 items-center justify-center rounded-full p-1.5 text-primary-700 bg-primary-200"
            type="button"
            to="/profile"
          >
            <FaArrowLeft />
          </Link>
      </div>
      <h2 className="t-body-m m-0 mb-8 text-xl">Signed in as {username}</h2>
      <h1 className="t-heading-m text-xl">We would love to exhange messages!</h1>
      <h2 className="t-body-m m-0 mt-8 text-neutral-900 ">
        <a className=" text-green-700 text-2xl p-5" href="/profile/manage-history">
          Manage history
        </a>
      </h2>
      <div className="mt-14">
        <button
          className="flex items-center justify-center whitespace-nowrap t-action-m h-14 w-full max-w-[353px] rounded-full p-4 border-[1.5px] border-2 border-gray-700 active:bg-neutral-50-tap hover:bg-neutral-50-hover text-green-700 text-2xl mx-auto"
          type="button"
          onClick={() => {
            logOut();
            toast.success("✅ Logged Out Successfully!", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }}
        >
          Sign out
        </button>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
      </div>
    </div>
  );
}
