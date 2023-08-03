function stepBoard(arr2d){
    // Case 1
    if (arr2d.length === 0 ){
        return [];   
    }

    let maxRow = arr2d.length - 1;
    let maxCol = arr2d[0].length - 1;

    let minRow = 0;
    let minCol = 0;

    // Deep Copy New Array
    let newArr = [];
    for (let i = 0; i < arr2d.length; i++){
        newArr.push(Array.from(arr2d[i]))
    }

    // Go through Each Cell 
    for (let i = 0; i < arr2d.length; i++){
        for(let j = 0; j < arr2d[i].length; j++){

            // Check every surrounding cell if it is live or dead
            let liveCells = 0; // We just need to keep track of the surrounding live cells
            let currentCell = newArr[i][j];
            let currentRow = i;
            let currentCol = j;
            
            // Check Left Bottom Corner
            if ((maxRow >= currentRow + 1) && (minCol <= currentCol - 1)){
                let leftBotCorner = arr2d[i + 1][j - 1];
                if (leftBotCorner){
                    liveCells += 1;
                }
            }

            // Check Right Bottom Corner
            if ((maxRow >= currentRow + 1) && (maxCol >= currentCol + 1)){
                let rightBotCorner = arr2d[i + 1][j + 1];
                if (rightBotCorner){
                    liveCells += 1;
                }
            }

            // Check Left Top Corner
            if ((minRow <= currentRow - 1) && (minCol <= currentCol - 1)){
                let leftTopCorner = arr2d[i - 1][j - 1];
                if (leftTopCorner){
                    liveCells += 1;
                }
            }

            // Check Right Top Corner
            if ((minRow <= currentRow - 1) && (maxCol >= currentCol + 1)){
                let rightTopCorner = arr2d[i - 1][j + 1];
                if (rightTopCorner){
                    liveCells += 1;
                }
            }

            // Check Top
            if ((minRow <= currentRow - 1)){
                let top = arr2d[i - 1][j];
                if (top){
                    liveCells += 1;
                }
            }

            // Check Bottom
            if ((maxRow >= currentRow + 1)){
                let bot = arr2d[i + 1][j];
                if (bot){
                    liveCells += 1;
                }
            }

            // Check Left
            if ((minCol <= currentCol - 1 )){
                let left = arr2d[i][j - 1];
                if (left){
                    liveCells += 1;
                }
            }

            // Check Right
            if ((maxCol >= currentCol + 1)){
                let right = arr2d[i][j + 1];
                if (right){
                    liveCells += 1;
                }
            }

            // RULES
            if (currentCell){
                if (liveCells === 2 || liveCells === 3){
                    newArr[i][j] = true;
                } else {
                    newArr[i][j] = false;
                }
            } else {
                if (liveCells == 3){
                    newArr[i][j] = true;
                } else {
                    newArr[i][j] = currentCell;
                }
            }
        }
    }
    return newArr;
}