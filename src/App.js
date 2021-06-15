import './App.css';
import { Grid } from '@material-ui/core';
import firebase from './Firebase'
import AppBar from './appBar';
import { Route, Link, BrowserRouter, Router} from "react-router-dom";
import Card from "react-bootstrap/Card";
import React, { Component } from 'react'
import {Home} from "./pages";
import NavBar from './navbar';
import { UserContextProvider } from './contexts/user';
 class App extends Component {
  
  
  render() {
   
    return (
      <UserContextProvider>
         <div>
         <Home/>
         
            </div>
      </UserContextProvider>
     
      
     
           
            
         
       
    );
  }
}


export default App;
