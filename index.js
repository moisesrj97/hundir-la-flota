let grid = [
  { element: document.querySelector('#col1row1'), ship: false, col: 1, row: 1 },
  { element: document.querySelector('#col1row2'), ship: false, col: 1, row: 2 },
  { element: document.querySelector('#col1row3'), ship: false, col: 1, row: 3 },
  { element: document.querySelector('#col1row4'), ship: false, col: 1, row: 4 },
  { element: document.querySelector('#col1row5'), ship: false, col: 1, row: 5 },
  { element: document.querySelector('#col1row6'), ship: false, col: 1, row: 6 },
  { element: document.querySelector('#col1row7'), ship: false, col: 1, row: 7 },
  { element: document.querySelector('#col1row8'), ship: false, col: 1, row: 8 },
  { element: document.querySelector('#col1row9'), ship: false, col: 1, row: 9 },
  { element: document.querySelector('#col1row10'), ship: false, col: 1, row: 10 },
  { element: document.querySelector('#col2row1'), ship: false, col: 2, row: 1 },
  { element: document.querySelector('#col2row2'), ship: false, col: 2, row: 2 },
  { element: document.querySelector('#col2row3'), ship: false, col: 2, row: 3 },
  { element: document.querySelector('#col2row4'), ship: false, col: 2, row: 4 },
  { element: document.querySelector('#col2row5'), ship: false, col: 2, row: 5 },
  { element: document.querySelector('#col2row6'), ship: false, col: 2, row: 6 },
  { element: document.querySelector('#col2row7'), ship: false, col: 2, row: 7 },
  { element: document.querySelector('#col2row8'), ship: false, col: 2, row: 8 },
  { element: document.querySelector('#col2row9'), ship: false, col: 2, row: 9 },
  { element: document.querySelector('#col2row10'), ship: false, col: 2, row: 10 },
  { element: document.querySelector('#col3row1'), ship: false, col: 3, row: 1 },
  { element: document.querySelector('#col3row2'), ship: false, col: 3, row: 2 },
  { element: document.querySelector('#col3row3'), ship: false, col: 3, row: 3 },
  { element: document.querySelector('#col3row4'), ship: false, col: 3, row: 4 },
  { element: document.querySelector('#col3row5'), ship: false, col: 3, row: 5 },
  { element: document.querySelector('#col3row6'), ship: false, col: 3, row: 6 },
  { element: document.querySelector('#col3row7'), ship: false, col: 3, row: 7 },
  { element: document.querySelector('#col3row8'), ship: false, col: 3, row: 8 },
  { element: document.querySelector('#col3row9'), ship: false, col: 3, row: 9 },
  { element: document.querySelector('#col3row10'), ship: false, col: 3, row: 10 },
  { element: document.querySelector('#col4row1'), ship: false, col: 4, row: 1 },
  { element: document.querySelector('#col4row2'), ship: false, col: 4, row: 2 },
  { element: document.querySelector('#col4row3'), ship: false, col: 4, row: 3 },
  { element: document.querySelector('#col4row4'), ship: false, col: 4, row: 4 },
  { element: document.querySelector('#col4row5'), ship: false, col: 4, row: 5 },
  { element: document.querySelector('#col4row6'), ship: false, col: 4, row: 6 },
  { element: document.querySelector('#col4row7'), ship: false, col: 4, row: 7 },
  { element: document.querySelector('#col4row8'), ship: false, col: 4, row: 8 },
  { element: document.querySelector('#col4row9'), ship: false, col: 4, row: 9 },
  { element: document.querySelector('#col4row10'), ship: false, col: 4, row: 10 },
  { element: document.querySelector('#col5row1'), ship: false, col: 5, row: 1 },
  { element: document.querySelector('#col5row2'), ship: false, col: 5, row: 2 },
  { element: document.querySelector('#col5row3'), ship: false, col: 5, row: 3 },
  { element: document.querySelector('#col5row4'), ship: false, col: 5, row: 4 },
  { element: document.querySelector('#col5row5'), ship: false, col: 5, row: 5 },
  { element: document.querySelector('#col5row6'), ship: false, col: 5, row: 6 },
  { element: document.querySelector('#col5row7'), ship: false, col: 5, row: 7 },
  { element: document.querySelector('#col5row8'), ship: false, col: 5, row: 8 },
  { element: document.querySelector('#col5row9'), ship: false, col: 5, row: 9 },
  { element: document.querySelector('#col5row10'), ship: false, col: 5, row: 10 },
  { element: document.querySelector('#col6row1'), ship: false, col: 6, row: 1 },
  { element: document.querySelector('#col6row2'), ship: false, col: 6, row: 2 },
  { element: document.querySelector('#col6row3'), ship: false, col: 6, row: 3 },
  { element: document.querySelector('#col6row4'), ship: false, col: 6, row: 4 },
  { element: document.querySelector('#col6row5'), ship: false, col: 6, row: 5 },
  { element: document.querySelector('#col6row6'), ship: false, col: 6, row: 6 },
  { element: document.querySelector('#col6row7'), ship: false, col: 6, row: 7 },
  { element: document.querySelector('#col6row8'), ship: false, col: 6, row: 8 },
  { element: document.querySelector('#col6row9'), ship: false, col: 6, row: 9 },
  { element: document.querySelector('#col6row10'), ship: false, col: 6, row: 10 },
  { element: document.querySelector('#col7row1'), ship: false, col: 7, row: 1 },
  { element: document.querySelector('#col7row2'), ship: false, col: 7, row: 2 },
  { element: document.querySelector('#col7row3'), ship: false, col: 7, row: 3 },
  { element: document.querySelector('#col7row4'), ship: false, col: 7, row: 4 },
  { element: document.querySelector('#col7row5'), ship: false, col: 7, row: 5 },
  { element: document.querySelector('#col7row6'), ship: false, col: 7, row: 6 },
  { element: document.querySelector('#col7row7'), ship: false, col: 7, row: 7 },
  { element: document.querySelector('#col7row8'), ship: false, col: 7, row: 8 },
  { element: document.querySelector('#col7row9'), ship: false, col: 7, row: 9 },
  { element: document.querySelector('#col7row10'), ship: false, col: 7, row: 10 },
  { element: document.querySelector('#col8row1'), ship: false, col: 8, row: 1 },
  { element: document.querySelector('#col8row2'), ship: false, col: 8, row: 2 },
  { element: document.querySelector('#col8row3'), ship: false, col: 8, row: 3 },
  { element: document.querySelector('#col8row4'), ship: false, col: 8, row: 4 },
  { element: document.querySelector('#col8row5'), ship: false, col: 8, row: 5 },
  { element: document.querySelector('#col8row6'), ship: false, col: 8, row: 6 },
  { element: document.querySelector('#col8row7'), ship: false, col: 8, row: 7 },
  { element: document.querySelector('#col8row8'), ship: false, col: 8, row: 8 },
  { element: document.querySelector('#col8row9'), ship: false, col: 8, row: 9 },
  { element: document.querySelector('#col8row10'), ship: false, col: 8, row: 10 },
  { element: document.querySelector('#col9row1'), ship: false, col: 9, row: 1 },
  { element: document.querySelector('#col9row2'), ship: false, col: 9, row: 2 },
  { element: document.querySelector('#col9row3'), ship: false, col: 9, row: 3 },
  { element: document.querySelector('#col9row4'), ship: false, col: 9, row: 4 },
  { element: document.querySelector('#col9row5'), ship: false, col: 9, row: 5 },
  { element: document.querySelector('#col9row6'), ship: false, col: 9, row: 6 },
  { element: document.querySelector('#col9row7'), ship: false, col: 9, row: 7 },
  { element: document.querySelector('#col9row8'), ship: false, col: 9, row: 8 },
  { element: document.querySelector('#col9row9'), ship: false, col: 9, row: 9 },
  { element: document.querySelector('#col9row10'), ship: false, col: 9, row: 10 },
  { element: document.querySelector('#col10row1'), ship: false, col: 10, row: 1 },
  { element: document.querySelector('#col10row2'), ship: false, col: 10, row: 2 },
  { element: document.querySelector('#col10row3'), ship: false, col: 10, row: 3 },
  { element: document.querySelector('#col10row4'), ship: false, col: 10, row: 4 },
  { element: document.querySelector('#col10row5'), ship: false, col: 10, row: 5 },
  { element: document.querySelector('#col10row6'), ship: false, col: 10, row: 6 },
  { element: document.querySelector('#col10row7'), ship: false, col: 10, row: 7 },
  { element: document.querySelector('#col10row8'), ship: false, col: 10, row: 8 },
  { element: document.querySelector('#col10row9'), ship: false, col: 10, row: 9 },
  { element: document.querySelector('#col10row10'), ship: false, col: 10, row: 10 },
];

