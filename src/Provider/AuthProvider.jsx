import React, { createContext, useEffect, useState } from 'react'
import {auth} from '../firebase/firebase-config'
import { createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider,
     onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState([])
    const createUser=(email, password)=> {

        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn=(email, password)=> {

        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle=()=> {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    const signInWithFacebook=()=> {
        const provider = new FacebookAuthProvider();
        return signInWithPopup(auth, provider)
    }


    const signInWithGithub=()=> {
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider)
    }

    const mySignOut=()=> {
         
        signOut(auth)
        
    }

    useEffect( () => {
     const unsubscribe=   onAuthStateChanged(auth, async (currentUser)=> {
        if(currentUser)
        {
            try {
                const res = await fetch(
                  `http://localhost:5000/user/${currentUser.uid}`
                );
      
                if (!res.ok) {
                  throw new Error("Failed to fetch user data.");
                }
      
                const data = await res.json();
                setUser(data);
              } catch (error) {
                console.error("Error fetching user data:", error.message);
              }

        }
        else{
            setUser(null)
        }
        //console.log(auth.currentUser," reuds");
            //setUser(currentUser)
    })
    return ( )=> { unsubscribe() }
    },[auth.currentUser])

    const authInfo={
        user, mySignOut,signIn,signInWithGoogle,setUser,signInWithGithub,signInWithFacebook,
        createUser
    }
  return (
    <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
  )
}

export default AuthProvider