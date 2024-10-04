import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import { useState } from "react";

const MessageInput = () => {
  const { sendMessage, loading } = useSendMessage();
  const [message, setmessage] = useState("");

  const submitHandler = async () => {
    if (!message) {
      return;
    }
    await sendMessage(message);
    setmessage("");
  };
  return (
    <div className="px-4 my-2">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
          value={message}
          onChange={(e) => {
            setmessage(e.target.value);
          }}
        />
        <button
          type="text"
          onClick={submitHandler}
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
