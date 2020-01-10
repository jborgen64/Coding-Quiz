//build a start button on intial page
    //needs to start timer countdown when clicked
    //needs to display 1st question and answer options when clicked

    //show/hide as buttons are clicked to display next questions

    //start button clicked - display 1st question

    $("#startBtn").click(function StartQuiz() {
        $("#start").hide(1000);
        $("#qaDisplay1").show(1000);
    });

    //first answer option is clicked - display next question

    $("#btnA1").click(function showQ2() {
        $("#qaDisplay1").hide(1000);
        $("#qaDisplay2").show(1000);
    });

    $("#btnB1").click(function showQ2() {
        $("#qaDisplay1").hide(1000);
        $("#qaDisplay2").show(1000);
    });

    $("#btnC1").click(function showQ2() {
        $("#qaDisplay1").hide(1000);
        $("#qaDisplay2").show(1000);
    });

    //second answer option is clicked - display next question

    $("#btnA2").click(function showQ3() {
        $("#qaDisplay2").hide(1000);
        $("#qaDisplay3").show(1000);
    });

    $("#btnB2").click(function showQ3() {
        $("#qaDisplay2").hide(1000);
        $("#qaDisplay3").show(1000);
    });

    $("#btnC2").click(function showQ3() {
        $("#qaDisplay2").hide(1000);
        $("#qaDisplay3").show(1000);
    });

    //third answer option is clicked - display next question


    $("#btnA3").click(function showQ4() {
        $("#qaDisplay3").hide(1000);
        $("#qaDisplay4").show(1000);
    });

    $("#btnB3").click(function showQ4() {
        $("#qaDisplay3").hide(1000);
        $("#qaDisplay4").show(1000);
    });

    $("#btnC3").click(function showQ4() {
        $("#qaDisplay3").hide(1000);
        $("#qaDisplay4").show(1000);
    });

    //fourth answer option is clicked - display next question


    $("#btnA4").click(function showQ5() {
        $("#qaDisplay4").hide(1000);
        $("#qaDisplay5").show(1000);
    });

    $("#btnB4").click(function showQ5() {
        $("#qaDisplay4").hide(1000);
        $("#qaDisplay5").show(1000);
    });

    $("#btnC4").click(function showQ5() {
        $("#qaDisplay4").hide(1000);
        $("#qaDisplay5").show(1000);
    });

    //fifth answer option is clicked - quiz end

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


//array housing questions and answers

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
//Display first question after start button is clicked

    function startAppend() {
    $("#question1").append(questions[0].Question);
    $("#btnA1").append(questions[0].AnswerOne);
    $("#btnB1").append(questions[0].AnswerTwo);
    $("#btnC1").append(questions[0].AnswerThree);
};

$("#startBtn").click(startAppend);

//append 2nd question to appropriate html elements when buttons from Q1 are clicked

function AppendQtwo() {
    $("#question2").append(questions[1].Question);
    $("#btnA2").append(questions[1].AnswerOne);
    $("#btnB2").append(questions[1].AnswerTwo);
    $("#btnC2").append(questions[1].AnswerThree);
};

$("#btnA1").click(AppendQtwo);
$("#btnB1").click(AppendQtwo);
$("#btnC1").click(AppendQtwo);

//append 3rd question to appropriate html elements when buttons from Q2 are clicked

function AppendQthree() {
    $("#question3").append(questions[2].Question);
    $("#btnA3").append(questions[2].AnswerOne);
    $("#btnB3").append(questions[2].AnswerTwo);
    $("#btnC3").append(questions[2].AnswerThree);
};

$("#btnA2").click(AppendQthree);
$("#btnB2").click(AppendQthree);
$("#btnC2").click(AppendQthree);

//append 4th question to appropriate html elements when buttons from Q3 are clicked


function AppendQfour() {
    $("#question4").append(questions[3].Question);
    $("#btnA4").append(questions[3].AnswerOne);
    $("#btnB4").append(questions[3].AnswerTwo);
    $("#btnC4").append(questions[3].AnswerThree);
};

$("#btnA3").click(AppendQfour);
$("#btnB3").click(AppendQfour);
$("#btnC3").click(AppendQfour);

//append 5th question to appropriate html elements when buttons from Q4 are clicked


function AppendQfive() {
    $("#question5").append(questions[4].Question);
    $("#btnA5").append(questions[4].AnswerOne);
    $("#btnB5").append(questions[4].AnswerTwo);
    $("#btnC5").append(questions[4].AnswerThree);
};

$("#btnA4").click(AppendQfive);
$("#btnB4").click(AppendQfive);
$("#btnC4").click(AppendQfive);


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
    
    
