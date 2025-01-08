import { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import CollapseSideBar from "./components/CollapseSideBar";
import ProfileSidebar from "./components/ProfileSidebar";
import Threads from "./components/Threads";
import Welcome from "./components/Start";
import Onboarding from "./components/Onboarding";
import NameInput from "./components/NameInput";
import ChatSpace from "./pages/ChatSpace";
import DownloadHistory from "./pages/DownloadHistory";
import EditVoice from "./pages/EditVoice";
import LoginSignUp from "./pages/LoginSignUp";
import ShareWithOthers from "./pages/ShareWithOthers";
import LoggedIn from "./components/LoggedIn";
import { GlobalContext } from "./context/context";

function App() {
  const { logged,setLogged,onBoarding,setOnBoarding,sideOptions,setSideOptions } = useContext(GlobalContext);
  
  useEffect(()=>{
    const loggedInStatus = localStorage.getItem("loggedIn");
    if(loggedInStatus){
      setLogged(JSON.parse(loggedInStatus));
    }
    if(localStorage.getItem("onBoarding")){
      setOnBoarding(JSON.parse(localStorage.getItem("onBoarding")))
    }
  },[])

  return (
    <Router>
      <div className="App">
        {onBoarding ? (
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/onboarding/account" element={<LoginSignUp />} />
            <Route path="/onboarding/voices" element={<EditVoice />} />
            <Route path="*" element={<h1 className="w-screen h-screen flex justify-center items-center bg-primary-100 text-balck">Onboarding is Pending <p>
              Please Complete The Onboarding Before Moving Forward</p></h1>} />
            <Route
              path="/persononboarding"
              element={<NameInput setOnBoarding={setOnBoarding} />}
            />
          </Routes>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-[96px_1fr] lg:grid-cols-[96px_375px_1fr] h-screen w-screen overflow-y-auto scrollbar-hide">
            <div className="md:block md:h-screen mx-auto md:m-0 md:border-r w-full">
              <Sidebar
                setSideOptions={setSideOptions}
                sideOptions={sideOptions}
                logged={logged}
              />
            </div>

            <div
              className={`flex flex-col border-r h-[100vh] lg:h-screen overflow-scroll scrollbar-hide`}
            >
              {sideOptions === 1 ? (
                <CollapseSideBar />
              ) : sideOptions === 2 ? (
                <ProfileSidebar />
              ) : logged ?
                <Threads /> : ""
              }
            </div>

            <div className="h-screen relative lg:block md:min-w-[100vw] lg:min-w-full">
              <Routes>
                <Route path="/" element={<ChatSpace />} />
                <Route path="/discover" element={<ChatSpace />} />
                <Route path="/profile" element={<ChatSpace />} />
                <Route path="/threads" element={<ChatSpace />} />
                <Route
                  path="/profile/manage-history"
                  element={<DownloadHistory />}
                />
                <Route path="/profile/settings" element={<EditVoice />} />
                <Route
                  path="/profile/account"
                  element={!logged ? <LoginSignUp /> : <LoggedIn />}
                />
                <Route path="/profile/referral" element={<ShareWithOthers />} />
                <Route path="*" element={<h1 className="flex w-screen h-screen justify-center items-center bg-primary-100 text-balck">Oopss... 404 Not Found!</h1>} />
              </Routes>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
