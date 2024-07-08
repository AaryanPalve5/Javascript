/**
 * 
 * logical ops =used to combine /manipulate boolean values
 *
 *AND - &&
 * OR=||
 * not=!
 * */


 const temp = 20;


 /*
 =   assignment
 ==  comparison 
 === strictly equal(val and dtype)
 !=  inequality 
 !== strict inequality
 */
 
 
 // loops
 //let username="";
 
 /*
 while (userName=`` || username===`NULL`) {
     username=window.prompt(`whats your name `);
     
 }
 
 console.log(`hello ${username}`);
 
 */
 
 let username;
 do {
     username = window.prompt('What\'s your name?');
 } while (username === "" || username === null);
 console.log('Username:', username);
 

// for loop