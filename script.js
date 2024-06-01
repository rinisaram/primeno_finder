function checkPrime() {
    const numberInput = document.getElementById('numberInput').value;
    const result = document.getElementById('result');
    const number = parseInt(numberInput);

    if (isNaN(number)) {
        result.value = "Please enter a valid number.";
        return;
    }

    if (number < 2) {
        result.value = "Not a prime number.";
        return;
    }

    for (let i = 2; i < Math.sqrt(number) + 1; i++) {
        if (number % i === 0) {
            result.value = "Not a prime number.";
            return;
        }
    }

    result.value = "Prime number!";
}

function clearInput() {
    document.getElementById('numberInput').value = '';
    document.getElementById('result').value = '';
}
