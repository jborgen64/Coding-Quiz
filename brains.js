//Element Grabbin'
var timer = document.getElementById("timer");
var question = document.getElementById("question");
var buttonA = document.getElementById("btnA");
var buttonB = document.getElementById("btnB");
var buttonC = document.getElementById("btnC");

//build a start button on intial page
    //needs to start timer countdown when clicked
    //needs to display 1st question and answer options when clicked

    $("#startBtn").click(function StartQuiz() {
        $("#start").hide(1000);
        $("#qaDisplay1").show(1000);
    });


//build timer
    //needs to be displayed at 0 on start page
    //needs to countdown from 75sec when start is pushed
    //needs to lose 15sec when wrong answer pushed
    //when time hits 0 quiz ends

var counter = 0;
var countDown = 75;
function timeTick() {
    counter++;
    console.log("timeout!", counter);

    $("#timer").html(countDown - counter);

    }

var globalTimer;
function timeStart() {
    console.log('Time has started')
    globalTimer = setInterval(timeTick, 1000);
}

$("#startBtn").click(timeStart);

//need to display questions
    //have empty divs and display through JS?
    //in an array?
    //show-hide with HTML/CSS?
    //need to store info in an array and when answer is clicked the next question displays
    //new plan - no for loop - html emelent for each question
    //append each object in to the array to its respective html


var questions = [
    {
        Question : "Here is question 1",
        AnswerOne : "Option 1",
        AnswerTwo : "Option 2",
        AnswerThree : "Option 3"
    },
    {
        Question : "Here is question 2",
        AnswerOne : "Option 1",
        AnswerTwo : "Option 2",
        AnswerThree : "Option 3"
    },
    {
        Question : "Here is question 3",
        AnswerOne : "Option 1",
        AnswerTwo : "Option 2",
        AnswerThree : "Option 3"
    },
    {
        Question : "Here is question 4",
        AnswerOne : "Option 1",
        AnswerTwo : "Option 2",
        AnswerThree : "Option 3"
    },
    {
        Question : "Here is question 5",
        AnswerOne : "Option 1",
        AnswerTwo : "Option 2",
        AnswerThree : "Option 3"
    }
];

    function startAppend() {
    $("#question").append(questions[0].Question);
    $("#btnA1").append(questions[0].AnswerOne);
    $("#btnB1").append(questions[0].AnswerTwo);
    $("#btnC1").append(questions[0].AnswerThree);
};

$("#startBtn").click(startAppend);


//display answer options
    //three answers per question
    //same questions on how to display as questions?
    //in same array as questions?
    //when clicked need to display next question/answers
    //if wrong answer is clicked decrease time by 15sec

//high score display
    //display locally stored high scores with start button
    //need prompt at end to add initials if score is a high score

//variables to track
    //timer

//functions
    //startClicked()
        //start timer
        //display 1st question/answer

    //rightClicked()
        //display next question

    //wrongClicked()
        //decrease timer by 15sec
        //display next question
    
    
