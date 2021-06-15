import React, { Component } from 'react'
import firebase from '../Firebase'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'
class Create extends Component {
    constructor(){
        super();
        this.ref=firebase.firestore().collection('boards');
        this.state={
            nameOfUser:'',
            codechefRating:'',
            codechefUserName:'',
            codeforcesRating:'',
            codeforcesUserName:'',
            StrongerArea:'',
            minCodechefRating:'',
            minCodeforcesRating:'',
            reqArea:'',
            photoUrl:''
        }
    }
    onChange=(e)=>{
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState(state);
    }
    handleChange=(e)=>{
        if(e.target.files[0])
        {
          
        }
    }
    onSubmit=(e)=>{
        e.preventDefault();
        const {userName,codechefRating,codechefUserName,codeforcesRating,codeforcesUserName,
          StrongerArea,minCodechefRating,minCodeforcesRating,reqArea,photoUrl}=this.state;
        this.ref.add({
            userName,
            codechefRating,
            codechefUserName,
            codeforcesRating,
            codeforcesUserName,
            StrongerArea,
            minCodechefRating,
            minCodeforcesRating,
            reqArea,
            photoUrl
        }).then((docRef)=>{
            this.setState({
                userName:'',
                codechefRating:'',
                codechefUserName:'',
                codeforcesRating:'',
                codeforcesUserName:'',
                StrongerArea:'',
                minCodechefRating:'',
                minCodeforcesRating:'',
                reqArea:'',
                photoUrl:''
            });
        })
    }
    render() {
        const {
            userName,
            codechefRating,
            codechefUserName,
            codeforcesRating,
            codeforcesUserName,
            StrongerArea,
            minCodechefRating,
            minCodeforcesRating,
            reqArea,
          }=this.state;

        return (
            <div>
                <h1>Find Your Cp-Mate</h1>
                <form onSubmit={this.onSubmit}>
                <div class="form-group">
                <label for="userName">Name:</label>
                <input type="text" class="form-control" name="userName" value={userName} onChange={this.onChange} placeholder="Name" />
              </div>

              <div class="form-group">
                <label for="codechefRating">codechef Rating:</label>
                <input type="text" class="form-control" name="codechefRating" value={codechefRating} onChange={this.onChange} placeholder="codechef Rating" />
              </div>

              <div class="form-group">
                <label for="codechefUserName">codechefUserName:</label>
                <input type="text" class="form-control" name="codechefUserName" value={codechefUserName} onChange={this.onChange} placeholder="codechef UserName" />
              </div>
              
              <div class="form-group">
                <label for="codeforcesRating">codeforcesRating:</label>
                <input type="text" class="form-control" name="codeforcesRating" value={codeforcesRating} onChange={this.onChange} placeholder="codeforces Rating" />
              </div>

              <div class="form-group">
                <label for="codeforcesUserName">codeforcesUserName:</label>
                <input type="text" class="form-control" name="codeforcesUserName" value={codeforcesUserName} onChange={this.onChange} placeholder="codeforces UserName" />
              </div>

              <div class="form-group">
                <label for="StrongerArea">StrongerArea:</label>
                <input type="text" class="form-control" name="StrongerArea" value={StrongerArea} onChange={this.onChange} placeholder="eg.dp,geometry,number-theory" />
              </div>

              <div class="form-group">
                <label for="minCodechefRating">minCodechefRating:</label>
                <input type="text" class="form-control" name="minCodechefRating" value={minCodechefRating} onChange={this.onChange} placeholder="" />
              </div>
              <div class="form-group">
                <label for="minCodeforcesRating">minCodeforcesRating:</label>
                <input type="text" class="form-control" name="minCodeforcesRating" value={minCodeforcesRating} onChange={this.onChange} placeholder="" />
              </div>
              <div class="form-group">
                <label for="reqArea">reqArea:</label>
                <input type="text" class="form-control" name="reqArea" value={reqArea} onChange={this.onChange} placeholder="eg.greedy,math" />
              </div>
              {/* <div>
                <AddAPhotoIcon style={{cursor: "pointer"}}/>
                <input id="fileInput" type="file" accept="image/*" onClick={handleChange}></input>
              </div> */}
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
            </div>
        )
    }
}
export default Create;

