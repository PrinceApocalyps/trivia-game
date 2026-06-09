const gameTitle = document.getElementById("game-title")
const scoreDisplay = document.getElementById("score")
// select #question-number  → store in questionNumber
const questionNumber = document.getElementById("question-number")
// select #question-text    → store in questionText
const questionText = document.getElementById("question-next")
// select #question-card    → store in questionCard
const questionCard = document.getElementById("question-card")
// select #answer-list      → store in answerList
const answerList = document.getElementById("answer-list")
// select #next-btn         → store in nextBtn
const nextBtn = document.getElementById("next-btn")
// select #end-screen       → store in endScreen
const endScreen = document.getElementById("end-screen")


const answerBtnsCollection = document.getElementsByClassName("answer-btn")
// select ".answer-btn" using querySelectorAll → store in answerBtnsNodeList
const answerBtnsNodeList = document.querySelectorAll("answer-btn")
const btnsArray = [...answerBtnsNodeList];

// getElementsByClassName returns an array of all the elements with the class name.
// querySelectorAll returns a node of all the decendants.
// To use .map() on either, convert with spread operator or Array.form().

