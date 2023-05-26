import messageIcon from "./../images/msgIcon.png";
import { MdModeNight, MdLightMode } from "react-icons/md";
import Popup from "./Popup";

export default function Header({ profileImage, darkMode, setDarkMode }) {
  const togglePopup = () => {
    let popup = document.querySelector(".popup-container");

    popup.style.display = popup.style.display === "flex" ? "none" : "flex";
  };

  return (
    <header className={darkMode ? "light-black" : "white"}>
      <img src={messageIcon} alt="message icon" className="header-logo" />
      <h1 className={darkMode ? "white-color" : "black-color"}> Chatter </h1>
      <div className="page-theme-button" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? (
          <MdLightMode color="#fff" size={26} />
        ) : (
          <MdModeNight size={26} />
        )}
      </div>
      <img
        onClick={togglePopup}
        src={profileImage}
        alt="user's profile"
        className="profile-image"
      />
      <Popup darkMode={darkMode} />
    </header>
  );
}
