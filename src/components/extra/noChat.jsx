import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
export default function NoChat() {
  return (
    <div className="container justify-content-center align-items-center h-100 d-inline-flex">
      <div className="inner-container text-center" style={{ color: "#6c757d" }}>
        <h1 className="pb-3">Chattu</h1>
        <FontAwesomeIcon icon={faComments} size="6x" />
        <h3 className="pt-3">Select a chat to start messaging.</h3>
      </div>
    </div>
  );
}
