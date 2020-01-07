//Grabbing all elements in my HTML
var start = document.getElementById("startBtn");
var quizCtnr = document.getElementById("quiz-container");
var choiceA = document.getElementById("choice-A");
var choiceB = document.getElementById("choice-B");
var choiceC = document.getElementById("choice-C");

//Array holding all of the question info
var questions = [
    {
        question : "What does CSS stand for?",
        optionA : "Computer Science Stuff",
        optionB : "Cascading Style Sheets",
        optionC : "Cranky Silly Steve",
        correct : "B"
    },
    {
        question : "Where do you link your bootstrap CDN?",
        optionA : "In the Body",
        optionB : "In CSS",
        optionC : "In the Head",
        correct : "C"
    }
    {
        question : "Is Javascript a front-end or back-end language?",
        optionA : "front-end",
        optionB : "back-end",
        optionC: "both",
        correct : "C"
    }
]
//Begin quiz on start button click
function initialize() {
    start.style.display = "none";
}
