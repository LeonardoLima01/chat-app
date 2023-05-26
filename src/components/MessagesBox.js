import { MdSend } from "react-icons/md";

export default function messagesBox() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submit

    console.log("submit!!!");
  };

  const handleSendMessage = () => {
    document.querySelector(".input-container > form").submit();
  };

  return (
    <div className="messages-container">
      <div className="messages-display"></div>
      <div className="input-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input placeholder="your messages here"></input>
          <button>
            <MdSend className="send-message-icon" size={32} />
          </button>
        </form>
      </div>
    </div>
  );
}
