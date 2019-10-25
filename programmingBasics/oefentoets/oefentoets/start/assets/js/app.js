window.addEventListener('load', init);

function init() {
    console.log('DOM is loaded');
}

const vragenEnAntwoorden = [
    {
        naam: 'vraag1',
        vraag: '01101000 01100101 01101100 01101100 01101111',
        antwoord: 'hello'
    },
    {
        naam: 'vraag2',
        vraag: '01010111 01100101 01101100 01101011 01101111 01101101',
        antwoord: 'welkom'
    },
    {
        naam: 'vraag3',
        vraag: '01010100 01101111 01110100 00100000 01111010 01101001 01100101 01101110 01110011',
        antwoord: 'tot ziens'
    },
    {
        naam: 'vraag4',
        vraag: '01000111 01110010 01101111 01100101 01110100 01101010 01100101 01110011',
        antwoord: 'groetjes'
    }
]

let lastNumber
let i
let number
let vraagVraag
let vraagAntwoord
let vraagVraagTextNode
let vraagtext
let vraagNaam
let resultTextInput
let resultText
let x = 0
let Antwoordtext = " "
function learnBinary() {
    getRandomQuestion()
    function getRandomQuestion() {
        function getRandomNumber() {
            i = Math.floor(Math.random() * 3)
            if (i === lastNumber) {
                return getRandomNumber()
            } else {
                return i;
            }
        }
        const number = getRandomNumber();
        lastNumber = number

        vraagNaam = vragenEnAntwoorden[number].naam;
        vraagVraag = vragenEnAntwoorden[number].vraag;
        vraagAntwoord = vragenEnAntwoorden[number].antwoord;
        vraagVraagTextNode = document.createTextNode(vraagVraag)
        vraagtext = document.getElementById('questionText')
        vraagtext.appendChild(vraagVraagTextNode)
    }

    document.getElementById("submit").addEventListener('click', function checkAnswer() {
        event.preventDefault()
        if (x >= 1) {
            resultText.removeChild(resultTextInput)
        }
        console.log(vraagAntwoord)
        resultText = document.getElementById('answer')
        let Antwoordtext = document.getElementById('inputAnswers').value
        Antwoordtext = String(Antwoordtext)
        Antwoordtext = Antwoordtext.toLowerCase()
        console.log(Antwoordtext)
        if (Antwoordtext === vraagAntwoord) {
            document.getElementById("inputAnswer").className = "bg-green";
            resultTextInput = document.createTextNode(`Je antwoord ${Antwoordtext} is helemaal goed!`)
            setTimeout(getRandomQuestion, 3000)
        } else {
            document.getElementById("inputAnswer").className = "bg-red";
            resultTextInput = document.createTextNode(`Helaas ${Antwoordtext} is niet juist, probeer het nog eens.`)
        }
        resultText.appendChild(resultTextInput)
        x = x + 1
    });
}
learnBinary()