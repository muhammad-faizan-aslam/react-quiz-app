import React, { Component } from 'react';
// import logo from './logo.svg';
import '../../App.css';
import './QuizPage.css' ;
import swal from 'sweetalert' ;
import QuizData from './QuizData'

class SUBQUIZ extends Component {
  
  constructor(props){
    super(props)
    this.state ={
      quiz_info : [
            {
              quizname : 'React' ,
              quizlist : ['Quiz1','Quiz2']
            } ,
            {
              quizname : 'html' ,
              quizlist : ['Quiz1','Quiz2','Quiz2','Quiz2','Quiz2','Quiz2','Quiz2','Quiz2']
            }
         

        
      ] ,
      quizname : this.props.quizname ,
      quizindex : this.props.quizindex ,
    }
    console.log(this.props)
  }
  

  render() {

      const {quiz_info,quizname,quizindex} = this.state;
     
   
   
    
    return (
      <div className="maindiv">

           <h2>QUIZ Sub</h2>
           
           {/* <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#demo">Simple collapsible</button> */}
  


<div  className="quizname" > 
<div>        
    <a data-toggle="collapse" data-parent="#accordion" >{quizname}</a>
    </div>
{
  quiz_info.map((val,index)=>{
    return <div>
    
       
        <div class="quizlist">
        
          <ul>
            {val.quizlist.map((val,index)=>{ return <li key={index}>{val}</li>})}
           
          </ul>
        
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

export default SUBQUIZ;
