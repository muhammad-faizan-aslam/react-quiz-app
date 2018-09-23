import React, { Component } from 'react';
import '../../App.css';
import './QuizMain.css' ;
import swal from 'sweetalert' ;

class QUIZMAIN extends Component {
  
    constructor(props){
        super(props)
        this.state={
          a:[],
          userlist:  JSON.parse(localStorage.getItem('userlist')) || [] ,
          usernumber : props.usernumber,
          isQuizinfo:false,
          quizinfo:'',
          quizCategory:'',
          key:'',
          getKey:'',
          isQuizStart :false,
          isQuizfinal:false,
          currentIndex:0,
          selectedopt:'',
          checkAns:0,
          isShowresult:false,
          user_info:props.user_info,
          isRetakequiz:'',
          finalres:'',

          
          quizData :[
            {
              name :'HTML',
              quizes:[
                {
                  name : 'Quiz 1',
                  key:'123', totalquestion:'2' , timeduration :30 ,
                  questions:[{
                      question:'What does HTML stand for?',
                      options:['Hyperlinks and Text Markup Language','Home Tool Markup Language','Hyper Text Markup Language'],
                      correctanswer:'Hyper Text Markup Language'
                  },
                  {
                    question:'Who is making the Web standards??',
                    options:['Microsoft','Mozilla','The World Wide Web Consortium','Google'],
                    correctanswer:'The World Wide Web Consortium'
                }
           
          ]
                },
                {
                  name : 'Quiz 2',
                  key:'123', totalquestion:'2' , timeduration :30 ,
                  questions:[{
                      question:'What does HTML stand for?',
                      options:['Hyperlinks and Text Markup Language','Home Tool Markup Language','Hyper Text Markup Language'],
                      correctanswer:'Hyper Text Markup Language'
                  },
                  {
                    question:'Who is making the Web standards??',
                    options:['Microsoft','Mozilla','The World Wide Web Consortium','Google'],
                    correctanswer:'The World Wide Web Consortium'
                }
           
          ]
                }
              ]
            },

            {
              name :'Javascript',
              quizes:[
                {
                  name : 'Quiz 1',
                  key:'123', totalquestion:'2' , timeduration :30 ,
                  questions:[{
                      question:'What does HTML stand for?',
                      options:['Hyperlinks and Text Markup Language','Home Tool Markup Language','Hyper Text Markup Language'],
                      correctanswer:'Hyper Text Markup Language'
                  },
                  {
                    question:'Who is making the Web standards??',
                    options:['Microsoft','Mozilla','The World Wide Web Consortium','Google'],
                    correctanswer:'The World Wide Web Consortium'
                }
           
          ]
                },
                {
                  name : 'Quiz 2',
                  key:'123', totalquestion:'2' , timeduration :30 ,
                  questions:[{
                      question:'What does HTML stand for?',
                      options:['Hyperlinks and Text Markup Language','Home Tool Markup Language','Hyper Text Markup Language'],
                      correctanswer:'Hyper Text Markup Language'
                  },
                  {
                    question:'Who is making the Web standards??',
                    options:['Microsoft','Mozilla','The World Wide Web Consortium','Google'],
                    correctanswer:'The World Wide Web Consortium'
                }
           
          ]
                }
              ]
            }
          ]
        }
        this.showQuizinfo  = this.showQuizinfo.bind(this)
        this.renderQuizInfo = this.renderQuizInfo.bind(this)
        this.submitAns = this.submitAns.bind(this);
        this.showresult =  this.showresult.bind(this)
        this.starttime = this.starttime.bind(this);
        // this.renderQuizQuestion = renderQuizQuestion.bind(this)
        // this.goBackQuizInfo = this.goBackQuizInfo.bind(this)
      }

 showQuizinfo(parentIndex,childIndex){

  const { quizData , quizinfo , quizCategory , key } = this.state ;


  
  this.setState({
    
    quizinfo : quizData[parentIndex].quizes[childIndex] ,
    quizCategory : quizData[parentIndex].name ,
    isQuizinfo : true ,
    key:quizData[parentIndex].quizes[childIndex].key
  })
  
  
}    
    pushUserQuizResult(){
      const {finalres , checkAns, user_info , userlist , quizCategory , quizinfo,usernumber , a} = this.state ;
      let quizresultinfo  ;
      if(user_info.email === userlist[usernumber].email  ){

       //  console.log("final result to push user list",finalres)
        const quizData ={
          quizname : quizCategory , subquiz : quizinfo.name , finalres :  finalres , date : new Date().toLocaleDateString , totalquestion : quizinfo.totalquestion ,
          correctanswer : checkAns ,
        };
        quizresultinfo = userlist[usernumber].quizresult.push(quizData) ;

        localStorage.setItem('userlist',JSON.stringify(userlist))
       //  console.log('userList after push result',quizresultinfo);
       
      }

    }


