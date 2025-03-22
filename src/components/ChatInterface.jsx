import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./ChatInterface.css";

function ChatInterface(userid) {
  const [user, setUser] = useState({});
  function scrollToBottom(className) {
    const element = document.querySelector(`.${className}`);
    if (element) {
      setTimeout(() => {
        element.scrollTop = element.scrollHeight;
        const input = document.querySelector(".chat-input input");
        input.focus();
      }, 10);
    } else {
      console.warn(`Element with class "${className}" not found.`);
    }
  }

  useEffect(() => {
    setUser({
      name: "John Doe",
      isOnline: true,
      chat: [
        { message: "Hello", time: "10:00 AM", type: "sent" },
        { message: "Hi", time: "10:01 AM", type: "received" },
        { message: "How are you?", time: "10:02 AM", type: "sent" },
        { message: "I am fine", time: "10:03 AM", type: "received" },
        { message: "What about you?", time: "10:04 AM", type: "received" },
        { message: "I am good", time: "10:05 AM", type: "sent" },
        { message: "What are you doing?", time: "10:06 AM", type: "sent" },
        {
          message: "Just working on a project.",
          time: "10:07 AM",
          type: "received",
        },
        { message: "Sounds interesting!", time: "10:08 AM", type: "sent" },
        { message: "Yes, it is.", time: "10:09 AM", type: "received" },
        { message: "Do you need any help?", time: "10:10 AM", type: "sent" },
        {
          message: "Not right now, but thanks for asking.",
          time: "10:11 AM",
          type: "received",
        },
        { message: "You're welcome.", time: "10:12 AM", type: "sent" },
        { message: "What about you?", time: "10:13 AM", type: "received" },
        { message: "Just relaxing.", time: "10:14 AM", type: "sent" },
        { message: "That's nice.", time: "10:15 AM", type: "received" },
        { message: "Yes, it is.", time: "10:16 AM", type: "sent" },
        {
          message: "Do you have any plans for the weekend?",
          time: "10:17 AM",
          type: "received",
        },
        { message: "Not yet. Do you?", time: "10:18 AM", type: "sent" },
        { message: "I might go hiking.", time: "10:19 AM", type: "received" },
        { message: "That sounds fun!", time: "10:20 AM", type: "sent" },
        { message: "Yes, I love hiking.", time: "10:21 AM", type: "received" },
        { message: "Maybe I will join you.", time: "10:22 AM", type: "sent" },
        {
          message: "Sure, that would be great!",
          time: "10:23 AM",
          type: "received",
        },
        { message: "Let's plan it then.", time: "10:24 AM", type: "sent" },
        {
          message: "Okay, I will call you later.",
          time: "10:25 AM",
          type: "received",
        },
        { message: "Sounds good.", time: "10:26 AM", type: "sent" },
        { message: "Talk to you later.", time: "10:27 AM", type: "received" },
        { message: "Bye.", time: "10:28 AM", type: "sent" },
        { message: "Bye.", time: "10:29 AM", type: "received" },
      ],
    });
    scrollToBottom("chat-box");
  }, []);

  function sendMessage() {
    const input = document.querySelector(".chat-input input");
    const message = input.value.trim();
    if (message) {
      const chat = user.chat;
      const time = new Date();
      chat.push({
        message,
        time: `${time.getHours()}:${time.getMinutes()} ${
          time.getHours() >= 12 ? "PM" : "AM"
        }`,
        type: "sent",
      });
      setUser({ ...user, chat });
      input.value = "";

      scrollToBottom("chat-box");
    }
  }

  return (
    <div className="container chat-interface">
      <h3 className="text-center mb-3 py-3 border-bottom header position-relative">
        {user.name}{" "}
        <FontAwesomeIcon
          icon={faCircle}
          style={{
            fontSize: "0.5rem",
            position: "absolute",
            top: "20px",
            padding: "2px",
            border: "2px solid",
            borderRadius: "50%",
            borderColor: user.isOnline ? "lime" : "red",
          }}
          color={user.isOnline ? "lime" : "red"}
        />
      </h3>
      <div className="chat-box">
        {user.chat &&
          user.chat.map((msg, index) => (
            <div
              className={`chat-parent ${
                msg.type === "sent" ? "sent" : "received"
              }`}
              key={index}
            >
              <div
                key={index}
                className={`chat-bubble ${
                  msg.type === "sent" ? "sent" : "received"
                }`}
              >
                {msg.message}
                <span className="time">{msg.time}</span>
              </div>
            </div>
          ))}
      </div>
      <div className="p-3 pt-1 chat-input">
        <div className="input-group mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Type a message..."
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />
          <button className="btn btn-primary" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;
