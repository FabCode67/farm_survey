import React from 'react'
import TREE from '../assets/TREE.png'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/login')
    }
  return (
    <div className='w-[60%] md:w-[95%] self-center m-auto mt-1 border-4 border-emerald-600'>
        <div className='uperdiv flex h-[25%] w-full border-b-2 border-emerald-600 justify-between'>
            <div className='header p-8 md:p-4'>
                <h1 className='text-4xl md:text-xl text-center text-emerald-600 mt-5'>Farm Sarvey</h1>
            </div>
            <div className='header p-8 md:p-4'>
                <img src={TREE} alt='tree' className='w-20 h-20 sm:w-12 sm:h-12' />
            </div>
        </div>
        <div className='lowerdiv flex sm:flex-col w-full justify-between sm:justify-normal'>
            <div className='header p-8 w-[48%] sm:w-[100%] sm:p-4'>
                <label className=''>Names</label>
                <input type='text' className='border-2 h-[70%] sm:h-[100%] w-full px-4 sm:py-3' placeholder='your names' />
                <p className='text text-gray-500 text-xs'>example: KAYIHURA James</p>
            </div>
            <div className='header p-8 w-[48%] sm:w-[100%] sm:p-4'>
                <label className=''>UserName</label>
                <input type='text' className='border-2 h-[70%] sm:h-[100%] w-full px-4 sm:py-3' placeholder='your user name' />
                <p className='text text-gray-500 text-xs'>example: KJames</p>
            </div>
        </div>
        <div className='lowerdiv flex sm:flex-col w-full justify-between sm:justify-normal'>
            <div className='header p-8 w-[48%] sm:w-[100%] sm:p-4 '>
                <label className=''>Email</label>
                <input type='email' className='border-2 h-[70%] sm:h-[100%] w-full px-4 sm:py-3' placeholder='your email' />
                <p className='text text-gray-500 text-xs'>example: kjames@gmail.com</p>
            </div>
            <div className='header p-8 w-[48%] sm:w-[100%] sm:p-4'>
                <label className=''>Telephone</label>
                <input type='number' className='border-2 h-[70%] sm:h-[100%] w-full px-4 sm:py-3' placeholder='your phone number' />
                <p className='text text-gray-500 text-xs'>example: 078888888</p>
            </div>
        </div>
        <div className='lowerdiv flex sm:flex-col w-full justify-between sm:justify-normal'>
            <div className='header p-8 w-[48%] sm:w-[100%] sm:p-4'>
                <label className=''>Password</label>
                <input type='password' className='border-2 h-[70%] sm:h-[100%] w-full px-4 sm:py-3' placeholder='your password' />
                <p className='text text-gray-500 text-xs'>example: KxtoF05?</p>
            </div>
            <div className='header p-8 w-[48%] sm:w-[100%] sm:p-4 w-40%'>
                <label className=''>Confirm password</label>
                <input type='password' className='border-2 h-[70%] sm:h-[100%] w-full px-4 sm:py-3' placeholder='your passwoerd' />
                <p className='text text-gray-500 text-xs'>example: KxtoF05?</p>
            </div>
        </div>
        <div className='lowerdiv self-center m-auto w-[30%] sm:w-[95%] border border-emerald-600 justify-center text-center mt-5'>
        <div className='header py-2'>
           <h3>SELECT YOUR ROLE</h3>
           <div className='flex justify-between py-4'>
            <div className='px-2'>  
                <input type='radio' name='role' className='curser cursor-pointer' />
                <label className='px-1'>Farmer</label>
                </div>
             
            <div className=''>  
                <input type='radio' name='role' className='curser cursor-pointer'/>
                <label className='px-1'>Stock holder</label>
                </div>
                </div>
           </div>
        </div>
        <div className='uperdiv flex h-[15%] w-full border-t-2 mt-3 border-emerald-600 justify-between  m-auto'>
            <div className='header bg-slate-400 w-full justify-between '>
                <button className='text-4xl px-4 text-center sm:text-sm sm:py-3'>Submit Form</button>
            </div>
            <div className='header justify-between w-full bg-red-400'>
                <button onClick={handleLogin} className='text-xl sm:text-sm text-center right-0 float-right px-4 py-1'>Login if you have account</button>
            </div>
        </div>
    </div>
  )
}

export default Signup