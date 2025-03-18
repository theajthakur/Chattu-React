import React, { useState, useEffect } from "react";

export default function ContactList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h3 className="text-center mb-3 py-3 border-bottom">Contact List</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="list-group">
          {users.map((user) => (
            <li
              key={user.id}
              className="list-group-item list-group-item-action"
              style={{ cursor: "pointer" }}
            >
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
