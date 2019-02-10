let playerSelection;
    let computerSelection;
    let playerScore = 0;
    let computerScore = 0;
    
    let rockButton = document.getElementById("Rock");
    rockButton.addEventListener('click', function() { playRound("Rock"); });
    let paperButton = document.getElementById("Paper");
    paperButton.addEventListener('click', function() { playRound("Paper"); });
    let scissorsButton = document.getElementById("Scissors");
    scissorsButton.addEventListener('click', function() { playRound("Scissors"); });

    // Below is a redundant playerPlay function from version with only console.log feedback
    /* function playerPlay() {
      option = prompt('Type below your choice of:\nRock\nPaper\nScissors');
      return option;
    } */
    
    function computerPlay() {
      let optionsArray = ['Rock', 'Paper', 'Scissors'];
      let randomOption = optionsArray[Math.floor( Math.random() * optionsArray.length )];
      return randomOption;
    }

    function playRound(buttonClicked) {
      //plays round and increments relevant Score variable if there is a winner
      computerSelection = computerPlay();
      playerSelection = buttonClicked;
      console.log(playerSelection, computerSelection);
      
      let result;
      // switch captures result of round and increments players'/computers' score if there's a winner
      switch (playerSelection + computerSelection) {
        case 'RockRock': 
          result = 'It\'s a draw! Computer chose Rock too!';
          break;
        case 'RockPaper':
          result = 'You lose! Rock loses to Paper.';
          ++computerScore;
          break;
        case 'RockScissors':
          result = 'You win! Rock beats Scissors.';
          ++playerScore;
          break;
        case 'PaperRock':
          result = 'You win! Paper beats Rock.';
          ++playerScore;
          break;
        case 'PaperPaper':
          result = 'It\'s a draw! Computer chose Paper too!';
          break;
        case 'PaperScissors':
          result = 'You lose! Paper loses to Scissors';
          ++computerScore;
          break;
        case 'ScissorsRock':
          result = 'You lose! Scissors lose to Rock.';
          ++computerScore;
          break;
        case 'ScissorsPaper':
          result = 'You win! Scissors beat Paper.';
          ++playerScore;
          break;
        case 'ScissorsScissors':
          result = 'It\'s a draw! Computer chose Scissors too!';
          break;
      }

      document.getElementById("resultDisplay").innerHTML = result;
      document.getElementById("runningScore").innerHTML = 
          'The score is:<br><br>You: ' + playerScore + '<br>' + '\nComputer: ' + computerScore;
      
      if (playerScore === 5) {
        document.getElementById("winnerAnnounce").innerHTML = 
            "<h3>You are the first to reach 5 points! You win the game! Congratulations!</h3><br> Click the <b>Reset</b> button below to start a new game.";
        
        addResetBtn();
        let resetBtn = document.getElementById("resetBtn");
        resetBtn.addEventListener('click', removeResults);

      } else if (computerScore === 5) {
          document.getElementById("winnerAnnounce").innerHTML = 
              "<h3>The computer is the first to reach 5 points! Sorry, you lost the game.</h3><br> Click the <b>Reset</b> button below to start a new game.";
         
          addResetBtn();
          let resetBtn = document.getElementById("resetBtn");
          resetBtn.addEventListener('click', removeResults);
      }
      
      //return result;
    }

    function removeResults() {
      document.getElementById("resultDisplay").innerHTML = "";
      document.getElementById("runningScore").innerHTML = "";
      document.getElementById("winnerAnnounce").innerHTML = "";
      playerScore = 0;
      computerScore = 0;
      resetBtn.parentNode.removeChild(resetBtn);
    }
    

    function addResetBtn() {
      let btn = document.createElement("button");
      let btnTxt = document.createTextNode("Reset");
      btn.appendChild(btnTxt);
      let att = document.createAttribute("id");
      att.value = "resetBtn";
      btn.setAttributeNode(att);
      document.getElementById("container").appendChild(btn);
    }
    // below is a redundant function named 'game' from an earlier stage version of this program which used console.log and prompt windows to work.
    /* function game() {
      //Round 1:
      console.log ( playRound() );
      console.log ('The score after Round 1 is:\nYou: ' + playerScore + '\nComputer: ' + computerScore);
      
      //Round 2:
      console.log ( playRound() );
      console.log ('The score after Round 2 is:\nYou: ' + playerScore + '\nComputer: ' + computerScore);
      
      //Round 3:
      console.log ( playRound() );
      console.log ('The score after Round 3 is:\nYou: ' + playerScore + '\nComputer: ' + computerScore);

      //Round 4:
      console.log ( playRound() );
      console.log ('The score after Round 4 is:\nYou: ' + playerScore + '\nComputer: ' + computerScore);

      //Round 5:
      console.log ( playRound() );
      console.log ('The final score after 5 rounds is:\nYou: ' + playerScore + '\nComputer: ' + computerScore);
      
      if (playerScore > computerScore) {
        console.log('You won the game! Congratulations!');
      } else if (computerScore > playerScore) {
        console.log('You lost the game :( Better luck next time!');
      } else {
        console.log('The game is drawn! What are the odds!');
      }

    } */


    //console.log( game() );