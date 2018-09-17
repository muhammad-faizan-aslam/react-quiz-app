
   const  QuizData = [{
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



export default QuizData;
