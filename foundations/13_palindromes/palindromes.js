const palindromes = function (word) {
    // remove punctuation and spaces, and convert to lower case
    const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // check if cleanedWord is the same as its reverse
    return cleanedWord === cleanedWord.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
