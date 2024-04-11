const checkWordBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const resultText = document.getElementById('resultText');
let word = '';
let isPalindrome;




checkWordBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Check if text input field is empty
    if(textInput.value === '' || textInput.value === null) {
        alert('Please input a value');
    } else {
        word = textInput.value;
        checkPalindrome(word);
        displayResult(isPalindrome, word);
    }
    
})

const checkPalindrome = (w) => {
    // Clean the word or words
    const newWord = w.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Reverse the string
    const reverseWord = newWord.split('').reverse().join('');

    if(newWord == reverseWord) {
        isPalindrome = true;
    } else {
        isPalindrome = false;
    }
}

const displayResult = (p, w) => {
    if(p) {
        resultText.innerHTML = `<span class="word-style-true">${w}</span> is a palindrome`;
    } else {
        resultText.innerHTML = `<span class="word-style-false">${w}</span> is not a palindrome`;
    }
}
