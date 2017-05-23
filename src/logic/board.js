function Board(squares) {
  this.squares = squares;
  this.grid = [];
  this.turns = 0;
}

Board.prototype.fillBoard = function() {
  for(var i = 0; i < this.squares; i++) {
    this.grid.push( new Tile() );
  }
}

Board.prototype.increaseTurn = function() {
  this.turns++;
}

Board.prototype.buildBoard = function(boardClass) {
  var that = this;
  var boardElem = document.getElementsByClassName(boardClass)[0];
  for(let i = 0; i < this.squares; i++) {

    var tileElem = document.createElement('div');
    tileElem.className = 'tile';

    //Place tile depending on turn order
    tileElem.addEventListener('click', function(){
      var grid = that.grid[i];
      if(that.turns % 2 === 0 ){
        grid.setStatus("X");
      }else{
        grid.setStatus("O");
      }
      console.log(grid);
      that.increaseTurn();
    });

    boardElem.appendChild(tileElem);
  }
}


var x = new Board(9);
x.fillBoard();
x.buildBoard("board");