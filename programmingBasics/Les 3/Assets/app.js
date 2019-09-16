console.log('Hello');
const firstName = "Kars";
const lastName = "Hamelink";
let age = "22";

//template string
console.log(`Hallo, ik ben ${firstName} ${lastName} en ik ben ${age} jaar oud.`);
//string concatenation

var priceOfAnApple = 0.59;
var numberOfApples = 200;

const total = priceOfAnApple * numberOfApples;

console.log(`200 apples cost: ${total}`);
console.log((9 / 5) * 10 + 32);

const message = `Please visit the HZ University of applied sciences`;
console.log(message.replace("applied", "mad"));

//functie die moet aangeven of een nummer even of oneven is
//pas de variabele checkedNumber aan naar het nummer dat je wilt checken!
const checkedNumber = 5;
//nummer dat gechecked word
function isOdd(checkedNumber) {
    return checkedNumber % 2;
};
//functie die checked die 1 of 0 output depending on de input 
console.log(isOdd(5));
//logje om te checken wat de uitkomst van de functie is
//pas het nummer tussen de haakjes isOdd(/jouwnummerhier/) aan naar het nummer dat je wilt checken!
const loggedNumber = isOdd(5);
function messagelog() {
    if (loggedNumber == 1) { return `${checkedNumber} is an odd number` }
    else { return `${checkedNumber} is an even number` }
};
//if else statement die met de output van isOdd() checked of het nummer even of oneven is 
console.log(messagelog());
//de call van de messagelog functie

//string waar "not" uitgehaald moet worden
let string = "Programming is not so cool";
//definiëren van de variabele naam van de string die de oude string pakt en hier "not" replaced met helemaal niks
let newString = string.replace("not", "");
//presentatie van de nieuwe string zonder "not"
console.log(newString);

//comparism variable
let compare = '1400' === "Ik woon in Naboo";
console.log(compare) //prints: false
//dit is geen slimme vraag want het getal word nu beschouwd als een string een betere manier om het op te schrijven is: 1400 ipv '1400'
//zodat javascript het als een Integer beschouwd 