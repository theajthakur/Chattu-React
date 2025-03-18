import React from "react";
import ContactList from "./ContactList";
import ChatInterface from "./ChatInterface";
export default function Home() {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div className="col-md-3 border-end overflow-auto">
          <ContactList />
        </div>
        <div className="col-md-9 overflow-auto">
          <ChatInterface />
        </div>
      </div>
    </div>
  );
}
