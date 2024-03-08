import React from 'react'
import { auth } from '../Utils/Firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate()
    const handleSignOut = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("signed out");
            navigate("/body")
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className='bg-slate-300 flex justify-between'>
            <img className='w-14' src="mood.gif" alt="logo.png" />
            <button onClick={handleSignOut} className='px-5'>Sign Out</button>
        </div>
    )
}

export default Header