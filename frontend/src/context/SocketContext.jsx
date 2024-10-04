import { Children, createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./Authcontext";
import io from "socket.io-client";
export const SocketContext=createContext();

export const useSocketContext=()=>{
return useContext(SocketContext)
}

export const SocketContextProvider=({children})=>{
   const [socket,setsocket]=useState(null);
   const [onlineUsers,setonlineUsers]=useState([]);
   const {authUser}=useAuthContext();
   useEffect(()=>{
if(authUser){
    const socket=io("https://chatfusion-5ptz.onrender.com",{
        query:{
            userId:authUser._id,
        },
    });
    setsocket(socket);
    //socket.on() is used to listen  to the events. can be used both on client and server side
    socket.on ("getOnlineUsers",(users)=>{
        setonlineUsers(users)
    })
    return ()=>{socket.close()}
}else{
    if(socket){
        socket.close();
        setsocket(null);
    }
}     
   },[authUser])
   return <SocketContext.Provider value={{socket,onlineUsers}}>

        {children}
    </SocketContext.Provider>

}