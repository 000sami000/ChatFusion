import React, { useEffect, useState } from 'react'
import { getMessages_ } from '../api';
import toast from 'react-hot-toast';
import useGlobalState from '../store/globalState';

function useGetMessages() {
    const [loading,setloading]=useState(false);
    const {messages,setMessages,selectedConversation}=useGlobalState();
   
   useEffect(()=>{

       const fetchMessages=async()=>{
           try{
            setloading(true)
              const {data}= await getMessages_(selectedConversation._id) 
            if(data.error){
                 throw new Error(data.error)
            }     
            setMessages(data.messages) 
            }catch(err){
          toast.error(err.message)
        }finally{
            setloading(false)
        }
        
        }  
        if(selectedConversation?._id){
            fetchMessages()
        } 
       },[selectedConversation._id,setMessages])
     return {messages,loading}
}

export default useGetMessages