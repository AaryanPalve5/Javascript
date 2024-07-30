/**
 * "Callback hell" (sometimes called "Pyramid of Doom") is a term used to describe a situation in JavaScript
 *  (or any asynchronous programming environment) where callbacks are nested within each other, 
 * leading to deeply indented, hard-to-read code. This typically happens when dealing with multiple 
 * asynchronous operations that depend on each other.
 */
console.log('Basic Promise Creation and Handling:');

let basicPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) resolve('Operation was successful.');
    else reject('Operation failed.');
});

basicPromise
    .then(result => console.log(result))
    .catch(error => console.error(error));

console.log('\nChaining Promises:');

let initialPromise = new Promise((resolve) => resolve('Step 1 complete'));

initialPromise
    .then(result => {
        console.log(result);
        return 'Step 2 complete';
    })
    .then(result => {
        console.log(result);
        return 'Step 3 complete';
    })
    .then(result => console.log(result))
    .catch(error => console.error(error));

console.log('\nHandling Multiple Promises with Promise.all():');

let promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved'), 1000));
let promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), 500));
let promise3 = new Promise((resolve) => setTimeout(() => resolve('Promise 3 resolved'), 1500));

Promise.all([promise1, promise2, promise3])
    .then(results => console.log(results))
    .catch(error => console.error(error));