    checkResult(){
      this.setState({
      isRetakequiz:false
      })
    }
 backToQuizinfo(){
  this.setState({
    isQuizStart : false 
   
  })
 }

 backToQuizMain(){
  this.setState({
   isQuizinfo :false,
   isQuizfinal:false,
   isQuizStart:false,
  //  isQuizinfo:false
  isShowresult:false,
  finalres:'',
  checkAns:0

  })
 }

  backToQuiz(){
   
    this.setState({
      isQuizinfo : false ,
      quizinfo : '',
      quizCategory : '',
    })
  }
startQuiz(){
  const { key , isQuizStart ,quizinfo }= this.state;
  this.setState({
    isQuizStart :true,finalres:'',
    checkAns:0
  })
 //  console.log('quizinfo',quizinfo)
 //  console.log('quizinfo key',key)
// alert('key',key)
}

submitAns(questionIndex,correctanswer){
  const {selectedopt,checkAns,currentIndex} = this.state;
  
  

  if(correctanswer===selectedopt){
    this.setState({
      currentIndex : questionIndex+1,
        checkAns:checkAns + 1 
    })
   
  }
  else{
    this.setState({
      currentIndex : questionIndex+1,
      checkAns:checkAns
    
    
    }) 
      
  }

 
  // swal('result',checkAns)
}
performCalculation(){
  const {checkAns,currentIndex,quizinfo} = this.state;
  const finalres = checkAns/quizinfo.totalquestion * 100;
  this.setState({
    finalres,
  })

}


showresult(){
  const {checkAns,quizinfo,finalres,quizCategory} = this.state;
  this.pushUserQuizResult()
   return (
     
     <div className="container-fluid">
         <div className="row">
                  
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"  style={{margin:'auto'}}> 
                        <div className="panel panel-primary result-info-div">
                                
                                <div className="panel-heading">

                                      <div className="row">
                                        
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                <p>Quiz Title : <span>{quizCategory}  </span>{quizinfo.name} </p>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                <p className="text-right crossbtn"
                                                onClick={this.backToQuizMain.bind(this)}
                                                ><span className="glyphicon glyphicon-remove" ></span></p>
                                            </div>
                                      </div>

                                      </div>
                                {/* <div className="panel-heading">
                                Quiz Title : <span>{quizCategory} </span>{quizinfo.name} </div> */}
                                <div className="panel-body">

                                  <h5>{quizinfo.name}</h5>
                                  <p>Time Duration: <span>{quizinfo.timeduration}</span></p>
                                  <p>Total Questions: <span>{quizinfo.totalquestion}</span></p>
                                  <p>Total Correct Answers: <span>{checkAns}</span></p>
                                  
                                 

                              </div>
                            
                              <div className="panel panel-info result-info">
                                      <div className="panel-heading"><h5>YOUR OBTAINING MARKS</h5></div>
                                      { finalres>60 ?
                                        <div className="panel-body"><p><span>PERCENTAGE </span>{finalres}%</p></div>
                                         :

                                        <div className="panel-body" style={{color:'red'}} >
                                        <p><span>Sorry ! You are fail </span></p>
                                        <p><span>PERCENTAGE </span>{finalres}%</p></div>

                                      }
                              </div>

                            
                              
                                

                              </div>
                  </div>
                  
              </div>
     </div>
     
   )


}


checkIskeyCorrect(){
  const {key,getKey} = this.state ;
  if(key===getKey){
    swal('Now Your Quiz Start :) ','Best Of Luck','success') ;
    this.setState({
      isQuizfinal : true 
    })

  }
  else{
    swal("Invalid Key ! Please enter Correct Key",'','warning')
  }
}

starttime(){

}
renderQuizQuestion(){
  const {quizCategory , quizinfo , currentIndex , selectedopt , isShowresult ,userlist , usernumber} = this.state ;
 //  console.log('isShowresult',isShowresult)
  ////  console.log('selectedopt',selectedopt)
  this.starttime()
       return (
         
         <div className="container-fluid">
            <div className="row">
                
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                     <p>time</p>
                        {  
                        quizinfo.questions.map((quiz,index)=>{

                        if(currentIndex===index){
                        return <div className="panel panel-primary quizquestion-main" key={index}>
                        

                        <div className="panel-heading">

                            <p className="quizquestion-title">Quiz Title : <span>{quizCategory}  </span>{quizinfo.name} </p>
                            <p>TIME DURATION : <span>30</span></p>
                        </div>
                        <div className="panel-body quizquestion">

                            <p><span>Q.NO.{index+1}</span>{quiz.question} </p>
                         
                            {
                              quiz.options.map((option,optIndex)=>{
                                return  <div key={optIndex} >
                                <div className="radio" >
                                  <label  ><input type="radio" name="optradio"
                                  onChange={e=>{this.setState({selectedopt:e.target.value} )}}  value={option}
                                  />{option}</label>
                                </div>
                                </div>
                              })

                              
                              
                            }
                            <div>
                            {
                              selectedopt==='' ?
                            <button type="button" className="btn btn-large btn-success"  disabled
                            >{index}NEXT</button>
                            :
                            <button type="button" className="btn btn-large btn-success" 

                            onClick={()=> this.submitAns(index,quiz.correctanswer)
                           }
                            >{index}NEXT</button>
                            }
                            </div>
                           

                        </div>
                
                        
                     
                        

                      </div>
                        }
                        if(currentIndex===quizinfo.questions.length){
                              this.performCalculation()
                              this.setState({
                                isShowresult:true,
                                currentIndex:0 ,
                              })

                            
                        }
                        
                        
                        
                       
                  
                        
                      }
                        )

                        
                        
                        }
                        
                        
                  </div>
                  
                 
                  
                    
              </div>
         </div>
         
       )
}
renderKeyForm(){
  const { quizinfo , quizCategory , getKey } = this.state;

 //  console.log('keyyyyyyyyyy',getKey)
   
  return(
    <div className='container-fluid' >
<div className="row">
                  
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="panel panel-primary quizquestion-main">

                                <div className="panel-heading">

                                      <div className="row">
                                        
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                <p>Quiz Title : <span>{quizCategory}  </span>{quizinfo.name} </p>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                <p className="text-right crossbtn"
                                                onClick={this.backToQuizinfo.bind(this)}
                                                ><span className="glyphicon glyphicon-remove" ></span></p>
                                            </div>
                                    </div>
                                   
                                </div>
                                <div className="panel-body protectingkey">
                                      <label for="">ENTER PROTACTING KEY
                                  <div className="input-group">
                                     
                                      <input type='password' name="getkey" className="form-control" id="exampleInputAmount"  placeholder="ENTER PROTACTING KEY"
                                      onChange={ e=> this.setState({ getKey : e.target.value} )}
                                      />
                                      <span className="input-group-btn">
                                          <button type="button" className="btn btn-success"
                                          
                                          onClick={this.checkIskeyCorrect.bind(this)}
                                          
                                          >Go!</button>
                                      </span>
                                
                                  </div>
                              </label>
                                  
                                 
                                  

                                </div>
                                
                             
                                

                              </div>
                  </div>
                  
                
              </div>
    </div>
  )
}
  renderQuizInfo(){
    const { quizinfo , quizCategory , finalres , user_info, userlist , usernumber} = this.state;
   //  console.log("final quiz ans",finalres)
   
        return(
            <div className='container-fluid'>

           
            <div className="row">
                  
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                      {/* {
                          user_info.quizresult.map((quizcheck,index)=>{
                             if(quizCategory === quizcheck.quizname && quizinfo.name === quizcheck.subquiz){

                           console.log("chala hai");
                            
                              return  <div className="panel panel-primary">
                        
                              <div className="panel-heading">Quiz Title : <span>{quizCategory} </span> {quizinfo.name} </div>
                              <div className="panel-body">
      
                                <h5>{quizinfo.name}</h5>
                                <p>Total Questions: <span>{quizinfo.totalquestion}</span></p>
                                <p>Time Duration: <span>{quizinfo.timeduration}</span>min</p>
                                <p>Total Correct Answer: <span>{quizcheck.correctanswer}</span></p>
                                <p>Obtaining Percentage : <span>{quizcheck.finalres}</span></p>

                                
                                <button type="button" className="btn btn-large btn-success" style={{marginRight:10}}
                                
                                onClick={this.startQuiz.bind(this)}
                                >START</button>
    
                                <button type="button" className="btn btn-large btn-success" 
                                
                                onClick={this.backToQuiz.bind(this)}
                                
                                >BACK</button>
    
                                
                                
      
                              </div>
                              
                               
                              
                                
      
                              </div>
                              
                            }
                           
                          })
                        
                          
                            
                        } */}
                        {/* {  
                           user_info.quizresult.map((quizcheck,index)=>{
                            if(quizCategory!=quizcheck.quizname && quizinfo.name != quizcheck.subquiz){
                              
                              return   <div className="panel panel-primary">
                      
                            <div className="panel-heading">Quiz Title : <span>{quizCategory} </span> {quizinfo.name} </div>
                            <div className="panel-body">
    
                              <h5>{quizinfo.name}</h5>
                              <p>Total Questions: <span>{quizinfo.totalquestion}</span></p>
                              <p>Time Duration: <span>{quizinfo.timeduration}</span>min</p>
                              
                              <button type="button" className="btn btn-large btn-success" style={{marginRight:10}}
                              
                              onClick={this.startQuiz.bind(this)}
                              >START</button>
  
                              <button type="button" className="btn btn-large btn-success" 
                              
                              onClick={this.backToQuiz.bind(this)}
                              
                              >BACK</button>
  
                              
                              
    
                            </div>
                            
                             
                            
                              
    
                            </div>
                           }
                          })
                        } */}

                         {  
                           
                              
                             <div className="panel panel-primary">
                      
                            <div className="panel-heading">Quiz Title : <span>{quizCategory} </span> {quizinfo.name} </div>
                            <div className="panel-body">
    
                              <h5>{quizinfo.name}</h5>
                              <p>Total Questions: <span>{quizinfo.totalquestion}</span></p>
                              <p>Time Duration: <span>{quizinfo.timeduration}</span>min</p>
                              
                              <button type="button" className="btn btn-large btn-success" style={{marginRight:10}}
                              
                              onClick={this.startQuiz.bind(this)}
                              >START</button>
  
                              <button type="button" className="btn btn-large btn-success" 
                              
                              onClick={this.backToQuiz.bind(this)}
                              
                              >BACK</button>
  
                              
                              
    
                            </div>
                            
                             
                            
                              
    
                            </div>
                           
                          
                        }
                        
                           
                      
            </div>
            
        </div>
        </div>
          
        )
  }

