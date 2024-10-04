import React ,{useState} from 'react'
import GenderCheckbox from './GenderCheckbox';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';
function Signup() {
    const {loading,signup}=useSignup();
	const [inputdata,setinputdata]=useState({
		name:"",
		username:"",
		password:"",
		confirmpassword:"",
		gender:"male"
	})
	const onGenderchange=(gender)=>{
 setinputdata({...inputdata,gender})
	}
  

	const submitHandler=async()=>{
       await signup(inputdata)
	}
	return (
		<>
			 <div className="text-blue-500 text-[30px] font-bold text-center mb-5"> ChatFusion</div>
		
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto bg-slate-600 rounded-md w-[35%] '>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up 
				</h1>

				<div>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Full Name</span>
						</label>
						<input type='text' value={inputdata.name} onChange={(e)=>{setinputdata({...inputdata,name:e.target.value})}} placeholder='John Doe' className='w-full input input-bordered  h-10' />
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text'>Username</span>
						</label>
						<input type='text'  value={inputdata.username} onChange={(e)=>{setinputdata({...inputdata,username:e.target.value})}} placeholder='johndoe' className='w-full input input-bordered h-10' />
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={inputdata.password} onChange={(e)=>{setinputdata({...inputdata,password:e.target.value})}}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10'
							value={inputdata.confirmpassword} onChange={(e)=>{setinputdata({...inputdata,confirmpassword:e.target.value})}}
						/>
					</div>

					<GenderCheckbox  onGenderchange={onGenderchange} gender={inputdata.gender}/>

					<Link to="/login" className='text-sm hover:underline hover:text-[#87ff87] mt-2 inline-block' href='#'>
						Already have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700' onClick={submitHandler} disabled={loading}>
						{loading?<span className="loading loading-spinner"></span>:"Sign Up"}
						</button>
					</div>
				</div>
			</div>
		</div>
		</>);
}

export default Signup