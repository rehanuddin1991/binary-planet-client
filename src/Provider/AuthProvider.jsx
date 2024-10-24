import React, { createContext, useEffect, useState } from 'react'
import {auth} from '../firebase/firebase-config'
import { createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider,
     onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { backend_uri } from '../CommonResources'

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState([])
    // const createUser=(email, password)=> {

    //     return createUserWithEmailAndPassword(auth, email, password)
    // }

    // Register with email and send data to backend
  const createUser = async (
    email,
    password,
    name,
    phone,
    address,
    image
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const newUser = userCredential.user;

      // Send user data to backend
      const response = await fetch(
        `${backend_uri}/user`,
        {
          method: "POST",
          
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uid: newUser.uid,
            email: newUser.email,
            displayName: name || "User",
            phone: phone,
            address: address,
            photoURL: image || "https://i.ibb.co/k6hTYW1/Alien-Dev.jpg",
            //address: address,
            isAdmin: false, // Default role
            isBlocked: false, // Default status
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to register user data.");
      }
      //console.log("return new user ",newUser);
      return newUser;
    } catch (error) {
      console.error("Registration failed:", error.message);
      throw error; // Re-throw error for further handling if needed
    }
  };

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

    


    

    // Monitor auth state and fetch user data from backend
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
     
      if (currentUser) {
        try {
          const res = await fetch(
            `${backend_uri}/user/${currentUser.uid}`
          );

          if (!res.ok) {
            //alert("error");
            throw new Error("Failed to fetch user data.");
          }

          const data = await res.json();
          //console.log('currentset res user no --=====',data )
          setUser(data);
          //console.log('current user no --=====',user )
        } catch (error) {
          console.error("Error fetching user data:", error.message);
        }
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);


   

    const authInfo={
        user, mySignOut,signIn,signInWithGoogle,setUser,signInWithGithub,signInWithFacebook,
        createUser
    }
  return (
    <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
  )
}

export default AuthProvider