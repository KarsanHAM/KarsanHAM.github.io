<<<<<<< HEAD
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

=======
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

//opdracht 1
function createAverage() {
    var selectGrade1 = document.getElementById("grade1").innerHTML
    console.log(selectGrade1);
    var selectGrade2 = document.getElementById("grade2").innerHTML
    console.log(selectGrade2);
    var selectGrade3 = document.getElementById("grade3").innerHTML
    console.log(selectGrade3);
    var selectGrade4 = document.getElementById("grade4").innerHTML
    console.log(selectGrade4);

    var average = ((parseInt(selectGrade1) + parseInt(selectGrade2) + parseInt(selectGrade3) + parseInt(selectGrade4)) / 4);
    console.log(average)

    selectCourse4 = document.getElementById("course4");

    selectTable = document.getElementById("gradeTable");
    var tR = document.createElement("tr")

    selectCourse4.parentNode.insertBefore(tR, selectCourse4.nextSibling);

    var tD = document.createElement("td")
    var tDav = document.createElement("td")

    var cellText1 = document.createTextNode("Average")
    var cellText2 = document.createTextNode(average)

    tD.appendChild(cellText1);
    tDav.appendChild(cellText2);

    tR.appendChild(tD);
    tR.appendChild(tDav);
}

//opdracht 2

function colouredEvenElements() {
    // var targetList = document.getElementById("course")
    for (let i = 2; i <= 8; i = i + 2) {
        var targetListItem = document.getElementsByClassName(`course${i}`)
        console.log(targetListItem)
        targetListItem.item(0).style.backgroundColor = "red";
    }
}

//opdracht 3
function createImageElement(imageSrcName) {
    var imageElement = document.createElement("img");
    var selectH1 = document.getElementById("h1");
    selectH1.appendChild(imageElement);
    var selectImageElement = document.querySelector("img");
    var ImageSource = document.createAttribute("src");
    ImageSource.value = `${imageSrcName}`
    selectImageElement.setAttributeNode(ImageSource);
}
>>>>>>> 91f71a7fb77c10de0daf3188466342ac314adf29
