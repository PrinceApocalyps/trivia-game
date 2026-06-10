const questions = [
  {
    text: "Who is the Knicks' all-time leading scorer?",
    answers: [
      "Patrick Ewing",
      "Walt Frazier",
      "Carmelo Anthony",
      "Bernard King"
    ],
    correct: 0
  },
  {
    text: "What does 'MSG' stand for, the Knicks' home arena?",
    answers: [
      "Manhattan Sports Garden",
      "Madison Square Garden",
      "Metro Sports Ground",
      "Midtown Stadium and Garden"
    ],
    correct: 1
  },
  {
    text: "Which team did the Knicks defeat to win their second NBA Championship in 1973?",
    answers: [
      "Boston Celtics",
      "Milwaukee Bucks",
      "Los Angeles Lakers",
      "Chicago Bulls"
    ],
    correct: 2
  },
  {
    text: "What year were the New York Knicks founded?",
    answers: [
      "1952",
      "1965",
      "1946",
      "1950"
    ],
    correct: 2
  },
  {
    text: "What does 'NBA' stand for in 'NBA Draft'?",
    answers: [
      "National Basketball Association",
      "National Ballers Alliance",
      "New Basketball Association",
      "National Basketball Academy"
    ],
    correct: 0
  }
]

let currentIndex = 0;
let score = 0;
let counter = 1;
let usedIndex = [0];

const game = document.getElementById("game")
const startBtn = document.getElementById("start")
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
game.style.display = "none";
startBtn.textContent = "Let's See if You Know Your Knicks!!"

function getRandomIndex(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}
function loadQuestion(index){
    console.log("test")
    currentQues = questions[index];
    questionNumber.textContent = `Question ${counter} of ${questions.length}`

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

function showEndScreen() {
  // 1. Hide the question card
    console.log("test")
    questionCard.style.display = "none";
    nextBtn.classList.add("hidden")


  // 2. Show the end screen (it started with class="hidden" — remove that now)
    endScreen.classList.remove("hidden");

  // 3. Create an <h2> and set its textContent to show the final score
  //    e.g. "You scored 3 out of 5"
  //    hint: use the score and questions.length variables
    const heading = document.createElement("h2");
    heading.textContent = `You Scored ${score} out of ${questions.length}`;

  // 4. Create a <p> for an encouragement message
  //    Write a conditional with at least two different messages
  //    (e.g. one for a perfect score, one for passing, one for failing)
    const message = document.createElement("p");
    if (score === questions.length){
        message.textContent = "You Got em All!!";
    }else if(score >= questions.length/2){
        message.textContent = "You Did Great!!"
    }else{
        message.textContent = "You Can Do Better!!"
    }
  // 5. Create a <button>, set its id to "restart-btn" and its textContent to "Play Again"
    const restartBtn = document.createElement("button");
    restartBtn.id = "restart-btn";
    restartBtn.textContent = "Play Again";
  // 6. Append all three elements to endScreen
  //    note: createElement builds the node in memory — appendChild is what puts it on the page
    endScreen.appendChild(heading);
    endScreen.appendChild(message);
    endScreen.appendChild(restartBtn);
}


nextBtn.addEventListener("click", () => {
  console.log(usedIndex.length)
  console.log(questions.length)
  if (usedIndex.length >= questions.length) {
    console.log("test")
    showEndScreen();
    return;
  }

  while (true) {
    let x = getRandomIndex(1,4);
    console.log("rands: ")
    console.log(x);
    console.log("end")
    if (!usedIndex.includes(x)) {
      currentIndex = x;
      usedIndex.push(x);
      break;
    }
  }

  counter++
  loadQuestion(currentIndex);
});

endScreen.addEventListener("click", (event)=>{
    if(event.target.id==="restart-btn"){
        currentIndex = 0;
        score = 0;
        usedIndex = [0]
        scoreDisplay.textContent = score;

        endScreen.innerHTML = "";
        endScreen.classList.add("hidden")
        questionCard.style.display = "flex"
        loadQuestion(currentIndex)
    }

})

startBtn.addEventListener("click", ()=>{
  game.style.display = ""
  startBtn.style.display = "none"
})
