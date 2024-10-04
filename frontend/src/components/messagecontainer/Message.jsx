import React from "react";
import { useAuthContext } from "../../context/Authcontext";
import useGlobalState from "../../store/globalState";
import { extractTime } from "../../../utils/timeFormat";
function Message({ data }) {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useGlobalState();

  const ismymessage = data?.senderId === authUser._id;
  const formatted = extractTime(data?.createdAt);
  const profilePic = ismymessage
    ? authUser.profileimg
    : selectedConversation?.profileimg;
  const bubblecolor = ismymessage ? " bg-blue-500" : "bg-gray-700";

  return (
    <div
      key={data?._id}
      className={`chat ${ismymessage ? "chat-end" : "chat-start"} shake`}
    >
      <div className="chat-image avatar">
        <div className="w-11 rounded-full">
          <img alt="chat bubblr" src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubblecolor} p-2 `}>
        {" "}
        {data?.message}
      </div>
      <div
        className={`chat-footer opacity-50 text-xs flex gap-1 items-center text-white`}
      >
        {" "}
        {formatted}
      </div>
    </div>
  );
}

export default Message;
