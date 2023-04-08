// event loop
// 1. js is single threaded ,non-blocking,asynchronous concurrent language

// 2. it has a call stack,an event loop and a callback queue + other APIS

// 3. V8 is the javascript runtime which has a callstack and a heap
// the heap is used for mrmory allocation and stack holds execution context

//DOM ,settimeout,xml HttpRequests doesnt exist in v8 source code
// loupe website for evennt loop


// MY
// event oop helps to run javascript in asynchronous way as js is single threaded that means it can execute one task at a time, so during js runtime it has call stack where code come for execution and we have web api(it gives speacila features to js like fetch,ajax ie https request,console,events,settimeout all these are part of web or browser which helps to run timeers for set function,dom ) and callback quesue , when an asynchronous task come it goes to web api then callback queue and event loop sees if call stack is empty or not if it is empty then it put that task on excution this happens for events and settimout but for fetch it differs bec we also have microtask queueue hich has high priority and everything which returns promise goes in microtask queuue so even though fetch is written after event it will execute frst


/*
event loop in js

In JavaScript, the event loop is a mechanism that allows the runtime environment to manage multiple tasks, events, and callbacks in a non-blocking manner. It is responsible for scheduling the execution of tasks in a prioritized queue, and ensuring that each task is executed in the correct order.

When a JavaScript program starts running, an event loop is created along with a call stack. The call stack is responsible for keeping track of the current execution context, which includes function calls and local variables. When a function is called, it is added to the top of the call stack, and when it returns, it is removed from the stack.

The event loop, on the other hand, is responsible for managing asynchronous tasks and callbacks, which are executed outside of the main execution flow of the program. These tasks are placed in a prioritized queue called the task queue, and the event loop continuously checks this queue to see if there are any tasks that can be executed.

When an asynchronous task is initiated, such as a timer or a network request, it is added to the task queue along with its associated callback function. Once the task is complete, the callback function is added to the end of the task queue. The event loop then continuously checks the task queue for the next task, and when it finds one, it adds it to the call stack and executes it.

The event loop also provides a mechanism for handling errors and exceptions in asynchronous code. If an error occurs in a callback function, it is added to the task queue as a new task, and the event loop will execute it as soon as possible. This ensures that errors are properly handled, and that the program can continue running even if some asynchronous tasks fail.

Overall, the event loop in JavaScript provides a powerful mechanism for managing asynchronous tasks and callbacks in a non-blocking manner, ensuring that the program remains responsive and efficient even when dealing with complex and time-consuming operations.






Sure, I'd be happy to provide a more complete explanation of the event loop in JavaScript, including some additional details and examples.

The event loop is a critical component of the JavaScript runtime, responsible for managing the execution of asynchronous code in a non-blocking and efficient manner. It works by maintaining a prioritized queue of tasks, known as the task queue, and continuously checking this queue for new tasks to execute.

Here's a more detailed breakdown of how the event loop works:

When a JavaScript program starts running, the runtime environment creates an event loop, a call stack, and a heap. The call stack is used to keep track of the currently executing code, while the heap is used to store dynamically allocated memory.

Whenever a function is called, it is added to the top of the call stack, along with any arguments that were passed to it. The function is then executed, and when it returns, it is removed from the stack.

When an asynchronous operation is initiated, such as a timer or a network request, it is added to the task queue along with any associated callback functions. The task queue is prioritized so that high-priority tasks are executed before low-priority tasks.

While the call stack is not empty, the event loop continuously checks the task queue for new tasks to execute. When a task is found, it is removed from the queue and added to the call stack, where its associated callback function is executed.

If a task generates additional tasks or callbacks, they are added to the task queue, and the event loop will continue to execute tasks until the call stack is empty.

If an error occurs during the execution of a task or callback, it is caught and added to the task queue as a new task. This ensures that errors are properly handled, and that the program can continue to execute even in the face of errors.

If the task queue becomes empty, the event loop waits for new tasks to be added. This can happen if all currently scheduled tasks have completed, or if there are no pending tasks to begin with.

Here's an example of how the event loop works in practice:

javascript
Copy code
console.log("start");

setTimeout(() => {
  console.log("timer 1");
}, 0);

Promise.resolve().then(() => {
  console.log("promise 1");
});

Promise.resolve().then(() => {
  console.log("promise 2");
});

console.log("end");
In this example, we start by logging the string "start" to the console. Next, we use setTimeout to schedule a timer for 0 milliseconds, and two separate Promise.resolve().then() calls to schedule two promises to resolve in the near future. Finally, we log the string "end" to the console.

When this code is executed, the following events occur:

The string "start" is logged to the console.

The setTimeout call schedules a timer for 0 milliseconds in the future. Since timers are executed asynchronously, the setTimeout function returns immediately, and the event loop continues to execute the next line of code.

The first Promise.resolve().then() call schedules a promise to resolve in the near future. Since promises are also executed asynchronously, the then function returns immediately, and the event loop continues to execute the next line of code.

The second Promise.resolve().then() call schedules another promise to resolve in the near future. Like before, the then function returns immediately, and the event loop continues to execute the next line of code.

The string "end" is logged to the console.

The call stack is now empty, so the event loop checks the task queue for new tasks. It finds the




*/




