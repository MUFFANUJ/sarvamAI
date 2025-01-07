import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CollapseSideBar from "./components/CollapseSideBar";
import ProfileSidebar from "./components/ProfileSidebar";
import ChatSpace from "./pages/ChatSpace.js";
import DownloadHistory from "./pages/DownloadHistory.js";
import EditVoice from "./pages/EditVoice.js";
import LoginSignUp from "./pages/LoginSignUp.js";
import PrivacyPolicy from "./pages/PrivacyPolicy.js";
import ShareWithOthers from "./pages/ShareWithOthers.js";
import TermsAndCondition from "./pages/TermsAndCondition.js";
import Sidebar from "./components/Sidebar.js"

function App() {
  const [sideOptions, setSideOptions] = useState(1);

  return (
    <div className="App">
      <Router>

      <div className="grid grid-cols-1 md:grid-cols-[96px_1fr] lg:grid-cols-[96px_375px_1fr] h-screen w-full overflow-y-auto scrollbar-hide">

            <div className="md:block md:h-screen mx-auto md:m-0  md:border-r">
            <Sidebar setSideOptions={setSideOptions} sideOptions={sideOptions} />
        
            </div>

            <div className={`flex flex-col border-r h-[95vh] lg:h-screen overflow-scroll scrollbar-hide`}>
                {sideOptions === 1 ? (
              <CollapseSideBar />
            ) :  (
              <ProfileSidebar />
            )}
            </div>


            <div className="h-screen relative bg-secondary lg:block md:min-w-[100vw]  lg:min-w-full">



        
              <Routes>
                <Route path="/" element={<ChatSpace />} />
                <Route path="/discover" element={<ChatSpace />} />
                <Route path="/profile" element={<ChatSpace />} />
                <Route path="/profile/manage-history" element={<DownloadHistory />} />
                <Route path="/profile/settings" element={<EditVoice />} />
                <Route path="/profile/account" element={<LoginSignUp />} />
                <Route path="/profile/policy" element={<PrivacyPolicy />} />
                <Route path="/profile/referral" element={<ShareWithOthers />} />
                <Route path="/profile/terms" element={<TermsAndCondition />} />
                <Route path="*" element={<h1>Not Found</h1>} />
              </Routes>
              </div>
        </div>
      </Router>
    </div>
  );
}



export default App;
