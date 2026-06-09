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

    nextBtn.classList.add("hidden")
    questionCard.classList.remove("answered")

}

loadQuestion(currentIndex)

answerList.addEventListener("click", (event) => {
  // 1. If the click was not on a BUTTON element, return early and do nothing
  //    hint: check event.target.tagName — it will be the string "BUTTON" if a button was clicked
    if(event.target.tagName === "BUTTON"){
                
        // 2. Store the clicked button and figure out which index it is in the list
        //    hint: convert answerBtnsNodeList to an array and use .indexOf(event.target)
        const btnsArray = [...answerBtnsNodeList];
        let pick = btnsArray.indexOf(event.target);
        
  // 3. Get the correct answer index from the current question in the data array
        corr_ans_indx = questions[currentIndex].correct; 

// 4. Compare: did the player pick the right one?
  //    - If correct: add the "correct" class to the clicked button, increment score,
  //      and update scoreDisplay.textContent
  //    - If wrong: add the "wrong" class to the clicked button,
  //      and add "correct" to the button at the correct index to reveal it
        if(pick === corr_ans_indx){
            event.target.classList.add("correct");
            score++;
            scoreDisplay.textContent = score;
        }else{
            event.target.classList.add("wrong");
            btnsArray[corr_ans_indx].classList.add("correct");
        }

        // 5. Disable all four answer buttons so the player can't change their answer
        //    hint: convert to a real array and use forEach to add "disabled" to each
        for(let i = 0; i<btnsArray.length; i++){
            btnsArray[i].classList.add('disabled');
        }

        // 6. Add "answered" to questionCard and remove "hidden" from nextBtn
        questionCard.classList.add("answered");
        nextBtn.classList.remove("hidden");

    }


})