
import "./style.css"
console.log("hello");


// ~~~~~~~~~~~~~~~~~~~~~~~
// SHIP FACTORY FUNCTION
// ~~~~~~~~~~~~~~~~~~~~~~~
function createShip(xIn,yIn,dirIn,lenIn,nameIn) {
    let positionArr = [];
    for (let i=0;i<lenIn;i++) {
        let shipSquare = {};
        if (dirIn === "x") {
            shipSquare = {
                shipIndex: i+1,
                posX: xIn + i,
                posY: yIn,
                hitStatus: false,
            }
        } else if (dirIn === "y") {
            shipSquare = {
                shipIndex: i+1,
                posX: xIn,
                posY: yIn +i,
                hitStatus: false, 
            }
        }
        positionArr.push(shipSquare);
    }

    return {
        _shipLength: lenIn,
        shipType: nameIn,
        position: positionArr,//rename to somehting more fitting
        sunkYN: false,
        hit: function(shipIndex) {
            //called by board.recieve attack()
            if (this.position[shipIndex].hitStatus) {
                // console.log("invalid hit");
                return "invalid";
            } else {
                // console.log("Hit!")
                this.position[shipIndex].hitStatus = true;
                // this.position[shipIndex].updateHitStatus(this.shipType);
                return "hit";
            }
        },
        isSunk: function() {
            let hitCount = 0;
            for (let i=0;i<this._shipLength;i++) {
                if (this.position[i].hitStatus === true) {
                    hitCount += 1;
                }
            }
            if (hitCount > this._shipLength-1) {
                this.sunkYN = true;
                return this.sunkYN;
            } else {
                this.sunkYN = false;
                return this.sunkYN;
            }
        },
        beenHit: function() {
            let hitOut = false;
            for (let i=0; i<this.position.length; i++) {
                if (this.position[i].hitStatus) {
                    console.log("Spot has been Hit!")
                    hitOut = true;
                }
            }
            return hitOut;
        }
    }
}








// ~~~~~~~~~~~~~~~~~~~~~~~
// BOARD FACTORY FUNCTION
// ~~~~~~~~~~~~~~~~~~~~~~~
function gameBoard() {
    return {
        //Methods & properties from a ship
        shipsAll: [],
        hits: [],
        missesAll: [], //keep track to display on board
        recieveAttack: function(atkX,atkY) {
            //takes pair of coordinates and determines if attack hit a ship
            //if yes send hit function to ship >> recieves "hit" or "invalid" back
            //if not records a miss
            let hitFlag = false; //only to check if was a hit on ship, not valid/invalid
            let missFlag = false; //set to true when attack not a hit or invalid
            let attackResponse = "";
            //Checks for Hit/Invalid Hit
            for (let i=0; i<this.shipsAll.length; i++) { //for all ships
                for (let j=0; j<this.shipsAll[i].position.length; j++) {  //for all spots on ship
                    //if hit index is on ship
                    if (atkX === this.shipsAll[i].position[j].posX && atkY === this.shipsAll[i].position[j].posY ) {
                        attackResponse = this.shipsAll[i].hit(j);
                        hitFlag = true; //will always be true if position is on a ship per if statement above
                        break;
                    }
                }
            }
            //Checks for Invalid Miss (Miss already selected)
            if (!hitFlag) {
                for (let k=0; k<this.missesAll.length; k++) {
                    if (atkX === this.missesAll[k].posX && atkY === this.missesAll[k].posY){
                        // console.log("invalid miss!");
                        attackResponse = "invalid";
                        missFlag = true;
                        break;
                    }
                }
                if ( atkX > 10 || atkX < 1 || atkY > 10 || atkY < 1) {
                    console.log("Guess out of index");
                    attackResponse = "invalid";
                    missFlag = true;
                }
            }
            //Checks for valid Miss (not selected)
            if (attackResponse.length < 1) {
                // console.log("valid miss!");
                this.missesAll.push({
                    posX: atkX,
                    posY: atkY,
                })
                attackResponse = "miss";
            }
            return attackResponse;
        },

        placeShip: function(plIndex,xIndex,yIndex,currentDirection,shipLength,shipName) {
            let validCheck = gamePlay.checkLocationValid(plIndex,xIndex,yIndex,currentDirection,shipLength);
            //DOUBLE CHECK WHY DO I VALID CHECK AGAIN??
            switch (validCheck) {
                case "error":
                    console.log("Cant place ship here");
                    break;
                case "valid":
                    let newShip = createShip(xIndex,yIndex,currentDirection,shipLength,shipName);
                    this.shipsAll.push(newShip);
                    domInteract.placeShipDom(plIndex,xIndex,yIndex,currentDirection,shipLength,shipName);
                    domInteract.showHp(shipName,plIndex);
            }
        },

        autoPlaceShipsAll: function() {
            // this.placeShip("co",1,1,"x",5,"Test Ship");
            let count = 0;
            let directions = ["x","y"];
            // while (count > 1) {
            while (this.shipsAll.length < 5) {
                let xIndex = Math.floor((Math.random() * 10) + 1);
                let yIndex = Math.floor((Math.random() * 10) + 1);
                let randDirInt = Math.round(Math.random());
                let randDirection = directions[randDirInt];
                let shipLength = gamePlay.shipSizes[this.shipsAll.length];
                let shipName = gamePlay.shipNames[this.shipsAll.length];
                // console.log("creating ship",shipName);
                this.placeShip("co",xIndex,yIndex,randDirection,shipLength,shipName);
            }
        },

        allSunk: function () {
            let sunkCount = 0;
            for(let i=0; i<5; i++) {
                if (this.shipsAll[i].isSunk())
                sunkCount += 1;
            }
            // console.log("Ships Sunk:", sunkCount);
            // console.log(this.shipsAll);
            if (sunkCount === 5){
                return true
            } else {
                return false
            }
        }
    }
}








