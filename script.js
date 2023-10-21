const rowElem = document.querySelector(".row");
console.log(rowElem);

let gridString = "";

for (let i = 1; i <= 100; i++) {

    let result;

    if(i % 5 === 0 && i % 3 === 0) {
        result = "fizzbuzz";
        console.log(result);
        gridString += `<div class="square ${result}">FizzBuzz</div>`

    } else  if(i % 5 === 0) {
        result = "buzz";
        console.log(result);
        gridString += `<div class="square ${result}">Buzz</div>`

    } else if(i % 3 === 0) {
        result = "fizz";
        console.log(result);
        gridString += `<div class="square ${result}">Fizz</div>`

    } else {
        gridString += `<div class="square">${i}</div>`
    }
    
}

rowElem.innerHTML = gridString;