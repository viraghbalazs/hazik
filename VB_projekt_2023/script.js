var board = document.getElementById('board');
var squares = [];

// az "initBoard" függvény hozza létre a sakktáblát és a bábukat
function initBoard() {
  const board = document.getElementById('board');

  // létrehozzuk a 8x8-as sakktáblát
  for (let i = 0; i < 8; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < 8; j++) {
      const square = document.createElement('div');
      square.classList.add('square');
      // beállítjuk a mező színét (fehér vagy fekete)
      if ((i + j) % 2 === 0) {
        square.classList.add('white');
      } else {
        square.classList.add('black');
      }

      row.appendChild(square);
    }

    board.appendChild(row);
  }
}

// hívjuk meg az "initBoard" függvényt a sakktábla létrehozásához
initBoard();

// bábuk hozzáadása függvény
function addPiece(type, row, col, color) {
    var piece = document.createElement('div');
    piece.classList.add('piece');
    piece.classList.add(type);
    piece.dataset.row = row;
    piece.dataset.col = col;
    piece.dataset.color = color;
    piece.draggable = true;
    piece.addEventListener('dragstart', dragStart);
    board.appendChild(piece);
    movePiece(piece, row, col);
  }
  function movePiece(piece, row, col) {
    var square = getSquare(row, col);
    var x = square.offsetLeft;
    var y = square.offsetTop;
    piece.style.left = x + 'px';
    piece.style.top = y + 'px';
  }
  
  function getSquare(row, col) {
    return squares.find(function(square) {
      return square.dataset.row == row && square.dataset.col == col;
    });
  }
  
  var selectedPiece = null;
  var dragStartRow = null;
  var dragStartCol = null;
  
  function dragStart(event) {
    selectedPiece = event.target;
    dragStartRow = parseInt(selectedPiece.dataset.row);
    dragStartCol = parseInt(selectedPiece.dataset.col);
  }
  
  board.addEventListener('dragover', dragOver);
  board.addEventListener('drop', drop);
  
  function dragOver(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    var row = parseInt(event.target.dataset.row);
    var col = parseInt(event.target.dataset.col);
    if (isNaN(row) || isNaN(col)) {
      return;
    }
    if (selectedPiece.dataset.row == row && selectedPiece.dataset.col == col) {
      return;
    }
    if (!isValidMove(selectedPiece, row, col)) {
      return;
    }
    movePiece(selectedPiece, row, col);
  }
  
  function isValidMove(piece, row, col) {
    var type = piece.classList[1];
    var color = piece.dataset.color;
    if (type == 'pawn') {
      if (color == 'white') {
        if (row == dragStartRow - 1 && col == dragStartCol) {
          return true;
        }
      } else {
        if (row == dragStartRow + 1 && col == dragStartCol) {
          return true;
        }
      }
    } else if (type == 'knight') {
      // TODO
    } else if (type == 'bishop') {
      // TODO
    } else if (type == 'rook') {
      // TODO
    } else if (type == 'queen') {
      // TODO
    } else if (type == 'king') {
      // TODO
    }
    return false;
  }
// sakk bábuk hozzáadása
addPiece('pawn', 1, 0, 'white');
addPiece('pawn', 6, 0, 'black');
addPiece('knight', 0, 1, 'white');
addPiece('knight', 7, 1, 'black');
addPiece('bishop', 0, 2, 'white');
addPiece('bishop', 7, 2, 'black');
addPiece('rook', 0, 7, 'white');
addPiece('rook', 7, 7, 'black');
addPiece('queen', 0, 3, 'white');
addPiece('queen', 7, 3, 'black');
addPiece('king', 0, 4, 'white');
addPiece('king', 7, 4, 'black');


