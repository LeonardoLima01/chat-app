import { useState } from "react";
import Header from "./Header";
import MessagesBox from "./MessagesBox";

export default function Chat({ profileImage }) {
  let [darkMode, setDarkMode] = useState(false);

  return (
    <div className="chat-page-container">
      <div className="chat">
        <Header
          profileImage={profileImage}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <MessagesBox />
      </div>
    </div>
  );
}
