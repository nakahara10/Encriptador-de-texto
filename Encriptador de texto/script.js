// script.js
document.getElementById('encrypt-button').addEventListener('click', function() {
    const text = document.getElementById('input-text').value;
    const shift = parseInt(document.getElementById('shift').value, 10);
    document.getElementById('result-text').value = cipher(text, shift);
});

document.getElementById('decrypt-button').addEventListener('click', function() {
    const text = document.getElementById('input-text').value;
    const shift = parseInt(document.getElementById('shift').value, 10);
    document.getElementById('result-text').value = cipher(text, -shift);
});

function cipher(text, shift) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const isUpper = char === char.toUpperCase();
        const index = alphabet.indexOf(char.toUpperCase());

        if (index !== -1) {
            let newIndex = (index + shift) % 26;
            if (newIndex < 0) newIndex += 26;
            const newChar = alphabet[newIndex];
            result += isUpper ? newChar : newChar.toLowerCase();
        } else {
            result += char;
        }
    }
    return result;
}