  render() {

    const {quizData,isQuizinfo , isQuizStart , isQuizfinal , isShowresult , user_info , userlist , isRetakequiz} = this.state ;
  //  console.log("user info Quizmain",user_info)
  //  console.log("userlist info Quizmain",userlist);
  console.log("isRetakequiz",isRetakequiz);
    return (
    
      <div className="container-fluid">
             
             <div className="row">
                  { !isQuizinfo ?

                  <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                        <div className="panel panel-primary">

                                <div className="panel-heading">QUIZE LIST</div>
                                {
                                  quizData.map((quiz,parentIndex)=>{

                                    return  <div  key={parentIndex} ><div className="panel-body quizlist" data-toggle="collapse" data-target={`#demo${parentIndex}`}  key={parentIndex} ><span key={parentIndex}>{quiz.name}</span></div>
                                               <div id={`demo${parentIndex}`} className="collapse" >
                                               {
                                                 quiz.quizes.map((subquiz,childIndex)=>{
                                                   return <div className="panel-body quizlist"  key={childIndex} 
                                                   onClick={()=> this.showQuizinfo(parentIndex,childIndex)}
                                                   ><span key={childIndex}>{subquiz.name}</span></div>
                                                 })
                                               }
                                             
                                              
                                               </div>
                                            </div>
                                  })
                                }
                                

                              </div>
                  </div>
                  :
                  
                  <div>
                    

                    { !isShowresult ? !isQuizfinal ?  !isQuizStart ?  this.renderQuizInfo() : this.renderKeyForm() : this.renderQuizQuestion() : this.showresult() }
                    
                  

                  </div>
                  }
                  
              </div>
       
          
       
     
      
      
  </div>
  
    
    );
  }
}

export default QUIZMAIN;
