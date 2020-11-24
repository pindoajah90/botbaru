const sastrawi = require('sastrawijs');

const kataKasar = [
    'anjing',
    'ajg',
    'anjg',
    'goblok',
    'gblk',
    'gblok',
    'goblk',
    'kontol',
    'kntl',
    'kntol',
    'kontl',
    'memek',
    'mmek',
    'bangsat',
    'bgst',
    'bngsat',
    'bangst',
    'jancok',
    'jnck',
    'babi',
    'kirik',
    'asu',
    'asw',
    'jembut',
    'jmbut',
    'jmbt'
    //Tambahin Sendiri
];

const inArray = (needle, haystack) => {
    let length = haystack.length;
    for(let i = 0; i < length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}

module.exports = cariKasar = (kata) => new Promise((resolve) => {
    let sentence = kata;
    let stemmer = new sastrawi.Stemmer();
    let tokenizer = new sastrawi.Tokenizer();
    let words = tokenizer.tokenize(sentence);
    for (word of words) {
        if(inArray(stemmer.stem(word), kataKasar)){
            resolve(true)
        }
    }
    resolve(false)
})
