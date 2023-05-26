import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";
import { MdSend } from "react-icons/md";
import { db } from "../firebase";
import Card from "./Card";

export default function MessagesBox({ handleAddMessage }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "messages");
    const q = query(collectionRef, orderBy("time", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const updatedMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(updatedMessages);
    });

    return () => {
      unsubscribe(); // Unsubscribe from the listener when the component unmounts
    };
  }, []);

  return (
    <div className="messages-container">
      <div className="messages-display">
        {messages &&
          messages.map((message) => (
            <Card
              key={message.id}
              text={message.text}
              username={message.username}
              userImage={message.userImageUrl}
            />
          ))}
      </div>
      <div className="input-container">
        <form onSubmit={(e) => handleAddMessage(e)}>
          <input id="message" placeholder="your messages here" />
          <button type="submit">
            <MdSend className="send-message-icon" size={32} />
          </button>
        </form>
      </div>
    </div>
  );
}
