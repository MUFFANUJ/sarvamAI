import React, { useContext } from "react";
import { GlobalContext } from "../context/context"

export default function LoggedIn() {
    const {logOut,username} = useContext(GlobalContext)
    
  return (
    <div class="mt-14 px-6 pb-5 text-center">
      <h2 class="t-body-m m-0 mb-8 text-xl">Signed in as {username}</h2>
      <h1 class="t-heading-m text-xl">We would love to exhange messages!</h1>
      <h2 class="t-body-m m-0 mt-8 text-neutral-900 ">
        <a class=" text-green-700 text-2xl p-5" href="/profile/manage-history">
          Manage history
        </a>
      </h2>
      <div class="mt-14">
        <button
          class="flex items-center justify-center whitespace-nowrap t-action-m h-14 w-full max-w-[353px] rounded-full p-4 border-[1.5px] border-2 border-gray-700 active:bg-neutral-50-tap hover:bg-neutral-50-hover text-green-700 text-2xl mx-auto"
          type="button"
          onClick={logOut}
        >
          Sign out
        </button>
      </div>
    </div>
  );
}
