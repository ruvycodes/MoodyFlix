import React from 'react'
import { auth } from '../Utils/Firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';

const Header = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSignOut = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("signed out");
            navigate("/login")
        }).catch((error) => {
            console.log(error);
        });
    }

    // we have used the onAuthStateChanged here because header is present everywhere in our site so this code will also be there
    useEffect(() => {
        //onAuthstateChanged is like an event listener given by firebase which will observe the change in auth(sign in or sign out) then perform the function accordingly
        // we have used useEffect hook with empty dependency arrat cuz we want it to run only one time not every time 
      let unsubscribe = onAuthStateChanged(auth, (user) => { // it returns a function which we can use to unsubscribe(basically stopping the event listener)
            if (user) {
                // User is signed in
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, name: displayName }))
                console.log(user);
                navigate("/browse")
            } else {
                // User is signed out
                dispatch(removeUser())
                navigate("/login")
            }
        });

        // unsubscribes when the component unmounts
        return ()=> unsubscribe()
    }, [])

    return (
        <div className='bg-slate-300 flex justify-between'>
            <img className='w-14' src="mood.gif" alt="logo.png" />
            <button onClick={handleSignOut} className='px-5'>Sign Out</button>
        </div>
    )
}

export default Header