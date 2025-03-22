import React from "react";

export default function ContactList({ users, onSelectUser }) {
  return (
    <div className="container">
      <h3 className="text-center mb-3 py-3 border-bottom">Contact List</h3>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item list-group-item-action"
            onClick={() => onSelectUser(user)}
            style={{ cursor: "pointer" }}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
