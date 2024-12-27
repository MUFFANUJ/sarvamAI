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
  const [sideOptions, setSideOptions] = useState(0);

  return (
    <div className="App">
      <Router>
        <Sidebar setSideOptions={setSideOptions} sideOptions={sideOptions} />
        {sideOptions === 1 ? (
          <CollapseSideBar />
        ) : sideOptions === 2 ? (
          <ProfileSidebar />
        ) : (
          ""
        )}
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
      </Router>
    </div>
  );
}



export default App;
