window.addEventListener("load", init);

//global variables
const carCategories = [
  {
    category: "A",
    minHeight: 0,
    maxHeight: 1.8,
    price: 2.56
  },
  {
    category: "B",
    minHeight: 1.9,
    maxHeight: 3,
    price: 3.05
  },
  {
    category: "C",
    minHeight: 3.1,
    maxHeight: 5,
    price: 5.67
  },
  {
    category: "D",
    minHeight: 5.1,
    maxHeight: 8,
    price: 2.45
  }
];

// console.log(carCategories[0].maxHeight);

/**
 * Function to initialize the application
 * @param {*} event
 */

  //adding eventlistener to the submitbutton
   const submitKnop = document.getElementById('sbmButton');
    submitKnop.addEventListener('click', init);
function init(event) {
  event.preventDefault();
  //function die de hoogte van de voertuigen vergelijkt en daarvoor een andere functie uitvoert.
  function compareHeights () {
    let hoogte = document.getElementById("inputHeight").value;
    console.log(hoogte)
    //input uit het document omzetten naar een number voor een if statement vergelijking.
    //verandert van parseInt() naar Number() zodat het behouden van ,/. getallen wel werkt.
    let hoogteNumber = Number(hoogte);
    // console.log(hoogteNumber)
    // console.log(typeof hoogteNumber)
    if (hoogteNumber >= carCategories[0].minHeight && hoogteNumber <= carCategories[0].maxHeight) {
      typeA ()
      // console.log('yipee')
      // console.log(hoogteNumber)
      // console.log(typeof hoogteNumber)
      // console.log(typeof carCategories[0].minHeight )
    } else if (hoogteNumber >= carCategories[1].minHeight && hoogteNumber <= carCategories[1].maxHeight) {
      // console.log('het werkt prima')
      typeB ();
    } else if (hoogteNumber >= carCategories[2].minHeight && hoogteNumber <= carCategories[2].maxHeight) {
      typeC ();
    } else if (hoogteNumber >= carCategories[3].minHeight && hoogteNumber <= carCategories[3].maxHeight) {
      typeD ();
    } 
  }
  //alle elementen ophalen waarin de output moet worden ingevoerd
  const carType = document.getElementById('category-label');
  const carPrice = document.getElementById('category-price');
  let outputtextNodeType;
  let outputtextNodePrice;
  //functies die de juiste output naar de DOM sturen en de webpagine dynamisch veranderen.
  function typeA () {
    outputtextNodeType = document.createTextNode(`${carCategories[0].category}`)
    outputtextNodePrice = document.createTextNode(`${carCategories[0].price}`)
    carType.appendChild(outputtextNodeType)
    carPrice.appendChild(outputtextNodePrice)
  }
  function typeB () {
    outputtextNodeType = document.createTextNode(`${carCategories[1].category}`)
    outputtextNodePrice = document.createTextNode(`${carCategories[1].price}`)
    carType.appendChild(outputtextNodeType)
    carPrice.appendChild(outputtextNodePrice)
  }
  function typeC () {
    outputtextNodeType = document.createTextNode(`${carCategories[2].category}`)
    outputtextNodePrice = document.createTextNode(`${carCategories[2].price}`)
    carType.appendChild(outputtextNodeType)
    carPrice.appendChild(outputtextNodePrice)
  }
  function typeD () {
    outputtextNodeType = document.createTextNode(`${carCategories[3].category}`)
    outputtextNodePrice = document.createTextNode(`${carCategories[3].price}`)
    carType.appendChild(outputtextNodeType)
    carPrice.appendChild(outputtextNodePrice)
  }
  compareHeights();
  }
  //functies die de juiste output naar de DOM sturen en de webpagine dynamisch veranderen.
