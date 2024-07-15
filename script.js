const dictionary = {
    "hello": "नमस्ते",
    "world": "दुनिया",
    "friend": "दोस्त",
    "love": "प्रेम",
    "peace": "शांति",
    "happiness": "खुशी",
    "magic": "खुशी2",
    // Add more words here
};

function translateWord() {
    const wordInput = document.getElementById('wordInput').value.toLowerCase();
    const translation = dictionary[wordInput];

    const translationElement = document.getElementById('translation');
    if (translation) {
        translationElement.textContent = `Hindi: ${translation}`;
    } else {
        translationElement.textContent = 'Word not found in the dictionary.';
    }
}
