import { MdSend } from "react-icons/md";

export default function messagesBox({ handleAddMessage }) {
  return (
    <div className="messages-container">
      <div className="messages-display"></div>
      <div className="input-container">
        <form onSubmit={(e) => handleAddMessage(e)}>
          <input id="message" placeholder="your messages here"></input>
          <button>
            <MdSend className="send-message-icon" size={32} />
          </button>
        </form>
      </div>
    </div>
  );
}
