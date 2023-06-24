/* Change border Challenge ////////////////////////////////////////////////////////////// */

let card = document.querySelector('.card-border');
let cardImage = document.querySelector('#card-image');

card.addEventListener('click', function() {
  if (card.style.border === '2px solid red') {
    card.style.border = 'none';
  } else {
    card.style.border = '2px solid red';
  }
});

/* Stickers Challenge ////////////////////////////////////////////////////////////////// */

let checkStickers = document.getElementById("qtyStickers")

function qtyStickers() {
  var sticker1 = document.getElementById("sticker1").value;
  var sticker2 = document.getElementById("sticker2").value;
  var sticker3 = document.getElementById("sticker3").value;
  var total = +sticker1 + +sticker2 + +sticker3;

  if (total <= 10) {
    document.getElementById("resultStickers").textContent = "Yo took: " + total + " Stickers";
  } else {
    document.getElementById("resultStickers").textContent = "You took too many Stickers! Get rid of some!";
  }
}

checkStickers.addEventListener("click", qtyStickers);


/* Select Password Challenge ////////////////////////////////////////////////////////////////// */


let selectButton = document.querySelector('#select-button')

let selectMessage = document.querySelector('#select-message')


selectButton.addEventListener('click', function() {

  let firstSelect = document.querySelector('#select1').value;
  let secondSelect = document.querySelector('#select2').value;
  let thirdSelect = document.querySelector('#select3').value;
  let password = firstSelect + secondSelect + thirdSelect;

  if (password === '911') {
    selectMessage.innerHTML = 'Password 1 Correct!'
  } else if (password === '714') {
    selectMessage.innerHTML = 'Password 2 Correct!'
  } else {
    selectMessage.innerHTML = 'Incorrect Password!'
  }
})
