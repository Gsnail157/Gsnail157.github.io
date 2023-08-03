// your code for the current homework goes here
let size = 25;
let timerId;
// If the go button was clicked
let isIncrementing = false;
let deadCellColor = "white";
let liveCellColor = "green";

// returns the default 2D array. Checker pattern of true and false
function starting2DArr(){
    let arr = [];
    let previous = false;
    for (let i = 0; i < size; i++){
        let temp = [];
        for (let j = 0; j < size; j++){
            if (previous){
                temp.push(false);
                previous = false;
            } else {
                temp.push(true);
                previous = true;
            }
        }
        arr.push(temp);
    }
    return arr;
}

// Create the html table and adds the inital checkered pattern 
function initBoard(){
    let dimension = "15px";
    let alt = true;
    let tbody = document.createElement("tbody");
    for (let i = 0; i < size; i++){
        let tr = document.createElement("tr");
        for (let j = 0; j < size; j++){
            let td = document.createElement("td");
            td.style.width = dimension;
            td.style.height = dimension;
            if (alt){
                td.style.backgroundColor = liveCellColor;
                alt = false;
            } else{
                td.style.backgroundColor = deadCellColor;
                alt = true;
            }
            tr.append(td);
        }
        tbody.append(tr);
    }
    document.getElementById("table").append(tbody);
    return
}

// reads the current html pattern and returns a 2D array representation in true or false
function readBoard(){
    let arr = [];
    let tbody = document.getElementById("table").children[0];
    for (let i = 0; i < size; i++){
        let temp = [];
        for (let j = 0; j < size; j++){
            let td = tbody.children[i].children[j];
            let color = td.style.backgroundColor;
            if (color === liveCellColor){
                temp.push(true);
            } else {
                temp.push(false);
            }
        }
        arr.push(temp);
    }
    return arr;
}

// changes the colors of the html table 
function updateBoard(arr){
    let tbody = document.getElementById("table").children[0];
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            let td = tbody.children[i].children[j];
            if (arr[i][j] === true){
                td.style.backgroundColor = liveCellColor;
            } else {
                td.style.backgroundColor = deadCellColor;
            }
        }
    }
}

function step(){
    let currBoard = readBoard();
    let newBoard = stepBoard(currBoard);
    updateBoard(newBoard);
    return;
}

function go(){
    if (!isIncrementing){
        isIncrementing = true;
        timerId = setInterval(() => step(), 100);
    } else {
        return;
    }
}

function pause(){
    clearInterval(timerId);
    isIncrementing = false;
    return;
}

function reset(){
    clearInterval(timerId);
    isIncrementing = false;
    updateBoard(starting2DArr());
    return;
}

function random(){
    if (isIncrementing){
        pause();
        return;
    }
    let arr = [];
    for (let i = 0; i < size; i++){
        let temp = [];
        for (let j = 0; j < size; j++){
            if (Math.random() < 0.5){
                temp.push(true);
            } else {
                temp.push(false);
            }
        }
        arr.push(temp);
    }
    updateBoard(arr);
    return;
}

initBoard();