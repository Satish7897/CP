import React ,{ useContext,useState}from 'react'
import { UserContext } from '../../contexts/user';
 import firebase from '../../Firebase';
 import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'
import "./style.css"
import makeUniqueId from '../../helper/functions';
export default function CreatePost() {
    const[nameOfUser,setUser]=useState(null);
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
      const photoSet=(e)=>{
        
        const imageToUpload=e.target.files[0];
       
        setImage(imageToUpload);
      };
     
      const onSubmit=()=>{
        
        if(image)
        {   console.log('submitting');
          var imgName=makeUniqueId(10);
          console.log(imgName);
          const uploadTask=firebase.storage().ref(`images/${image}.jpg`)
          .put(image);
          uploadTask.on("stateChanged",(snapshot)=>{
            const progress=Math.round((snapshot.byteTransferred/snapshot.totalBytes)*100);
            setProgress(progress);

          },(error)=>{
            console.log(error);
          },()=>{
            firebase.storage().ref("images").child(`${imgName}.jpg`)
            .getDownloadURL()
            .then((photoUrl)=>{
              firebase.firestore().collection("userReq").map({
               timestamp:firebase.firestore.FieldValue.serverTimestamp,
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
            
              })
              
            })
          })
        }

      }
    return (
        <div className="createPost">
            
            <div>
                <h1>Find Your Cp-Mate</h1>
                <form onSubmit={onSubmit}>
                <div class="form-group">
                <label for="userName">Name:</label>
                <input type="text" className="form-control" name="userName" value={nameOfUser} onChange={e=>setUser(e.target.value)} placeholder="Name" />
              </div>

              <div class="form-group">
                <label for="codechefRating">codechef Rating:</label>
                <input type="text" className="form-control" name="codechefRating" value={codechefRating} onChange={e=>setCodechefRating(e.target.value)} placeholder="codechef Rating" />
              </div>

              <div class="form-group">
                <label for="codechefUserName">codechefUserName:</label>
                <input type="text" className="form-control" name="codechefUserName" value={codechefUserName} onChange={e=>setCodechefUserName(e.target.value)} placeholder="codechef UserName" />
              </div>
              
              <div class="form-group">
                <label for="codeforcesRating">codeforcesRating:</label>
                <input type="text" className="form-control" name="codeforcesRating" value={codeforcesRating} onChange={e=>setCodeforcesRating(e.target.value)} placeholder="codeforces Rating" />
              </div>

              <div class="form-group">
                <label for="codeforcesUserName">codeforcesUserName:</label>
                <input type="text" className="form-control" name="codeforcesUserName" value={codeforcesUserName} onChange={e=>setCodeforcesUserName(e.target.value)} placeholder="codeforces UserName" />
              </div>

              <div class="form-group">
                <label for="StrongerArea">StrongerArea:</label>
                <input type="text" className="form-control" name="StrongerArea" value={StrongerArea} onChange={e=>setStrongArea(e.target.value)} placeholder="eg.dp,geometry,number-theory" />
              </div>

              <div class="form-group">
                <label for="minCodechefRating">minCodechefRating:</label>
                <input type="text" className="form-control" name="minCodechefRating" value={minCodechefRating} onChange={e=>setMinCodechef(e.target.value)} placeholder="" />
              </div>
              <div class="form-group">
                <label for="minCodeforcesRating">minCodeforcesRating:</label>
                <input type="text" className="form-control" name="minCodeforcesRating" value={minCodeforcesRating} onChange={e=>setMinCodeforces(e.target.value)} placeholder="" />
              </div>
              <div class="form-group">
                <label for="reqArea">reqArea:</label>
                <input type="text" class="form-control" name="reqArea" value={reqArea} onChange={e=>setReq(e.target.value)} placeholder="eg.greedy,math" />
              </div>
              <div>
                <AddAPhotoIcon style={{cursor: "pointer"}}/>
                <input id="fileInput" type="file" accept="image/*" onChange={e=>setImage(e.target.files[0])}></input>
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
            </div>

          </div>
    )
}
