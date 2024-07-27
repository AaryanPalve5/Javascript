// Create a new Date object representing the current date and time
let now = new Date();
console.log(now);

// Create a new Date object representing a specific date and time
let specificDate = new Date('2014-07-26T12:00:00Z');
console.log(specificDate);

// Create a new Date object using year, month (0-11), day, hour, minute, second, and millisecond
let anotherDate = new Date(2023, 6, 26, 12, 0, 0); // Note: July is month 6 (0-based index)
console.log(anotherDate);
 

const year = now.getFullYear();
console.log("Year:", year);

const month = now.getMonth() + 1; // Add 1 to get human-readable month (1-12)
console.log("Month:", month);

const day = now.getDate(); // Use getDate() for the day of the month
console.log("Day:", day);

const hours = now.getHours();
console.log("Hours:", hours);
const minutes = now.getMinutes();
console.log("Minutes:", minutes);
const seconds = now.getSeconds();
console.log("Seconds:", seconds);


const now2 = new Date();

now2.setFullYear(2025);
now2.setMonth(11);
now2.setDate(15);
now2.setHours(10);
now2.setMinutes(30);
now2.setSeconds(45);

console.log("Updated Date:", now2.toString());

console.log(now2 );
