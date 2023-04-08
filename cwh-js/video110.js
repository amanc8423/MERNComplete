//type of copy(shallow vs deep)













/*

Mohit A
4 months ago
Q1. Difference between let, var and const.
Q2. // Get output 1,2 without using let.
for(var i=0; i<=2; i++){
    setTimeout(function(){console.log(i)}, 1000);
}
Answer::
function print(i){
    setTimeout(function(){console.log(i)}, 1000)
}

for(var i=0; i<=2; i++){print(i)}

Q3. Types of copy (Shallow vs Deep)
Q4. map vs filter
Q5. Prototype and how it works?
Q6. Arrow function and advantages of arrow function
- Don't have this scope. Closer parent will have access. If no then target to global. No argument objects, use rest operator, Arrow functions are not hoisted. 
Q7. When we use bind VS call apply and bind
Q8. Difference between spread and rest operator.
Q9. //Get second last element from array. 

let arr = ["a", "b", "c", "d", "e", "f"];
output = "e"

console.log(arr[arr.length-2]);

Q10. Output?
console.log(3+"3")
console.log(3-"3")

Q11 NodeJS Middleware? 

Q12 React Element vs Component

Q13 What are pure components? 

Q14 What are refs in React?

Q15 forwardRefs in React?

Q16 React Virtual DOM

Q17 Intereceptor :: Intercept request and response before going to backend. Eg, Strictly check API before going to backend. Part of middleware. Depends upon status responses we can do some navigation

Q18 React fibre?

Q19. React lifecycles? 

Q20 In which case you will use HOC? :: 

Q21 Lazy loading ?

Q22 How to manage nested routes in terms of role based routing?

Q23 Ask to interview :: What are roles, project etc.

*/

/*
3+"3" and 3-"3" in js console

In JavaScript, the + and - operators have different behavior depending on the types of the operands involved.

When + is used with a number and a string, it concatenates the two values together as strings, resulting in "33".

arduino
Copy code
> 3 + "3"
"33"
When - is used with a number and a string, JavaScript tries to convert the string into a number before performing the subtraction. Since the string "3" can be converted to the number 3, the result is 0.

shell
Copy code
> 3 - "3"
0
In general, it's important to be aware of the types of operands you're using when performing operations in JavaScript to avoid unexpected behavior.

*/