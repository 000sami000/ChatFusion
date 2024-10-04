import React from "react";
import useGlobalState from "../../store/globalState";
import { useSocketContext } from "../../context/SocketContext";

function Conversation({ conversation, lastindex }) {
  const { selectedConversation, setselectedConversation } = useGlobalState();

  const selected = selectedConversation?._id === conversation._id;

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  return (
    <div>
      <div
        onClick={() => {
          setselectedConversation(conversation);
        }}
        className={`flex gap-2 items-center hover:bg-[#e39e44] ${
          selected ? "bg-[#e39e44]" : ""
        } p-1 rounded-md cursor-pointer`}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation?.profileimg || ""} width={"50px"} />
          </div>
        </div>
        <div className="flex flex-col overflow-x-hidden w-[90%] ">
          <div className=" font-semibold text-[white] text-[17px] md:text-[16px]">
            {conversation?.username || ""}
          </div>
          <div className=" max-w-[90%] min-w-[100px] text-nowrap  text-sm text-[white] text-[14px] md:text-[13px]">
            {conversation.lastMessage || ""}{" "}
          </div>
        </div>
      </div>
      {!lastindex && <div className="divider h-1" />}
    </div>
  );
}

export default Conversation;
