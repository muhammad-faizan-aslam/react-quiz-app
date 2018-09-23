import React, { Component } from 'react';
import SIGNUP from './screens/SignUp/SignUp';
import SIGNIN from './screens/SignIn/SignIn';
import HEADERNAV from './screens/HeaderNav/HeaderNav'
import QUIZMAIN from './screens/Quiz/QuizMain'
// import QUIZTEST from './screens/Quiz/QuizTest';
// import logo from './logo.svg';
import './App.css';
// import swal from 'sweetalert' ;
// import HEADERNAV from './screens/HeaderNav/HeaderNav';


class App extends Component {
  constructor(){
    super()
    this.state={
      usernumber :'',
      user_info :'',
      userlist: JSON.parse(localStorage.getItem('userlist')) || [] ,
      signup :false ,
      isUser : '' ,
      signin: false 
     
    }
    this.onSignup = this.onSignup.bind(this);
    this.gotosignin = this.gotosignin.bind(this);
    this.gotosignup = this.gotosignup.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.logOut = this.logOut.bind(this);
    // this.onLogout = this.onLogout.bind(this);
    // this.gotosubquiz = this.gotosubquiz.bind(this);

  }
  onSignup(userlist){
   console.log('app user', userlist)
  
  }


  gotosignin(bool1,bool2){
    this.setState({signin:bool1,signup:bool2})
  }

  gotosignup(bool1,bool2){
    this.setState({signup:bool1,signin:bool2})
  }

  onLogin(bool,usernumber,user){
    const {isUser} = this.state;
    this.setState({isUser:bool,usernumber:usernumber,user_info:user,signin:false,signup:false})
    console.log("onlogin", isUser)
    
  }


  logOut(){
    this.setState({isUser:false,signup:false,signin:false,user_info:''})
  }

  render() {
    const {signup ,isUser,signin,user_info,usernumber} = this.state;
    console.log("onlogin", isUser)

    return (
      <div>
           <HEADERNAV 
           gotosignup={this.gotosignup} 
           gotosignin={this.gotosignin} 
           logout={this.logOut}
           isUser={isUser} 
           usernumber={usernumber}
           user_info={user_info} 
           
           />
            { signin && <SIGNIN    kyauserloginhai={this.onLogin}/> }
            {signup && <SIGNUP    />}
            { isUser && < QUIZMAIN  user_info={user_info}  usernumber={usernumber} /> }
          </div>     
              
     
    );
  }
}

export default App;
