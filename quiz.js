 const submitButton = document.getElementById('submit-answer');
 const feedback = document.getElementById('feedback');

 let correctAnswer = "4";

function checkAnswer(){
 let selectedOption = document.querySelector('input[name="quiz"]:checked');
  if(!selectedOption){
    feedback.textContent = "Please select an option!";
    feedback.style.color ="red";
 }
 let userAnswer = selectedOption.value;
 if(userAnswer === correctAnswer){
   feedback.textContent = "Correct! Well done"; 
   feedback.style.color = "green"
 }else{
    feedback.textContent = "That's incorrect. Try again!";
    feedback.style.color = "red"
 }
}
 submitButton.addEventListener("click", checkAnswer);
 

 