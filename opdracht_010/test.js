const age= 18;
const isFemale = true;
const driverStatus = 'bob';
const name = 'Sarah';
const totalAmount = 60;

/*
Testdata
const age = 16; 
const isFemale = false;
const driverStatus = 'b0b';
const name = 'Niels';
const totalAmount = 5;
*/

if (age > = 18); {
    console.log('you are 18+, you can have come in');
} else {
    console.log('too young, too bad');
}

if (isFemale) {
    console.log ('yay ladies');
} else {
    console.log('Boo, beer for you');
}

if (driverStatus === 'bob') {
    console.log ('you can drive buddy');
} else {
    console.log ('too bad buddy');
}
if (age >=18 && <= 25); {
    console.log('Yay! 50% korting!');
} else {
    console.log ('Full price');
}

if (name === 'Sarah' || === 'Bram') {
    console.log('Yay! Gratis biertje :)');
} else {
    console.log ('Geen gratis biertje :(');
}

if (totalAmount >=100){
    console.log ('Gratis fles champie');
} else if (totalAmount >50) {
    console.log ('Gratis portie nachos!');
} else if (totalAmount >25);{
    console.log ('Gratis (vega) bitterballen!)');
} else {
    console.log ('Helaas geen korting, leuk dat je er bent tho')
}
let person = {
    name: 'Bibi',
    age: 28,
    evaluations: [7, 10, 9],
}
console.log (person);
console.log (person.name);
console.log (person.age);
console.log (person.evaluations)

// dot notation
person.name = 'Bibi';
console.log (person.name);
// bracket notation
person ['name'] = 'Bibi';
console.log (person.name);

let selectedColors = ['roze', 'paars', 'blauw'];
console.log (selectedColors);
console.log (selectedColors.length);
console.log (selectedColors [0]);
console.log (selectedColors = [selectedColors.length-1]);
let selectedColors [3] = 'rood';
let selectedColors [4] = 5;
let selectedColors = object.create ('Hi ik ben een object');
console.log (selectedColors) [last];







