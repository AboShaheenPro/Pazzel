const questions = [
  { question: "قسم الأسئله الدينه : كم عدد سور القرآن الكريم؟ ", options: ["100", "114", "141", "30"], answer: 1 },
  { question: "ما هي السورة التي تسمى عروس القرآن؟", options: ["الفاتحه", "النور", "يس", "الرحمن"], answer: 3 },
  { question: "كم عدد زوجات النبي ﷺ؟", options: ["9", "10", "11", "4"], answer: 2 },
  { question: "ما هي السورة التي تسمى قلب القرآن؟", options: ["يس", "الفاتحه", "النور", "النساء"], answer: 0 },
  { question: "كم تعادل صلاة في المسجد الأقصى", options: ["100", "1000", "500", "10000"], answer: 2 },
  { question: "كم حزب في القرآن الكريم؟", options: ["114", "30", "60", "142"], answer: 2 },
  { question: "كم سورة ذكر فيها الحمد لله؟", options: ["2", "3", "4", "5"], answer: 3 },
  { question: "ما هو أول مسجد بُني في الإسلام؟", options: ["مسجد قباء", "المسجد الحرام", "المسجد النبوي", "المسجد الأقصى"], answer: 0 },
  { question: "من هي اول من آمنت من النساء؟", options: ["السيدة خديجه", "السيده فاطمه", "السيده زينب", "السيده عائشه"], answer: 0 },
  { question: "قبيلة النبي هي؟", options: ["بني هاشم", "بني تميم", "بني عامر", "بني ثقيف"], answer: 0 },

  { question: "قسم الأسئله الثقافية : من هو مؤسس الدولة العثمانية؟ ", options: ["عثمان بن أرطغرل", "سليمان القانوني", "محمد الفاتح", "بايزيد الأول"], answer: 0 },
  { question: "أي من المحيطات هو الأعمق؟", options: ["الهندي", "الأطلسي", "الهادي", "المحيط المتجمد الجنوبي"], answer: 2 },
  { question: "ما هي اكبر دوله في العالم", options: ["الولايات المتحده الأمريكيه", "سوريا", "روسيا", "الجزائر"], answer: 2 },
  { question: "ما هي أكبر جزيرة في العالم؟", options: ["أستراليا", "جرينلاند", "مدغشقر", "إندونيسيا"], answer: 1 },
  { question: "ما هي العملة المستخدمة في اليابان؟", options: ["اليوان", "البات", "الين", "الروبية"], answer: 2 },
  { question: "ما هي المدينة التي ألقيت عليها أول قنبلة نووية؟", options: ["ناغازاكي", "طوكيو", "أوساكا", "هيروشيما"], answer: 3 },
  { question: "ما هي اللغة الأكثر تحدثًا في العالم كلغة أم؟", options: ["الصينيه", "الأسبانيه", "العربيه", "الأنجليزيه"], answer: 0 },
  { question: "ما هو العنصر الكيميائي الذي رمزه O؟", options: ["الذهب", "ثاني اكسيد الكربون", "الأكسجين", "الزئبق"], answer: 2 },
  { question: "ما هو الحيوان الوطني لدولة أستراليا؟", options: ["الكنغر", "الكوالا", "الإيمو", "الخنزير"], answer: 0 },
  { question: "ما هو اسم كوكب الأرض باللغة الإنجليزية؟", options: ["Earth", "Mars", "Venus", "Jupiter"], answer: 0 },

  { question: "قسم الألغاز : ابن ابوك وليس اخوك", options: ["اختك", "ابن عمك", "ابنك", "انا"], answer: 3 },
  { question: "ما هو الشيء الموجود في كل شيء", options: ["الشيء نفسه", "الهواء", "الخليه", "الأسم"], answer: 3 },
  { question: "", options: ["", "", "", ""], answer: 0 },
  { question: "", options: ["", "", "", ""], answer: 0 },
  { question: "", options: ["", "", "", ""], answer: 0 },
  { question: "", options: ["", "", "", ""], answer: 0 },
  { question: "", options: ["", "", "", ""], answer: 0 },
  { question: "", options: ["", "", "", ""], answer: 0 },
  { question: "", options: ["", "", "", ""], answer: 0 },
  { question: "", options: ["", "", "", ""], answer: 0 },

  { question: "", options: ["", "", "", ""], answer: 0 },
  { question: "", options: ["", "", "", ""], answer: 0 },
  { question: "", options: ["", "", "", ""], answer: 0 },
  { question: "", options: ["", "", "", ""], answer: 0 },
  { question: "", options: ["", "", "", ""], answer: 0 },
  { question: "", options: ["", "", "", ""], answer: 0 },
  { question: "", options: ["", "", "", ""], answer: 0 },
  { question: "", options: ["", "", "", ""], answer: 0 },
  { question: "", options: ["", "", "", ""], answer: 0 },
  { question: "", options: ["", "", "", ""], answer: 0 },

  { question: "", options: ["", "", "", ""], answer: 0 },
  { question: "", options: ["", "", "", ""], answer: 0 },
  { question: "", options: ["", "", "", ""], answer: 0 },
  { question: "", options: ["", "", "", ""], answer: 0 },
  { question: "", options: ["", "", "", ""], answer: 0 },
  { question: "", options: ["", "", "", ""], answer: 0 },
  { question: "", options: ["", "", "", ""], answer: 0 },
  { question: "", options: ["", "", "", ""], answer: 0 },
  { question: "", options: ["", "", "", ""], answer: 0 },
  { question: "", options: ["", "", "", ""], answer: 0 }


];



let currentQuestion = 0;
let score = 0;
let remainingAttempts = 10;

const questionNumberElem = document.getElementById('question-number');
const questionTextElem = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const remainingAttemptsElem = document.getElementById('remaining-attempts');
const scoreElem = document.getElementById('score-count');
const darkModeToggle = document.getElementById('dark-mode-toggle');

if (localStorage.getItem('dark-mode') === 'enabled') {
  document.body.classList.add('dark-mode');
  darkModeToggle.innerHTML = '☀️';
}

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('dark-mode', 'enabled');
      darkModeToggle.innerHTML = '☀️';
  } else {
      localStorage.setItem('dark-mode', 'disabled');
      darkModeToggle.innerHTML = '🌙';
  }
});

function loadQuestion() {
  if (currentQuestion >= questions.length || remainingAttempts <= 0) {
      endGame();
      return;
  }

  const current = questions[currentQuestion];
  questionNumberElem.innerText = `السؤال رقم: ${currentQuestion + 1}`;
  questionTextElem.innerText = current.question;
  optionsContainer.innerHTML = '';

  current.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.innerText = option;
      button.addEventListener('click', () => checkAnswer(index, button));
      optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedIndex, button) {
  const correctIndex = questions[currentQuestion].answer;
  const buttons = optionsContainer.querySelectorAll('button');

  if (selectedIndex === correctIndex) {
      button.classList.add('correct');
      score++;
      scoreElem.innerText = score;
  } else {
      button.classList.add('wrong');
      buttons[correctIndex].classList.add('correct');
      remainingAttempts--;
      remainingAttemptsElem.innerText = remainingAttempts;
  }

  setTimeout(() => {
      currentQuestion++;
      loadQuestion();
  }, 1000);
}

function endGame() {
  questionTextElem.innerText = remainingAttempts > 0 ? 'مبروووووك لقد فزت' : 'لقد خسرت! حاول مرة أخرى.';
  optionsContainer.innerHTML = '';
}

loadQuestion();
