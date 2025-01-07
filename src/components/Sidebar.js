import { Link } from "react-router-dom";
import { ScrollText } from 'lucide-react';
import discoverIcon from "../assets/discoverIcon.svg"

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
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                >
                    <path d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM18 20H6C5.45 20 4.97933 19.8043 4.588 19.413C4.196 19.021 4 18.55 4 18V17.2C4 16.6333 4.146 16.1123 4.438 15.637C4.72933 15.1623 5.11667 14.8 5.6 14.55C6.63333 14.0333 7.68333 13.6457 8.75 13.387C9.81667 13.129 10.9 13 12 13C13.1 13 14.1833 13.129 15.25 13.387C16.3167 13.6457 17.3667 14.0333 18.4 14.55C18.8833 14.8 19.2707 15.1623 19.562 15.637C19.854 16.1123 20 16.6333 20 17.2V18C20 18.55 19.8043 19.021 19.413 19.413C19.021 19.8043 18.55 20 18 20Z"></path>
                </svg>
                <div className="t-label">Profile</div>
            </Link>
        </div>
    );
}

export default Sidebar;
