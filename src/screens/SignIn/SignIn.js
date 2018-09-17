import React, { Component } from 'react';
// import logo from './logo.svg';
import '../../App.css';
import './SignIn.css' ;
import swal from 'sweetalert' ;

class SIGNIN extends Component {
  
    constructor(props){
        super()
        this.state={
          username:'',
          email:'',
          password :'',
          userlist:  JSON.parse(localStorage.getItem('userlist')) || [] ,
          login : false ,
          errinputStyle : {}
         
     
         
        }

        this.getInput = this.getInput.bind(this);
        this.loginCheck = this.loginCheck.bind(this);
    }

    getInput(e){
        this.setState({[e.target.name] : e.target.value})
  }

  loginCheck(e){
      e.preventDefault();
    const {email,password,userlist,login,errinputStyle}=  this.state;
    console.log('userlist' ,userlist)
    let logincheck = false;
//   debugger;
     if(userlist.length !== 0) {
          for(let i = 0 ; i < userlist.length ; i++)
          {
              if(userlist[i].email === email && userlist[i].password === password)
              {
                  swal("Login Successfully !" ,'','success');
                  this.setState({username :'' , email:'',password:'' ,userlist:'',errinputStyle:{}})

                //   console.log("done");
                  logincheck = true;
                 console.log('login',logincheck)
                 this.props.kyauserloginhai(true);
                 break;
              }
          }
        }
        else {
            swal("First you create An Account");
        }

            
        if(!logincheck){
            
            this.myInp.focus();
            this.setState({errinputStyle : {
                border :'1px solid red' 
            }})
            
           

            swal(`OPPS ! Email or Password is Incorrect` ,'','warning');
        }
          
      
  }

  render() {
      const {email,password,errinputStyle}=  this.state;
    return (
      <div className="App">

              <form onSubmit={this.loginCheck} style={{width:500,margin:'auto'}}>
          <h2>SignIN Form</h2>

          <div className="input-container">
            <i className="fa fa-envelope icon"></i>
            <input className="input-field" type="text" placeholder="Email" name="email" required
                    style={errinputStyle}
                    ref={(ip) => this.myInp = ip}
                    value={email}
                    onChange={this.getInput}
            />
          </div>
          
          <div className="input-container">
            <i className="fa fa-key icon"></i>
            <input className="input-field" type="password" placeholder="Password" name="password" required
                     value={password}
                     onChange={this.getInput}

                     style={errinputStyle}
                     ref={(ip) => this.myInp = ip}
            />
          </div>

          <button type="submit" className="btn formbtn">Login</button>
          <p  className="gotosigin">Don't have an account ?<a href="" onClick={()=>this.props.gotosignup(false)}>  SIGNUP</a></p>
        </form>
          
      </div>
    );
  }
}

export default SIGNIN;
