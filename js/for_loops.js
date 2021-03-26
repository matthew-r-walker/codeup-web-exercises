showMultiplicationTable(7);

function showMultiplicationTable(num) {
    for (let i = 1; i <= 10; ++i) {
        console.log(num + ' x ' + i + ' = ' + (num * i));
    }
}

for (let i = 1; i <= 10; ++i) {
    let randNum = Math.floor(Math.random() * 181 + 20);
    (randNum % 2 === 0) ? console.log(randNum + ' is even.') : console.log(randNum + ' is odd.');
}

for (let i = 100; i >= 5; i -= 5) {
    console.log(i);
}

for (let i = 1; i <= 9; ++i) {
    console.log(i.toString().repeat(i));
}