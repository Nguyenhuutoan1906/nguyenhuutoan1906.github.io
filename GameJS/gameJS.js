const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
})

function startGame() {
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
 //******HOAN THIEN CAC CAU HOI*********************
const questions = [
  {
    question: 'Trước cách mạng, nước Pháp theo thể chế chính trị nào?',
    answers: [
      { text: 'Quân chủ lập hiến.', correct: false },
      { text: 'Cộng hòa tư sản.', correct: false },
      { text: 'Quân chủ chuyên chế.', correct: true },
      { text: 'Quân chủ lập hiến kết hợp cùng quân chủ chuyên chế.', correct: false }
    ]
  },
  {
    question: 'Đảng Quốc đại là chính đảng của giai cấp, tầng lớp nào?',
    answers: [
      { text: 'Tầng lớp tri thức', correct: false },
      { text: 'Giai cấp nông dân', correct: false },
      { text: 'Giai cấp công nhân', correct: false },
      { text: 'Giai cấp tư sản.', correct: true }
    ]
  },
  {
    question: 'Thực dân Anh hoàn thành việc xâm chiếm Ấn Độ vào thời gian nào?',
    answers: [
      { text: 'Thế kỉ XVI', correct: false },
      { text: 'Đầu thế kỉ XVIII', correct: false },
      { text: 'Cuối thế kỉ XVIII', correct: true },
      { text: 'Năm 1875', correct: false }
    ]
  },
  {
    question: 'Chính sách thống trị của thực dân Anh ở Ấn Độ đã để lại hậu quả gì trong xã hội?',
    answers: [
      { text: 'Bần cùng hóa, mâu thuẫn giữa các tầng lớp.', correct: true },
      { text: 'Cơ sở ruộng đất công xã nông thôn bị phá vỡ.', correct: false },
      { text: 'Nền thủ công nghiệp bị suy sụp.', correct: false },
      { text: 'Nền văn minh lâu đời bị phá hoại.', correct: false }
    ]
  },
  {
    question: 'Ý nghĩa quan trọng nhất của cuộc khởi nghĩa Xi-pay là gì?',
    answers: [
      { text: 'Thể hiện long yêu nước của nhân dân Ấn Độ', correct: false },
      { text: 'Mang tính dân tộc sâu sắc.', correct: false },
      { text: 'Đánh dấu bước ngoặt cho các phong trào cách mạng ở Ấn Độ.', correct: true },
      { text: 'Thúc đẩy giai cấp tư sản đứng dậy chống thực dân Anh.', correct: false }
    ]
  },
  {
    question: 'Mục tiêu cơ bản nhất của Đảng Quốc đại là gì?',
    answers: [
      { text: 'Lãnh đạo nhân dân đấu tranh giải phóng dân tộc.', correct: false },
      { text: 'Thỏa hiệp với giai cấp tư sản Ấn Độ', correct: false },
      { text: 'Dựa vào Anh để Ấn Độ phát triển đấy.', correct: false },
      { text: 'Giành quyền tự chủ phát triển kinh tế.', correct: true }
    ]
  }
]