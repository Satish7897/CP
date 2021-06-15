import React, { Component } from 'react'
import firebase from '../../Firebase'
import Card from "react-bootstrap/Card";
import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons" 
import TinderCard from 'react-tinder-card';
export default class AllUserData extends Component {
    constructor(props){
        super(props);
        this.ref=firebase.firestore().collection('userReq');
        this.unsubscribe=null;
        this.state={
          boards:[]
        };
      }
      onCollectionUpdate=(querySnapshot)=>{
        const boards=[];
        querySnapshot.forEach((doc)=>{
          const { nameOfUser,
                codechefRating,
                codechefUserName,
                codeforcesRating,
                codeforcesUserName,
                StrongerArea,
                minCodechefRating,
                minCodeforcesRating,
                reqArea,
                photoUrl
            }=doc.data();
          console.log(doc.id);
          boards.push({
              key:doc.id,
              doc,
                 nameOfUser,
                codechefRating,
                codechefUserName,
                codeforcesRating,
                codeforcesUserName,
                StrongerArea,
                minCodechefRating,
                minCodeforcesRating,
                reqArea,
                photoUrl
          });
          this.setState({
            boards
          });
        })
      }
      componentDidMount(){
        this.unsubscribe=this.ref.onSnapshot(this.onCollectionUpdate);
      }

    render() {

        return (
            <div >
             
              {this.state.boards.map(board =>
              <TinderCard 
              className="swipe"
              key={board.codeforcesUserName}
              preventSwipe={["up","down"]}
              // onSwipe={(dir)=>swaped(dir,board.nameOfUser)}
              // onCardLeftScreen={()=>outOfframe(board.nameOfUser)}
              >
              <div className="container" >
                <div className="cover-photo">
                  <img src={board.photoUrl} className="profile"/>
                </div>
                <div className="profile-name">{board.nameOfUser}</div>
                <h className="data-text">Codeforces User Name:{board.codeforcesUserName}</h><br/>
                <h className="data-text">Codechef Rating:{board.codeforcesRating}</h><br/>
                <h className="data-text">Codechef User Name:{board.codechefUserName}</h><br/>
                <h className="data-text">Codechef Rating:{board.codechefRating}</h><br/>
                <h className="data-text">Stronger Area:{board.StrongerArea}</h><br/>
                <h className="data-text">Mate minimum codeforces Rating:{board.minCodeforcesRating}</h><br/>
                <h className="data-text">Mate Minimum Codeforces Rating:{board.minCodechefRating}</h><br/>
                <h className="data-text">Want to Learn:{board.reqArea}</h><br/>
              

                <button className="msg-btn" onClick="https://codeforces.com/usertalk?other=${board.codeforcesUserName}">Message</button>
              
                <br/>
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faInstagram} />
               
                <p></p>

               </div>
               </TinderCard>
                  
                
              )}

            
            </div>
        )
    }
}
