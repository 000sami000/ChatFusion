import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import notificationSound from "../asset/notification.mp3"
import useGlobalState from "../store/globalState"

const useListenMessages=()=>{
    const {socket}=useSocketContext();
    const {messages,setMessages}=useGlobalState();
    useEffect(()=>{
    socket?.on('newMessage',(newMessage)=>{
        const sound=new Audio(notificationSound);
        sound.play();
        setMessages([...messages,newMessage])
    })
   return ()=>socket?.off("newMessage")
    },[socket,setMessages,messages])
}

export default useListenMessages;