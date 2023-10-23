const rowElem = document.querySelector(".row");
console.log(rowElem);

let gridString = "";

for (let i = 1; i <= 100; i++) {

    let result;

    if(i % 5 === 0 && i % 3 === 0) {
        result = "fizzbuzz";

    } else  if(i % 5 === 0) {
        result = "buzz";

    } else if(i % 3 === 0) {
        result = "fizz";

    } else {
        result = i;
    }

    gridString += `<div class="square ${result}">${result}</div>`

    console.log(result);
    
}

rowElem.innerHTML = gridString;