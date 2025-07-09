*{
  font-family: "Tajawal", sans-serif;
}
body {
  font-family: 'comic Sans MS', sans-serif;
  background-image: url(098.jpg);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  overflow: hidden;
  transition: background-color 0.3s ease-in-out, background 0.3s ease-in-out;
}

body.dark-mode {
  background-image: url(098.jpg);
}

.container {
  text-align: center;
  background: rgba(255, 255, 255, 0.13); /* لون شفاف */
  backdrop-filter: blur(8px);           /* ضبابية الخلفية */
  border: 1px solid rgba(255, 255, 255, 0.212); 
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  width: 500px;
  transition: background-color 0.3s, color 0.3s;
}

.title {
  font-size: 28px;
  color: black;
  margin-bottom: 20px;
  transition: color 0.3s;
}

.quiz-box {
  padding: 20px;
}

#question-number,
#question-text,
#attempts,
#score {
  margin: 15px 0;
  font-size: 24px;
  font-weight: bold;
  transition: color 0.3s;
}

#options-container button {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 12px;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.171); /* لون شفاف */
  backdrop-filter: blur(8px);           /* ضبابية الخلفية */
  border: 1px solid rgba(255, 255, 255, 0.212); 
  color: black;
  transition: transform 0.3s, background-color 0.3s, color 0.3s;
}

#options-container button:hover {
    background: rgba(0, 132, 255, 0.589); /* لون شفاف */
    backdrop-filter: blur(8px);           /* ضبابية الخلفية */
    border: 1px solid rgba(255, 255, 255, 0.212);  
    color: white;
  transform: scale(1.05);
   box-shadow: 5 5 5 rgb(255, 255, 255);
}

.correct {
  background-color: #4CAF50 !important;
  color: white;
  animation: correctFlash 0.5s;
}

@keyframes correctFlash {
  0%, 100% {
      background-color: #4CAF50;
  }
  50% {
      background-color: #66ff66;
  }
}

.wrong {
  background-color: #f44336 !important;
  color: white;
  animation: shake 0.5s;
}

@keyframes shake {
  0%, 100% {
      transform: translateX(0);
  }
  25%, 75% {
      transform: translateX(-10px);
  }
  50% {
      transform: translateX(10px);
  }
}

.dark-mode-toggle {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: #ffffff34;
  backdrop-filter: blur(8px);
  box-shadow: 0 5px 15px rgb(0, 0, 0);
  cursor: pointer;
  font-size: 24px;
  transition: transform 0.3s, background-color 0.3s;
}

.dark-mode-toggle:hover {
  transform: scale(1.1);
}

body.dark-mode .container {
  background: rgba(0, 0, 0, 0.479);
  color: rgb(255, 255, 255);
}

body.dark-mode .title {
  color: white;
}

body.dark-mode #options-container button {
  background: rgba(134, 134, 134, 0.171); /* لون شفاف */
  backdrop-filter: blur(8px);           /* ضبابية الخلفية */
  color: white;
}

body.dark-mode #options-container button:hover {
  background-color: #161616;
  color: white;
}
#progress-container {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 50%;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  z-index: 1000;
}

.progress-bg {
  stroke: #fff;
  stroke-opacity: 0.3;
}

.progress-bar {
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: center;
  stroke-dashoffset: 100;
  stroke-dasharray: 100;
  transition: stroke-dashoffset 0.5s ease;
}

.progress-text {
  dominant-baseline: middle;
  font-weight: bold;
  font-size: 16px;
  fill: #ffffff;
  user-select: none;
}
