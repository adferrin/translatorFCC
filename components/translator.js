const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

    toBritishEnglish(text) {
        const dict = {...americanOnly, ...americanToBritishSpelling};
        const titles = americanToBritishTitles;
        const timeRegex = /([1-9]|1[012]):[0-5][0-9]/g;
        const translated = this.translate(
            text,
            dict,
            titles,
            timeRegex,
            "toBritish"
        );
        if (!translated) {
            return text;
        }

        return translated;
    }
    toAmericanEnglish(text) {
        const dict = {...britishOnly, ...reverseDict(americanToBritishSpelling) };
        const titles = reverseDict(americanToBritishTitles);
        const timeRegex = /([1-9]|1[012]).[0-5][0-9]/g;
        const translated = this.translate(
            text,
            dict,
            titles,
            timeRegex,
            "toAmerican"
        );
        if (!translated) {
            return text;
        }
        return translated;
    }
}

module.exports = Translator;