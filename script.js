// define variables
let wolf = 'left';
let goat = 'left';
let cabbage = 'left';

// event listeners for the move buttons
document.getElementById('move-wolf').addEventListener('click', moveWolf);
document.getElementById('move-goat').addEventListener('click', moveGoat);
document.getElementById('move-cabbage').addEventListener('click', moveCabbage);

// function to move the wolf
function moveWolf() {
  
  // check if the wolf and the farmer are on the same side of the river
  if (wolf === goat) {
    alert('You cannot leave the goat alone with the cabbage!');
  } else {
    // move the wolf to the other side of the river
    if (wolf === 'left') {
      document.getElementById('wolf').remove();
      document.querySelector('.side2').insertAdjacentHTML('beforeend', '<div class="item" id="wolf">Wolf</div>');
    } else {
      wolf = 'right';
      document.getElementById('wolf').remove();
      document.querySelector('.side').insertAdjacentHTML('beforeend', '<div class="item" id="wolf">Wolf</div>');
    }
    checkWinCondition();
    if (isGameOver()) {
      return;
    }
  }

}

// function to move the goat
function moveGoat() {
  if (goat === 'left') {
   let goat = 'right';
    document.getElementById('goat').remove();
    document.querySelector('.side2').insertAdjacentHTML('beforeend', '<div class="item" id="goat">Goat</div>');
  } else {
    goat = 'left';
    document.getElementById('goat').remove();
    document.querySelector('.side').insertAdjacentHTML('beforeend', '<div class="item" id="goat">Goat</div>');
  // check if the goat and the wolf are on the same side of the river
  if (goat === wolf) {
    alert('You cannot leave the goat alone with the wolf!');
  // check if the goat and the cabbage are on the same side of the river
  } else if (goat === cabbage) {
    alert('You cannot leave the goat alone with the cabbage!');
  } else {
    // move the goat to the other side of the river
    
    }
    checkWinCondition();
    // check if the game is already over
  if (isGameOver()) {
    return;
  }
  }

}

// function to move the cabbage
function moveCabbage() {
 
  // check if the cabbage and the goat are on the same side of the river
  if (cabbage === goat) {
    alert('You cannot leave the cabbage alone with the goat!');
  // check if the cabbage and the wolf are on the same side of the river
  } else {
    // move the cabbage to the other side of the river
    if (cabbage === 'left') {
     let cabbage = 'right';
      document.getElementById('cabbage').remove();
      document.querySelector('.side2').insertAdjacentHTML('beforeend', '<div class="item" id="cabbage">Cabbage</div>');
    } else {
      cabbage = 'left';
      document.getElementById('cabbage').remove();
      document.querySelector('.side').insertAdjacentHTML('beforeend', '<div class="item" id="cabbage">Cabbage</div>');
    }
    checkWinCondition();
  }
}
//

