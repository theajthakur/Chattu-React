import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "./ChatInterface.css";
import NoChat from "./extra/noChat";

function ChatInterface({ user }) {
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

  if (!user) {
    return <NoChat />;
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
        {user.chats &&
          user.chats.map((msg, index) => (
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
