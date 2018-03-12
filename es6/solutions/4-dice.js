rollDice = () => Math.ceil(Math.random() * 6);

randomWait = () => Math.ceil(Math.random() * 5000);

createDice = () => new Promise((resolve) => {
    setTimeout(() => resolve(rollDice()) , randomWait());
});

let dice1 = createDice();
let dice2 = createDice();
let dice3 = createDice();

dice1.then(d1 => console.log('Dice 1', d1));
dice2.then(d1 => console.log('Dice 2', d1));
dice3.then(d1 => console.log('Dice 3', d1));

Promise.all([dice1, dice2, dice3])
    .then( ([d1,d2,d3]) => console.log(`
            Dice 1: ${d1} --- 
            Dice 2: ${d2} --- 
            Dice 3: ${d3} --- 
         `));

