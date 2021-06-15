import React from 'react'
import { logoutUser } from '../../services/auth';

export default function logout() {
    console.log("Success");
    const logout=async()=>{
         let islog=await logoutUser();
        console.log(islog);

    }
    return (
        <div onClick={logout}>
             <p>Logout</p>
        </div>
    )
}
