let current = ''
let previous = ''
let operator = ''

const display = document.getElementById('display')

function updateDisplay() {
    display.value = current
}

function appendNumber(number) {
    current += number
    updateDisplay()
}

function chooseOperator(op) {
    if (current === '') return;
    if (previous !== '') {
        calculate()
    }

    operator = op
    previous = current
    current = ''
}
