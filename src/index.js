
// import "./style.css"
// console.log("hello");

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
    playersAll: [],
    newShips: [],
    newGame: function() {
        //Create players
        let player1Name = "Steve" // Update with Prompt in from user
        playersAll[0] = playerNew("computer");
        playersAll[1] = playerNew(`${player1Name}`);
        //place computer ships
        //place player 1 ships
        //add event listeners to board squares 
    }


}

const domInteract = {
    

}






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









module.exports = {createShip, gameBoard, playerNew};







