import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import Skeleton from "../Skeleton";
import useListenMessages from "../../hooks/useListenMessages";

function Messages() {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const messageref = useRef();
  useEffect(() => {
    setTimeout(() => {
      messageref.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto h-[82%] ">
      {loading &&
        [...Array(4)].map((_, idx) => {
          return (
            <div key={idx}>
              <Skeleton />
            </div>
          );
        })}
      {!loading && messages.length === 0 && (
        <div className="sm:text-[15px] md:text-[30px]">
          {" "}
          Send a message to start a conversation
        </div>
      )}
      {!loading &&
        messages.length !== 0 &&
        messages.map((itm) => (
          <div key={itm._id} ref={messageref}>
            <Message data={itm} />
          </div>
        ))}
    </div>
  );
}

export default Messages;
