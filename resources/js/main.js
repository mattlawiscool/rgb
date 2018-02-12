
let colors = generateRandomNumbers()
/* Global Variables */
var squares = document.querySelectorAll('.square'),
    pickedColor = pickColor(),
    colorDisplay= document.getElementById("picked-color"),
    rgbTitle = document.querySelector('.title'),
    menuItems = document.querySelector('.menu'),
    messageDisplay = document.querySelector('#answer'),
    newGame = document.querySelector('#ng'),
    num = 6;


colorDisplay.textContent = pickedColor;


newGame.addEventListener('click', function() {
  colors = [];
  colors = generateRandomNumbers();
  pickedColor = pickColor();
  resetClass();
  generateGame();
})


/* Loop through the squares to assign color */
function generateGame() {
  colors = [];
  colors = generateRandomNumbers();
  pickedColor = pickColor();
  messageDisplay.style.color = "white";
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i< squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    /* Event Listener for square clicks */
    squares[i].addEventListener("click", function() {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        winGame();
      } else {
        this.style.backgroundColor = "black";
        messageDisplay.style.color = "black";;
        messageDisplay.textContent = "Try Again";
      }
  
    
    })
  }
}

function resetClass() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].className = "square"
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length)
  return colors[random]
}

function generateRandomNumbers() {
  const arr = [];
  var num = 6
  for (var i = 0; i < num; i++) {
    arr.push(generateNumber())
  }
  return arr
}

function generateNumber() {
  let red = Math.floor(Math.random() * 256),
      green = Math.floor(Math.random() * 256),
      blue = Math.floor(Math.random() * 256)

      return `rgb(${red}, ${green}, ${blue})`

}

function winGame() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = pickedColor;
    if (window.innerWidth > 600) {
      squares[i].className = "square animated tada"
    } else {
      squares[i].className = "square animated zoomOut"
    }
  }
  
  rgbTitle.style.backgroundColor = pickedColor;
  menuItems.style.color = pickedColor;
  messageDisplay.style.color = "black";
  messageDisplay.textContent = "Play Again?";
  messageDisplay.addEventListener("click", function() {
    resetClass();
    generateGame();
  })
}

generateGame();