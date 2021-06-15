import React,{useContext,useState} from 'react'
import { BrowserRouter as Router,Link,Route,Switch } from 'react-router-dom';
import { UserContext } from '../../contexts/user'
import "./style.css"
import SignInBtn from '../../components/signIn/signInUser'
import AddUserData from '../../containers/create-post/uploadImage'
import { CreatePost } from '..';
import ShowData from '../../pages/allUser/allUser'
import { Button } from 'bootstrap';
export default function NavBar() {
 const [user,setUser]=useContext(UserContext).user;
 
    return (
         <div className="navbar">
            
  
             <p>CP-Majte</p>
             {user?<p>{user.uid}</p>:<SignInBtn/>}
            <Router>
                {/* <Link to="">Home</Link>
                <Link to="/addData">Add Data</Link>
                <Route exact path="/" component={ShowData}/>
            {user?<Route exact path="/addData" component={AddUserData}/>:<SignInBtn/>} */}

            </Router>
         
 
 
       
        </div>
    );
};