// ~~~~~~~~~~~~~~~~~~~~~~~
// PLAYER FACTORY FUNCTION
// ~~~~~~~~~~~~~~~~~~~~~~~
function playerNew(name) {
    if (name === "computer") {
        return {
            name: "computer",
            board: gameBoard(),
            smartHits: [],
            autoAttack: function() {
                //check opponents ships 
                let guessX = 0;
                let guessY = 0;
                let allOppShips = gamePlay.playersAll[1].board.shipsAll;
                //if some ships hit but not sunk
                let attackingShips =  allOppShips.filter(ship => ship.beenHit() === true && ship.isSunk() === false);
                let attackStop = false;
                while (!attackStop) {
                    //check first ship thats not sunk but has been hit
                    if (attackingShips.length > 0) {
                        let selectedShip = attackingShips[0];
                        let hitsAll = selectedShip.position.filter(square => square.hitStatus === true)
                        let randArr = [-1,1];
                        let randFactor = randArr[Math.floor(Math.random()*2)];
                        let randFactorB = randArr[Math.floor(Math.random()*2)];
                        //pull first hit
                        let hitFirst = hitsAll[0];
                        //if more than 1 hit guess based on axis
                        if (hitsAll.length > 1) {
                            //pull last hit
                            let hitLast = hitsAll[hitsAll.length-1];
                            //check hit axis
                            if (hitFirst.posX === hitLast.posX) {
                                //y axis is correct
                                if (randFactor > 0) {
                                    guessY = hitLast.posY + 1;
                                } else {
                                    guessY = hitFirst.posY - 1;
                                }
                                guessX = hitFirst.posX;
                            } else if (hitFirst.posY === hitLast.posY) {
                                //x axis is correct
                                if (randFactor > 0) {
                                    guessX = hitLast.posX + 1;
                                } else {
                                    guessX = hitFirst.posX - 1;
                                }
                                guessY = hitFirst.posY;
                            }
                            console.log("Axis Guess At:",guessX, guessY);
                        } else {
                            //if only one hit 
                            //check one of the 4 squares randomly, continues while invalud 
                            if (randFactorB > 0) {
                                guessY = hitFirst.posY;
                                guessX = hitFirst.posX + randFactor;
                            } else {
                                guessY = hitFirst.posY + randFactor;
                                guessX = hitFirst.posX;
                            }
                            console.log("Educated Guess At:",guessX, guessY);
                        }
                        let attackResult = gamePlay.playersAll[1].board.recieveAttack(guessX,guessY);
                        // attackStop = true;
                        if (attackResult === "hit" || attackResult === "miss") {
                            domInteract.addAttack(attackResult,guessX,guessY,"p1");
                            attackStop = true;
                        }
                    } else {
                    //if all hit are sunk
                        let randX = Math.floor((Math.random() * 10)+1);
                        let randY = Math.floor((Math.random() * 10)+1);
                        let attackResult = gamePlay.playersAll[1].board.recieveAttack(randX,randY)
                        console.log(`Random Computer attack result at x:${randX} y:${randY}`,attackResult);
                        if (attackResult === "hit" || attackResult === "miss")  {
                            if (attackResult === "hit") {
                                let hitElement = document.getElementById(`p1-${randY}-${randX}`);
                                let shipNameHit = hitElement.classList[2].split("-")[1];
                                gamePlay.playersAll[0].smartHits.push({xPos: randX, yPos: randY, shipName: shipNameHit});
                            }
                            attackStop = true;
                            domInteract.addAttack(attackResult,randX,randY,"p1");
                        }
                    }
                }
                gamePlay.startTurn();
            }
        }
    } else {
        return {
            name: name,
            board: gameBoard(),
            attack: function(e) {
                let attackIn = e.target.id.split("-");
                let xAtk = Number(attackIn[2]);
                let yAtk = Number(attackIn[1]);
                //if successful call next player turn 
                let attackResult = gamePlay.playersAll[0].board.recieveAttack(xAtk,yAtk);
                console.log("P1 attack resulted in:",attackResult);
                if (attackResult === "hit" || attackResult === "miss")  {
                    domInteract.addAttack(attackResult,xAtk,yAtk,"co");
                    gamePlay.startTurn();
                } 
            },
        }
    }

}








