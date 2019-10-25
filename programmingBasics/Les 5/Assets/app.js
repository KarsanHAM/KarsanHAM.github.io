//opdracht 1
let i = 0;

while(i < 11) {
console.log(i);
i++;
}
//opdracht 2
let maandag = 'Het is Maandag!'

let maandagLength = maandag.length

while (maandagLength >= 0) {
    console.log(maandag.charAt(maandagLength));
    maandagLength--;
};

//opdracht 3
let geweldig = 'Geweldig'

let geweldigLength = geweldig.length

let newString = "";

while (geweldigLength >= 0) {
    newString += (geweldig.charAt(geweldigLength));
    geweldigLength--;
};

console.log(newString)

//opdracht 4


// opdracht 2.1
for (let i = 1; i <= 10;i++) {
    console.log(i)
}

//opdracht 2.2
for (let i = 0; i <= maandagLength; i++) {
    console.log(maandag.charAt(i))
}

//opdracht 2.3Gebruik een for loop om te checken welk getal in deelbaar is door 3 bijvoorbeeld in de reeks van 1 - 25;

for (let i = 0; i <= 25; i++) {
    if ( i % 3 == 0) {
        console.log(i)
    }
}

//opracht 3.1
let i = 1;

while (i <= 40) {
    if (i % 4 == 0) {
        console.log(`${i} is dividable by 4`);
    } else {
        console.log(`${i} is not divisable by 4`);
    };
    i++;
}

opdracht 3.2
let total = 1

for (let i = 0; i <= 10; i++) {
    total2 = total + i;
    total3 = total2 + i;
    console.log(total3)
}


les 6
function pleaseDoNotShoutMyName (myName) {
    let whisper = '...whispering.......' + myName;
    return whisper;
}

const myName = pleaseDoNotShoutMyName('kees')

console.log(pleaseDoNotShoutMyName('Rimmert'));

6.1.1 opdracht

function giveMeSomeNiceName(gender) {
    let myNewName = null;
    if (gender == 'male') {
        console.log('My name is mike');
    } else if (gender == 'female') {
        console.log('My name is Emma');
    } else {
        console.log('Gender undefined please try the input: male or female');
    }
}

console.log(giveMeSomeNiceName('female'));

function pig(numberOfPigs) {
    for (let i = 0; i <= numberOfPigs; i++) {
        let Piggo = `\u{1F437}`
        console.log(`${Piggo.repeat(i)} Knor!`)
    }
}

pig(100);

//assigning values outside of the function to create: 1,1
var i = 1;
var x = 1;
fibonaci2 = 0;
console.log(`${i}, ${x}`);
//creating 2
let startingLog = i + x;
console.log(startingLog);
//while loop omdat een incrementerende loop vervelend stopt bij 144 want dat hoort bij deze opdracht
while (fibonaci2 < 144) {
    //crëert 1 + 1 = 2 en slaat het resultaat op in i
    fibonaci = i += x;
    //crëert 1 + 2 = 3 en slaat dit resultaat op in i
    fibonaci2 = i += x;
    //var i = x slaat de momentele waarde van x op en gebruikt deze bij de volgende iteratie
    var i = x;
    //x word teruggezet naar het resultaat van de eerste som wat in dit geval bijvoorbeeld 2 is zodat deze ook weer bij de
    //volgende iteratie gebruikt kan worden
    var x = fibonaci;
    //laat het resultaat van de fibonaci2 som zien
    console.log(`${fibonaci2}`);
}
    //opdracht 3
    const array = [2, 4, 8, 9, 12, 13];
    console.log(array[0])
    var x = array[0];
    for (let i = 1; i <= 6; i++) {
        var y = x += array[i];
        console.log(x);
    }