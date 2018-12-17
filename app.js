const qwerty = document.getElementById('qwerty');
const ul = document.getElementById('phrase');
const mainDiv = document.querySelector('.main-container');
const letters = document.getElementsByClassName('letter');
let missed = 0;


// Open up Game
mainDiv.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    const button = e.target;
    const div = button.parentNode;
    div.style.display = 'none';
  }
  });


var phrases = ['bread', 'milk', 'orange', 'grapes', 'honey'];

// Get random phrase function

function getRandomPhrase(array) {
    var randomPhrase = array[Math.floor(Math.random() * array.length)];
    var gameWord = randomPhrase.split('');
    return gameWord;
  }

// console.log(getRandomPhrase(phrases));

const phraseArray = getRandomPhrase(phrases);

// Post random phrase to display

function addPhraseToDisplay(array) {
  for (var i = 0; i < array.length; i += 1) {
    let li = document.createElement('li');
    li.textContent = array[i].toUpperCase();
    if(array[i] !== " ") {
     li.className = "letter";
   } else {
     li.className = "space";
   }
    ul.appendChild(li);
}
}

addPhraseToDisplay(phraseArray);

//Check if clicked letter matches

function checkLetter(clicked) {
  const guess = clicked.textContent;
  let correctLetter = null;
  for (let i = 0; i < letters.length; i += 1) {
    if (letters[i].textContent.toUpperCase() === guess) {
      letters[i].classList.add('show');
      correctLetter = letters[i].textContent;
   }
}
return correctLetter;
};


//Add Event Listener to Keyboard to listen for button clicked

qwerty.addEventListener('click', (event) => {
if (event.target.tagName === 'BUTTON') {
  event.target.classList.add('chosen');
  event.target.setAttribute('disabled', true)
  checkLetter(event.target);
}
else {
  return false;
}
});
