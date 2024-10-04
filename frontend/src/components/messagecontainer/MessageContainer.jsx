import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useGlobalState from "../../store/globalState";
import { useAuthContext } from "../../context/Authcontext";
import { useSocketContext } from "../../context/SocketContext";
import { IoIosArrowRoundBack } from "react-icons/io";
function MessageContainer() {
  const { selectedConversation, setselectedConversation } = useGlobalState();
  //  console.log(selectedConversation,"llll")
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(selectedConversation?._id);
  useEffect(() => {
    return () => setselectedConversation(null);
  }, [setselectedConversation]);
  function backToconv() {
    setselectedConversation(null);
  }
  return (
    <>
      {selectedConversation ? (
        <div
          style={{
            backgroundImage: `url('/bg_img.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className={`bg-[#9f9f9f] w-[100%]  rounded-r-md ${
            selectedConversation ? "block" : "hidden"
          } sm:block`}
        >
          <div className="px-4 flex justify-between gap-2 items-center  p-1  bg-[#525252] rounded-tr-md">
            <div className="flex gap-2 items-center">
              <div className={`avatar ${isOnline ? "online" : ""}`}>
                <div className="w-12 rounded-full">
                  <img src={selectedConversation.profileimg} width={"50px"} />
                </div>
              </div>

              <div className=" font-semibold text-[white]">
                {selectedConversation.name}
              </div>
            </div>

            <div
              className=" hover:bg-[#a7a7a7] p-[1px] text-[white] hover:text-[#555555] block md:hidden rounded-md"
              onClick={backToconv}
            >
              <IoIosArrowRoundBack className="text-[32px] font-semibold" />
            </div>
          </div>

          <div className="h-full pt-2">
            <Messages />
            <MessageInput />
          </div>
        </div>
      ) : (
        <NoChatSelected />
      )}
    </>
  );
}

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="items-center justify-center w-full h-full hidden sm:flex ">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.name} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
export default MessageContainer;
