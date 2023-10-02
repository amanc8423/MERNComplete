// Create a new buffer with the text "Hello, world!"
const buffer = Buffer.from("aZCDE");

// Log the buffer to the console
console.log(buffer);

// Convert the buffer to a string
const str = buffer.toString();
console.log(str);

// Modify the buffer
buffer[0] = 97; // H
buffer[1] = 98; // e

// Log the modified buffer to the console
console.log(buffer);
 st = buffer.toString();
console.log(st);
