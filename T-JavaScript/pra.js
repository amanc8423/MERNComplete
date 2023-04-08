console.log(a(5))
function a(b){
    console.log(b);
}

// If you run the code console.log(a(5)) followed by the function declaration function a(b){ console.log(b); }, it will first print 5 to the console and then print undefined to the console.

// Here's why:

// When console.log(a(5)) is executed, it calls the function a with an argument of 5. The function a then logs 5 to the console using console.log(b).

// However, the function a doesn't return anything, so when console.log(a(5)) tries to log the result to the console, it prints undefined. This is because the value of a(5) is undefined, since the function a doesn't return a value.

// So the final output of the code will be:

// javascript
// Copy code
// 5
// undefined
// Note that if you move the function declaration above the console.log statement, the code will work differently. In this case, the function will be defined before it is called, and the code will log 5 to the console and return undefined:

// javascript
// Copy code
// function a(b){
//     console.log(b);
// }

// console.log(a(5)); // Output: 5, undefined