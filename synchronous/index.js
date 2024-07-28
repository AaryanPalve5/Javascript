/***Synchronous Programming:
In synchronous programming, tasks are executed one after another. 
Each task must complete before the next one begins. 
This means that the code is executed in a sequential order, 
blocking the execution of further code until the current operation completes. 
*/

console.log('Task 1');
console.log('Task 2');
console.log('Task 3');

console.log()
/***
 * Asynchronous Programming:
In asynchronous programming, tasks can be executed concurrently.
Operations can be initiated, and the program can move on to execute other tasks without waiting for the previous tasks to complete. 
This is especially useful for operations that take time to complete, such as network requests or file I/O.
 */

console.log('Task 1');
setTimeout(() => {
    console.log('Task 2');
}, 1000);
console.log('Task 3');



console.log();


function fetchData(callback) {
    setTimeout(() => {
        callback('Data received');
    }, 1000);
}
console.log();

fetchData((data) => {
    console.log(data);
});
