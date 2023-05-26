import messageIcon from "./../images/msgIcon.png";
import { MdModeNight, MdLightMode } from "react-icons/md";

export default function Header({ profileImage, darkMode, setDarkMode }) {
  return (
    <header>
      <img src={messageIcon} alt="message icon" className="header-logo" />
      <h1> Chatter </h1>
      <div className="page-theme-button" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? (
          <MdLightMode color="#fff" size={26} />
        ) : (
          <MdModeNight size={26} />
        )}
      </div>
      <img src={profileImage} alt="user's profile" className="profile-image" />
    </header>
  );
}
