let usefullItems = ['Tandenborstel', 'Deodorant', 'Bakmeel', 'Wortels', 'Tandpasta', 'Krop Sla', 'Maggi', 'Croky Chips', 'WC papier', 'Shampoo'];


usefullItems.push('Barbecuesausje');
console.table(usefullItems);
console.table(usefullItems.pop());

for (let i = 0; i < usefullItems.length; i++) {
    console.log(usefullItems[i])
}

const newArray = usefullItems.map(function (value, index, arr) {
    return `Product ${index}: ${usefullItems[index]}`
});

console.log(newArray);

const productPrices = [2.10, 4.99, 5.60, 0.40, 5.44, 7.33, 2.33, 2.49, 2.10];


function Som(array) {
    var x = 2.10;
    for (let i = 1; i < (array).length; i++) {
        var x = x + array[i];
    }
    return x
}

console.log(Som(productPrices));

function gem() {
    var x = 2.10;
    for (let i = 1; i < productPrices.length; i++) {
        var x = x + productPrices[i];
    }
    return x / productPrices.length
}

console.log(gem())

function highestValue() {
    var x = 2.10;
    for (let i = 1; i < productPrices.length; i++) {
        if (x < productPrices[i]) {
            x = productPrices[i];
        }
    }
    return x;
}

console.log(highestValue())

//opdracht 1

const lapRounds = [2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];
function randomElement(array) {
    let RNG = Math.random() * array.length;
    let RNG2 = Math.floor(RNG);
    let randomElement = array[RNG2];
    return randomElement;
};

console.log(randomElement(lapRounds));

//opdracht 2

const allMyRecords = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
];

allMyRecords.forEach(element => {
    for (let i = 0; i <= 2; i++) {
        console.log(element[i])
    }
});

//opdracht 3

function isSmallEnough(value) {
    return value < 4;
}

var filtered = lapRounds.filter(isSmallEnough);
console.log(filtered)



