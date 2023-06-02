import React from 'react'
import TREE from '../assets/TREE.png' 
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate()
    const handleSignup = () => {
        navigate('/signup')
    }
  return (
    <div className='space py-36'>
    <div className='cont w-[60%] md:w-[95%] self-center m-auto mt-1 border-4 border-emerald-600 place-self-center'>
        <div className='uperdiv flex h-[25%] w-full border-b-2 border-emerald-600 justify-between'>
            <div className='header p-8 md:p-4'>
                <h1 className='text-4xl md:text-xl text-center text-emerald-600 mt-5'>Farm Sarvey</h1>
            </div>
            <div className='header p-8 md:p-4'>
                <img src={TREE} alt='tree' className='w-20 h-20 sm:w-12 sm:h-12' />
            </div>
        </div>
       
        <div className='lowerdiv flex sm:flex-col w-full justify-between sm:justify-normal'>
            <div className='header p-8 w-[48%] sm:w-[100%] sm:p-4 '>
                <label className=''>Email</label>
                <input type='email' className='border-2 h-[70%] sm:h-[100%] w-full px-4 sm:py-3' placeholder='your email' />
                <p className='text text-gray-500 text-xs'>example: kjames@gmail.com</p>
            </div>
            <div className='header p-8 w-[48%] sm:w-[100%] sm:p-4'>
                <label className=''>Password</label>
                <input type='password' className='border-2 h-[70%] sm:h-[100%] w-full px-4 sm:py-3' placeholder='your password' />
                <p className='text text-gray-500 text-xs'>example: KxtoF05?</p>
            </div>
        </div>
       
        <div className='uperdiv flex h-[15%] w-full border-t-2 mt-3 border-emerald-600 justify-between  m-auto'>
            <div className='header bg-slate-400 w-full justify-between '>
                <button className='text-4xl px-4 text-center sm:text-sm sm:py-3'>Submit Form</button>
            </div>
            <div className='header justify-between w-full bg-red-400'>
                <button onClick={handleSignup} className='text-xl sm:text-sm text-center right-0 float-right px-4 py-1'>Signup if you don't have account</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login