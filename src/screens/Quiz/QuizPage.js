import React, { Component } from 'react';
// import logo from './logo.svg';
import '../../App.css';
import './QuizPage.css' ;
import swal from 'sweetalert' ;

class QUIZPAGE extends Component {
  
  constructor(props){
    super(props)
    this.state ={
      quiz : [
            {
              quizname : 'React' ,
              quizlist : ['Quiz1','Quiz2']
            } ,
            {
              quizname : 'html' ,
              quizlist : ['Quiz1','Quiz2','Quiz2','Quiz2','Quiz2','Quiz2','Quiz2','Quiz2']
            }
         

        
      ] 
    }
  }
  

  render() {

    const {quiz} = this.state;
  return (
    <div className="maindiv">

         <h2>QUIZ PAGE</h2>

<div  className="quizname" > 
{
quiz.map((val,index)=>{
  return <div>
  <div>        
  <a data-toggle="collapse" data-parent="#accordion" href={`#collapse${index}`} 
  onClick={()=>this.props.gotosubquiz(val.quizname,index,true)}
  >{val.quizname}</a>
  </div>
      </div>
})
}



    

 

         
         
         </div>
         <button type="button" className="btn btn-lg btn-primary" onClick={()=>this.props.logouthoja(false)}>LOGOUT</button>
    </div>
  );
}

}
export default QUIZPAGE;