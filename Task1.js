function firstFunc() {
    let first = prompt('Enter first number', '');
    let second = prompt('Enter second number','');
    if(isNaN(parseInt(first)) || isNaN(parseInt(second)) || second > 32 || first < 0 || second < 2) {
        console.log('Некорректный ввод!');
    }
    else { console.log((+first).toString(+second));}
}

function secondFunc() {
    let first1 = prompt('Enter first number', '');
    if(isNaN(parseInt(first1))) { return;}
    let second1 = prompt('Enter second number', '');
    if(isNaN(parseInt(second1))) { return;}
    console.log((+first1 + +second1) + ', ' + (+first1 / +second1));
}