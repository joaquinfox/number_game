  let randomNumber = Math.floor(Math.random()*101);
  let newGameBtn = document.createElement('button');
  let counter = 1;
  
  const userFeedback = document.querySelector('#userFeedback');
  const guessCount = document.querySelector('#guessCount');
  const guessList = document.querySelector('#guessList');
  const userMsg = document.querySelector('#userMsg');
  const form = document.querySelector('form ');
  const userInput = document.querySelector('#userInput');
  
  form.addEventListener('submit', evaluateGuess);
  
  function evaluateGuess(e){
    e.preventDefault();
    let guess = Number(userInput.value);
    if(guess === randomNumber && counter < 11){
      userMsg.textContent = 'You got it!';
      userInput.disabled = true;
      userMsg.classList.add('onWin');
      userFeedback.after(newGameBtn);
      newGameBtn.textContent = 'Play again?';
      newGameBtn.addEventListener('click', newGame);

      
    }
    if(counter < 10 && guess < randomNumber){
      userMsg.textContent = 'Too low';
    }
    if(counter <10 && guess > randomNumber){
      userMsg.textContent = 'Too hi!';
    }
    
    if(counter > 10){
      userMsg.textContent = 'You lost this one.';
      userInput.disabled = true;
      userMsg.classList.add('onLose');
      userFeedback.appendChild(newGameBtn);
      newGameBtn.textContent = 'New Game?';
      newGameBtn.addEventListener('click', newGame);
    }
    console.log(guess, randomNumber);
    userInput.value = '';
    userInput.focus();
    counter ++;
  }
  
  function newGame(){
    randomNumber = Math.floor(Math.random() * 101);
    userMsg.textContent = '';
    userMsg.classList.remove('onLose')
    userMsg.classList.remove('onWin');
    userInput.disabled = false;
    userFeedback.removeChild(newGameBtn);
    userInput.value = '';
  }
  
  
  
  
      
