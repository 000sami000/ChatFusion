import React, { useEffect, useState } from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'

function Conversations({searchinput}) {
  const {loading,getConversations}=useGetConversations();

  const [conversations,setconversations]=useState([]);

  useEffect(()=>{
      async function fetchconv(){

        const data=await getConversations(searchinput)
        console.log(data)
        setconversations(data)
      }
      fetchconv()
  },[searchinput])
  // console.log(conversations,"///")
  return (
    <div className=' pl-2 py-2 flex flex-col gap-2 overflow-auto'>
 {conversations?.length==0&&searchinput==''&&<div className='text-[#282828] text-center  text-wrap font-semibold'> Search User to start conversation</div>}
 {conversations?.length==0&&searchinput!=''&&<div className='text-[#282828] text-center  text-wrap font-semibold'> No User Found</div>}
 {conversations?.length>0&&searchinput!=''&&<div className='text-[#282828] text-center  text-wrap font-semibold'> Founded Users </div>}
 
  {
    loading?(
      <div className="loading loading-spinner"></div>
    ):
  
  conversations?.map((conv,i)=>{
 return <div key={conv._id}>  <Conversation
      conversation={conv}
      lastindex={i===conversations.length-1}
    />
    </div>
  })
 }
    
    </div>
  )
}

export default Conversations