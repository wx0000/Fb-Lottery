const possibilities = [
    'Czarek Kaczyński',
    'Tomasz Wlizło',
    'Antonina Komosa',
    'Karol Koms',
    'Victoria Wodyczko',
    'Bernadeta Szadkowska',
    'Julia Herc',
    'Raca Flara',
    'Gabryś Wyszyński',
    'Liwia Aleksandra Kakareko',
    'Dominika Krzywosz',
    'Tomek Wiącek',
    'Dominika Urban',
    'Adam Góral',
    'Pierre Pardiak',
    'Natalia Noga',
    'Julia Skrzyszewska',
    'Witek Smok',
    'Marek Roziński',
    'Wiktor Ziemiański',
    'Klaudia Woźniak',
    'Przemek Brzeziński',
    'Kingaa Siudowska',
    'Alek Hibner',
    'Weronika Wojciechowska',
    'Oliwia Misiak',
    'Kamil Ban Rzeszotek',
    'Aleksander Wróblewski',
];
const addBtn = document.querySelector('button.add');
const cleanBtn = document.querySelector('button.clean');
const showAdviceBtn = document.querySelector('button.showAdvice');
const showOptionsBtn = document.querySelector('button.showOptions');
const advicePlacement = document.querySelector('h1');


let numOfAdvices = possibilities.length;

const addNewAdvice = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const advice = input.value;
    if (input.value.length) {
        for (possibility of possibilities) {
            if (possibility === advice) {
                alert("Dublujesz sie skarbie");
                return
            }
        }
        possibilities.push(advice);
        console.log(advice);
    }
}

const cleanText = () => {
    const possibilities = possibilities;
}

const showAdvice = () => {
    let chosenAdvice = [];
    for (let i = 0; i < numOfAdvices; i++) {
        const index = Math.floor(Math.random() * possibilities.length);
        chosenAdvice = possibilities[index];
        console.log(index);
        console.log(chosenAdvice);
    }
    advicePlacement.textContent = chosenAdvice;

}

const showOptions = () => {
    alert(possibilities);
}

addBtn.addEventListener('click', addNewAdvice);
cleanBtn.addEventListener('click', cleanText);
showAdviceBtn.addEventListener('click', showAdvice);
showOptionsBtn.addEventListener('click', showOptions);