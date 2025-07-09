const questions = [
  { question: "قسم الأسئله الدينية: ما هي السورة التي تسمى عروس القرآن؟", "options": ["يس", "الكهف", "الرحمن", "الواقعة"], "answer": 2 },
  { question: "من هو النبي الذي ابتلعه الحوت؟", "options": ["إبراهيم", "يونس", "موسى", "صالح"], "answer": 1 },
  { question: "كم عدد سور القرآن الكريم؟", "options": ["113", "114", "112", "115"], "answer": 1 },
  { question: "ما اسم أم النبي محمد ﷺ؟", "options": ["خديجة", "آمنة", "فاطمة", "حفصة"], "answer": 1 },
  { question: "في أي عام كانت الهجرة النبوية؟", "options": ["624م", "621م", "623م", "622م"], "answer": 3 },
  { question: "ما أول مسجد بُني في الإسلام؟", "options": ["الأقصى", "قباء", "الحرام", "النبوي"], "answer": 1 },
  { question: "ما هي السورة التي لا تبدأ ببسم الله؟", "options": ["التوبة", "الأنعام", "القصص", "النساء"], "answer": 0 },
  { question: "كم كان عمر النبي ﷺ عند وفاته؟", "options": ["60", "63", "65", "61"], "answer": 1 },
  { question: "ما اسم الصحابي الملقب بالصديق؟", "options": ["عمر", "عثمان", "أبو بكر", "علي"], "answer": 2 },
  { question: "أين نزل الوحي لأول مرة؟", "options": ["غار ثور", "غار حراء", "مكة", "المدينة"], "answer": 1 },
  { question: "ما أول آية نزلت؟", "options": ["الحمد لله رب العالمين", "إنا أعطيناك الكوثر", "اقرأ باسم ربك", "قل هو الله أحد"], "answer": 2 },
  { question: "كم عدد زوجات النبي ﷺ؟", "options": ["9", "11", "12", "10"], "answer": 0 },
  { question: "ما هي قبلة المسلمين الأولى؟", "options": ["الكعبة", "بيت المقدس", "المدينة", "الصفا"], "answer": 1 },
  { question: "من هو خاتم الأنبياء؟", "options": ["عيسى", "محمد ﷺ", "موسى", "إبراهيم"], "answer": 1 },
  { question: "ما هي أطول سورة في القرآن؟", "options": ["آل عمران", "البقرة", "النساء", "المائدة"], "answer": 1 },
  { question: "من هو النبي الذي كلمه الله؟", "options": ["إبراهيم", "نوح", "موسى", "يوسف"], "answer": 2 },
  { question: "ما هي عدد الأشهر الحرم؟", "options": ["3", "4", "2", "5"], "answer": 1 },
  { question: "من هو الصحابي الذي لقب بسيف الله؟", "options": ["عمر بن الخطاب", "حمزة بن عبد المطلب", "خالد بن الوليد", "أبو عبيدة"], "answer": 2 },
  { question: "أين كانت معركة بدر؟", "options": ["قرب مكة", "قرب المدينة", "في الطائف", "في اليمامة"], "answer": 1 },
  { question: "ما هو ثاني مسجد في الإسلام بعد قباء؟", "options": ["الأقصى", "المسجد النبوي", "الحرام", "الفتح"], "answer": 1 },

  { question: "قسم الأسئله الثقافية: من هو مؤسس علم الجبر؟", "options": ["ابن سينا", "ابن الهيثم", "الخوارزمي", "الفارابي"], "answer": 2 },
  { question: "ما هي أكبر قارة في العالم؟", "options": ["آسيا", "أفريقيا", "أوروبا", "أمريكا الشمالية"], "answer": 0 },
  { question: "في أي دولة يقع جبل إيفرست؟", "options": ["الهند", "الصين", "نيبال", "باكستان"], "answer": 2 },
  { question: "كم عدد الكواكب في المجموعة الشمسية؟", "options": ["9", "8", "7", "10"], "answer": 1 },
  { question: "من هو صاحب رواية البؤساء؟", "options": ["تولستوي", "فيكتور هوجو", "ديكنز", "دوما"], "answer": 1 },
  { question: "ما هي عملة اليابان؟", "options": ["يوان", "ين", "وون", "دولار"], "answer": 1 },
  { question: "أين يقع برج بيزا المائل؟", "options": ["إسبانيا", "إيطاليا", "فرنسا", "اليونان"], "answer": 1 },
  { question: "ما هي لغة البرازيل الرسمية؟", "options": ["الإسبانية", "البرتغالية", "الفرنسية", "الإنجليزية"], "answer": 1 },
  { question: "من هو مؤسس فيسبوك؟", "options": ["بيل غيتس", "مارك زوكربيرغ", "ستيف جوبز", "لاري بيج"], "answer": 1 },
  { question: "ما هو أسرع حيوان بري؟", "options": ["الأسد", "الغزال", "الفهد", "النمر"], "answer": 2 },

  { question: "قسم الألغاز: شيء كلما أخذت منه كبر؟", "options": ["النار", "العقل", "الحفرة", "العمر"], "answer": 2 },
  { question: "يمشي بلا قدمين ويدخل الأذنين؟", "options": ["الهواء", "الضوء", "الماء", "الصوت"], "answer": 3 },
  { question: "له رأس ولا يرى وله عين ولا يبصر؟", "options": ["الساعة", "المفتاح", "الإبرة", "القفل"], "answer": 2 },
  { question: "ما هو الشيء الذي يكسر دون أن يلمس؟", "options": ["الزجاج", "القلب", "الوعد", "الصمت"], "answer": 2 },
  { question: "ما الشيء الذي يكتب ولا يقرأ؟", "options": ["الكمبيوتر", "الكتاب", "القلم", "الصحيفة"], "answer": 2 },
  { question: "بيت ليس فيه أبواب ولا نوافذ؟", "options": ["بيت العنكبوت", "الكهف", "الخلية", "بيت الشعر"], "answer": 3 },
  { question: "ما الشيء الذي إذا وضعته في الثلاجة لا يبرد؟", "options": ["الملح", "الماء", "الفلفل", "السكر"], "answer": 2 },
  { question: "له أسنان ولا يعض؟", "options": ["المنشار", "المفتاح", "الفرشاة", "المشط"], "answer": 3 },
  { question: "ترى كل شيء وليس لها عيون؟", "options": ["الكاميرا", "النظارة", "الشاشة", "المرآة"], "answer": 3 },
  { question: "له قلب ولا ينبض؟", "options": ["الحجر", "الشجرة", "الخس", "الكتاب"], "answer": 1 },
  { question: "شيء لونه أسود لكن يستخدمه الناس أبيض؟", "options": ["الفحم", "القلم الرصاص", "الحبر", "السبورة"], "answer": 3 },
  { question: "شيء لا يمشي إلا بالضرب؟", "options": ["الدراجة", "الكرة", "الحصان", "المسمار"], "answer": 3 },
  { question: "يقرصك دون أن تراه؟", "options": ["الهواء", "القلق", "البرد", "الجوع"], "answer": 2 },
  { question: "شيء موجود في كل مكان ولا يمكن رؤيته؟", "options": ["الظل", "الحرارة", "الصوت", "الهواء"], "answer": 3 },
  { question: "ما الشيء الذي كلما زاد نقص؟", "options": ["العقل", "العمر", "المال", "الماء"], "answer": 1 },
  { question: "له رقبة بلا رأس؟", "options": ["الشجرة", "المصباح", "القلم", "الزجاجة"], "answer": 3 },
  { question: "يرتدي قبعة ولا يخلعها؟", "options": ["الزهرية", "القلم", "الشجرة", "الزجاجة"], "answer": 1 },
  { question: "يحملك وتحمله؟", "options": ["الحصان", "السيارة", "الدراجة", "الحذاء"], "answer": 3 },
  { question: "شيء إذا أكلته كامل تموت وإذا أكلت نصفه تعيش؟", "options": ["الملح", "العسل", "السمسم (سم)", "السكر"], "answer": 2 },
  { question: "يملك مفاتيح ولا يفتح شيئًا؟", "options": ["الخزانة", "القفل", "الهاتف", "البيانو"], "answer": 3 }
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
const progressBar = document.querySelector('.progress-bar');
const progressText = document.querySelector('.progress-text');
const totalQuestions = 50;

function updateProgress() {
  const progress = Math.min(currentQuestion, totalQuestions);
  const percent = Math.floor((progress / totalQuestions) * 100);
  const dashoffset = 100 - percent;

  progressBar.style.strokeDashoffset = dashoffset;
  progressText.textContent = `${percent}%`;
}

// عدل دالة loadQuestion لتشمل تحديث التقدم:
const originalLoadQuestion = loadQuestion;
loadQuestion = function() {
  originalLoadQuestion();
  updateProgress();
}

updateProgress();
