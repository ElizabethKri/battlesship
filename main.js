//позиция корабля
const location1 = 3
const location2 = 4
const location3 = 5

//потоплен корабль или нет
let isSunk = false

//предполагаемая позиция корабля ("выстрел")
let guess;

//счетчитк попаданий
let hits = 0

while (isSunk === false){
    guess = +prompt("Fire! Enter a number 0-6")
    if (guess === location1 || guess === location2 || guess === location3 ){
        alert('Hit!')
        //считаем попадания
        hits = hits +1
        if(hits === 3){
            isSunk === true;
            alert("You sank my battleship!")
        }
    } else {
        alert("Miss")
    }
}