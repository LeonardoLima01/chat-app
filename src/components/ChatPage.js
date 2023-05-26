import { useState } from "react";
import Header from "./Header";
import MessagesBox from "./MessagesBox";

export default function Chat({ profileImage, handleAddMessage }) {
  let [darkMode, setDarkMode] = useState(false);

  return (
    <div className="chat-page-container">
      <div className={darkMode ? "chat black" : "chat light-gray"}>
        <Header
          profileImage={profileImage}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <MessagesBox darkMode={darkMode} handleAddMessage={handleAddMessage} />
      </div>
    </div>
  );
}
