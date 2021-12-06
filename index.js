// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
}

const gifts = ["teddy bear", "dron", "doll"];
function wrapGiftsWithFor(gifts) {
    console.log("\n---= FOR LOOP =---");
    for (let i = 0; i < gifts.length; i++) {
        //debugger;
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
}
wrapGiftsWithFor(gifts);

function wrapGiftsWithWhile(gifts) {
    console.log("\n---= WHILE LOOP =---");
    let i = 0;
    while (i < gifts.length) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i += 1;
    }
}
wrapGiftsWithWhile(gifts);

//1st Assignment with for()
console.log("\n---= 1st Assignment =---");

const names = ["Charlie", "Samip", "Ali"];
function writeCards(names, event) {
    const cards = [];
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return cards;
}
function printCards (cards) {
    for (let i = 0; i < cards.length; i++) {
        console.log(cards[i]);
    }
}
printCards(writeCards(names, "birthday"));

//2nd Assignment with while()
console.log("\n---= 2nd Assignment =---");

function countDown (num) {
    if (num >= 0) {
        while (num >= 0) {
            console.log(num);
            num--;
        }
    } else {
        console.log("Entered number is negative, please try again!");
    }
}
countDown(10);