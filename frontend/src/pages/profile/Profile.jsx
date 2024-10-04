import React from 'react'
import { useAuthContext } from '../../context/Authcontext'

function Profile() {

  const {authUser}=useAuthContext()
  console.log(authUser)
  return (
    <>
    <div className=" w-full flex justify-center my-[1%] rounded-md">
      <div className="bg-[#4c4c4c] opacity-[50%] p-2 rounded-[100%] flex justify-center items-center">
        <img src={authUser.profileimg} width={"55px"} />
      </div>
    </div>
    {/* <div className="w-[93%] bg-slate-600 rounded-md h-[83vh]  m-auto flex">
      1122
    </div> */}
  </>
  )
}

export default Profile