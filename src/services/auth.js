import firebase from '../Firebase';
var provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle=async()=>{
    let user;
  await firebase.auth()
.signInWithPopup(provider)
.then((result) => {

console.log(result);
user=result.user;
}).catch((error) => {
   console.log(error);
});
return user;
}
export const logoutUser=async()=>{
    let islogout;
    await firebase.auth().signOut().then(() => {
        islogout=true;
       
       }).catch((error) => {
          console.log(error);
       });
       return islogout;
}