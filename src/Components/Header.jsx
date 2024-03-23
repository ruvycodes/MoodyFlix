import React from 'react'
import { auth } from '../Utils/Firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import { toggleGptSearchButton } from '../Utils/GptSlice';
import { LANGUAGE_SUGGESTION } from '../Utils/constants';
import { changeLanguage } from '../Utils/configSlice';

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

    const handleOnClickSearch = () => {
        dispatch(toggleGptSearchButton())
    }

    const handleSelectLang = (e) => {
        dispatch(changeLanguage(e.target.value))
    }

    // we have used the onAuthStateChanged here because header is present everywhere in our site so this code will also be there
    useEffect(() => {
        //onAuthstateChanged is like an event listener given by firebase which will observe the change in auth(sign in or sign out) then perform the function accordingly
        // we have used useEffect hook with empty dependency arrat cuz we want it to run only one time not every time 
        let unsubscribe = onAuthStateChanged(auth, (user) => { // it returns a function which we can use to unsubscribe(basically stopping the event listener)
            // basic implementation of Protected Routes
            if (user) {
                // User is signed in then navigate to browse
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, name: displayName }))
                console.log(user);
                navigate("/browse")
            } else {
                // User is signed out then navigate to login
                dispatch(removeUser())
                navigate("/login")
            }
        });

        // unsubscribes when the component unmounts
        return () => unsubscribe()
    }, [])

    return (
        <div className='bg-slate-300 flex justify-between'>
            <img className='w-14' src="mood.gif" alt="logo.png" />
            <div className='px-5 mt-3'>
                <select onChange={handleSelectLang} className='mr-10 ' name="Language" id="">{LANGUAGE_SUGGESTION.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}</select>
                <button className='mr-10' onClick={handleOnClickSearch}>Search</button>
                <button onClick={handleSignOut} >Sign Out</button>
            </div>
        </div>
    )
}

export default Header