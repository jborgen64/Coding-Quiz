

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

    //*fifth answer option is clicked - quiz end*

//Timer that counts down from 75 seconds
//*Still need to build wrong question selected function*

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

$("#btnA1").click(function () {
    console.log("correct");
    AppendQtwo();
});
$("#btnB1").click(function () {
    console.log("idiot!");
    AppendQtwo();
});
$("#btnC1").click(function () {
    console.log("idiot!");
    AppendQtwo();
});



//append 3rd question to appropriate html elements when buttons from Q2 are clicked

function AppendQthree() {
    $("#question3").append(questions[2].Question);
    $("#btnA3").append(questions[2].AnswerOne);
    $("#btnB3").append(questions[2].AnswerTwo);
    $("#btnC3").append(questions[2].AnswerThree);
};

$("#btnA2").click(function () {
    console.log("idiot");
    AppendQthree();
});
$("#btnB2").click(function () {
    console.log("idiot!");
    AppendQthree();
});
$("#btnC2").click(function () {
    console.log("correct");
    AppendQthree();
});

//append 4th question to appropriate html elements when buttons from Q3 are clicked


function AppendQfour() {
    $("#question4").append(questions[3].Question);
    $("#btnA4").append(questions[3].AnswerOne);
    $("#btnB4").append(questions[3].AnswerTwo);
    $("#btnC4").append(questions[3].AnswerThree);
};

$("#btnA3").click(function () {
    console.log("correct");
    AppendQfour();
});
$("#btnB3").click(function () {
    console.log("idiot!");
    AppendQfour();
});
$("#btnC3").click(function () {
    console.log("idiot!");
    AppendQfour();
});

//append 5th question to appropriate html elements when buttons from Q4 are clicked


function AppendQfive() {
    $("#question5").append(questions[4].Question);
    $("#btnA5").append(questions[4].AnswerOne);
    $("#btnB5").append(questions[4].AnswerTwo);
    $("#btnC5").append(questions[4].AnswerThree);
};

$("#btnA4").click(function () {
    console.log("idiot");
    AppendQfive();
});
$("#btnB4").click(function () {
    console.log("correct");
    AppendQfive();
});
$("#btnC4").click(function () {
    console.log("idiot!");
    AppendQfive();
});


//still need to:
//high score functionality
//end of quiz display
//track right and wrong answers clicked
//local storage



    
    
