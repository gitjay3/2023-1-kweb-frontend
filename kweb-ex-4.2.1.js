const ErrorText = element => element.innerText = 'Input Error!';

const displayTimes = () => {
    const number = document.getElementById('number').value;
    const parsedNumber = parseInt(number);
    const timesResult = document.getElementById('times-result');

    if (!isFinite(parsedNumber) || isNaN(parsedNumber)) return ErrorText(timesResult);

    if (parsedNumber != number) return setErrorText(timesResult);

    if (parsedNumber < 1 || parsedNumber > 9) return ErrorText(timesResult);

    const result = [];
    for (let i = 1; i <= 9; i++) {
        result.push(parsedNumber + ' X ' + i + ' = ' + parsedNumber * i);
    }
    timesResult.innerText = result.join('\n');
};