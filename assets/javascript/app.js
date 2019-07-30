const triviaQuestions = [{
    question: "Who sang the title track of the late 80s James Bond film License to Kill?",
    answerList: ["The Rolling Stones", "Huey Lewis and the News", "Gladys Knight", "Pat Benatar"],
    answer: 2
}, {
    question: "Which Duran Duran song opened with a sample of laughter from the keyboardist's girlfriend?",
    answerList: ["Come Undone", "Hungry Like the Wolf", "Girl Panic", "Ordinary World"],
    answer: 1
}, {
    question: "How many singles were released from the Prince album Love Sexy?",
    answerList: ["1", "2", "3", "4"],
    answer: 2
}, {
    question: "Which of these songs by The Police did not chart in the 80s?",
    answerList: ["Walking on the Moon", "Don't Stand So Close to Me", "Wrapped Around your Finger", "De Do Do Do, De Da Da Da"],
    answer: 0
}, {
    question: "Which movie featured the song Power of Love?",
    answerList: ["Beverl Hills Cop", "An Officer and a Gentlemen", "Risky Business", "Back to the Future"],
    answer: 3
}];


const gifArray = ['question1', 'question2', 'question3', 'question4', 'question5'];

let currentQuestion;
let correctAnswer; 
let incorrectAnswer; 
let unanswered; 
let seconds; 
let time; 
let answered; 
let userSelect;

const messages = {

    correct: "Yes, you are an 80s master!",

    incorrect: "No, when were you born?",

    endTime: "Out of time! Now back to the future!",

    finished: "Alright! Let's see how well you did."

}

$("#startBtn").html("Let's Get This Party Started!");
$("#banner").html("<img src='./assets/images/Totally_80s_Banner.png' width='100%' height='200px' alt='totally eighties banner'>");


$('#startBtn').on('click', function () {
    $(this).hide();
    newGame();
});



$('#startOverBtn').on('click', function () {
    $(this).hide();
    newGame();
});



function newGame() {
    $('#finalMessage').empty();
    $('#correctAnswers').empty();
    $('#incorrectAnswers').empty();
    $('#unanswered').empty();
    currentQuestion = 0;
    correctAnswer = 0;
    incorrectAnswer = 0;
    unanswered = 0;

    newQuestion();
}



function newQuestion() {
    $('#message').empty();
    $('#correctedAnswer').empty();
    $('#gif').empty();

    answered = true;


    $('#currentQuestion').html('Question #' + (currentQuestion + 1) + '/' + triviaQuestions.length);
    $('.question').html('<h2>' + triviaQuestions[currentQuestion].question + '</h2>');

    for (var i = 0; i < 4; i++) {
        var choices = $('<div>');
        choices.text(triviaQuestions[currentQuestion].answerList[i]);
        choices.attr({ 'data-index': i });
        choices.addClass('thisChoice');
        $('.answerList').append(choices);

    }

    countdown();

    $('.thisChoice').on('click', function () {
        userSelect = $(this).data('index');
        clearInterval(time);
        answerPage();

    });

}



function countdown() {

    seconds = 15;
    $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
    answered = true;
    time = setInterval(showCountdown, 1000);

}



function showCountdown() {

    seconds--;
    $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
    if (seconds < 1) {
        clearInterval(time);
        answered = false;
        answerPage();

    }

}



function answerPage() {

    $('#currentQuestion').empty();
    $('.thisChoice').empty(); 
    $('.question').empty();


    var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
    var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
    $('#gif').html('<img src = "assets/images/' + gifArray[currentQuestion] + '.jpg" width = "400px">');


    if ((userSelect == rightAnswerIndex) && (answered == true)) {

        correctAnswer++;
        $('#message').html(messages.correct);

    } else if ((userSelect != rightAnswerIndex) && (answered == true)) {

        incorrectAnswer++;
        $('#message').html(messages.incorrect);
        $('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);

    } else {

        unanswered++;
        $('#message').html(messages.endTime);
        $('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
        answered = true;

    }



    if (currentQuestion == (triviaQuestions.length - 1)) {

        setTimeout(scoreboard, 5000)

    } else {

        currentQuestion++;
        setTimeout(newQuestion, 5000);

    }

}



function scoreboard() {

    $('#timeLeft').empty();
    $('#message').empty();
    $('#correctedAnswer').empty();
    $('#gif').empty();


    $('#finalMessage').html(messages.finished);
    $('#correctAnswers').html("Correct Answers: " + correctAnswer);
    $('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
    $('#unanswered').html("Unanswered: " + unanswered);
    $('#startOverBtn').addClass('reset');
    $('#startOverBtn').show();
    $('#startOverBtn').html('Start Over?');

}