let currentUser = null;
let examStartTime = null;
let examDuration = 20; // Exam duration in minutes

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Perform authentication (for demonstration, consider hardcoded credentials)
  if (username === username && password === password) {
    currentUser = username;
    startExam();
  } else {
    alert("Invalid username or password");
  }
}

function startExam() {
  document.getElementById("login-section").style.display = "none";
  document.getElementById("exam-section").style.display = "block";
  document.getElementById("logged-in-user").textContent = currentUser;
  examStartTime = new Date();
  displayRemainingTime();
  loadQuestions();
}

function displayRemainingTime() {
  const currentTime = new Date();
  const elapsedMilliseconds = currentTime - examStartTime;
  const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
  const remainingSeconds = examDuration * 60 - elapsedSeconds;
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  document.getElementById("remaining-time").textContent = `${minutes} minutes ${seconds} seconds`;
  if (remainingSeconds > 0) {
    setTimeout(displayRemainingTime, 1000);
  } else {
    submitExam();
  }
}

function loadQuestions() {
  const questionsContainer = document.getElementById("questions");
  // Fetch questions from server (for demonstration, consider hardcoded questions)
  const questions = [
    { id: 1, text: "What is the capital of India?" },
    { id: 2, text: "What is the largest planet in our solar system?" },
    { id: 3, text: "What is the national bird of India?" },
    { id: 4, text: "What is the national animal in India?" },
    { id: 5, text: "What is the capital of Tamilnadu?" }
    // Add more questions here
  ];
  questions.forEach(question => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.innerHTML = `
      <label>${question.text}</label>
      <input type="text" id="answer-${question.id} required">
    `;
    questionsContainer.appendChild(questionDiv);
  });
}

function submitExam() {
  // Calculate score (for demonstration, consider all answers are correct)
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Generate a random number between 0 and 100
  const score= 100

  document.getElementById("exam-section").style.display = "none";
  document.getElementById("result-section").style.display = "block";
  document.getElementById("score").textContent = score;
}


