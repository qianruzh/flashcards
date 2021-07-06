//Q&A 1
let question1 = {
	question : "What's your name?",
	answer: "My name is Cara.",
};

//Q&A 2
let question2 = {
	question : "Where do you come from?",
	answer: "I come from China.",
};

//Q&A 3
let question3 = {
	question : "How old are you?",
	answer: "I'm 18.",
};

//Creating an Array to store Q&As
let myFlashcards = [question1, question2, question3];

//global value for retriving data
var Question = {};
var Answer = {};

//a function to retrive Q&A that can be used by different onclick
function flashcards(counter){
	if (counter < myFlashcards.length){
	Question = myFlashcards[counter].question;
	Answer = myFlashcards[counter].answer;
	}
}

var counter = 0;
//Click and display Q&A at once
function CardClicked(event) {
	flashcards(counter);
    document.getElementById("flashcard").innerHTML = Question;
    document.getElementById("answer").innerHTML = Answer;
	counter ++;
}
 
 //Cick to display Q
var counter1=0;
function CardClicked1(event) {
	if(counter1<myFlashcards.length){
	flashcards(counter1);
    document.getElementById("question1").innerHTML = Question;
    document.getElementById("answer1").innerHTML = "";
	counter1 ++;
}
}

//Click Q to display A
function QuestionClicked1(event) {
	flashcards(counter1);
	document.getElementById("answer1").innerHTML = Answer;
}

//Cick to display Q
var counter2=0;
function CardClicked2(event) {
	if(counter2<myFlashcards.length){
	flashcards(counter2);
	document.getElementById("title").innerHTML = "";
    document.getElementById("question2").innerHTML = Question;
    
	counter2 ++;
}
}

//Hover on Q to display A
function mOver(event) {
  flashcards(counter2);
  document.getElementById("answer2").innerHTML = Answer;
}

function mOut(event) {
  document.getElementById("answer2").innerHTML = "";
}

//Cick to display Q
var counter3=0;
function CardClicked3(event) {
	if(counter3<myFlashcards.length){
	flashcards(counter3);
	document.getElementById("title2").innerHTML = "";
    document.getElementById("question3").innerHTML = Question;
    
	counter3 ++;
}
}

//Hover on Q to display A
function mOver2(event) {
  flashcards(counter3);
  document.getElementById("answer3").innerHTML = Answer;
  var img = document.createElement('img');
  img.setAttribute('src','Image/img1.png');
  document.getElementById('img').appendChild(img);
}

function mOut2(event) {
  document.getElementById("answer3").innerHTML = "";
  document.getElementById('img').innerHTML = "";
}


	