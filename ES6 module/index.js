/***
 * ES6 = An external file that contains reusable code that can be imported into other javascript files.
 *       Write reusable code for many different apps.
 *       Can contain variables ,classes,functions ... and more 
 *       Introduced as part of ECMAScript 2015 update
 * 
 * 
 */

//// index.js
import { PI, getCircumference } from './mathUtil.js';

console.log(PI); // 3.14
console.log(getCircumference(5)); // 31.400000000000002

// Adding content to the HTML
document.addEventListener('DOMContentLoaded', () => {
    const output = document.createElement('div');
    output.innerHTML = `
        <p>Value of PI: ${PI}</p>
        <p>Circumference for radius 5: ${getCircumference(5)}</p>
    `;
    document.body.appendChild(output);
});
