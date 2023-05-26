import { IoMdExit } from "react-icons/io";
import { signOutUser } from "../firebase";

export default function Popup({ darkMode }) {
  return (
    <div
      onClick={signOutUser}
      className={
        darkMode ? "popup-container gray" : "popup-container light-gray"
      }
    >
      <IoMdExit color={darkMode ? "white" : "black"} size={28} />
      <p
        className={
          darkMode ? "popup-logout white-color" : "popup-logout black-color"
        }
      >
        Logout
      </p>
    </div>
  );
}
