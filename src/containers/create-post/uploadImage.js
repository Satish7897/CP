import React, { useState,useContext } from 'react'
import firebase from '../../Firebase'
import makeUniqueId from '../../helper/functions';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'
import {UserContext} from '../../contexts/user'
export default function UploadImage() {
  const [user,setUser]=useContext(UserContext).user;
    const[nameOfUser,setUserDetails]=useState(null);
    const[codechefRating,setCodechefRating]=useState(null);
    const[codechefUserName,setCodechefUserName]=useState(null);
    const[codeforcesRating,setCodeforcesRating]=useState(null);
    const[codeforcesUserName,setCodeforcesUserName]=useState(null);
    const[StrongerArea,setStrongArea]=useState(null);
    const[minCodechefRating,setMinCodechef]=useState(null);
    const[minCodeforcesRating,setMinCodeforces]=useState(null);
    const[reqArea,setReq]=useState(null);
    const[photoUrl,setUrl]=useState(null);
    const[uidOfUser,setUid]=useState(null);
     const [image,setImage]=useState(null);
     const [progress,setProgress]=useState(null);
   const onSubmit=()=>{
    var imgName=makeUniqueId(10);
    const uploadTask=firebase.storage(). ref(`images/${imgName}.jpg`)
    .put(image)
     .then(()=>{
        firebase.storage().ref("images").child(`${imgName}.jpg`)
        .getDownloadURL()
        .then((photoUrl)=>{
            firebase.firestore().collection("userReq").doc(user.uid).set({
      
              nameOfUser:nameOfUser,
              codechefRating:codechefRating,
              codechefUserName:codechefUserName,
              codeforcesRating:codeforcesRating,
              codeforcesUserName:codeforcesUserName,
              StrongerArea:StrongerArea,
              minCodechefRating:minCodechefRating,
              minCodeforcesRating:minCodechefRating,
              reqArea:reqArea,
              photoUrl:photoUrl
           
            });

        })
     })
   }
    return (
        <div className="createPost">
            
            <div>
                <h1>Find Your Cp-Mate</h1>
                <label for="userName">Name:</label>
                <input type="text" className="form-control" name="userName" value={nameOfUser} onChange={e=>setUserDetails(e.target.value)} placeholder="Name" />
              
                
                <label for="codechefRating">codechef Rating:</label>
                <input type="text" className="form-control" name="codechefRating" value={codechefRating} onChange={e=>setCodechefRating(e.target.value)} placeholder="codechef Rating" />
             
                <label for="codechefUserName">codechefUserName:</label>
                <input type="text" className="form-control" name="codechefUserName" value={codechefUserName} onChange={e=>setCodechefUserName(e.target.value)} placeholder="codechef UserName" />
             
                <label for="codeforcesRating">codeforcesRating:</label>
                <input type="text" className="form-control" name="codeforcesRating" value={codeforcesRating} onChange={e=>setCodeforcesRating(e.target.value)} placeholder="codeforces Rating" />
              
                <label for="codeforcesUserName">codeforcesUserName:</label>
                <input type="text" className="form-control" name="codeforcesUserName" value={codeforcesUserName} onChange={e=>setCodeforcesUserName(e.target.value)} placeholder="codeforces UserName" />
            
                <label for="StrongerArea">StrongerArea:</label>
                <input type="text" className="form-control" name="StrongerArea" value={StrongerArea} onChange={e=>setStrongArea(e.target.value)} placeholder="eg.dp,geometry,number-theory" />
        
                <label for="minCodechefRating">minCodechefRating:</label>
                <input type="text" className="form-control" name="minCodechefRating" value={minCodechefRating} onChange={e=>setMinCodechef(e.target.value)} placeholder="" />
          
                <label for="minCodeforcesRating">minCodeforcesRating:</label>
                <input type="text" className="form-control" name="minCodeforcesRating" value={minCodeforcesRating} onChange={e=>setMinCodeforces(e.target.value)} placeholder="" />
            
                <label for="reqArea">reqArea:</label>
                <input type="text" class="form-control" name="reqArea" value={reqArea} onChange={e=>setReq(e.target.value)} placeholder="eg.greedy,math" />
                <AddAPhotoIcon style={{cursor: "pointer"}}/>
                <input id="fileInput" type="file" accept="image/*" onChange={e=>setImage(e.target.files[0])}></input>
                <button type="submit" onClick={onSubmit}>Submit</button>
              </div>
            


          </div>
    )
}
