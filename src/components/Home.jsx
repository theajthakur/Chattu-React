import React, { useState } from "react";
import ContactList from "./ContactList";
import ChatInterface from "./ChatInterface";

const users = [
  {
    id: 1,
    name: "Alice",
    isOnline: true,
    chats: [
      { message: "Hey, how are you?", time: "10:20 AM", type: "sent" },
      { message: "I'm good, you?", time: "10:21 AM", type: "received" },
      { message: "Sounds good.", time: "10:26 AM", type: "sent" },
      { message: "Talk to you later.", time: "10:27 AM", type: "received" },
    ],
  },
  {
    id: 2,
    name: "Bob",
    isOnline: false,
    chats: [
      { message: "Are we meeting today?", time: "09:45 AM", type: "sent" },
      {
        message: "Yes, let's meet at 5 PM.",
        time: "09:50 AM",
        type: "received",
      },
      { message: "Cool, see you then.", time: "09:55 AM", type: "sent" },
    ],
  },
  {
    id: 3,
    name: "Charlie",
    isOnline: true,
    chats: [
      {
        message: "Did you complete the project?",
        time: "11:10 AM",
        type: "sent",
      },
      {
        message: "Almost done, just finalizing.",
        time: "11:15 AM",
        type: "received",
      },
      {
        message: "Great, let me know if you need help.",
        time: "11:20 AM",
        type: "sent",
      },
    ],
  },
];

export default function Home() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div className="col-md-3 border-end overflow-auto">
          <ContactList users={users} onSelectUser={setSelectedUser} />
        </div>
        <div className="col-md-9 overflow-auto">
          <ChatInterface user={selectedUser} />
        </div>
      </div>
    </div>
  );
}
