import React, { Component } from 'react';
// import logo from './logo.svg';
import '../../App.css';
import './SignUp.css' ;
import swal from 'sweetalert' ;

class SIGNUP extends Component {
  
  constructor(props){
    super(props)
    this.state={
      username:'',
      email:'',
      password :'',
      userlist:  JSON.parse(localStorage.getItem('userlist')) || [] 
     
 
     
    }
    this.addUser = this.addUser.bind(this);
    this.getInput = this.getInput.bind(this);
    // this.gotosignin = this.gotosignin.bind(this);
   

  }
  
  
  addUser(e){
        e.preventDefault();
      const {username,email,password,userlist} = this.state;
   
       let user = true;
            for (let i = 0 ; i < userlist.length;i++){
              if(email===userlist[i].email)
              {
              user = false;
              break 
              }
              
            }

            if(user){
              userlist.push({username,email,password,quizresult:[]}) ;   
              localStorage.setItem('userlist',JSON.stringify(userlist));
              // this.props.jabsignupho(userlist);
              this.setState({username :'' , email:'',password:'' ,userlist:''})
              swal("Successfully Registered !", "", "success")
            }
            else {
              swal("This Email Address Already Registered !", "", "warning");
            }

          }
      
     
    

  getInput(e){
        this.setState({[e.target.name] : e.target.value})
  }


  render() {

    console.log("email , pass",this.state.email + this.state.password);
    
    console.log("signup props",this.props)
    const {username,email,password} = this.state ;
    return (
      <div className="App">

              <form onSubmit={this.addUser} style={{width:500,margin:'auto'}}>
          <h2>SignUp Form</h2>
          <div className="input-container">
            <i className="fa fa-user icon"></i>
            <input className="input-field" type="text" placeholder="Username" name="username"
            required
            value={username}
            onChange={this.getInput}
            />
          </div>

          <div className="input-container">
            <i className="fa fa-envelope icon"></i>
            <input className="input-field" type="text" placeholder="Email" name="email"
            required
            value={email}
            onChange={this.getInput}
            />
          </div>
          
          <div className="input-container">
            <i className="fa fa-key icon"></i>
            <input className="input-field" type="password" placeholder="Password" name="password"
            required
            value={password}
            onChange={this.getInput}
            />
          </div>

          <button type="submit" className="btn formbtn">Register</button>
          {/* <p  className="gotosigin">Already You Have An Account ?<a onClick={()=>this.props.gotosignup(false)}>  SigIn</a></p> */}
        </form>
          
      </div>
    );
  }
}

export default SIGNUP;
