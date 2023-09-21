const numberButtons = document.querySelectorAll('.numberButton');
const bottomLine = document.querySelector('.bottomLine')
const topLine = document.querySelector('.topLine')
const operators = document.querySelectorAll('.operator')

numberButtons.forEach(number => {
    number.addEventListener('click', handleNumber)
})

operators.forEach(operator => {
    operator.addEventListener('click', handleOperator)
})

function handleNumber(e) {
    bottomLine.textContent += e.target.value;
}

function handleOperator(e) {
    topLine.textContent += bottomLine.textContent;
    topLine.textContent += e.target.value;
    bottomLine.textContent = ``;
}






