import Dictionary from "./Dictionary";

const dictionary = new dictionary("en.json", "no.json");

await dictionary.setLanguage("no");

const value = dictionary.get("welcome_massage");
console.log(value);


const keys = dictionary.keys();
console.log(keys);