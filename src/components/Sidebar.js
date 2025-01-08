import { Link } from "react-router-dom";
import { ScrollText } from 'lucide-react';
import discoverIcon from "../assets/discoverIcon.svg"
import { IoPersonSharp } from "react-icons/io5";

function Sidebar({ sideOptions, setSideOptions }) {
    return (
        <div className="h-full flex gap-1.5 md:flex-col rounded-2xl text-[#6B6255] items-center py-4 bg-transparent md:h-screen xs:bg-[#fdf7f5]">
            <Link
                to="/discover"
                className={`flex h-16 w-16 flex-col items-center justify-center rounded-xl text-neutral-900 gap-0.5 ${
                    sideOptions === 1 ? 'bg-[#EDE1D1]' : ''
                }`}
                aria-label="Go to Discover page"
                onClick={() => setSideOptions(1)}
            >
                <div className="w-7">

                <img src={discoverIcon} />
                </div>
                <div className="t-label">Discover</div>
            </Link>

            <Link
                to="/threads"
                className={`flex h-16 w-16 flex-col items-center justify-center rounded-xl text-neutral-900 hover:bg-neutral-50-hover hover:text-neutral-900-hover active:bg-neutral-50-tap active:text-neutral-900-tap gap-1.5 ${
                    sideOptions === 3 ? 'bg-[#EDE1D1]' : ''
                }`}
                aria-label="Go to Threads page"
                onClick={() => setSideOptions(3)}
            >
                <ScrollText />
                <div className="t-label">Threads</div>
            </Link>

            <Link
                to="/profile"
                className={`flex h-16 w-16 flex-col items-center justify-center rounded-xl text-neutral-900 hover:bg-neutral-50-hover hover:text-neutral-900-hover active:bg-neutral-50-tap active:text-neutral-900-tap gap-1.5 ${
                    sideOptions === 2 ? 'bg-[#EDE1D1]' : ''
                }`}
                aria-label="Go to Profile page"
                onClick={() => setSideOptions(2)}
            >
                <IoPersonSharp size={20}/>
                <div className="t-label">Profile</div>
            </Link>
        </div>
    );
}

export default Sidebar;
