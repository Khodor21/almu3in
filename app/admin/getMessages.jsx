"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
const GetMsgs = () => {
  const [messages, setMessages] = useState("");

  const getMessages = async () => {
    try {
      const response = await axios.get(
        "https://almu3in-server.vercel.app/api/message"
      );
      if (response.status === 200) {
        setMessages(response.data);
        console.log(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div>
      {messages &&
        messages.map((message) => (
          <div
            className="flex flex-col gap-2 bg-white mx-6 my-2 rounded text-main"
            id="swissra"
            key={message._id}
          >
            <p className="py-10">{message.message}</p>
          </div>
        ))}
    </div>
  );
};

export default GetMsgs;
