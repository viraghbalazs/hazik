function createTable() {
    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    table.style.margin = "auto";
    
    // Frissítjük a játék állapotát
    updateGameState();
  
    // Létrehozzuk a cellákat
    for (let row = 0; row < 8; row++) {
      const tr = document.createElement("tr");
      for (let col = 0; col < 8; col++) {
        const td = document.createElement("td");
        td.style.width = "50px";
        td.style.height = "50px";
        td.style.border = "1px solid black";
  
         // Megjelenítjük a bábukat
        if (row === gameState.barany.row && col === gameState.barany.col) {
        td.textContent = "B";
        } else {
        const farkas = gameState.farkasok.find(f => f.row === row && f.col === col);
        if (farkas) {
          td.textContent = "F";
        }
        }
  
        // Külön színnel jelöljük a sötét cellákat
        if ((row + col) % 2 === 1) {
          td.style.backgroundColor = "grey";
        }
  
        // Eseménykezelő hozzáadása a cellához
        td.addEventListener("click", onCellClick);
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
  
    // Tábla hozzáadása az oldalhoz
    document.body.appendChild(table);
  }
  

// Játék állapot
const gameState = {
    currentPlayer: "farkas",
    bárány: { row: 0, col: 3 },
    farkasok: [
      { row: 7, col: 0 },
      { row: 7, col: 2 },
      { row: 7, col: 4 },
      { row: 7, col: 6 },
    ],
  };
  
  // Eseménykezelő a kattintásokra
  function handleCellClick(event) {
    const row = parseInt(event.target.dataset.row);
    const col = parseInt(event.target.dataset.col);
    
    // Ellenőrizzük, hogy a mező sötét színű-e
    if ((row + col) % 2 !== 1) {
      return;
    }
    
    // Ellenőrizzük, hogy a kattintás érvényes-e
    if (!isValidMove(row, col)) {
      return;
    }
    
    // Frissítjük a játék állapotát
    updateGameState(row, col);
    
    // Ellenőrizzük, hogy van-e nyertes
    const winner = getWinner();
    if (winner) {
      displayResult(winner);
    }
    
    // Ellenőrizzük, hogy a játék befejeződött-e döntetlen eredménnyel
    const isTie = checkTie();
    if (isTie) {
      displayResult("tie");
    }
    
    // Váltunk a következő játékosra
    toggleCurrentPlayer();
  }
  
  // Ellenőrzi, hogy a játékos lépése érvényes-e
  function isValidMove(row, col) {
    // TODO: 
    return false;
  }
  
  // Frissíti a játék állapotát a játékos lépésének megfelelően
  function updateGameState(row, col) {
    // TODO: 
  }
  
  // Ellenőrzi, hogy van-e nyertes a játékban
  function getWinner() {
    // TODO: 
    return null;
  }
  
  // Megjeleníti az eredményt
  function displayResult(winner) {
    // TODO: 
  }
  
  // Ellenőrzi, hogy a játék befejeződött-e döntetlen eredménnyel
  function checkTie() {
    // TODO: 
    return false;
  }
  
  createTable();

  
  