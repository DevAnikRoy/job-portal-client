import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import axios from 'axios';

const AuthProvider = ({children}) => {
    
    const [loading, setLoading] = useState(true)
    // state for observed the user is present or not 
    const [user, setUser] = useState()
    
    // Google provider
      const googleProvider = new GoogleAuthProvider
    
    // **************************************************************************************************
    
  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
    
    
    
    
    // register user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    // login user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    // signOut 
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }
    
    // observer for observe the user and show signout btn if the user is in the login
    useEffect(() => {
        const unSubsCribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            if(currentUser?.email){
                const userData = {email: currentUser.email};
                axios.post('http://localhost:3000/jwt', userData, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log('token after Jwt', res.data)
                    })
                    .catch(error => console.log(error))
            }
            
            console.log('seeing the current user', currentUser)
        })
        return () => {
            unSubsCribe();
        }
    },[])
    
    const authInfo = {
        loading,
        user,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle,
    }
    
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;