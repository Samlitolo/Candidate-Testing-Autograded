const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName= "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
question = ("Who was the first American woman in space? "); 
let correctAnswer;
correctAnswer = ("Sally Ride");
let candidateAnswer= "";


//TODO: Variables for Part 2
let questions;
let correctAnswers;
let candidateAnswers;
questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
candidateAnswers = [];



function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("what is your name?");
  
  
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  console.log(question);
  input.question(candidateAnswer+ correctAnswer);
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const candidateAnswer = input.question(`Question ${i + 1}: ${question}`);
    candidateAnswers.push(candidateAnswer);
  }
  
  console.log(candidateAnswers);
  
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  if (candidateAnswer === correctAnswer) {
    console.log("Congratulations" + candidateName + "your Answer is Correct😊");
  } else{
    console.log("I am sorry" + candidateName + "your answer is wrong😔");
  }


  let grade;  //TODO 3.2 use this variable to calculate the candidates score.
   grade = 0;

  for (let i = 0; i < candidateAnswers.length; i++) {
   
    if (candidateAnswers[i] === correctAnswers[i]) {
      grade++;
    }
  }

  console.log(`CorrectAnswers: ${grade}`);


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Welcome " + candidateName + " I have a question for you");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};