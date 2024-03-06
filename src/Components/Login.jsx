import React, { useRef, useState } from 'react';
import { useValidateAuth } from '../Utils/useValidateAuth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/Firebase"

const Login = () => {

  const [signUp, setSignUp] = useState(false)
  const [authMessage, setAuthMessage] = useState("")
  const [checkCnfmPassword, setCheckCnfmPassword] = useState("");
  const email = useRef()
  const password = useRef()
  const cnfmPassword = useRef()

  const handleSignUp = () => {
    setSignUp(!signUp) //toggle
    //clear all the input fields when the user goes back to the sign in form
    setCheckCnfmPassword("")
    setAuthMessage("")
    password.current.value = null
    email.current.value = null
  }

  const handleSubmit = () => {
    let message = useValidateAuth(email.current.value, password.current.value) //pass the value to the custom hook to validate
    setAuthMessage(message)
    setCheckCnfmPassword(cnfmPassword.current.value) // set the value of cnfmPassword
    if (message) { // if message exists which means there was some problem thats why its not null 
      return
    }

    if (signUp) {
      //if the user is on the sign up page
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setAuthMessage(errorMessage)
          console.log(errorCode + errorMessage);
        });

    }

    if (!signUp) {
      //if the user is on the sign in page
      signInWithEmailAndPassword(auth,email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  }

  return (
    <div className='w-3/12 bg-slate-500 h-[35rem] mx-auto mt-12'>
      <div className='flex justify-center items-center flex-col'>
        <h1 className='text-2xl mt-[4rem] mb-9'>{!signUp ? "Sign In" : "Sign Up"}</h1>
        <form onSubmit={(e) => e.preventDefault()} action=""> {/*this is to prevent the default behaviour of submitting the form*/}
          <div className='flex flex-col items-center mt-2'>
            {signUp && <input className='w-64 py-2 px-3 rounded-sm mb-5' placeholder='Enter Name' type="text" name="" id="" />}
            <input className='w-64 py-2 px-3 rounded-sm mb-5' ref={email} placeholder='Enter Email Address' type="text" name="" id="" />
            <input className='w-64 py-2 px-3 rounded-sm mb-5' ref={password} placeholder='Enter Password' type="text" name="" id="" />
            {signUp && <input className='w-64 py-2 px-3 rounded-sm mb-5' ref={cnfmPassword} placeholder='Confirm Password' type="text" name="" id="" />}
          </div>
          <div className='py-1 text-sm'>
            <span className='text-red-500'>{authMessage}</span>
          </div>
          {signUp && (
            <div className='py-2 text-sm'>
              <span className='text-red-500'>{checkCnfmPassword === password.current.value ? " " : "Password did not match"}</span> {/* compare passwords when signUp is true */}
            </div>
          )}
          <div className='mb-6 mt-1'>
            <button onClick={handleSubmit} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded'>
              Submit
            </button>
          </div>
          {signUp ? <span onClick={handleSignUp}>Go back to <span className='cursor-pointer underline'>Sign in</span></span> : <span className='text-sm'>Don't have an account? <span className='cursor-pointer underline' onClick={handleSignUp}>Sign Up</span></span>}
        </form>
      </div>
    </div>
  );
};

export default Login;
