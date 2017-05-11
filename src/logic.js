// (function start( ){
  
var model = {
  squares: 9,
  toWin: 3,
  wins: 0,
  losses: 0
};

function init() {
  console.log(model.squares);
  createBoard();

  function createBoard() {
    var board = document.getElementsByClassName('board')[0];

    for (var i = 0; i < model.squares; i++) {
      var spaceElem = document.createElement('div');
      spaceElem.className = 'square';
      console.log(i);
      board.appendChild(spaceElem); 
    };

  };
}

init();
    
// })(); 