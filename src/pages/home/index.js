import React from 'react'
import "./style.css"
import CreatePost from "../../containers/create-post/createPost"
import { BrowserRouter,Link,Route,Switch } from 'react-router-dom';
import NavBar from '../../containers/navbar/index'
import UploadImage from '../../containers/create-post/uploadImage';
import AllUserData from '../../pages/allUser/allUser';
import SearchFilter from '../../pages/search/search'
import UpdateData from '../../containers/updateData/updateData'
import DeleteData from '../../containers/deleteData/deleteData'
import AppBar from '../../appBar'
export default function Home() {
    return (
        <div className="home">
            {/* <NavBar/> */}
           <AppBar/>
            {/* <UpdateData/> */}
            {/* <DeleteData/> */}
            {/* <AllUserData/> */}
            {/* <UploadImage/> */}
            {/* <SearchFilter/> */}
        </div>
    )
}
