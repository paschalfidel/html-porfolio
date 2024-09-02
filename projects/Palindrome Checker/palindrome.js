const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');


checkBtn.addEventListener('click', function() {
    const inputValue = textInput.value.trim();

    if (inputValue === '') {
        alert('Please input a value');
    } else {
        const isPalindrome = checkPalindrome(inputValue);
        if (isPalindrome) {
            resultDiv.innerHTML = '<span class="bold">' + inputValue + '</span>' + ' is a palindrome';
        } else {
            resultDiv.innerHTML = '<span class="bold">' + inputValue + '</span>' + ' is not a palindrome';
        }
    }
});

function checkPalindrome(str) {
    const strippedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = strippedStr.split('').reverse().join('');
    return strippedStr === reversedStr;
}
