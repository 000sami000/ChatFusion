import React, { useState } from 'react'
import Search from '../search/Search'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton';
import ProfilePic from './ProfilePic';
import { useAuthContext } from '../../context/Authcontext';
import useGlobalState from '../../store/globalState';


function Sidebar() {
  const {selectedConversation}=useGlobalState();
  const [searchinput,setsearchinput]=useState("");
  const {authUser}=useAuthContext()
  
  return ( 
    <div className={`p-1 bg-[#a7a5a57f] rounded-md sm:rounded-r-none flex flex-col justify-between w-[100%] sm:w-[35%] ${selectedConversation ? 'hidden' : 'flex'} md:flex`}>
    <div className='flex flex-col gap-1'>
        <Search searchinput={searchinput}  setsearchinput={setsearchinput}/> 
        <div className='divider h-1'/>
        <Conversations searchinput={searchinput} />
    </div> 
        <div className='   flex justify-between items-center'>
        <div className='text-[white] flex gap-2 items-center'>
        <ProfilePic/>
        {authUser.name}
        </div>

        <LogoutButton/>
        </div>
    </div>
  )
}

export default Sidebar