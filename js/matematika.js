function add(/* ... */) {
    // ...
}

function sub(/* ... */) {
    // ...
}

function div(/* ... */) {
    // ...
}

function mult(a, b) {
    // ... a * b
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

for (let i = 0; i < arr1.length; i++) {
    // console.log(arr1[i] + arr2[i]);
    //..
    for (let j = 0; j < arr2.length; j++) {
        // console.log(arr2[i] + arr2[j]);
        //..
    }
}



let zenklas = "*";

switch (zenklas) {
    case "+":
        add(/* ... */);
        break;
    case "-":
        sub(/* ... */);
        break;
    case "*":
        mult(/* ... */);
        break;
    case "/":
        div(/* ... */);
        break;
    default:
        console.log("Nepavyko");
        break;
}