// ~~~~~~~~~~~~~~~~~~~~~
// GAMEPLAY LOGIC MODULE
// ~~~~~~~~~~~~~~~~~~~~~
const gamePlay = {
    playersAll: [], //[computer, player1]
    turn: 0,
    shipSizes: [5,4,3,3,2],
    shipNames: ["carrier","battleship","cruiser","submarine","destroyer"],
    shipDirection: "x",
    init: function() {
        //populate board for both sides
        domInteract.populateBoard("computer");
        domInteract.populateBoard("Player 1");
        //select form element and add event listener
        let playerInForm = document.getElementById("player-in");
        playerInForm.addEventListener("submit",domInteract.nameIn);
    },

    //Player 1 setup
    setUpGame: function(player1Name) {
        //Add players
        this.playersAll.push(playerNew("computer"));
        this.playersAll.push(playerNew(`${player1Name}`));
        //add Event Listeners on p1 board squares to place ships
        domInteract.domUiUpdate("placing-ships", "start");
        domInteract.uiTextUpdate(`${player1Name} place all of your ships on your board.`);
    },

    //Rest of Game Setup
    checkAllShipsPlaces: function() {
        if (this.playersAll[1].board.shipsAll.length === 5) {
            //remove event listeners on player board & hide direction button
            domInteract.domUiUpdate("placing-ships", "stop");
            //populate computer board
            gamePlay.playersAll[0].board.autoPlaceShipsAll();
            this.startTurn();
        }
    },
    startTurn: function() {
        console.log(this.playersAll[0]);
        console.log(this.playersAll[1]);
        //Switch turn every time
        this._switchTurn(); //logging turn each time called
        //Check for sinking & intialize vars
        let p1Sunk = this.playersAll[1].board.allSunk();
        let compSunk = this.playersAll[0].board.allSunk();
        //NEED TO UPDATE DOM ON INDIVIDUAL SHIP SINKING

        if (p1Sunk || compSunk) { //if either player sunk end game
            console.log("Game Over");
            if (compSunk) { //if p1 wins
                console.log("Player 1 wins");
                domInteract.uiTextUpdate(`${this.playersAll[1].name} Wins!`);
                //end game with p1 as winner
            } else { //comp wins
                console.log("Computer wins");
                domInteract.uiTextUpdate(`Computer Wins!`);
            }
        } else {
            if (this.turn === 1) {
                //player 1 turn
                domInteract.uiTextUpdate(`${this.playersAll[this.turn].name}, it is your turn. Choose a square on your opponent's board to attack.`);
                domInteract.domUiUpdate("player1-attack","start");
            } else {
                //computer turn
                domInteract.domUiUpdate("player1-attack","stop"); //need to finish in dom interact
                domInteract.uiTextUpdate(`Computer's turn, player attacking...`);
                setTimeout(this.playersAll[0].autoAttack,2000);
            }
        }
    },

    _switchTurn: function() {
        if (this.turn === 0) {
            this.turn = 1;
        } else {
            this.turn = 0;
        }
        // console.log(this.turn);
    },

    toggleDirection: function() {
        if (gamePlay.shipDirection === "x") {
            gamePlay.shipDirection = "y";
        } else {
            gamePlay.shipDirection = "x"; 
        }
        domInteract.toggleDirectionDisplay();
    },
    checkLocationValid: function(plIndex,xIndex,yIndex,currentDirection,shipLength) {
        let errorMsg = document.getElementById("placing-error");
        if (currentDirection === "x" && (xIndex+shipLength-1) > 10) {
            errorMsg.innerHTML = "Error, move ship left, or change direction";
            return "error"; //Update with Error Handling 
        } else if (currentDirection === "y" && (yIndex+shipLength-1) > 10) {
            errorMsg.innerHTML = "Error, move ship up, or change direction";
            return "error"; //Update with Error Handling 
        } else if (!this.checkSpotTaken(plIndex,xIndex,yIndex,currentDirection,shipLength)) {
            errorMsg.innerHTML = "Error, conflict with another ship";
            return "error"; //Update with Error Handling 
        } else {
            if (errorMsg.innerHTML.length > 0) {
                errorMsg.innerHTML = "";
            }
            return "valid";
        }
    },
    checkSpotTaken: function(plIndex,xIndex,yIndex,currentDirection,shipLength) {
        //uses classlist length of square to determine if a ship is already there
        let errorCheck = true;
        for (let i=0;i<shipLength;i++) {
            if (currentDirection === "x") {
                let checkedLocation = document.getElementById(`${plIndex}-${yIndex}-${xIndex+i}`);
                if (checkedLocation.classList.contains("ship-active") || checkedLocation.classList.contains("ship-hidden")) {
                    errorCheck = false;
                }
            } else {
                let checkedLocation = document.getElementById(`${plIndex}-${yIndex+i}-${xIndex}`);
                if (checkedLocation.classList.contains("ship-active") || checkedLocation.classList.contains("ship-hidden")) {
                    errorCheck = false;
                }
            }
        }
        return errorCheck;
    }
}










