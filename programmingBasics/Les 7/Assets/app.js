// const me = {
//     name: "Kars",
//     age: 22,
//     previousDiploma: "HAVO",
//     petsFamily: ['Kees', 'Annie', 'Stefanie', 'Sanne', 'Sietske'],
//     favVehicle: {
//         Vehicle: "Fiat 500",
//         Wheels: 4
//     },
//     MyNewFunction: function () {
//         console.log(`Mijn favoriete vervoersmiddel is de ${me.favVehicle.Vehicle} en die heeft ${me.favVehicle.Wheels} wielen.`)
//     },
//     logPets: function () {
//         me.petsFamily.forEach(element => {
//             console.log(element)
//         })
//     }
// }
// function logFavRide() {
//     console.log(`Mijn favoriete vervoersmiddel is de ${me.favVehicle.Vehicle} en die heeft ${me.favVehicle.Wheels} wielen.`)
// }

// me.currentStudy = "HBO-ICT"

// me.favFoods = ["Fries", "Burgers", "Sausjes"]

// function Calculator() {
//     return 2 + 2
// }

// me.Calculator = Calculator()

// const productList = [
//     {
//         productName: 'tandenborstel',
//         productPrice: 2.19
//     },
//     {
//         productName: 'bakmeel',
//         productPrice: 0.79
//     },
//     {
//         productName: 'wortels',
//         productPrice: 1.10
//     }
// ];

// var total = 0
// productList.forEach(function (value, index, arr) {
//     total += value.productPrice
//     console.log(total)
// });

// console.log(me.MyNewFunction());
// console.log(me.logPets());

//op 1
// lapRounds = {
//     lap1: '55.99',
//     lap2: '63.00',
//     lap3: '63.01',
//     lap4: '54.01',
//     lap5: '62.79',
//     lap6: '52.88',
//     lap7: '53.10',
//     lap8: '54.12',
// }

// console.log(lapRounds)

//de keys zijn lap1 lap 2 etcetera.

//op 1I

// const teachers = [
//     {
//         name: 'Loek',
//         profession: 'Teacher',
//         brand: 'Linux',
//         HoursPerWeek: 40,
//         salary: 3000,
//         hourPay: function salaryPerHour() {
//             let totalhours = (this.HoursPerWeek * 4);
//             let payPerHour = (this.salary / totalhours);
//             return payPerHour;
//         }
//     },
//     {
//         name: 'Daan',
//         profession: 'Teacher',
//         brand: 'Arduino',
//         HoursPerWeek: 40,
//         salary: 3000,
//         hourPay: function salaryPerHour() {
//             let totalhours = (this.HoursPerWeek * 4);
//             let payPerHour = (this.salary / totalhours);
//             return payPerHour;
//         }
//     },
//     {
//         name: 'Rimmert',
//         profession: 'Teacher',
//         brand: 'Apple',
//         HoursPerWeek: 40,
//         salary: 3000,
//         hourPay: function salaryPerHour() {
//             let totalhours = (this.HoursPerWeek * 4);
//             let payPerHour = (this.salary / totalhours);
//             return payPerHour;
//         }
//     }
// ]

// teachers.forEach(element => {
//     console.log(element.hourPay())
// });
// teachers.forEach(element => {
//     console.log(`I have a ${element.profession} named ${element.name} and he likes to work on a ${element.brand} computer`)
// });

//op 2
// console.log(teachers)

//opdracht 1

function fizz() {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log('Fizz');
        } else {
            console.log(i);
        }
    }
};

//Uitdaging 1
function OnetoN() {
    let N = (Math.floor(Math.random() * 20));
    for (let i = 1; i <= N; i++) {
        console.log(i);
    }
}


//Uitdaging 2
//Een variabele die telt hoevaak getal x deelbaar is en het vergelijkt in een if statement als x = 2 dan logt hij hem
function primeNumbers () {
for (let i = 0; i <= 1000; i++) {
    let x = 0;
    if (i % 1 && i % 1) {
        x = 2;
    };
    if (x = 2) {
        console.log(i);
    };
};
};

function Buzz () {
    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
};

Buzz ()