let gridP1 = [
  { element: document.querySelector('#col1row1p1'), ship: false, col: 1, row: 1 },
  { element: document.querySelector('#col1row2p1'), ship: false, col: 1, row: 2 },
  { element: document.querySelector('#col1row3p1'), ship: false, col: 1, row: 3 },
  { element: document.querySelector('#col1row4p1'), ship: false, col: 1, row: 4 },
  { element: document.querySelector('#col1row5p1'), ship: false, col: 1, row: 5 },
  { element: document.querySelector('#col1row6p1'), ship: false, col: 1, row: 6 },
  { element: document.querySelector('#col1row7p1'), ship: false, col: 1, row: 7 },
  { element: document.querySelector('#col1row8p1'), ship: false, col: 1, row: 8 },
  { element: document.querySelector('#col1row9p1'), ship: false, col: 1, row: 9 },
  { element: document.querySelector('#col1row10p1'), ship: false, col: 1, row: 10 },
  { element: document.querySelector('#col2row1p1'), ship: false, col: 2, row: 1 },
  { element: document.querySelector('#col2row2p1'), ship: false, col: 2, row: 2 },
  { element: document.querySelector('#col2row3p1'), ship: false, col: 2, row: 3 },
  { element: document.querySelector('#col2row4p1'), ship: false, col: 2, row: 4 },
  { element: document.querySelector('#col2row5p1'), ship: false, col: 2, row: 5 },
  { element: document.querySelector('#col2row6p1'), ship: false, col: 2, row: 6 },
  { element: document.querySelector('#col2row7p1'), ship: false, col: 2, row: 7 },
  { element: document.querySelector('#col2row8p1'), ship: false, col: 2, row: 8 },
  { element: document.querySelector('#col2row9p1'), ship: false, col: 2, row: 9 },
  { element: document.querySelector('#col2row10p1'), ship: false, col: 2, row: 10 },
  { element: document.querySelector('#col3row1p1'), ship: false, col: 3, row: 1 },
  { element: document.querySelector('#col3row2p1'), ship: false, col: 3, row: 2 },
  { element: document.querySelector('#col3row3p1'), ship: false, col: 3, row: 3 },
  { element: document.querySelector('#col3row4p1'), ship: false, col: 3, row: 4 },
  { element: document.querySelector('#col3row5p1'), ship: false, col: 3, row: 5 },
  { element: document.querySelector('#col3row6p1'), ship: false, col: 3, row: 6 },
  { element: document.querySelector('#col3row7p1'), ship: false, col: 3, row: 7 },
  { element: document.querySelector('#col3row8p1'), ship: false, col: 3, row: 8 },
  { element: document.querySelector('#col3row9p1'), ship: false, col: 3, row: 9 },
  { element: document.querySelector('#col3row10p1'), ship: false, col: 3, row: 10 },
  { element: document.querySelector('#col4row1p1'), ship: false, col: 4, row: 1 },
  { element: document.querySelector('#col4row2p1'), ship: false, col: 4, row: 2 },
  { element: document.querySelector('#col4row3p1'), ship: false, col: 4, row: 3 },
  { element: document.querySelector('#col4row4p1'), ship: false, col: 4, row: 4 },
  { element: document.querySelector('#col4row5p1'), ship: false, col: 4, row: 5 },
  { element: document.querySelector('#col4row6p1'), ship: false, col: 4, row: 6 },
  { element: document.querySelector('#col4row7p1'), ship: false, col: 4, row: 7 },
  { element: document.querySelector('#col4row8p1'), ship: false, col: 4, row: 8 },
  { element: document.querySelector('#col4row9p1'), ship: false, col: 4, row: 9 },
  { element: document.querySelector('#col4row10p1'), ship: false, col: 4, row: 10 },
  { element: document.querySelector('#col5row1p1'), ship: false, col: 5, row: 1 },
  { element: document.querySelector('#col5row2p1'), ship: false, col: 5, row: 2 },
  { element: document.querySelector('#col5row3p1'), ship: false, col: 5, row: 3 },
  { element: document.querySelector('#col5row4p1'), ship: false, col: 5, row: 4 },
  { element: document.querySelector('#col5row5p1'), ship: false, col: 5, row: 5 },
  { element: document.querySelector('#col5row6p1'), ship: false, col: 5, row: 6 },
  { element: document.querySelector('#col5row7p1'), ship: false, col: 5, row: 7 },
  { element: document.querySelector('#col5row8p1'), ship: false, col: 5, row: 8 },
  { element: document.querySelector('#col5row9p1'), ship: false, col: 5, row: 9 },
  { element: document.querySelector('#col5row10p1'), ship: false, col: 5, row: 10 },
  { element: document.querySelector('#col6row1p1'), ship: false, col: 6, row: 1 },
  { element: document.querySelector('#col6row2p1'), ship: false, col: 6, row: 2 },
  { element: document.querySelector('#col6row3p1'), ship: false, col: 6, row: 3 },
  { element: document.querySelector('#col6row4p1'), ship: false, col: 6, row: 4 },
  { element: document.querySelector('#col6row5p1'), ship: false, col: 6, row: 5 },
  { element: document.querySelector('#col6row6p1'), ship: false, col: 6, row: 6 },
  { element: document.querySelector('#col6row7p1'), ship: false, col: 6, row: 7 },
  { element: document.querySelector('#col6row8p1'), ship: false, col: 6, row: 8 },
  { element: document.querySelector('#col6row9p1'), ship: false, col: 6, row: 9 },
  { element: document.querySelector('#col6row10p1'), ship: false, col: 6, row: 10 },
  { element: document.querySelector('#col7row1p1'), ship: false, col: 7, row: 1 },
  { element: document.querySelector('#col7row2p1'), ship: false, col: 7, row: 2 },
  { element: document.querySelector('#col7row3p1'), ship: false, col: 7, row: 3 },
  { element: document.querySelector('#col7row4p1'), ship: false, col: 7, row: 4 },
  { element: document.querySelector('#col7row5p1'), ship: false, col: 7, row: 5 },
  { element: document.querySelector('#col7row6p1'), ship: false, col: 7, row: 6 },
  { element: document.querySelector('#col7row7p1'), ship: false, col: 7, row: 7 },
  { element: document.querySelector('#col7row8p1'), ship: false, col: 7, row: 8 },
  { element: document.querySelector('#col7row9p1'), ship: false, col: 7, row: 9 },
  { element: document.querySelector('#col7row10p1'), ship: false, col: 7, row: 10 },
  { element: document.querySelector('#col8row1p1'), ship: false, col: 8, row: 1 },
  { element: document.querySelector('#col8row2p1'), ship: false, col: 8, row: 2 },
  { element: document.querySelector('#col8row3p1'), ship: false, col: 8, row: 3 },
  { element: document.querySelector('#col8row4p1'), ship: false, col: 8, row: 4 },
  { element: document.querySelector('#col8row5p1'), ship: false, col: 8, row: 5 },
  { element: document.querySelector('#col8row6p1'), ship: false, col: 8, row: 6 },
  { element: document.querySelector('#col8row7p1'), ship: false, col: 8, row: 7 },
  { element: document.querySelector('#col8row8p1'), ship: false, col: 8, row: 8 },
  { element: document.querySelector('#col8row9p1'), ship: false, col: 8, row: 9 },
  { element: document.querySelector('#col8row10p1'), ship: false, col: 8, row: 10 },
  { element: document.querySelector('#col9row1p1'), ship: false, col: 9, row: 1 },
  { element: document.querySelector('#col9row2p1'), ship: false, col: 9, row: 2 },
  { element: document.querySelector('#col9row3p1'), ship: false, col: 9, row: 3 },
  { element: document.querySelector('#col9row4p1'), ship: false, col: 9, row: 4 },
  { element: document.querySelector('#col9row5p1'), ship: false, col: 9, row: 5 },
  { element: document.querySelector('#col9row6p1'), ship: false, col: 9, row: 6 },
  { element: document.querySelector('#col9row7p1'), ship: false, col: 9, row: 7 },
  { element: document.querySelector('#col9row8p1'), ship: false, col: 9, row: 8 },
  { element: document.querySelector('#col9row9p1'), ship: false, col: 9, row: 9 },
  { element: document.querySelector('#col9row10p1'), ship: false, col: 9, row: 10 },
  { element: document.querySelector('#col10row1p1'), ship: false, col: 10, row: 1 },
  { element: document.querySelector('#col10row2p1'), ship: false, col: 10, row: 2 },
  { element: document.querySelector('#col10row3p1'), ship: false, col: 10, row: 3 },
  { element: document.querySelector('#col10row4p1'), ship: false, col: 10, row: 4 },
  { element: document.querySelector('#col10row5p1'), ship: false, col: 10, row: 5 },
  { element: document.querySelector('#col10row6p1'), ship: false, col: 10, row: 6 },
  { element: document.querySelector('#col10row7p1'), ship: false, col: 10, row: 7 },
  { element: document.querySelector('#col10row8p1'), ship: false, col: 10, row: 8 },
  { element: document.querySelector('#col10row9p1'), ship: false, col: 10, row: 9 },
  { element: document.querySelector('#col10row10p1'), ship: false, col: 10, row: 10 },
];

