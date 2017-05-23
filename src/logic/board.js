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
  console.log(this.turns);
  console.log(this.turns % 2);
  this.turns++;
}

Board.prototype.buildBoard = function(boardClass) {
  var that = this;
  var boardElem = document.getElementsByClassName(boardClass)[0];
  for(let i = 0; i < this.squares; i++) {

    var tileElem = document.createElement('div');
    tileElem.className = 'tile';
    tileElem.addEventListener('click', function(){
      if(that.turns % 2 === 0 ){
        console.log("X");
        that.grid[i].setStatus("X");
      }else{
        console.log("O");
        that.grid[i].setStatus("O");
      }
      that.increaseTurn();
    });
    boardElem.appendChild(tileElem);
  }

}


var x = new Board(9);
x.fillBoard();
x.buildBoard("board");