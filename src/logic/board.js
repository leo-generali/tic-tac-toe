function Board(squares) {
  this.squares = squares;
  this.grid = [];
}

Board.prototype.fillBoard = function() {
  for(var i = 0; i < this.squares; i++) {
    this.grid.push( new Tile() );
  }
}

Board.prototype.buildBoard = function(boardClass){
  var that = this;
  var boardElem = document.getElementsByClassName(boardClass)[0];
  for(let i = 0; i < this.squares; i++) {
    var tileElem = document.createElement('div');
    tileElem.className = 'tile';
    tileElem.addEventListener('click', function(){
      console.log(that.grid[i]);
    });
    boardElem.appendChild(tileElem);
  }
  console.log(boardElem);
}

var x = new Board(9);
x.fillBoard();
x.buildBoard("board");