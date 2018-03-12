

rollDice = () => Math.ceil(Math.random() * 7);

randomWait = () => Math.floor(Math.random() * 500);

function throwDice() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => resolve(rollDice()), randomWait());
    });
}

let dice1 = throwDice();
let dice2 = throwDice();
let dice3 = throwDice();

Promise.all([dice1, dice2, dice3]).then(res => console.log('Result: ', res));

dice1.then(d1 => console.log('Dice 1: ', d1));
dice2.then(d2 => console.log('Dice 2: ', d2));
dice3.then(d3 => console.log('Dice 3: ', d3));

