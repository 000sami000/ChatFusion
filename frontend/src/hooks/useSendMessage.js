
import React, { useState } from 'react'
import useGlobalState from '../store/globalState'
import { sendMessage_ } from '../api'
import toast from 'react-hot-toast'

function useSendMessage() {
    const [loading,setloading]=useState(false);
    const {messages,setMessages,selectedConversation}=useGlobalState();
   
     const sendMessage=async (message)=>{
        
        setloading(true);
        try{
             const {data}=await sendMessage_(message,selectedConversation?._id);
           setMessages([...messages,data.newMessage]);
        }catch(err){
    toast.error(err.message);
        }finally{
            setloading(false)
        }
        
     }
       return {loading,sendMessage}
}

export default useSendMessage