// const sum = require('./src/index');
const {createShip, gameBoard, playerNew} = require('./src/index');


// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// test('Creates Ship Obj - Length', () => {
//     let testShip = createShip(3);
//     expect(testShip._shipLength).toBe(3);
//   });


//Ship Tests
test('1)  Ship Obj - places ship, y direction', () => {
    let testShip = createShip(4,2,3,"y");
    expect(testShip.position).toEqual([
        {   posX: 2,
            posY: 3,
            hitStatus: false},
        {   posX: 2,
            posY: 4,
            hitStatus: false},
        {   posX: 2,
            posY: 5,
            hitStatus: false},
        {   posX: 2,
            posY: 6,
            hitStatus: false},
    ]);
});

test('2)  Ship Obj - places ship, x direction', () => {
    let testShip = createShip(5,4,2,"x");
    expect(testShip.position).toEqual([
        {   posX: 4,
            posY: 2,
            hitStatus: false},
        {   posX: 5,
            posY: 2,
            hitStatus: false},
        {   posX: 6,
            posY: 2,
            hitStatus: false},
        {   posX: 7,
            posY: 2,
            hitStatus: false},
        {   posX: 8,
            posY: 2,
            hitStatus: false},
    ]);
});

test('3)  Ship Obj - Takes Hits', () => {
    let testShip = createShip(5,4,2,"x");
    testShip.hit(2);
    expect(testShip.position[2].hitStatus).toBe(true);
});

test('4)  Ship Obj - Returns Valid Hits', () => {
    let testShip = createShip(5,4,2,"x");
    testShip.hit(2);
    expect(testShip.position[2].hitStatus).toBe(true);
});

test('5)  Ship Obj - Returns Invalid Hits', () => {
    let testShip = createShip(5,4,2,"x");
    testShip.hit(2);
    expect(testShip.hit(2)).toBe("invalid");
});

test('6)  Ship Obj - Sinks if all hit', () => {
    let testShip = createShip(2,1,1,"x");
    testShip.hit(0);
    testShip.hit(1);
    expect(testShip.isSunk()).toBe(true);
});


test('7)  Ship Obj - Floats if not all hit', () => {
    let testShip = createShip(2,1,1,"x");
    testShip.hit(0);
    expect(testShip.isSunk()).toBe(false);
});


//Gameboard Tests

test('8)  Gameboard Obj - imports correctly', () => {
    let testBoard = gameBoard();
    expect(testBoard.shipsAll).toEqual([]);
});

test('9)  Gameboard Obj - places ship ', () => {
    let testBoard = gameBoard();
    testBoard.placeShip(5,"3,2","x")
    expect(testBoard.shipsAll[0].position).toEqual([
        {   posX: 3,
            posY: 2,
            hitStatus: false},
        {   posX: 4,
            posY: 2,
            hitStatus: false},
        {   posX: 5,
            posY: 2,
            hitStatus: false},
        {   posX: 6,
            posY: 2,
            hitStatus: false},
        {   posX: 7,
            posY: 2,
            hitStatus: false},
    ]);
});

test('10) Gameboard Obj - Cant place ship off board X direction ', () => {
    let testBoard = gameBoard();
    testBoard.placeShip(7,"7,2","x");
    expect(testBoard.shipsAll[0]).toBe("Error");
});

test('11) Gameboard Obj - Cant place ship off board Y direction ', () => {
    let testBoard = gameBoard();
    testBoard.placeShip(7,"7,2","x");
    expect(testBoard.shipsAll[0]).toBe("Error");
});


test('12) Gameboard Obj - Takes a hit ', () => {
    let testBoard = gameBoard();
    testBoard.placeShip(5,"3,2","x");
    testBoard.recieveAttack(3,2);
    expect(testBoard.shipsAll[0].position[0].hitStatus).toBe(true);
});

test('13) Gameboard Obj - Takes a miss ', () => {
    let testBoard = gameBoard();
    testBoard.placeShip(5,"3,2","y");
    testBoard.recieveAttack(4,2);
    expect(testBoard.missesAll).toEqual([
        {   posX: 4,
            posY: 2
        }]);
});

test('14) Gameboard Obj - Returns a valid hit', () => {
    let testBoard = gameBoard();
    testBoard.placeShip(5,"3,2","x");
    expect(testBoard.recieveAttack(3,2)).toBe("hit");
});

test('15) Gameboard Obj - Returns a valid miss', () => {
    let testBoard = gameBoard();
    testBoard.placeShip(5,"4,2","y");
    expect(testBoard.recieveAttack(3,2)).toBe("miss");
});

test('16) Gameboard Obj - Returns an invalid hit', () => {
    let testBoard = gameBoard();
    testBoard.placeShip(5,"3,2","x");
    testBoard.recieveAttack(3,2);
    expect(testBoard.recieveAttack(3,2)).toBe("invalid");
});

test('17) Gameboard Obj - Returns an invalid miss', () => {
    let testBoard = gameBoard();
    testBoard.placeShip(5,"4,2","y");
    testBoard.recieveAttack(3,2);
    expect(testBoard.recieveAttack(3,2)).toBe("invalid");
});

test('18) Gameboard Obj - reports all sunk ', () => {
    let testBoard = gameBoard();
    testBoard.placeShip(2,"3,2","x");
    testBoard.recieveAttack(3,2);
    testBoard.recieveAttack(4,2);
    expect(testBoard.allSunk()).toBe(true);
});

test('19) Gameboard Obj - reports not sunk ', () => {
    let testBoard = gameBoard();
    testBoard.placeShip(2,"3,2","x");
    testBoard.recieveAttack(3,2);
    expect(testBoard.allSunk()).toBe(false);
});

//Player Objs
test('20) Player Obj - Human player attacks, miss', () => {
    let player1 = playerNew("Steve");
    let playerComp = playerNew("computer");
    expect(player1.attack(playerComp,1,1)).toBe("miss");
});

test('20) Player Obj - Human player attacks, hit', () => {
    let player1 = playerNew("Steve");
    let playerComp = playerNew("computer");
    playerComp.board.placeShip(2,"1,1","x")
    expect(player1.attack(playerComp,2,1)).toBe("hit");
});

test('20) Player Obj - Computer player attacks', () => {
    let player1 = playerNew("Steve");
    let playerComp = playerNew("computer");
    expect(playerComp.attack(player1)).toBe("miss");
});


