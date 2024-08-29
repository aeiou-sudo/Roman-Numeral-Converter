const numberInput = document.getElementById('number-input');
const convertButton = document.getElementById('convert-button');
const resultText = document.getElementById('result-text');
const resultBox = document.getElementById('result-box');


const convertToRoman = num => {
    const ref = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];
    const res = [];

    ref.forEach(function (arr) {
        while (num >= arr[1]) {
            res.push(arr[0]);
            num -= arr[1];
        }
    });

    return res.join('');
};

const parseInput = input => {
    const parseNumber = parseInt(input.value);
    resultBox.classList.remove("hidden");
    if(isNaN(parseNumber)) {
        resultText.innerText = "Please enter a valid number";
    } else if(parseNumber >= 4000) {
        resultText.innerText = "Please enter a number less than or equal to 3999";
    }
     else {
        resultText.innerText = convertToRoman(parseInt(input.value));
    }
    input.value = "";
};

convertButton.addEventListener('click', () => {
    parseInput(numberInput);
});

numberInput.addEventListener('keydown', e => {
    if(e.key === 'Enter') {
        parseInput(numberInput);
    }
});