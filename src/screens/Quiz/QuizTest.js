import React, { Component } from 'react';
// import logo from './logo.svg';
import '../../App.css';
import './QuizTest.css' ;
import swal from 'sweetalert' ;

class QUIZTEST extends Component {
  
  constructor(){
    super()
    this.state ={
     quizname :'Angular',
     quizindex : 1,
     QuizData : [{
      name: 'Angular',
      Quiz: [
         
          {
              totalQuestions: 8,
              time: 35,
              questions: [{
                  question: 'Differnce Between Angular.js And Angular',
                  options: ["Angular.js User java Script ", 'Angular Use TypeScript', 'A&B'],
                  correctAnswer: 2
              }, {
                  question: 'TypeScript is a Subset of Javascript?',
                  options: ["No", 'its a new Language', 'Yes'],
                  correctAnswer: 2
              }, {
                  question: 'Angular is a ___.',
                  options: ["FrameWork", 'Liberary', 'Both'],
                  correctAnswer: 0
              }]
          }
      ]
  }, {
      name: 'React',
      Quiz: [
         
          {
              totalQuestions: 8,
              time: 35,
              questions: [{
                  question: 'React use TypeScript',
                  options: ["DOnt Know", 'Yes', 'No'],
                  correctAnswer: 2
              }, {
                  question: 'React use Es6 Class Component?',
                  options: ["it use ES5", 'Yes', 'No'],
                  correctAnswer: 1
              }, {
                  question: 'What is the current verion of React',
                  options: ["10", '14', '16'],
                  correctAnswer: 2
              }]
          }
      ]
  }] 
}
}
  

  render() {

      const {Quiz,QuizData,quizname,quizindex} = this.state;
    return (
      <div className="maindiv">

           <h2>QUIZ PAGE</h2>
           
  


<div  className="quizname" > 
   {
     QuizData.map((a,b)=>{
       if(a.name===quizname)
       {
         return <p>{console.log(a.Quiz[{quizindex}])}</p>

       }
     })
   }
   
        
<div className="container">

{/* <form>
    <div className="radio">
      <label><input type="radio" name="optradio"  />Option 1</label>
    </div>
    <div className="radio">
      <label><input type="radio" name="optradio" />Option 2</label>
    </div>
    <div className="radio disabled">
      <label><input type="radio" name="optradio"  />Option 3</label>
    </div>
  </form> */}
{/* <div className="radio">
  <div className="radio" style={{marginBottom:20}}  key={b+1} >
    <input id="radio-1" name="radio" type="radio"  />
    <label htmlFor="radio-1" className="radio-label">{a.answers.a}</label>
  </div>

  <div className="radio" style={{marginBottom:20}}  key={b+2}  >
    <input id="radio-2" name="radio" type="radio" />
    <label  htmlFor="radio-2" className="radio-label">{a.answers.b}</label>
  </div>

   <div className="radio" style={{marginBottom:20}}  key={b+3}  >
    <input id="radio-3" name="radio" type="radio" />
    <label  htmlFor="radio-3" className="radio-label">{a.answers.c}</label>
  </div>
</div> */}
</div>


<button type="button" className="btn btn-large btn-primary" style={{marginLeft:'5%'}}   >Submit</button>



      </div>         
  </div>
    );
  }
}

export default QUIZTEST;
