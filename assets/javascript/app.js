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

const gifArray = ["questionOne", "questionTwo", "questionThree", "questionFour", "questionFive"];
const currentQuestion;
const correctAnswer;
const incorrectAnswer;
const unanswered;
const seconds;
const time;
const answered;
const userSelect;
const messages = {
    correct: "Yes, you are an 80s master!",
    incorrect: "No, you are not a student of the 80s...",
    endTime: "Out of time!",
    finished: "Good job! Here's your score."
}