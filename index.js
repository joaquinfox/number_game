  let randomNumber = Math.floor(Math.random()*101);
  let newGameBtn = document.createElement('button');
  let counter = 1;
  
  const userFeedback = document.querySelector('#userFeedback');
  const guessCount = document.querySelector('#guessCount');
  const guessList = document.querySelector('#guessList');
  const userMsg = document.querySelector('#userMsg');
  const form = document.querySelector('form ');
  const userInput = document.querySelector('#userInput');
  userInput.focus();
  const checkGuessBtn = document.querySelector('#checkGuess');
  
  form.addEventListener('submit', evaluateGuess);
  
  function evaluateGuess(e){
    e.preventDefault();
    let guess = Number(userInput.value);
    if(guess === randomNumber && counter < 11){
      userMsg.textContent = 'You got it!';
      userInput.disabled = true;
      checkGuessBtn.disabled = true;
      userMsg.classList.add('onWin');
      reset();
    }
    if(counter < 10 && guess < randomNumber){
      userMsg.textContent = 'low';
    }
    if(counter <10 && guess > randomNumber){
      userMsg.textContent = 'hi';
    }
    if(counter > 10){
      userMsg.textContent = 'You lost';
      userInput.disabled = true;
      checkGuessBtn.disabled = true;
      userMsg.classList.add('onLose');
      reset();
    }
    userInput.value = '';
    userInput.focus();
    counter ++;
    guessCount.textContent = `${counter -1 }`;
    if(guessCount.textContent === '10'){
      guessCount.classList.add('lastCount');
    }
    guessList.textContent += `${guess} `;

  }
  
  function reset(){
    userFeedback.appendChild(newGameBtn);
    newGameBtn.textContent = 'Play again?';
    newGameBtn.addEventListener('click', newGame);
    
  }
  
  function newGame(){
    guessCount.classList.remove('lastCount');
    const feedbackParas = document.querySelectorAll('#userFeedback p');
    randomNumber = Math.floor(Math.random() * 101);
      for(let i = 0; i < feedbackParas.length; i++){
       feedbackParas[i].textContent = '';
      }
    
    userMsg.classList.remove('onLose')
    userMsg.classList.remove('onWin');
    userInput.disabled = false;
    checkGuessBtn.disabled = false;
    userFeedback.removeChild(newGameBtn);
    userInput.value = '';
    userInput.focus();
    counter = 1;
  }
  
  
  
  
      
