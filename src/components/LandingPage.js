import messageIcon from "../images/msgIcon.png";

export default function LandingPage(props) {
  return (
    <div className="landing-page-container">
      <div className="sign-in-container">
        <img className="msgIcon" src={messageIcon} alt="message icon" />
        <h1>Welcome to Chatter</h1>
        <button className="sign-in-button" onClick={props.handleClick}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
