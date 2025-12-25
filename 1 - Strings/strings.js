//Creating Strings

const string = new String("Hey, I am divyansh");
const string2 = "Hey!, I am Divyansh";
const string3 = 'Hey!, I am Divyansh';
const string4 = `Hey!, I am Divyansh`;


console.log(string2.length);

console.log(string2[3]);
console.log(string2.charAt(3));


for(i=0; i< string2.length; i++){
    console.log(string2[i]);
}

string2[3] = 'b'; //Can't do this as stirngs are immutable in JAVAscript

console.log(string2.replace("Divyansh","Debu")); //Replaces only the first occuring instanct for the character
console.log(string2.replaceAll("Divyansh","Debu")); // Replaces all the instances of the character

const newstr = string2.concat("UI Developer");

console.log(string.indexOf("Hey"));
console.log(string.lastIndexOf("i"));

console.log(string.startsWith("H"));
console.log(string.endsWith("h"));

console.log(string.substring(12,24));

const toBeConverted = {name:"Divyansh"};
console.log(String(toBeConverted)); // [object object]
console.log(JSON.stringify(toBeConverted)); // '{"name":"Divyansh"}'

