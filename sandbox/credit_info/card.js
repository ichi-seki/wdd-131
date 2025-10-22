function isCardNumberValid(number) {
    return number === '1234123412341234'
}

function displayError(msg){
    document.querySelector('.errorMsg').innerHTML = msg
}

function submitHandler(e){
    e.preventDefault()

    let errorMsg = ''
    displayError('')

    const cardNumberValue = this.card_num.value
    const monthValue = this.month.value
    const yearValue = this.year.value

    if (isNaN(cardNumberValue)) {
        errorMsg += 'Card number is not a valid number. \n'
    } else if (!isCardNumberValid(cardNumberValue)) {
        errorMsg += 'Card number is not a valid card number. \n'
    }

    const fullYear = parseInt('20' + yearValue);
    const nextMonthDate = new Date(fullYear, monthValue);

    if (nextMonthDate < new Date()) {
        errorMsg += 'Expiry date is in the past. \n'
    }

    if (errorMsg !== '') {
        displayError(errorMsg)
        return false
    }

    console.log('Form submission successful (Validation Passed!)')
    return true
}

document.querySelector('.card').addEventListener('submit', submitHandler)