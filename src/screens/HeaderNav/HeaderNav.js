import React, { Component } from 'react';
import logo from './quizzarlogosmall.png';
import '../../App.css';
import './HeaderNav.css' ;
import bannerpic from './quizzarbanner.png'
// import swal from 'sweetalert' ;

class HEADERNAV extends Component {
  
    constructor(props){
        super(props)
        this.state={
        banner : 'show' ,
        isUser : false,
        user_info : [],
        username : '',
        usernumber:''
        }
        console.log('header props',this.props )
        this.clickOnsigup = this.clickOnsignup.bind(this);
        this.clickOnsignin = this.clickOnsignin.bind(this);
        this.logOut = this.logOut.bind(this);
      }

   clickOnsignin(){
     this.setState({banner:'hide'})
     this.props.gotosignin(true,false)
   }

   clickOnsignup(){
    this.setState({banner:'hide'})
    this.props.gotosignup(true,false)
    
  }
  componentWillReceiveProps(nextprops){
    this.setState({
      isUser:nextprops.isUser,
      user_info:nextprops.user,
      username : nextprops.user_info.username,
      usernumber : nextprops.user_info.usernumber
    })
    // console.log('willreceive',nextprops)

  }

  logOut(){
   this.setState({banner:'show'})
   this.props.logout();
  }

 


  render() {
   const {banner , isUser,a,user_info,username} = this.state ;
  

    return (
    
      <div className="container-fluid">
             
      <div className="row">
          
         <nav className="navbar menubar">
             <div className="container-fluid">
               <div className="navbar-header">
                 <button type="button" className="navbar-toggle togglemenu" data-toggle="collapse" data-target="#myNavbar">
                   <span className="icon-bar"></span>
                   <span className="icon-bar"></span>
                   <span className="icon-bar"></span>                        
                 </button>
                 <a className="webname" href="#">
                 <img src={logo} className="img-responsive" alt="Image" width='75'/>

                 </a>
               </div>
               <div>
               { !isUser ?

               <div className="collapse navbar-collapse" id="myNavbar">
                
                 <ul className="nav navbar-nav navbar-right menuitem">
               
                   <li><a href="#" onClick={()=> this.clickOnsignup()}  ><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                   <li><a href="#" onClick={()=> this.clickOnsignin()} ><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                 </ul>
               </div>
               :
               <div className="collapse navbar-collapse" id="myNavbar">
               <ul className="nav navbar-nav menuitem">
                       <li><a href="#">WELCOME   {username} </a></li>
                     </ul>
           <ul className="nav navbar-nav navbar-right menuitem">

             <li><a href="#" onClick={()=> {this.logOut()}} >Logout <i className="fa fa-power-off" style={{fontsize:18,color:'white'}}></i></a></li>
             
           </ul>
         </div>
             
               }
               </div>
             </div>
           </nav>
             
        
       
      </div>


      
      <div className="row">
       {
         banner==='show' &&
       <img src={bannerpic} className="img-responsive" alt="Image" width='100%'/>
       }
       
          
        </div>
     
      
      
  </div>
  
    
    );
  }
}

export default HEADERNAV;