let findBox = (player, col, row) => {
  let gridSelected;
  if (player == 'p1') {
    gridSelected = gridP1;
  } else if (player == 'cpu') {
    gridSelected = grid;
  }
  return gridSelected.find((e) => {
    if (e.col == col && e.row == row) {
      return true;
    }
  });
};

let getRandomBox = () => {
  return Math.floor(Math.random() * 100);
};

let getRandomOrientation = () => {
  return Math.floor(Math.random() * 2 + 1);
};

let paintGrid = () => {
  for (casilla of grid) {
    if (casilla.ship) {
      casilla.element.classList.toggle('red');
    }
  }
};

//Tengo que generar 4 barcos de 1 casilla, 3 barcos de 2 casillas,
//2 barcos de 3 casillas y uno de 4 casillas, horizontal o vertical,
//que no se toquen

let genShips = () => {
  for (casilla of grid) {
    casilla.element.classList.remove('red');
    casilla.ship = false;
  }
  let genOneShip = (length) => {
    let orientation = getRandomOrientation();

    //1: vertical 2: horizontal
    let randomBox = getRandomBox();

    //Casilla inicial a comprobar
    let startingBox = grid[randomBox];

    //Casillas importantes
    let c0r1 = findBox('cpu', startingBox.col, startingBox.row + 1);
    let c0r2 = findBox('cpu', startingBox.col, startingBox.row + 2);
    let c0r3 = findBox('cpu', startingBox.col, startingBox.row + 3);
    let c0r_1 = findBox('cpu', startingBox.col, startingBox.row - 1);
    let c0r_2 = findBox('cpu', startingBox.col, startingBox.row - 2);
    let c0r_3 = findBox('cpu', startingBox.col, startingBox.row - 3);
    let c1r0 = findBox('cpu', startingBox.col + 1, startingBox.row);
    let c2r0 = findBox('cpu', startingBox.col + 2, startingBox.row);
    let c3r0 = findBox('cpu', startingBox.col + 3, startingBox.row);
    let c_1r0 = findBox('cpu', startingBox.col - 1, startingBox.row);
    let c_2r0 = findBox('cpu', startingBox.col - 2, startingBox.row);
    let c_3r0 = findBox('cpu', startingBox.col - 3, startingBox.row);
    let c1r1 = findBox('cpu', startingBox.col + 1, startingBox.row + 1);
    let c_1r1 = findBox('cpu', startingBox.col - 1, startingBox.row + 1);
    let c1r_1 = findBox('cpu', startingBox.col + 1, startingBox.row - 1);
    let c_1r_1 = findBox('cpu', startingBox.col - 1, startingBox.row - 1);
    let c1r2 = findBox('cpu', startingBox.col + 1, startingBox.row + 2);
    let c1r3 = findBox('cpu', startingBox.col + 1, startingBox.row + 3);
    let c_1r2 = findBox('cpu', startingBox.col - 1, startingBox.row + 2);
    let c_1r3 = findBox('cpu', startingBox.col - 1, startingBox.row + 3);
    let c2r1 = findBox('cpu', startingBox.col + 2, startingBox.row + 1);
    let c3r1 = findBox('cpu', startingBox.col + 3, startingBox.row + 1);
    let c2r_1 = findBox('cpu', startingBox.col + 2, startingBox.row - 1);
    let c3r_1 = findBox('cpu', startingBox.col + 3, startingBox.row - 1);
    let c1r_2 = findBox('cpu', startingBox.col + 1, startingBox.row - 2);
    let c1r_3 = findBox('cpu', startingBox.col + 1, startingBox.row - 3);
    let c_1r_2 = findBox('cpu', startingBox.col - 1, startingBox.row - 2);
    let c_1r_3 = findBox('cpu', startingBox.col - 1, startingBox.row - 3);
    let c_2r_1 = findBox('cpu', startingBox.col - 2, startingBox.row - 1);
    let c_3r_1 = findBox('cpu', startingBox.col - 3, startingBox.row - 1);
    let c_2r1 = findBox('cpu', startingBox.col - 2, startingBox.row + 1);
    let c_3r1 = findBox('cpu', startingBox.col - 3, startingBox.row + 1);

    let toCheckIfVertical3v1 = [c_1r3, c_1r2, c_1r1, c_1r0, c_1r_1, c0r3, c1r3, c1r2, c1r1, c1r0, c1r_1, c0r_1];
    let vertical3v1 = [startingBox, c0r1, c0r2];

    let toCheckIfVertical3v2 = [c_1r2, c0r2, c1r2, c_1r1, c_1r0, c_1r_1, c_1r_2, c0r_2, c1r_2, c1r1, c1r0, c1r_1];
    let vertical3v2 = [startingBox, c0r1, c0r_1];

    let toCheckIfVertical3v3 = [c_1r1, c_1r0, c_1r_1, c_1r_2, c_1r_3, c0r1, c1r1, c1r0, c1r_1, c1r_2, c1r_3, c0r_3];
    let vertical3v3 = [startingBox, c0r_1, c0r_2];

    let toCheckIfHorizontal3v1 = [c_1r1, c0r1, c1r1, c2r1, c3r1, c_1r0, c_1r_1, c0r_1, c1r_1, c2r_1, c3r_1, c3r0];
    let horizontal3v1 = [startingBox, c1r0, c2r0];

    let toCheckIfHorizontal3v2 = [c_2r1, c_1r1, c0r1, c1r1, c2r1, c_2r_1, c_1r_1, c0r_1, c1r_1, c2r_1, c2r0, c_2r0];
    let horizontal3v2 = [startingBox, c1r0, c_1r0];

    let toCheckIfHorizontal3v3 = [c1r1, c1r0, c1r_1, c_3r1, c_3r0, c_3r_1, c_2r_1, c_1r_1, c0r_1, c_2r1, c_1r1, c0r1];
    let horizontal3v3 = [startingBox, c_1r0, c_2r0];

    let toCheckIfVertical2v1 = [c_1r_1, c0r_1, c1r_1, c_1r2, c0r2, c1r2, c1r1, c1r0, c_1r1, c_1r0];
    let vertical2v1 = [startingBox, c0r1];
    let toCheckIfVertical2v2 = [c_1r1, c0r1, c1r1, c_1r0, c_1r_1, c_1r_2, c1r0, c1r_1, c1r_2, c0r_2];
    let vertical2v2 = [startingBox, c0r_1];

    let toCheckIfHorizontal2v1 = [c_1r1, c0r1, c1r1, c2r1, c_1r_1, c0r_1, c1r_1, c2r_1, c2r0, c_1r0];
    let horizontal2v1 = [startingBox, c1r0];
    let toCheckIfHorizontal2v2 = [c1r1, c1r0, c1r_1, c_2r1, c_1r1, c0r1, c_2r0, c_2r_1, c_1r_1, c0r_1];
    let horizontal2v2 = [startingBox, c_1r0];

    let toCheckIf1 = [c_1r1, c_1r0, c_1r_1, c1r1, c1r0, c1r_1, c0r_1, c0r1];

    if (length == 4) {
      console.log(startingBox);
      if (orientation == 1) {
        startingBox.ship = true;

        if (c0r3) {
          console.log(c0r1, c0r2, c0r3);
          c0r1.ship = true;
          c0r2.ship = true;
          c0r3.ship = true;
        } else {
          console.log(c0r_1, c0r_2, c0r_3);
          c0r_1.ship = true;
          c0r_2.ship = true;
          c0r_3.ship = true;
        }
      } else {
        startingBox.ship = true;

        if (c3r0) {
          console.log(c1r0, c2r0, c3r0);
          c1r0.ship = true;
          c2r0.ship = true;
          c3r0.ship = true;
        } else {
          console.log(c_1r0, c_2r0, c_3r0);
          c_1r0.ship = true;
          c_2r0.ship = true;
          c_3r0.ship = true;
        }
      }
    } else if (length == 3) {
      if ((orientation = 1)) {
        console.log('Barco Vertical de 3');
        let v1 = 0;
        let v2 = 0;
        let v3 = 0;

        for (casilla of toCheckIfVertical3v1) {
          if (casilla && casilla.ship == false) {
            v1++;
          }
        }

        for (casilla of toCheckIfVertical3v2) {
          if (casilla && casilla.ship == false) {
            v2++;
          }
        }

        for (casilla of toCheckIfVertical3v3) {
          if (casilla && casilla.ship == false) {
            v3++;
          }
        }

        console.log(v1, v2, v3);

        if (startingBox.ship == false && v1 == 12) {
          console.log('v1 vertical ship');

          for (casilla of vertical3v1) {
            casilla.ship = true;
            console.log(casilla.element);
          }
        } else if (startingBox.ship == false && v2 == 12) {
          console.log('v2 vertical ship');

          for (casilla of vertical3v2) {
            casilla.ship = true;
            console.log(casilla.element);
          }
        } else if (startingBox.ship == false && v3 == 12) {
          console.log('v3 vertical ship');

          for (casilla of vertical3v3) {
            casilla.ship = true;
            console.log(casilla.element);
          }
        } else {
          genOneShip(3);
        }
      } else {
        console.log('Barco Horizontal de 3');
        let v1 = 0;
        let v2 = 0;
        let v3 = 0;

        for (casilla of toCheckIfHorizontal3v1) {
          if (casilla && casilla.ship == false) {
            v1++;
          }
        }

        for (casilla of toCheckIfHorizontal3v2) {
          if (casilla && casilla.ship == false) {
            v2++;
          }
        }

        for (casilla of toCheckIfHorizontal3v3) {
          if (casilla && casilla.ship == false) {
            v3++;
          }
        }

        console.log(v1, v2, v3);

        if (startingBox.ship == false && v1 == 12) {
          console.log('v1 horizontal ship');
          for (casilla of horizontal3v1) {
            casilla.ship = true;
            console.log(casilla.element);
          }
        } else if (startingBox.ship == false && v2 == 12) {
          console.log('v2 horizontal ship');

          for (casilla of horizontal3v2) {
            casilla.ship = true;
            console.log(casilla.element);
          }
        } else if (startingBox.ship == false && v3 == 12) {
          console.log('v3 horizontal ship');

          for (casilla of horizontal3v3) {
            casilla.ship = true;
            console.log(casilla.element);
          }
        } else {
          genOneShip(3);
        }
      }
    } else if (length == 2) {
      if ((orientation = 1)) {
        console.log('Barco Vertical de 2');
        let v1 = 0;
        let v2 = 0;

        for (casilla of toCheckIfVertical2v1) {
          if (casilla && casilla.ship == false) {
            v1++;
          }
        }

        for (casilla of toCheckIfVertical2v2) {
          if (casilla && casilla.ship == false) {
            v2++;
          }
        }

        console.log(v1, v2);

        if (startingBox.ship == false && v1 == 10) {
          console.log('v1 vertical ship');

          for (casilla of vertical2v1) {
            casilla.ship = true;
            console.log(casilla.element);
          }
        } else if (startingBox.ship == false && v2 == 10) {
          console.log('v2 vertical ship');

          for (casilla of vertical2v2) {
            casilla.ship = true;
            console.log(casilla.element);
          }
        } else {
          genOneShip(2);
        }
      } else {
        console.log('Barco Horizontal de 2');
        let v1 = 0;
        let v2 = 0;

        for (casilla of toCheckIfHorizontal2v1) {
          if (casilla && casilla.ship == false) {
            v1++;
          }
        }

        for (casilla of toCheckIfHorizontal2v2) {
          if (casilla && casilla.ship == false) {
            v2++;
          }
        }

        console.log(v1, v2);

        if (startingBox.ship == false && v1 == 10) {
          console.log('v1 horizontal ship');
          for (casilla of horizontal2v1) {
            casilla.ship = true;
            console.log(casilla.element);
          }
        } else if (startingBox.ship == false && v2 == 10) {
          console.log('v2 horizontal ship');

          for (casilla of horizontal2v2) {
            casilla.ship = true;
            console.log(casilla.element);
          }
        } else {
          genOneShip(2);
        }
      }
    } else if (length == 1) {
      console.log('Barco de 1');
      let free = 0;
      for (casilla of toCheckIf1) {
        if (!casilla) {
          free++;
        } else if (casilla.ship == false) {
          free++;
        }
      }
      console.log(free);
      if (startingBox.ship == false && free == 8) {
        console.log(startingBox.element);
        startingBox.ship = true;
      } else {
        genOneShip(1);
      }
    }
  };

  genOneShip(4);
  genOneShip(3);
  genOneShip(3);
  genOneShip(2);
  genOneShip(2);
  genOneShip(2);
  genOneShip(1);
  genOneShip(1);
  genOneShip(1);
  genOneShip(1);

  alert('Enemy ships generated');
};

