// JSON stands for JavaScript Object Notation

// JSON is a text format for storing and transporting data

const biodata = {
    name : "aman",
    age:20,
    channel:"aman doc"
};

console.log(biodata.name);

// object to json use stringify
const jsondata = JSON.stringify(biodata);

console.log(jsondata); // it have both key and value in " "
console.log(jsondata.name);// it will not give data

// json to object using parse

const objdata = JSON.parse(jsondata);
console.log(objdata);




