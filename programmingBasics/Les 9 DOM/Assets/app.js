//les oefening 1

// let fullList = document.getElementById('grocerylist')
// console.log(fullList)

// //les oefening 2
// let groceriesItem1 = document.getElementById("item1")
// console.log(groceriesItem1)

//les oefening 3

// //les oefening 4

// let grocerylist = [
//     {
//         name: "brood",
//         price: 0.10,
        
//     },
//     {
//         name: "yeet",
//         price: 0.20
//     }
// ]


// for (let i = 0; i < 2;i++) {
//     var itemName = grocerylist[i].name;
//     var itemPrice = grocerylist[i].price;
// }

// function writetoTheDom(grosName, grosPrice) {
//     var table = document.getElementById("groceryList");

//     let tr = document.createElement('tr');
//     let tdName = document.createElement('td');
//     tdName.innerText = grosName;
//     let tdPrice = document.createElement('td');
//     tdPrice.innerText = grosPrice;
//     tr.append(tdName);
//     tr.append(tdPrice);
//     table.append(tr);
// }   

// for (i = 0; i < 2; i++) {
//     writetoTheDom(itemName, itemPrice)
// }

// function init() {
// const submitButton = document.getElementById('submit-btn');
// submitButton.addEventListener('click', clickEventHandler);
// }

// function clickEventHandler(event) {
//     event.preventDefault();
//     console.log(event);
// }

// function start() {
//     const getImage = document.querySelectorAll('img');
//     getImage.addEventListener('click',getImageID());
//     }
    
//     function getImageID(event) {
//         event.preventDefault;
//         console.log(event);
//     }

//     start();


get value from input field
function getBoxText() {
    event.preventDefault();
    let shoppingInput = document.getElementById('shopping-input').value;
    console.log(shoppingInput);
}

function saveInList(shoppingInput) {
    const ulList = document
}