let checkShips = () => {
  let vertical4ships = 0;
  let horizontal4ships = 0;

  let vertical3ships = 0;
  let horizontal3ships = 0;
  let vertical2ships = 0;
  let horizontal2ships = 0;
  let oneShips = 0;

  //Buscar barcos de 4 verticales (mod)
  for (casilla of gridP1) {
    let col = casilla.col;
    let row = casilla.row;

    if (
      document.querySelector(`#col${col}row${row}p1`).classList.contains('gray') &&
      document.querySelector(`#col${col}row${row - 1}p1`) &&
      document.querySelector(`#col${col}row${row - 1}p1`).classList.contains('gray') &&
      document.querySelector(`#col${col}row${row - 2}p1`) &&
      document.querySelector(`#col${col}row${row - 2}p1`).classList.contains('gray') &&
      document.querySelector(`#col${col}row${row - 3}p1`) &&
      document.querySelector(`#col${col}row${row - 3}p1`).classList.contains('gray')
    ) {
      console.log(casilla.element);
      console.log('4 ship vertical found with modificated function');
      if (
        (!document.querySelector(`#col${col}row${row - 4}p1`) ||
          !document.querySelector(`#col${col}row${row - 4}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col + 1}row${row - 4}p1`) ||
          !document.querySelector(`#col${col + 1}row${row - 4}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 1}row${row - 4}p1`) ||
          !document.querySelector(`#col${col - 1}row${row - 4}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col + 1}row${row - 3}p1`) ||
          !document.querySelector(`#col${col + 1}row${row - 3}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 1}row${row - 3}p1`) ||
          !document.querySelector(`#col${col - 1}row${row - 3}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col + 1}row${row - 2}p1`) ||
          !document.querySelector(`#col${col + 1}row${row - 2}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 1}row${row - 2}p1`) ||
          !document.querySelector(`#col${col - 1}row${row - 2}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col + 1}row${row - 1}p1`) ||
          !document.querySelector(`#col${col + 1}row${row - 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 1}row${row - 1}p1`) ||
          !document.querySelector(`#col${col - 1}row${row - 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col + 1}row${row}p1`) ||
          !document.querySelector(`#col${col + 1}row${row}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 1}row${row}p1`) ||
          !document.querySelector(`#col${col - 1}row${row}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col + 1}row${row + 1}p1`) ||
          !document.querySelector(`#col${col + 1}row${row + 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 1}row${row + 1}p1`) ||
          !document.querySelector(`#col${col - 1}row${row + 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col}row${row + 1}p1`) ||
          !document.querySelector(`#col${col}row${row + 1}p1`).classList.contains('gray'))
      ) {
        console.log('4 ship vertical validated with modificated funtion');
        vertical4ships++;
      }
    }
  }

  //Buscar barcos de 4 horizontales (mod)
  for (casilla of gridP1) {
    let col = casilla.col;
    let row = casilla.row;

    if (
      document.querySelector(`#col${col}row${row}p1`).classList.contains('gray') &&
      document.querySelector(`#col${col - 1}row${row}p1`) &&
      document.querySelector(`#col${col - 1}row${row}p1`).classList.contains('gray') &&
      document.querySelector(`#col${col - 2}row${row}p1`) &&
      document.querySelector(`#col${col - 2}row${row}p1`).classList.contains('gray') &&
      document.querySelector(`#col${col - 3}row${row}p1`) &&
      document.querySelector(`#col${col - 3}row${row}p1`).classList.contains('gray')
    ) {
      console.log(casilla.element);
      console.log('4 ship horizontal found with modificated function');
      if (
        (!document.querySelector(`#col${col - 4}row${row}p1`) ||
          !document.querySelector(`#col${col - 4}row${row}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 4}row${row + 1}p1`) ||
          !document.querySelector(`#col${col - 4}row${row + 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 4}row${row - 1}p1`) ||
          !document.querySelector(`#col${col - 4}row${row - 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 3}row${row + 1}p1`) ||
          !document.querySelector(`#col${col - 3}row${row + 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 3}row${row - 1}p1`) ||
          !document.querySelector(`#col${col - 3}row${row - 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 2}row${row + 1}p1`) ||
          !document.querySelector(`#col${col - 2}row${row + 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 2}row${row - 1}p1`) ||
          !document.querySelector(`#col${col - 2}row${row - 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 1}row${row + 1}p1`) ||
          !document.querySelector(`#col${col - 1}row${row + 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 1}row${row - 1}p1`) ||
          !document.querySelector(`#col${col - 1}row${row - 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col}row${row + 1}p1`) ||
          !document.querySelector(`#col${col}row${row + 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col}row${row - 1}p1`) ||
          !document.querySelector(`#col${col}row${row - 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col + 1}row${row + 1}p1`) ||
          !document.querySelector(`#col${col + 1}row${row + 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 1}row${row + 1}p1`) ||
          !document.querySelector(`#col${col - 1}row${row + 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col + 1}row${row}p1`) ||
          !document.querySelector(`#col${col + 1}row${row}p1`).classList.contains('gray'))
      ) {
        console.log('4 ship horizontal validated with modificated funtion');
        horizontal4ships++;
      }
    }
  }

  //Buscar barcos de 3 verticales
  for (casilla of gridP1) {
    let col = casilla.col;
    let row = casilla.row;

    if (
      document.querySelector(`#col${col}row${row}p1`).classList.contains('gray') &&
      document.querySelector(`#col${col}row${row - 1}p1`) &&
      document.querySelector(`#col${col}row${row - 1}p1`).classList.contains('gray') &&
      document.querySelector(`#col${col}row${row - 2}p1`) &&
      document.querySelector(`#col${col}row${row - 2}p1`).classList.contains('gray') &&
      (!document.querySelector(`#col${col}row${row - 3}p1`) ||
        !document.querySelector(`#col${col}row${row - 3}p1`).classList.contains('gray')) &&
      (!document.querySelector(`#col${col}row${row + 1}p1`) ||
        !document.querySelector(`#col${col}row${row + 1}p1`).classList.contains('gray'))
    ) {
      console.log(casilla.element);
      console.log('3 ship vertical found with modificated function');
      if (
        (!document.querySelector(`#col${col}row${row - 3}p1`) ||
          !document.querySelector(`#col${col}row${row - 3}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col + 1}row${row - 3}p1`) ||
          !document.querySelector(`#col${col + 1}row${row - 3}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 1}row${row - 3}p1`) ||
          !document.querySelector(`#col${col - 1}row${row - 3}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col + 1}row${row - 2}p1`) ||
          !document.querySelector(`#col${col + 1}row${row - 2}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 1}row${row - 2}p1`) ||
          !document.querySelector(`#col${col - 1}row${row - 2}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col + 1}row${row - 1}p1`) ||
          !document.querySelector(`#col${col + 1}row${row - 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 1}row${row - 1}p1`) ||
          !document.querySelector(`#col${col - 1}row${row - 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col + 1}row${row}p1`) ||
          !document.querySelector(`#col${col + 1}row${row}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 1}row${row}p1`) ||
          !document.querySelector(`#col${col - 1}row${row}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col + 1}row${row + 1}p1`) ||
          !document.querySelector(`#col${col + 1}row${row + 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 1}row${row + 1}p1`) ||
          !document.querySelector(`#col${col - 1}row${row + 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col}row${row + 1}p1`) ||
          !document.querySelector(`#col${col}row${row + 1}p1`).classList.contains('gray'))
      ) {
        console.log('3 ship vertical validated with modificated funtion');
        vertical3ships++;
      }
    }
  }
  //Buscar barcos de 3 horizontales
  for (casilla of gridP1) {
    let col = casilla.col;
    let row = casilla.row;

    if (
      document.querySelector(`#col${col}row${row}p1`).classList.contains('gray') &&
      document.querySelector(`#col${col - 1}row${row}p1`) &&
      document.querySelector(`#col${col - 1}row${row}p1`).classList.contains('gray') &&
      document.querySelector(`#col${col - 2}row${row}p1`) &&
      document.querySelector(`#col${col - 2}row${row}p1`).classList.contains('gray') &&
      (!document.querySelector(`#col${col - 3}row${row}p1`) ||
        !document.querySelector(`#col${col - 3}row${row}p1`).classList.contains('gray')) &&
      (!document.querySelector(`#col${col + 1}row${row}p1`) ||
        !document.querySelector(`#col${col + 1}row${row}p1`).classList.contains('gray'))
    ) {
      console.log(casilla.element);
      console.log('3 ship horizontal found with modificated function');
      if (
        (!document.querySelector(`#col${col - 3}row${row}p1`) ||
          !document.querySelector(`#col${col - 3}row${row}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 3}row${row + 1}p1`) ||
          !document.querySelector(`#col${col - 3}row${row + 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 3}row${row - 1}p1`) ||
          !document.querySelector(`#col${col - 3}row${row - 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 2}row${row + 1}p1`) ||
          !document.querySelector(`#col${col - 2}row${row + 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 2}row${row - 1}p1`) ||
          !document.querySelector(`#col${col - 2}row${row - 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 1}row${row + 1}p1`) ||
          !document.querySelector(`#col${col - 1}row${row + 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 1}row${row - 1}p1`) ||
          !document.querySelector(`#col${col - 1}row${row - 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col}row${row + 1}p1`) ||
          !document.querySelector(`#col${col}row${row + 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col}row${row - 1}p1`) ||
          !document.querySelector(`#col${col}row${row - 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col + 1}row${row + 1}p1`) ||
          !document.querySelector(`#col${col + 1}row${row + 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 1}row${row + 1}p1`) ||
          !document.querySelector(`#col${col - 1}row${row + 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col + 1}row${row}p1`) ||
          !document.querySelector(`#col${col + 1}row${row}p1`).classList.contains('gray'))
      ) {
        console.log('3 ship horizontal validated with modificated funtion');
        horizontal3ships++;
      }
    }
  }
  //Buscar barcos de 2 verticales
  for (casilla of gridP1) {
    let col = casilla.col;
    let row = casilla.row;

    if (
      document.querySelector(`#col${col}row${row}p1`).classList.contains('gray') &&
      document.querySelector(`#col${col}row${row - 1}p1`) &&
      document.querySelector(`#col${col}row${row - 1}p1`).classList.contains('gray') &&
      (!document.querySelector(`#col${col}row${row - 2}p1`) ||
        !document.querySelector(`#col${col}row${row - 2}p1`).classList.contains('gray')) &&
      (!document.querySelector(`#col${col}row${row + 1}p1`) ||
        !document.querySelector(`#col${col}row${row + 1}p1`).classList.contains('gray'))
    ) {
      console.log(casilla.element);
      console.log('2 ship vertical found with modificated function');
      if (
        (!document.querySelector(`#col${col}row${row - 2}p1`) ||
          !document.querySelector(`#col${col}row${row - 2}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col + 1}row${row - 2}p1`) ||
          !document.querySelector(`#col${col + 1}row${row - 2}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 1}row${row - 2}p1`) ||
          !document.querySelector(`#col${col - 1}row${row - 2}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col + 1}row${row - 1}p1`) ||
          !document.querySelector(`#col${col + 1}row${row - 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 1}row${row - 1}p1`) ||
          !document.querySelector(`#col${col - 1}row${row - 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col + 1}row${row}p1`) ||
          !document.querySelector(`#col${col + 1}row${row}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 1}row${row}p1`) ||
          !document.querySelector(`#col${col - 1}row${row}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col + 1}row${row + 1}p1`) ||
          !document.querySelector(`#col${col + 1}row${row + 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 1}row${row + 1}p1`) ||
          !document.querySelector(`#col${col - 1}row${row + 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col}row${row + 1}p1`) ||
          !document.querySelector(`#col${col}row${row + 1}p1`).classList.contains('gray'))
      ) {
        console.log('2 ship vertical validated with modificated funtion');
        vertical2ships++;
      }
    }
  }
  //Buscar barcos de 2 horizontales
  for (casilla of gridP1) {
    let col = casilla.col;
    let row = casilla.row;

    if (
      document.querySelector(`#col${col}row${row}p1`).classList.contains('gray') &&
      document.querySelector(`#col${col - 1}row${row}p1`) &&
      document.querySelector(`#col${col - 1}row${row}p1`).classList.contains('gray') &&
      (!document.querySelector(`#col${col - 2}row${row}p1`) ||
        !document.querySelector(`#col${col - 2}row${row}p1`).classList.contains('gray')) &&
      (!document.querySelector(`#col${col + 1}row${row}p1`) ||
        !document.querySelector(`#col${col + 1}row${row}p1`).classList.contains('gray'))
    ) {
      console.log(casilla.element);
      console.log('2 ship horizontal found with modificated function');
      if (
        (!document.querySelector(`#col${col - 2}row${row}p1`) ||
          !document.querySelector(`#col${col - 2}row${row}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 2}row${row + 1}p1`) ||
          !document.querySelector(`#col${col - 2}row${row + 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 2}row${row - 1}p1`) ||
          !document.querySelector(`#col${col - 2}row${row - 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 1}row${row + 1}p1`) ||
          !document.querySelector(`#col${col - 1}row${row + 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 1}row${row - 1}p1`) ||
          !document.querySelector(`#col${col - 1}row${row - 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col}row${row + 1}p1`) ||
          !document.querySelector(`#col${col}row${row + 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col}row${row - 1}p1`) ||
          !document.querySelector(`#col${col}row${row - 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col + 1}row${row + 1}p1`) ||
          !document.querySelector(`#col${col + 1}row${row + 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col - 1}row${row + 1}p1`) ||
          !document.querySelector(`#col${col - 1}row${row + 1}p1`).classList.contains('gray')) &&
        (!document.querySelector(`#col${col + 1}row${row}p1`) ||
          !document.querySelector(`#col${col + 1}row${row}p1`).classList.contains('gray'))
      ) {
        console.log('2 ship horizontal validated with modificated funtion');
        horizontal2ships++;
      }
    }
  }
  //Buscar barcos de 1
  for (casilla of gridP1) {
    let col = casilla.col;
    let row = casilla.row;
    if (
      document.querySelector(`#col${col}row${row}p1`).classList.contains('gray') &&
      (!document.querySelector(`#col${col - 1}row${row}p1`) ||
        !document.querySelector(`#col${col - 1}row${row}p1`).classList.contains('gray')) &&
      (!document.querySelector(`#col${col - 1}row${row + 1}p1`) ||
        !document.querySelector(`#col${col - 1}row${row + 1}p1`).classList.contains('gray')) &&
      (!document.querySelector(`#col${col - 1}row${row - 1}p1`) ||
        !document.querySelector(`#col${col - 1}row${row - 1}p1`).classList.contains('gray')) &&
      (!document.querySelector(`#col${col}row${row + 1}p1`) ||
        !document.querySelector(`#col${col}row${row + 1}p1`).classList.contains('gray')) &&
      (!document.querySelector(`#col${col}row${row - 1}p1`) ||
        !document.querySelector(`#col${col}row${row - 1}p1`).classList.contains('gray')) &&
      (!document.querySelector(`#col${col + 1}row${row + 1}p1`) ||
        !document.querySelector(`#col${col + 1}row${row + 1}p1`).classList.contains('gray')) &&
      (!document.querySelector(`#col${col + 1}row${row - 1}p1`) ||
        !document.querySelector(`#col${col + 1}row${row - 1}p1`).classList.contains('gray')) &&
      (!document.querySelector(`#col${col + 1}row${row}p1`) ||
        !document.querySelector(`#col${col + 1}row${row}p1`).classList.contains('gray'))
    ) {
      console.log('1 ship found and validated with modified function');
      oneShips++;
    }
  }

  let total4ships = vertical4ships + horizontal4ships;
  let total3ships = vertical3ships + horizontal3ships;
  let total2ships = vertical2ships + horizontal2ships;

  console.log('4 ships:', total4ships);
  console.log('3 ships:', total3ships);
  console.log('2 ships:', total2ships);
  console.log('1 ships:', oneShips);

  if (total4ships == 1 && total3ships == 2 && total2ships == 3 && oneShips == 4) {
    alert('Valid positioning');
  } else {
    alert(
      'Invalid positioning, remember to put one 4-long ship, two 3-long ships, three 2-long ships and four 1-long ships, whitout touching each other'
    );
  }
};

for (casilla of gridP1) {
  casilla.element.addEventListener('click', (e) => {
    document.querySelector(`#${e.path[0].id}`).classList.toggle('gray');
  });
}

for (casilla of grid) {
  casilla.element.addEventListener('click', (e) => {
    let div = grid.find((x) => x.element == e.path[0]);
    console.log(div);
    if (div.ship == true) {
      div.element.innerHTML = '<span>&#128293;</span>';
      div.touched = true;
      // alert('Tocado!');
    } else {
      div.element.innerHTML = '<span>&#128031;</span>';
      // alert('Agua!');
    }
  });
}

document.querySelector('#checkShips').addEventListener('click', checkShips);
document.querySelector('#genShips').addEventListener('click', genShips);
