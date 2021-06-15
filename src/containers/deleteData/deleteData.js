import React, { useState,useContext } from 'react'
import firebase from '../../Firebase'
import makeUniqueId from '../../helper/functions';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'
import {UserContext} from '../../contexts/user'
export default function UploadImage() {
  const [user,setUser]=useContext(UserContext).user;
  const deleteData=()=>{
       firebase.firestore().collection('userReq').doc(user.uid).delete();
  }
    return (
        <div>
            <button onClick={deleteData}>Delete Data</button>
        </div>
       
    )
}
