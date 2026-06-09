const questions = [
  {
    text: "Who invented the World Wide Web?",
    answers: [
      "Tim Berners-Lee",
      "Bill Gates",
      "Linus Torvalds",
      "Ada Lovelace"
    ],
    correct: 0
  },
  {
    text: "What does 'HTTP' stand for?",
    answers: [
      "HyperText Transfer Protocol",
      "High Traffic Transmission Process",
      "Hyperlink Text Tracking Program",
      "Hosted Transfer and Transmission Protocol"
    ],
    correct: 0
  },
  {
    text: "Which company developed the first widely-used web browser, Mosaic?",
    answers: [
      "Microsoft",
      "NCSA (National Center for Supercomputing Applications)",
      "Netscape",
      "IBM"
    ],
    correct: 1
  },
  {
    text: "What year was the first email sent?",
    answers: [
      "1969",
      "1975",
      "1971",
      "1983"
    ],
    correct: 2
  },
  {
    text: "What does 'IP' stand for in 'IP address'?",
    answers: [
      "Internet Provider",
      "Internal Protocol",
      "Internet Protocol",
      "Indexed Path"
    ],
    correct: 2
  }
]

let currentIndex = 0;
let score = 0;

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

const answerBtnsNodeList = document.querySelectorAll(".answer-btn")

gameTitle.textContent = "⚡ Quick Fire Trivia"

console.log("First question:", questionText.textContent);

function loadQuestion(index){
    console.log("test")
    currentQues = questions[index];
    questionNumber.textContent = `Question ${index+1} of ${questions.length}`

    questionText.textContent = currentQues.text;
    const btnsArray = [...answerBtnsNodeList];

    console.log(btnsArray)
    
    for(let i = 0; i<btnsArray.length; i++){
        btnsArray[i].textContent = currentQues.answers[i]
        btnsArray[i].className = 'answer-btn'
    }

    nextBtn.classList.add = "hidden"
    questionCard.classList.remove = "answered"

}

loadQuestion(1)