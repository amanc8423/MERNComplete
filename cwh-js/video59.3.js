
async function harry() {
    let delhiWeather = new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve("27 Deg");console.log("delhi-resolved")
            }, 4000)
    })

    let bangaloreWeather = new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve("21 Deg"); console.log("banagalore-resolved");
            }, 2000)
    })

    //  delhiWeather.then(alert);
    //  bangaloreWeather.then(alert); }
    console.log("fetching delhi weather");
    let delhiW  = await delhiWeather;
    console.log("fetched delhi weather : " ,delhiW);

    console.log("fetching banaglore weather");
    let bangaloreW = await bangaloreWeather;
    console.log("fetched banaglore weather : " ,bangaloreW);

    return[delhiW,bangaloreW]

}

     let a=harry();

     a.then((value)=>{console.log(value)});
     console.log(a)




     /*
     it means return of an async will always be promise and it does not need resolve

Yes, that's correct. The async function always returns a Promise, even if you don't explicitly return one. If you don't include a return statement in an async function, it will implicitly return a Promise that resolves to undefined.

For example:

javascript
Copy code
async function myAsyncFunction() {
  console.log('Inside async function');
}

myAsyncFunction().then(() => {
  console.log('Async function finished');
});
In this example, myAsyncFunction is an async function that doesn't have a return statement. When you call myAsyncFunction, it will return a Promise that resolves to undefined. You can see that the then() method is used to handle the resolved value of the Promise.

If you do include a return statement in an async function, the value that you return will be the resolved value of the Promise. You don't need to use the resolve() method explicitly. For example:

javascript
Copy code
async function myAsyncFunction() {
  return [1, 2, 3];
}

myAsyncFunction().then((result) => {
  console.log(result); // Output: [1, 2, 3]
});
In this example, myAsyncFunction returns an array [1, 2, 3]. The then() method is used to log the resolved value of the Promise, which is the array [1, 2, 3].
     */