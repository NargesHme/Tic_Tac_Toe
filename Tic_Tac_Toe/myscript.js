var squares = document.querySelectorAll("td");

var restart = document.querySelector("#b");

function clearBoard(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}


restart.addEventListener('click',clearBoard);

function action(){
  if (this.textContent == 'X') {
    this.textContent = 'O';
  }
  else if (this.textContent == 'O') {
    this.textContent = '';
  }else {
    this.textContent = 'X';
  }
}
console.log('connected!');

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',action);

}