// ~~~~~~~~~~~~~~~~~~~~~
// DOM INTERACT MODULE
// ~~~~~~~~~~~~~~~~~~~~~
const domInteract = {
    populateBoard: function(playerIn) {
        //select board based on player that comes in to append to
        let gameboardDiv;
        let playerId = "";
        if (playerIn === "computer") {
            gameboardDiv = document.getElementById("comp-board");
            playerId = "co";
        } else {
            gameboardDiv = document.getElementById("player1-board");
            playerId = "p1";
        }
        for (let i=1; i<=10;i++) {
            for (let j=1; j<=10; j++) {
                let squareDiv = document.createElement("div");
                squareDiv.id = `${playerId}-${i}-${j}`;
                squareDiv.classList = "game-square";
                gameboardDiv.appendChild(squareDiv)
            }
        }
    },
    nameIn: function(e) {
        e.preventDefault();
        let formInput = document.querySelectorAll('input[type=text]')[0];
        let playerName  = formInput.value.trim();
        if (playerName.length > 0) {
            let playerNameDiv = document.querySelector("#player1-name h2"); 
            playerNameDiv.innerHTML = playerName;      
        } else {
            playerName = "Player1";
        }
        formInput.parentElement.reset();
        formInput.parentElement.classList = "hidden";
        gamePlay.setUpGame(playerName);
    },
    domUiUpdate: function(reason,changeType) {
        //updates UI interaction including event listeners, buttons, 
        let caseIn = `${reason} ${changeType}`;
        switch (caseIn) {
            case "placing-ships start":
                // console.log ("on");
                //player 1 board squares
                let playerSquaresStart = document.querySelectorAll("#player1-board .game-square");
                playerSquaresStart.forEach(square => square.addEventListener("mouseover",domInteract.locationData));
                playerSquaresStart.forEach(square => square.addEventListener("click",domInteract.locationData));
                //direction button
                let dirToggleBtnStart = document.getElementById("direction-tog-btn");
                dirToggleBtnStart.classList.toggle("hidden");
                dirToggleBtnStart.addEventListener("click",gamePlay.toggleDirection);
                break;
            case "placing-ships stop":
                // console.log ("off");
                let playerSquaresStop = document.querySelectorAll("#player1-board .game-square");
                playerSquaresStop.forEach(square => square.removeEventListener("mouseover",domInteract.locationData));
                playerSquaresStop.forEach(square => square.removeEventListener("click",domInteract.locationData));
                let dirToggleBtnStop = document.getElementById("direction-tog-btn");
                dirToggleBtnStop.classList.toggle("hidden");
                dirToggleBtnStop.removeEventListener("click",gamePlay.toggleDirection);
                break;
            case "player1-attack start":
                console.log("player 1 attacking:");
                //add event listeners on attack
                let attackSquaresStart = document.querySelectorAll("#comp-board .game-square");
                attackSquaresStart.forEach(square => square.addEventListener("click",gamePlay.playersAll[1].attack));
                break;
            case "player1-attack stop":
                console.log("player 1 stop attacking:");
                //remove event listeners on attack
                let attackSquaresStop = document.querySelectorAll("#comp-board .game-square");
                attackSquaresStop.forEach(square => square.removeEventListener("click",gamePlay.playersAll[1].attack));
                break;
        }
    },
    locationData: function(e) {
        e.preventDefault();
        let currentDirection = gamePlay.shipDirection;
        //Current Ship Length being placed
        let shipIndex = gamePlay.playersAll[1].board.shipsAll.length;
        let shipLength = gamePlay.shipSizes[shipIndex];
        let shipName = gamePlay.shipNames[shipIndex];
        //get event & square location info
        let eventType = e.type;
        let squareId = e.target.id;
        let indices = squareId.split("-");
        let plIndex = indices[0]; //keeping in case need this function for computer placements too
        let xIndex = Number(indices[2]);
        let yIndex = Number(indices[1]);
        if (eventType === "click") {
            gamePlay.playersAll[1].board.placeShip(plIndex,xIndex,yIndex,currentDirection,shipLength,shipName);
            if (gamePlay.playersAll[1].board.shipsAll.length === 5) {
                gamePlay.checkAllShipsPlaces();
            }
        } else if (eventType === "mouseover") {
            domInteract.showLocation(plIndex,xIndex,yIndex,currentDirection,shipLength);
        }
    },
    placeShipDom: function(plIndex,xIndex,yIndex,currentDirection,shipLength,shipName) {
        //updates squares class w/ ship info
        for (let i=0;i<shipLength;i++) {
            if (plIndex === "p1") {
                if (currentDirection === "x") {
                    let highlightLocation = document.getElementById(`${plIndex}-${yIndex}-${xIndex+i}`);
                    highlightLocation.classList = `game-square ship-active ${plIndex}-${shipName}`;
                } else {
                    let highlightLocation = document.getElementById(`${plIndex}-${yIndex+i}-${xIndex}`);
                    highlightLocation.classList = `game-square ship-active ${plIndex}-${shipName}`;
                }
            } else {
                if (currentDirection === "x") {
                        let highlightLocation = document.getElementById(`${plIndex}-${yIndex}-${xIndex+i}`);
                        highlightLocation.classList = `game-square ship-hidden ${plIndex}-${shipName}`;
                } else {
                        let highlightLocation = document.getElementById(`${plIndex}-${yIndex+i}-${xIndex}`);
                        highlightLocation.classList = `game-square ship-hidden ${plIndex}-${shipName}`;
                }
            }
        }
    },

    showLocation: function(plIndex,xIndex,yIndex,currentDirection,shipLength) {
        let validReport = gamePlay.checkLocationValid(plIndex,xIndex,yIndex,currentDirection,shipLength);
        //Clear any cells aready highlighted 
        domInteract.hideLocation("valid");
        domInteract.hideLocation("error");
        //highlight selected ship placement based on valid status 
        for (let i=0;i<shipLength;i++) {
            if (currentDirection === "x") {
                if(xIndex+i < 11) {
                    let highlightLocation = document.getElementById(`${plIndex}-${yIndex}-${xIndex+i}`);
                    highlightLocation.classList.toggle(validReport);
                }
            } else {
                if(yIndex+i < 11) {
                    let highlightLocation = document.getElementById(`${plIndex}-${yIndex+i}-${xIndex}`);
                    highlightLocation.classList.toggle(validReport);
                }
            }
        }
    },
    hideLocation: function(classToHide) {
        let divsToHide = document.querySelectorAll(`.${classToHide}`);
        if (divsToHide.length > 0) {
            divsToHide.forEach(squareHighlighted => squareHighlighted.classList.toggle(`${classToHide}`));
        }
    },
    toggleDirectionDisplay: function() {
        let text = gamePlay.shipDirection.toUpperCase();
        document.getElementById("direction-tog-btn").innerHTML = `${text} Direction`;
    },
    addAttack: function(attackResult,xIn,yIn,plIndex) {
        //Display of square hit
        let attackSquare = document.getElementById(`${plIndex}-${yIn}-${xIn}`);
        attackSquare.classList.add(attackResult);
        // console.log(attackSquare.classList);
        //HP Display of ship if hit
        if (attackResult === "hit") {
            let playerIndexNum = 1;
            if (plIndex === "co") {
                playerIndexNum = 0; 
            }
            let shipName = attackSquare.classList[2].split("-")[1];
            let selectedShip = gamePlay.playersAll[playerIndexNum].board.shipsAll.filter(ship => {
                return ship.shipType === shipName;
            })
            // console.log(selectedShip[0].position.length);
            let selectedShipIndex = 0;
            for (let i=0; i<selectedShip[0].position.length; i++) {
                // console.log(selectedShip[0].position[i])
                if (selectedShip[0].position[i].hitStatus) {
                    selectedShipIndex++;
                }
            }
            // console.log(`${shipName}-${plIndex}-hp-0${selectedShipIndex}`);

            let hpDivUpdating = document.getElementById(`${shipName}-${plIndex}-hp-0${selectedShipIndex}`);
            // console.log(hpDivUpdating);
            hpDivUpdating.classList.add("hit");
        }
    },
    showHp: function(shipName,plIndex) {
        let shipHpDiv = document.getElementById(`${shipName}-${plIndex}`);
        shipHpDiv.classList.toggle("hidden");
    },
    uiTextUpdate: function(textIn) {
        let uiTextElement = document.getElementById("ui-output-text");
        // console.log(uiTextElement);
        if (textIn === "clear" ) {
            uiTextElement.innerHTML = "";
            uiTextElement.classList = "hidden";
        } else {
            uiTextElement.innerHTML = textIn;
            uiTextElement.classList = "";
        }
    }
}

gamePlay.init();






//Debugging Cases

// let testBoard = gameBoard();
// testBoard.placeShip(5,"3,2","y");
// console.log(testBoard.recieveAttack(4,2));
// console.log(testBoard.recieveAttack(4,2));

// let player1 = playerNew("Steve");
// player1.board.placeShip(10,"1,1","x");
// console.log(player1);
// let playerComp = playerNew("computer");
// playerComp.attack(player1);


// // Testing Exports
// module.exports = {createShip, gameBoard, playerNew};







