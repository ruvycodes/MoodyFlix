import React, { useRef, useState } from 'react';
import { useValidateAuth } from '../Utils/useValidateAuth';

const Login = () => {

  const [haveAccount, setHaveAccount] = useState(false)
  const [authMessage, setAuthMessage] = useState("")
  const email = useRef()
  const password = useRef()

  const handleSignUp = () => {
    setHaveAccount(!haveAccount) //toggle
  }

  const handleSubmit = () => {
    let message = useValidateAuth(email.current.value, password.current.value) //pass the value to the custom hook to validate
    setAuthMessage(message)
  }

  return (
    <div className='w-3/12 bg-slate-500 h-[32rem] mx-auto mt-20'>
      <div className='flex justify-center items-center flex-col'>
        <h1 className='text-2xl mt-[4rem] mb-10'>{!haveAccount ? "Sign In" : "Sign Up"}</h1>
        <form onSubmit={(e) => e.preventDefault()} action=""> {/*this is to prevent the default behaviour of submitting the form*/}
          <div className='flex flex-col items-center'>
            {haveAccount && <input className='w-64 py-2 px-3 rounded-sm mb-5' placeholder='Enter Name' type="text" name="" id="" />}
            <input className='w-64 py-2 px-3 rounded-sm mb-5' ref={email} placeholder='Enter Email Address' type="text" name="" id="" />
            <input className='w-64 py-2 px-3 rounded-sm mb-5' ref={password} placeholder='Enter Password' type="text" name="" id="" />
            {haveAccount && <input className='w-64 py-2 px-3 rounded-sm mb-5' placeholder='Confirm Password' type="text" name="" id="" />}
          </div>
          <div className='py-1 mb-2 px-1'>
            <span className='text-red-500'>{authMessage}</span>
          </div>
          <div className='mb-6 mt-1'>
            <button onClick={handleSubmit} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded'>
              Submit
            </button>
          </div>
          {haveAccount ? <span onClick={handleSignUp}>Go back to <span className='cursor-pointer underline'>Sign in</span></span> : <span className='text-sm'>Don't have an account? <span className='cursor-pointer underline' onClick={handleSignUp}>Sign Up</span></span>}
        </form>
      </div>
    </div>
  );
};

export default Login;
