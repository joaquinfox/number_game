  let randomNumber = Math.floor(Math.random()*101);
  let newGameBtn = document.createElement('button');
  let counter = 1;
  
  const userFeedback = document.querySelector('#userFeedback');
  const guessCount = document.querySelector('#guessCount');
  const guessList = document.querySelector('#guessList');
  const userMsg = document.querySelector('#userMsg');
  const form = document.querySelector('form ');
  const userInput = document.querySelector('#userInput');
  const checkGuessBtn = document.querySelector('#checkGuess');
  
  form.addEventListener('submit', evaluateGuess);
  
  function evaluateGuess(e){
    e.preventDefault();
    let guess = Number(userInput.value);
        console.log(randomNumber,guess, counter, guess === randomNumber)

    if(guess === randomNumber && counter < 11){
      console.log('test log')
      userMsg.textContent = 'You got it!';
      userInput.disabled = true;
      checkGuessBtn.disabled = true;
      userMsg.classList.add('onWin');
      reset();
    }
    if(counter < 10 && guess < randomNumber){
      userMsg.textContent = 'Too low';
    }
    if(counter <10 && guess > randomNumber){
      userMsg.textContent = 'Too hi!';
    }
    if(counter > 10){
      userMsg.textContent = 'You lost';
      userInput.disabled = true;
      checkGuessBtn.disabled = true;
      userMsg.classList.add('onLose');
      newGame();
      // userFeedback.appendChild(newGameBtn);
      // newGameBtn.textContent = 'New Game?';
      // newGameBtn.addEventListener('click', newGame);
    }
    userInput.value = '';
    userInput.focus();
    counter ++;
    guessCount.textContent = `Guesses: ${counter - 1}`;
    guessList.textContent += `${guess}, `;

  }
  
  function reset(){
    userFeedback.appendChild(newGameBtn);
    newGameBtn.textContent = 'Play again?';
    newGameBtn.addEventListener('click', newGame);
  }
  
  function newGame(){
    const feedbackParas = document.querySelectorAll('#userFeedback p');
    randomNumber = Math.floor(Math.random() * 101);
      for(let i = 0; i < feedbackParas.length; i++){
       feedbackParas[i].textContent = '';
      }
    
    userMsg.classList.remove('onLose')
    userMsg.classList.remove('onWin');
    userInput.disabled = false;
    checkGuessBtn.disabled = true;
    userFeedback.removeChild(newGameBtn);
    userInput.value = '';
    counter = 1;
  }
  
  
  
  
      
