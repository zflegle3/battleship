
import "./style.css"
console.log("hello");

function createShip(lenIn,xIn,yIn,dirIn) {
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
        //Methods & properties from a ship
        _shipLength: lenIn,
        position: positionArr,//rename to somehting more fitting
        sunkYN: false,
        hit: function(shipIndex) {
            // for (let i=0;i<this._shipLength;i++) {
                //if hit index is on ship
                // if (this.position[i].posX === hitX && this.position[i].posY === hitY) {
                    //if already hit
            if (this.position[shipIndex].hitStatus) {
                // console.log("invalid hit");
                return "invalid";
            } else {
                // console.log("Hit!")
                this.position[shipIndex].hitStatus = true;
                return "hit";
            }
                // }
            // }
        },
        isSunk: function() {
            let hitCount = 0;
            for (i=0;i<this._shipLength;i++) {
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
            console.log(this.shipsAll);
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
            //Checks for Invalid Miss
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
            //Checks for Miss
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
        checkLocationValid: function(xIndex,yIndex,currentDirection,shipLength) {
            if (currentDirection === "x" && (xIndex+shipLength-1) > 10) {
                console.log("Error, move ship left, or change direction");
                return "error"; //Update with Error Handling 
            } else if (currentDirection === "y" && (yIndex+shipLength-1) > 10) {
                console.log("Error, move ship up, or change direction");
                return "error"; //Update with Error Handling 
            } else {
                return "valid";
            }
        },
        placeShip: function(shipLength,indexStart,direction) {
            //eventually will expect index to come in as a click event (e.target.id = "x,y")
            //expectiing direction as string "x" or "y"
            //let indices = indexStart.split(","); // [Xpos,Ypos]
            let indices = indexStart.split(",").map((string) => Number(string));
            if (direction === "x" && (indices[0]+shipLength-1) > 10) {
                this.shipsAll.push("Error"); //Update with Error Handling 
                // console.log("Error, move ship left, or change direction");
            } else if (direction === "y" && (indices[1]+shipLength-1) > 10) {
                this.shipsAll.push("Error"); //Update with Error Handling 
                // console.log("Error, move ship up, or change direction");
            } else {
                // console.log("placing ship");
                let newShip = createShip(shipLength,indices[0],indices[1],direction);
                this.shipsAll.push(newShip)
            }
        },
        allSunk: function() {
            let sunkCount = 0;
            for(let i=0; i<this.shipsAll.length; i++) {
                if (this.shipsAll[0].isSunk())
                sunkCount += 1;
            }
            if (sunkCount > this.shipsAll.length -1){
                return true
            } else {
                return false
            }
        }
    }
}


function playerNew(name) {
    if (name === "computer") {
        return {
            name: "Computer",
            board: gameBoard(),
            attack: function(playerIn) {
                //eventually will expect index to come in as a click event (e.target.id = "x,y")
                let attackStop = false;
                while (!attackStop) {
                    let randX = Math.floor((Math.random() * 10)+1);
                    let randY = Math.floor((Math.random() * 10)+1);
                    let attackResult = playerIn.board.recieveAttack(randX,randY)
                    console.log(`Attack Result at x:${randX} y:${randY}`,attackResult);
                    switch (attackResult) {
                        case "hit":
                            attackStop = true;
                            return attackResult;
                        case "miss":
                            attackStop = true;
                            return attackResult;
                        case "invalid":
                            console.log("try another attack");
                            //keep attacking b/c attack was invalid
                            break;
                    }
                    return attackResult;
                }
            },
        }
    } else {
        return {
            name: name,
            board: gameBoard(),
            attack: function(playerIn,xIn,yIn) {
                //eventually will expect index to come in as a click event (e.target.id = "x,y")
                let attackResult = playerIn.board.recieveAttack(xIn,yIn);
                return attackResult;
            },
        }
    }
}

const gamePlay = {
    playersAll: [], //[computer, player1]
    shipSizes: [5,4,3,3,2],
    shipDirection: "x",
    setupGame: function() {
        //populate board for both sides
        domInteract.populateBoard("computer");
        domInteract.populateBoard("Player 1");
        //select form element and add event listener
        let playerInForm = document.getElementById("player-in");
        playerInForm.addEventListener("submit",gamePlay.shipPlacement);
    },

    shipPlacement: function(e) {
        e.preventDefault();
        //Update Player Name value and display
        let player1Name =domInteract.nameIn();
        //create players
        gamePlay.playersAll.push(playerNew("computer"));
        gamePlay.playersAll.push(playerNew(`${player1Name}`));
        console.log(gamePlay.playersAll);
        // this.playersAll[1] = playerNew(`${player1Name}`);
        //add Event Listeners to place ships
        let playerSquares = document.querySelectorAll("#player1-board .game-square");
        playerSquares.forEach(square => square.addEventListener("mouseover",domInteract.showLocation));
        playerSquares.forEach(square => square.addEventListener("click",domInteract.placeShips));
        let dirToggleBtn = document.getElementById("direction-tog-btn");
        dirToggleBtn.classList.toggle("hidden");
        dirToggleBtn.addEventListener("click",gamePlay.toggleDirection)

        // for (let square in playerSquares) {
        //     square.addEventListener("click",domInteract.placeShips);
        // }


        //Place Ships Player 1
        //add event listener on all player 1 squares to call dom place function



    },



    gameLoop: function() {
        //Create players
        let player1Name = "Steve" // Update with Prompt in from user
        this.playersAll[0] = playerNew("computer");
        this.playersAll[1] = playerNew(`${player1Name}`);

        //Computer Places ships
        this.playersAll[0].gameBoard.placeShip(newShipSizes[0],"1,1","x");
        this.playersAll[0].gameBoard.placeShip(newShipSizes[1],"1,2","y");
        this.playersAll[0].gameBoard.placeShip(newShipSizes[2],"2,2","y");
        this.playersAll[0].gameBoard.placeShip(newShipSizes[3],"3,2","y");
        this.playersAll[0].gameBoard.placeShip(newShipSizes[4],"2,5","x");
        //Player 1 places ships 
        this.playersAll[1].gameBoard.placeShip(newShipSizes[0],"1,1","x");
        this.playersAll[1].gameBoard.placeShip(newShipSizes[1],"1,2","y");
        this.playersAll[1].gameBoard.placeShip(newShipSizes[2],"2,2","y");
        this.playersAll[1].gameBoard.placeShip(newShipSizes[3],"3,2","y");
        this.playersAll[1].gameBoard.placeShip(newShipSizes[4],"2,5","x");
    },
    toggleDirection: function() {
        if (gamePlay.shipDirection === "x") {
            gamePlay.shipDirection = "y";
        } else {
            gamePlay.shipDirection = "x"; 
        }
        domInteract.toggleDirectionDisplay();
    }



}

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

        //for i 0-10 j 0-10
        //create div
        //add attributes, class & ID
        //append divs to player's board 
        for (let i=1; i<=10;i++) {
            for (let j=1; j<=10; j++) {
                let squareDiv = document.createElement("div");
                squareDiv.id = `${playerId}-${i}-${j}`;
                squareDiv.classList = "game-square"
                gameboardDiv.appendChild(squareDiv)
            }
        }
    },
    nameIn: function() {
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
        return playerName;
    },
    placeShips: function(e) {
        //check player ships number to determine which ship to place 
        console.log(e.target);
    },
    showLocation: function(e) {
        //check player ships number to determine which ship to place 
        console.log(gamePlay.playersAll[1].board.shipsAll.length);
        //pull ship length based on ships placed
        //use ship length & current direction to determine squares to display
        let shipIndex = gamePlay.playersAll[1].board.shipsAll.length;
        console.log(shipIndex);
        let currentLength = gamePlay.shipSizes[shipIndex];
        //get square location info
        let squareId = e.target.id;
        let indices = squareId.split("-");
        let plIndex = indices[0]; //keeping in case need this function for computer placements too
        let xIndex = Number(indices[2]);
        let yIndex = Number(indices[1]);
        let validReport = gamePlay.playersAll[1].board.checkLocationValid(xIndex,yIndex,gamePlay.shipDirection,currentLength);
        console.log("valid?",validReport);
        //unhighlight any cells aready highlighted 
        domInteract.hideLocation("valid");
        domInteract.hideLocation("error");
        //highlight selected ship placement based on valid status 
        for (let i=0;i<currentLength;i++) {
            if (gamePlay.shipDirection === "x") {
                if(xIndex+i < 11) {
                    let highlightLocation = document.getElementById(`${plIndex}-${yIndex}-${xIndex+i}`)
                    highlightLocation.classList.toggle(validReport);
                }
            } else {
                if(yIndex+i < 11) {
                    console.log(`${plIndex}-${yIndex+i}-${xIndex}`);
                    let highlightLocation = document.getElementById(`${plIndex}-${yIndex+i}-${xIndex}`)
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
    }
}




gamePlay.setupGame();

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


//Testing Exports
// module.exports = {createShip, gameBoard, playerNew};







