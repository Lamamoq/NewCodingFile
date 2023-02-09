import Dictionary from "./Dictionary.mjs";

console.log("Test for å skrive ut");

const languages = ["./no.json", "./en.json"];
const dictionary = new Dictionary(...languages);

await dictionary.setLanguage("no"); 

const value = dictionary.translate("welcome_massage");
console.log('test', value);


const keys = dictionary.keys;
console.log(keys);