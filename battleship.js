/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module) => {


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









/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmF0dGxlc2hpcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUJBQW1CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHFCQUFxQixtQkFBbUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsd0JBQXdCLE9BQU87QUFDekQsOEJBQThCLG9DQUFvQyxRQUFRO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIseUJBQXlCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsY0FBYztBQUNkLDZDQUE2QztBQUM3QztBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EseUJBQXlCLHdCQUF3QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxPQUFPLElBQUksTUFBTTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxZQUFZO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQVVBLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7VUN6T2xCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuLy8gY29uc29sZS5sb2coXCJoZWxsb1wiKTtcblxuZnVuY3Rpb24gY3JlYXRlU2hpcChsZW5Jbix4SW4seUluLGRpckluKSB7XG4gICAgbGV0IHBvc2l0aW9uQXJyID0gW107XG4gICAgZm9yIChsZXQgaT0wO2k8bGVuSW47aSsrKSB7XG4gICAgICAgIGxldCBzaGlwU3F1YXJlID0ge307XG4gICAgICAgIGlmIChkaXJJbiA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgIHNoaXBTcXVhcmUgPSB7XG4gICAgICAgICAgICAgICAgcG9zWDogeEluICsgaSxcbiAgICAgICAgICAgICAgICBwb3NZOiB5SW4sXG4gICAgICAgICAgICAgICAgaGl0U3RhdHVzOiBmYWxzZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkaXJJbiA9PT0gXCJ5XCIpIHtcbiAgICAgICAgICAgIHNoaXBTcXVhcmUgPSB7XG4gICAgICAgICAgICAgICAgcG9zWDogeEluLFxuICAgICAgICAgICAgICAgIHBvc1k6IHlJbiAraSxcbiAgICAgICAgICAgICAgICBoaXRTdGF0dXM6IGZhbHNlLCBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwb3NpdGlvbkFyci5wdXNoKHNoaXBTcXVhcmUpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vTWV0aG9kcyAmIHByb3BlcnRpZXMgZnJvbSBhIHNoaXBcbiAgICAgICAgX3NoaXBMZW5ndGg6IGxlbkluLFxuICAgICAgICBwb3NpdGlvbjogcG9zaXRpb25BcnIsLy9yZW5hbWUgdG8gc29tZWh0aW5nIG1vcmUgZml0dGluZ1xuICAgICAgICBzdW5rWU46IGZhbHNlLFxuICAgICAgICBoaXQ6IGZ1bmN0aW9uKHNoaXBJbmRleCkge1xuICAgICAgICAgICAgLy8gZm9yIChsZXQgaT0wO2k8dGhpcy5fc2hpcExlbmd0aDtpKyspIHtcbiAgICAgICAgICAgICAgICAvL2lmIGhpdCBpbmRleCBpcyBvbiBzaGlwXG4gICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMucG9zaXRpb25baV0ucG9zWCA9PT0gaGl0WCAmJiB0aGlzLnBvc2l0aW9uW2ldLnBvc1kgPT09IGhpdFkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9pZiBhbHJlYWR5IGhpdFxuICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb25bc2hpcEluZGV4XS5oaXRTdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImludmFsaWQgaGl0XCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBcImludmFsaWRcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJIaXQhXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbltzaGlwSW5kZXhdLmhpdFN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaGl0XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9LFxuICAgICAgICBpc1N1bms6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IGhpdENvdW50ID0gMDtcbiAgICAgICAgICAgIGZvciAoaT0wO2k8dGhpcy5fc2hpcExlbmd0aDtpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbltpXS5oaXRTdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaGl0Q291bnQgKz0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGl0Q291bnQgPiB0aGlzLl9zaGlwTGVuZ3RoLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1bmtZTiA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3Vua1lOO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1bmtZTiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN1bmtZTjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdhbWVCb2FyZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvL01ldGhvZHMgJiBwcm9wZXJ0aWVzIGZyb20gYSBzaGlwXG4gICAgICAgIHNoaXBzQWxsOiBbXSxcbiAgICAgICAgaGl0czogW10sXG4gICAgICAgIG1pc3Nlc0FsbDogW10sIC8va2VlcCB0cmFjayB0byBkaXNwbGF5IG9uIGJvYXJkXG4gICAgICAgIHJlY2lldmVBdHRhY2s6IGZ1bmN0aW9uKGF0a1gsYXRrWSkge1xuICAgICAgICAgICAgLy90YWtlcyBwYWlyIG9mIGNvb3JkaW5hdGVzIGFuZCBkZXRlcm1pbmVzIGlmIGF0dGFjayBoaXQgYSBzaGlwXG4gICAgICAgICAgICAvL2lmIHllcyBzZW5kIGhpdCBmdW5jdGlvbiB0byBzaGlwID4+IHJlY2lldmVzIFwiaGl0XCIgb3IgXCJpbnZhbGlkXCIgYmFja1xuICAgICAgICAgICAgLy9pZiBub3QgcmVjb3JkcyBhIG1pc3NcbiAgICAgICAgICAgIGxldCBoaXRGbGFnID0gZmFsc2U7IC8vb25seSB0byBjaGVjayBpZiB3YXMgYSBoaXQgb24gc2hpcCwgbm90IHZhbGlkL2ludmFsaWRcbiAgICAgICAgICAgIGxldCBtaXNzRmxhZyA9IGZhbHNlOyAvL3NldCB0byB0cnVlIHdoZW4gYXR0YWNrIG5vdCBhIGhpdCBvciBpbnZhbGlkXG4gICAgICAgICAgICBsZXQgYXR0YWNrUmVzcG9uc2UgPSBcIlwiO1xuXG4gICAgICAgICAgICAvL0NoZWNrcyBmb3IgSGl0L0ludmFsaWQgSGl0XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNoaXBzQWxsKTtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLnNoaXBzQWxsLmxlbmd0aDsgaSsrKSB7IC8vZm9yIGFsbCBzaGlwc1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajx0aGlzLnNoaXBzQWxsW2ldLnBvc2l0aW9uLmxlbmd0aDsgaisrKSB7ICAvL2ZvciBhbGwgc3BvdHMgb24gc2hpcFxuICAgICAgICAgICAgICAgICAgICAvL2lmIGhpdCBpbmRleCBpcyBvbiBzaGlwXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdGtYID09PSB0aGlzLnNoaXBzQWxsW2ldLnBvc2l0aW9uW2pdLnBvc1ggJiYgYXRrWSA9PT0gdGhpcy5zaGlwc0FsbFtpXS5wb3NpdGlvbltqXS5wb3NZICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrUmVzcG9uc2UgPSB0aGlzLnNoaXBzQWxsW2ldLmhpdChqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpdEZsYWcgPSB0cnVlOyAvL3dpbGwgYWx3YXlzIGJlIHRydWUgaWYgcG9zaXRpb24gaXMgb24gYSBzaGlwIHBlciBpZiBzdGF0ZW1lbnQgYWJvdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9DaGVja3MgZm9yIEludmFsaWQgTWlzc1xuICAgICAgICAgICAgaWYgKCFoaXRGbGFnKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaz0wOyBrPHRoaXMubWlzc2VzQWxsLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdGtYID09PSB0aGlzLm1pc3Nlc0FsbFtrXS5wb3NYICYmIGF0a1kgPT09IHRoaXMubWlzc2VzQWxsW2tdLnBvc1kpe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbnZhbGlkIG1pc3MhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrUmVzcG9uc2UgPSBcImludmFsaWRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pc3NGbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9DaGVja3MgZm9yIE1pc3NcbiAgICAgICAgICAgIGlmIChhdHRhY2tSZXNwb25zZS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ2YWxpZCBtaXNzIVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1pc3Nlc0FsbC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zWDogYXRrWCxcbiAgICAgICAgICAgICAgICAgICAgcG9zWTogYXRrWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGF0dGFja1Jlc3BvbnNlID0gXCJtaXNzXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXR0YWNrUmVzcG9uc2U7XG4gICAgICAgIH0sXG4gICAgICAgIHBsYWNlU2hpcDogZnVuY3Rpb24oc2hpcExlbmd0aCxpbmRleFN0YXJ0LGRpcmVjdGlvbikge1xuICAgICAgICAgICAgLy9ldmVudHVhbGx5IHdpbGwgZXhwZWN0IGluZGV4IHRvIGNvbWUgaW4gYXMgYSBjbGljayBldmVudCAoZS50YXJnZXQuaWQgPSBcIngseVwiKVxuICAgICAgICAgICAgLy9leHBlY3RpaW5nIGRpcmVjdGlvbiBhcyBzdHJpbmcgXCJ4XCIgb3IgXCJ5XCJcbiAgICAgICAgICAgIC8vbGV0IGluZGljZXMgPSBpbmRleFN0YXJ0LnNwbGl0KFwiLFwiKTsgLy8gW1hwb3MsWXBvc11cbiAgICAgICAgICAgIGxldCBpbmRpY2VzID0gaW5kZXhTdGFydC5zcGxpdChcIixcIikubWFwKChzdHJpbmcpID0+IE51bWJlcihzdHJpbmcpKTtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwieFwiICYmIChpbmRpY2VzWzBdK3NoaXBMZW5ndGgtMSkgPiAxMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNBbGwucHVzaChcIkVycm9yXCIpOyAvL1VwZGF0ZSB3aXRoIEVycm9yIEhhbmRsaW5nIFxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRXJyb3IsIG1vdmUgc2hpcCBsZWZ0LCBvciBjaGFuZ2UgZGlyZWN0aW9uXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwieVwiICYmIChpbmRpY2VzWzFdK3NoaXBMZW5ndGgtMSkgPiAxMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNBbGwucHVzaChcIkVycm9yXCIpOyAvL1VwZGF0ZSB3aXRoIEVycm9yIEhhbmRsaW5nIFxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRXJyb3IsIG1vdmUgc2hpcCB1cCwgb3IgY2hhbmdlIGRpcmVjdGlvblwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwbGFjaW5nIHNoaXBcIik7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1NoaXAgPSBjcmVhdGVTaGlwKHNoaXBMZW5ndGgsaW5kaWNlc1swXSxpbmRpY2VzWzFdLGRpcmVjdGlvbik7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwc0FsbC5wdXNoKG5ld1NoaXApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFsbFN1bms6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IHN1bmtDb3VudCA9IDA7XG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLnNoaXBzQWxsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHNBbGxbMF0uaXNTdW5rKCkpXG4gICAgICAgICAgICAgICAgc3Vua0NvdW50ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3Vua0NvdW50ID4gdGhpcy5zaGlwc0FsbC5sZW5ndGggLTEpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIHBsYXllck5ldyhuYW1lKSB7XG4gICAgaWYgKG5hbWUgPT09IFwiY29tcHV0ZXJcIikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogXCJDb21wdXRlclwiLFxuICAgICAgICAgICAgYm9hcmQ6IGdhbWVCb2FyZCgpLFxuICAgICAgICAgICAgYXR0YWNrOiBmdW5jdGlvbihwbGF5ZXJJbikge1xuICAgICAgICAgICAgICAgIC8vZXZlbnR1YWxseSB3aWxsIGV4cGVjdCBpbmRleCB0byBjb21lIGluIGFzIGEgY2xpY2sgZXZlbnQgKGUudGFyZ2V0LmlkID0gXCJ4LHlcIilcbiAgICAgICAgICAgICAgICBsZXQgYXR0YWNrU3RvcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHdoaWxlICghYXR0YWNrU3RvcCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZFggPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTApKzEpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZFkgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTApKzEpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXR0YWNrUmVzdWx0ID0gcGxheWVySW4uYm9hcmQucmVjaWV2ZUF0dGFjayhyYW5kWCxyYW5kWSlcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEF0dGFjayBSZXN1bHQgYXQgeDoke3JhbmRYfSB5OiR7cmFuZFl9YCxhdHRhY2tSZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGF0dGFja1Jlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImhpdFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFja1N0b3AgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdHRhY2tSZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibWlzc1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFja1N0b3AgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdHRhY2tSZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW52YWxpZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJ5IGFub3RoZXIgYXR0YWNrXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8va2VlcCBhdHRhY2tpbmcgYi9jIGF0dGFjayB3YXMgaW52YWxpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhdHRhY2tSZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgYm9hcmQ6IGdhbWVCb2FyZCgpLFxuICAgICAgICAgICAgYXR0YWNrOiBmdW5jdGlvbihwbGF5ZXJJbix4SW4seUluKSB7XG4gICAgICAgICAgICAgICAgLy9ldmVudHVhbGx5IHdpbGwgZXhwZWN0IGluZGV4IHRvIGNvbWUgaW4gYXMgYSBjbGljayBldmVudCAoZS50YXJnZXQuaWQgPSBcIngseVwiKVxuICAgICAgICAgICAgICAgIGxldCBhdHRhY2tSZXN1bHQgPSBwbGF5ZXJJbi5ib2FyZC5yZWNpZXZlQXR0YWNrKHhJbix5SW4pO1xuICAgICAgICAgICAgICAgIHJldHVybiBhdHRhY2tSZXN1bHQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBnYW1lUGxheSA9IHtcbiAgICBwbGF5ZXJzQWxsOiBbXSxcbiAgICBuZXdTaGlwczogW10sXG4gICAgbmV3R2FtZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vQ3JlYXRlIHBsYXllcnNcbiAgICAgICAgbGV0IHBsYXllcjFOYW1lID0gXCJTdGV2ZVwiIC8vIFVwZGF0ZSB3aXRoIFByb21wdCBpbiBmcm9tIHVzZXJcbiAgICAgICAgcGxheWVyc0FsbFswXSA9IHBsYXllck5ldyhcImNvbXB1dGVyXCIpO1xuICAgICAgICBwbGF5ZXJzQWxsWzFdID0gcGxheWVyTmV3KGAke3BsYXllcjFOYW1lfWApO1xuICAgICAgICAvL3BsYWNlIGNvbXB1dGVyIHNoaXBzXG4gICAgICAgIC8vcGxhY2UgcGxheWVyIDEgc2hpcHNcbiAgICAgICAgLy9hZGQgZXZlbnQgbGlzdGVuZXJzIHRvIGJvYXJkIHNxdWFyZXMgXG4gICAgfVxuXG5cbn1cblxuY29uc3QgZG9tSW50ZXJhY3QgPSB7XG4gICAgXG5cbn1cblxuXG5cblxuXG5cbi8vRGVidWdnaW5nIENhc2VzXG5cbi8vIGxldCB0ZXN0Qm9hcmQgPSBnYW1lQm9hcmQoKTtcbi8vIHRlc3RCb2FyZC5wbGFjZVNoaXAoNSxcIjMsMlwiLFwieVwiKTtcbi8vIGNvbnNvbGUubG9nKHRlc3RCb2FyZC5yZWNpZXZlQXR0YWNrKDQsMikpO1xuLy8gY29uc29sZS5sb2codGVzdEJvYXJkLnJlY2lldmVBdHRhY2soNCwyKSk7XG5cbi8vIGxldCBwbGF5ZXIxID0gcGxheWVyTmV3KFwiU3RldmVcIik7XG4vLyBwbGF5ZXIxLmJvYXJkLnBsYWNlU2hpcCgxMCxcIjEsMVwiLFwieFwiKTtcbi8vIGNvbnNvbGUubG9nKHBsYXllcjEpO1xuLy8gbGV0IHBsYXllckNvbXAgPSBwbGF5ZXJOZXcoXCJjb21wdXRlclwiKTtcbi8vIHBsYXllckNvbXAuYXR0YWNrKHBsYXllcjEpO1xuXG5cblxuXG5cblxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSB7Y3JlYXRlU2hpcCwgZ2FtZUJvYXJkLCBwbGF5ZXJOZXd9O1xuXG5cblxuXG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=