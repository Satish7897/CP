import React,{useState,useContext} from 'react'
import { UserContext } from '../../contexts/user';

import { signInWithGoogle } from '../../services/auth';
import "./style.css"
export default function SignInBtn() {
    
    const [user,setUser]=useContext(UserContext).user;
    const signIn=async()=>{
        let userBySignIn=await signInWithGoogle();
        if(userBySignIn)setUser(userBySignIn);
        console.log(user);
    }
    return (
        <div className="signInBtn" onClick={signIn}>
            <p>signIn With Google</p>
        </div>
    )
}
