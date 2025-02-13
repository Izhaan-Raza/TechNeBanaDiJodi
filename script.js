// Questions and answers data
const questions = [
    "fkjh galkfgh sakjlhgfk shgfaa",
    "fkjh galkfgh sakjlhgfk shgfaa",
    "fkjh galkfgh sakjlhgfk shgfaa",
    "fkjh galkfgh sakjlhgfk shgfaa",
    "fkjh galkfgh sakjlhgfk shgfaa",
    "fkjh galkfgh sakjlhgfk shgfaa",
    "fkjh galkfgh sakjlhgfk shgfaa",
    "fkjh galkfgh sakjlhgfk shgfaa",
    "fkjh galkfgh sakjlhgfk shgfaa",
    "fkjh galkfgh sakjlhgfk shgfaa",
    "fkjh galkfgh sakjlhgfk shgfaa",
    "fkjh galkfgh sakjlhgfk shgfaa",
    "fkjh galkfgh sakjlhgfk shgfaa",
    "fkjh galkfgh sakjlhgfk shgfaa",
    
  ];
  
  const answers = ["a", "b", "c", "d", "e"];
  
  // State management
  let currentQuestion = 0;
  
  // DOM Elements
  const quizSection = document.getElementById('quiz-section');
  const resultSection = document.getElementById('result-section');
  const questionElement = document.getElementById('question');
  const answersContainer = document.getElementById('answers');
  const currentQuestionElement = document.getElementById('current-question');
  const progressElement = document.getElementById('progress');
  const heartsContainer = document.getElementById('hearts-container');
  
  // Initialize the quiz
  function initQuiz() {
    showQuestion();
    createFloatingHearts();
  }
  
  // Display current question
  function showQuestion() {
    questionElement.textContent = questions[currentQuestion];
    currentQuestionElement.textContent = currentQuestion + 1;
    progressElement.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
    
    // Clear previous answers
    answersContainer.innerHTML = '';
    
    // Create answer buttons
    answers.forEach(answer => {
      const button = document.createElement('button');
      button.className = 'answer-button';
      button.textContent = answer;
      button.onclick = handleAnswer;
      answersContainer.appendChild(button);
    });
  }
  
  // Handle answer selection
  function handleAnswer() {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      showQuestion();
    } else {
      showResult();
    }
  }
  
  // Show result screen
  function showResult() {
    quizSection.classList.add('hidden');
    resultSection.classList.remove('hidden');
  }
  
  // Reset quiz
  function resetQuiz() {
    currentQuestion = 0;
    quizSection.classList.remove('hidden');
    resultSection.classList.add('hidden');
    showQuestion();
  }
  
  // Create floating hearts animation
  function createFloatingHearts() {
    setInterval(() => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;
      
      const left = Math.random() * 100;
      const animationDuration = 3 + Math.random() * 4;
      
      heart.style.left = `${left}%`;
      heart.style.animationDuration = `${animationDuration}s`;
      
      heartsContainer.appendChild(heart);
      
      // Remove heart after animation
      setTimeout(() => {
        heart.remove();
      }, animationDuration * 1000);
    }, 1000);
  }
  
  // Initialize the quiz when the page loads
  document.addEventListener('DOMContentLoaded', initQuiz);