 import { useState } from 'react';
import toast from 'react-hot-toast'
import { signup_ } from '../api';
import { useAuthContext } from '../context/Authcontext';
const useSignup=()=>{
   const [loading,setloading]=useState(false)
   const {setAuthUser} =useAuthContext()
   const signup=async ({name,username,password,confirmpassword,gender})=>{
  
         if(!handleInputErrors)   {
           return
         } 
         try{
            setloading(true);
              const {data}=await signup_({name,username,password,confirmpassword,gender});
              toast.success("Sign up ");
              if(data.error){
                throw new Error(data.error )
              }
              localStorage.setItem('chat-user',JSON.stringify(data));
              setAuthUser(data);
         }catch(err){
          toast.error(err.error);
         }finally{
            setloading(false)
         }
         
    }
   return {loading,signup}
}

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
	if (fullName &&username && password && confirmPassword && gender) {
		toast.error("Please fill in all fields");
		return false;
	}

	if (password !== confirmPassword) {
		toast.error("Passwords do not match");
		return false;
	}

	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}

	return true;
}
export default useSignup;