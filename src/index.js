
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
                posX: xIn + i,
                posY: yIn,
                hitStatus: false,
            }
        } else if (dirIn === "y") {
            shipSquare = {
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
                console.log("creating ship",shipName);
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
            attack: function() {
                //eventually will expect index to come in as a click event (e.target.id = "x,y")
                let attackStop = false;
                while (!attackStop) {
                    let randX = Math.floor((Math.random() * 10)+1);
                    let randY = Math.floor((Math.random() * 10)+1);
                    let attackResult = gamePlay.playersAll[1].board.recieveAttack(randX,randY)
                    console.log(`Computer attack result at x:${randX} y:${randY}`,attackResult);
                    if (attackResult === "hit" || attackResult === "miss")  {
                        attackStop = true;
                        domInteract.addAttack(attackResult,randX,randY,"p1");
                        gamePlay.startTurn();
                    }
                }
            },
        }
    } else {
        return {
            name: name,
            board: gameBoard(),
            attack: function(e) {
                // e.preventDefault(); //needed??
                console.log(e.target);
                //handle event in
                let attackIn = e.target.id.split("-");
                let xAtk = Number(attackIn[2]);
                let yAtk = Number(attackIn[1]);
                // console.log("x",xAtk,"y",yAtk);

                //attack board 
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
    },

    //Rest of Game Setup
    checkAllShipsPlaces: function() {
        if (this.playersAll[1].board.shipsAll.length === 5) {
            //remove event listeners on player board
            //hide direction button
            domInteract.domUiUpdate("placing-ships", "stop");
            //populate computer board
            console.log("Starting Auto-Place");
            gamePlay.playersAll[0].board.autoPlaceShipsAll();

            this.startTurn();
            //call Start to game
            //add event listeners for attacking
            //call switching turns function?
        }
    },
    startTurn: function() {
        //Switch turn every time
        this._switchTurn(); //logging turn each time called
        console.log(this.playersAll);

        //Check for sinking & intialize vars
        console.log (this.playersAll[0].board.allSunk());
        console.log (this.playersAll[1].board.allSunk());
        let currentPlayer = this.playersAll[this.turn];
        let p1Sunk = this.playersAll[0].board.allSunk();
        let compSunk = this.playersAll[0].board.allSunk();
        //NEED TO UPDATE DOM ON INDIVIDUAL SHIP SINKING
        console.log (!this.playersAll[0].board);
        console.log (!this.playersAll[1].board);

        if (p1Sunk || compSunk) { //if either player sunk end game
            if (compSunk) { //if p1 wins
                console.log("Player 1 wins");
                //end game with p1 as winner
            } else { //comp wins
                //end game with comp as winner
                console.log("Computer wins");
            }
        } else {
            if (this.turn === 1) {
                //player 1 turn
                domInteract.domUiUpdate("player1-attack","start");
            } else {
                //computer turn
                domInteract.domUiUpdate("player1-attack","stop"); //need to finish in dom interact
                // this.playersAll[0].attack();
                setTimeout(this.playersAll[0].attack,2000);
            }
        }
    },




    _switchTurn: function() {
        if (this.turn === 0) {
            this.turn = 1;
        } else {
            this.turn = 0;
        }
        console.log(this.turn);
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
        for (let i=0;i<shipLength;i++) {
            if (currentDirection === "x") {
                let checkedLocation = document.getElementById(`${plIndex}-${yIndex}-${xIndex+i}`);
                if (checkedLocation.classList.contains("ship-active")) {
                    return false
                }
            } else {
                let checkedLocation = document.getElementById(`${plIndex}-${yIndex+i}-${xIndex}`);
                if (checkedLocation.classList.contains("ship-active")) {
                    return false
                }
            }
        }
        return true;
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
                console.log ("on");
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
                console.log ("off");
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
            if (currentDirection === "x") {
                    let highlightLocation = document.getElementById(`${plIndex}-${yIndex}-${xIndex+i}`);
                    highlightLocation.classList = `game-square ship-active ${plIndex}-${shipName}`;
            } else {
                    let highlightLocation = document.getElementById(`${plIndex}-${yIndex+i}-${xIndex}`);
                    highlightLocation.classList = `game-square ship-active ${plIndex}-${shipName}`;
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
        let attackSquare = document.getElementById(`${plIndex}-${yIn}-${xIn}`);
        console.log(attackSquare);
        console.log(attackSquare.classList);
        // let classesCurrent = attackSquare.classList;
        // classesCurrent.push(attackResult);
        attackSquare.classList.add(attackResult);
        console.log(attackSquare.classList);
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







