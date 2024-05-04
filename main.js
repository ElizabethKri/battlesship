//позиция корабля
const randomLoc = Math.floor(Math.random() * 5); // от 0 до 4
const location1 = randomLoc;
const location2 = location1 + 1;
const location3 = location2 + 1;

//потоплен корабль или нет
let isSunk = false;

//предполагаемая позиция корабля ("выстрел")
let guess;

//счетчитк попаданий
let hits = 0;

//счетчик выстрелов
let guesses = 0;


while (isSunk === false){
    guess = +prompt("Fire! Enter a number 0-6");
    if(guess < 0 || guess > 6){
        alert("Please, enter a valid cell number");
    } else {
        //увеличиваем счетчик выстрелов
        guesses = guesses + 1;
        if (guess === location1 || guess === location2 || guess === location3 ){
            alert('Hit!');
            //считаем попадания
            hits = hits +1;
            if(hits === 3){
                isSunk = true;
                alert("You sank my battleship!");
            }
        } else {
            alert("Miss");
        }
    }
}

const stats = "You have " + hits + " hits out of " + guesses + " shots";
alert(stats)
