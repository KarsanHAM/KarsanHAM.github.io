console.log('sup')

let currentAction = 'strings'

//als calculating 
//optellen
//aftrekken
//delen
//vermenigvuldigen

//als 'strings' uppercase .length .match .substring .charat

//als boolean als het meer dan 6 is heb je voldoende

//default is currentAction kan niet worden uitgevoerd.

if (currentAction == 'calculating') {
    let x = 5;
    let y = 5;
    console.log(x + y);
    console.log(x - y);
    console.log(x / y);
    console.log(x * y);
} else if (currentAction == 'strings') {
    const string = 'hello world';
    console.log(string.toUpperCase());
    console.log(string.length);
    console.log(string.match('world'));
    console.log(string.substring(1, 11));
    console.log(string.charAt(4));
} else if (currentAction == 'boolean') {
    const grade = 6;
    if (grade >= 6) {
        console.log('Congratulations you passed!');
    } else {
        console.log('You failed, try again.');
    };
} else {
    console.log('currentAction could not be executed, please choose one of the following values: calculating, strings or boolean.');
};

// BMi
const gewicht = 80
const length = 1.70
const bmi = (gewicht / (length * length)).toFixed(1)


console.log(bmi)

if (bmi < 18.5) {
    console.log("Classificatie: Ondergewicht. Risico: laag(maar verhoogd risico op andere aandoeningen)");
} else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Classificatie: Normaal gewicht. Risico: gemiddeld");
} else if (bmi >= 25 && bmi <= 29.9) {
    console.log("Classificatie: Overgewicht. Risico: verhoogd");
} else if (bmi >= 30) {
    console.log("Classificatie: obesitas. Risico: duidelijk verhoogd");
} else {
    console.log("Unexpected value Inputted into the BMI function please re-enter your Length and Weigth in NUMBERS ans try again :)");
};

//opdracht 1
//1.	Maak een if-else statement die checkt of iemand een onvoldoende/voldoende/goed/uitmuntend voor het vak programming basics heeft behaald.
//(onvoldoende:  kleiner dan 6; voldoende: tussen 6 en 7; goed: tussen 7 en 9; uitmuntend: groter dan 9).

const grade = 9

if (grade < 6) {
    console.log('Onvoldoende');
} else if (grade >= 6 && grade <= 6.9) {
    console.log('voldoende');
} else if (grade >= 7 && grade <= 8.9) {
    console.log('goed');
} else if (grade >= 9) {
    console.log('uitmuntend');
}

//opdracht 2

switch (true) {
    case (grade < 6):
        console.log('onvoldoende');
        break;
    case (grade >= 6 && grade <= 6.9):
        console.log('voldoende');
        break;
    case (grade >= 7 && grade <= 8.9):
        console.log('goed');
        break;
    case (grade >= 9):
        console.log('uitmuntend');
        break;
    default:
        console.log('wrong value entered for grade please try again');
};

//opdracht 3

const purchasedBook = true;
const job = 'teacher'
const inTrain = true

if (purchashedBook == true && job == 'teacher' && inTrain == true) {
    console.log('Finally i can enjoy my book')
} else if (purchashedBook == false && job == 'teacher' && inTrain == true) {
    console.log('Time to buy an Ebook!')
} else if (purchashedBook == true && job == 'student' && inTrain == true) {
    console.log('Good thing i got this book for free or else i would not be able to afford it!')
} else if (purchashedBook == true && job == 'teacher' && inTrain == false) {
    console.log('Time to get onto the train so i can read my book!')
} else {
    console.log('Time to buy a book, become a teacher and get on a train!')
}



