const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(lengthSpan, characters) {
    let key = '';
    for (let i = 0; i < lengthSpan; i++) {
        key += characters[Math.round(Math.random() * (characters.length - 0 + 1) + 0)];

    }
    return key;
}

const key = generateKey(6, characters);
console.log(key);