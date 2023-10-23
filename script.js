const rowElem = document.querySelector(".row");
console.log(rowElem);

let gridString = "";

for (let i = 1; i <= 100; i++) {

    let result;
    let className = "";

    if(i % 5 === 0 && i % 3 === 0) {
        result = "fizzbuzz";
        className = "fizzbuzz";
    } else  if(i % 5 === 0) {
        result = "buzz";
        className = "buzz";

    } else if(i % 3 === 0) {
        result = "fizz";
        className = "fizz";

    } else {
        result = i;
    }

    gridString += `<div class="square ${className}">${result}</div>`

    console.log(result);
    
}

rowElem.innerHTML = gridString;