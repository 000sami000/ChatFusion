import React, { useRef, useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { useAuthContext } from '../../context/Authcontext';
import { uploadimg_ } from '../../api';
import toast from 'react-hot-toast';


function ProfilePic() {
  const {authUser}=useAuthContext()
  const fileInputRef = useRef(null);

  const [loading,setLoading]=useState(false)
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if(!file)
      return;
   
    const formData = new FormData();
    formData.append('image', file);

    try {
      setLoading(true)
      const {data} = await uploadimg_(formData)
      

   localStorage.clear("chat-user")
      await localStorage.setItem('chat-user', JSON.stringify(data));
      toast.success('Image updated successfully')
      window.location.reload()
      // console.log( data); 
    } catch (err) {
      toast.error('Error uploading image')
      console.error('Error uploading image:', err);
    }finally{
      setLoading(false)
    }

  };
  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <div className='mt-auto'>
      <input
        type="file"  
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
        accept="image/*"  
     
      />
    {!loading? (
       
       <div className='hover:bg-[#ffffff6b] p-1  rounded-md cursor-pointer'>
        <div  onClick={handleImageClick}  className='w-[45px] h-[45px] bg-no-repeat bg-center bg-clip bg-cover rounded-[100%]'  style={{ backgroundImage: `url(${authUser.profileimg})`}} ></div>
        </div>
    ) : (
        <span className='loading loading-spinner'></span>
    )}
</div>
  )
}

export default ProfilePic