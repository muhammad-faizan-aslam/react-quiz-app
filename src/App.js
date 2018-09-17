import React, { Component } from 'react';
import SIGNUP from './screens/SignUp/SignUp';
import SIGNIN from './screens/SignIn/SignIn';
import QUIZPAGE from './screens/Quiz/QuizPage';
import SUBQUIZ from './screens/Quiz/SubQuiz';
// import QUIZTEST from './screens/Quiz/QuizTest';
import logo from './logo.svg';
import './App.css';
import swal from 'sweetalert' ;


class App extends Component {
  constructor(){
    super()
    this.state={
      email:'',
      password :'',
      userlist: JSON.parse(localStorage.getItem('userlist')) || [] ,
      signup :true ,
      user : false ,
      signin: false ,
      issubquiz : false ,
      quizname :'',
      quizindex :''
     
    }
    this.onSignup = this.onSignup.bind(this);
    this.gotosignin = this.gotosignin.bind(this);
    this.gotosignup = this.gotosignup.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
    this.gotosubquiz = this.gotosubquiz.bind(this);

  }
  onSignup(userlist){
   console.log('app user', userlist)
  
  }

gotosubquiz(quizname,quizindex,bool){
  
  this.setState({issubquiz:bool, quizname : quizname , quizindex :quizindex , user:false})
  console.log(quizindex,quizname,bool)
}
  gotosignin(bool){
    this.setState({signin:bool,signup:false})
  }

  gotosignup(bool){
    this.setState({signup:bool})
  }

  onLogin(bool){
    this.setState({user:bool,signup:false,signin:false})
  }

  onLogout(bool){
    this.setState({user:bool,signup:false,signin:true})
  }
  render() {
    const {signup ,user,signin ,issubquiz,quizname} = this.state;
    return (
      <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      
      </div>
      <div>
            {/* { !user && <QUIZTEST logouthoja={this.onLogout} />}  */}
            { issubquiz && <SUBQUIZ  quizname={quizname}  />} 
            { !user && <QUIZPAGE logouthoja={this.onLogout}  gotosubquiz={this.gotosubquiz}/>} 

            { signin &&
            <SIGNIN   gotosignup={this.gotosignup} kyauserloginhai={this.onLogin}/> }
              { !signup &&
               <SIGNUP  jabsignupho={this.onSignup}  gotosignin={this.gotosignin}   />
               
               }
      </div>
      </div>
    );
  }
}

export default App;
