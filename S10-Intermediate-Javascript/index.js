/* 

Pseudo random number generators:
To develop a dice roll, number 1 - 6 */

/* 

1. Generate a random number between 0 and 0.999999999999.
2. Multiply by 6 (or what ever range we need) to get a number between -> 0 - 5.999999999
3. Take that number and perform Math.floor() to round down that number to the nearest whole number. That range becomes 0 - 5.
4. To get a number between 1 and 6, we just add 1 at the end. This is called pseudo random number generator.
5. Now we have a whole number we can work with and give back to the user.
6. We have to do this as computers are not random at all as they are just switches.

*/

let n = Math.random(); // 0 - 0.99999999999
n = n * 6; // will get a number 0 and 5.99999999999
n = Math.floor(n) + 1; // will get a number between 0 - 5. // '+ 1' will will get a number 1 - 6.
console.log(n);

/* 

Challenge: Deveop a Love Calculator:

1. needs to have 2 prompts that asks for names of 2 people.
2. Calculate a random number that is a percentage between 1 and 100.
3. Give this info back to user in form of alert telling them what is their love score.

*/

prompt("What is your name?");
prompt("What is their name?");

// My variable called: loveScore. Need a number between 1 and 100.
// Round number down to nearest whole number, but this includes 0 and the highest it will go upto is 99.
// To fix this we just '+1' to the value.
// Now we have our love score we can send it to user using an alert saying: ("Your love score is" + loveScore);

let loveScore = Math.random() * 100; // 0 - 99
loveScore = Math.floor(loveScore) + 1; // 1 - 100
// alert("Your love score is " + loveScore + "%");

/* 

Give the user a custome message depending how high or how low their score is using control flow and if-else statements.
To do this we need to check what score they got and responding differently based on that score. To do that we need to use 'Conditionals'.

if-else statements:
Through the testing of these conditions, we get to control the flow of code, and that is why they are called conditionals. 

To test for equality, use the x3 equals signs.
If the first condition is true then the first block of code will be executed. But if NOT true, then the second block of code will be executed instead.

Only 1% likely a user will get 100% so lets test for a range: 70 - 100 or 0 - 30.

*/

if (loveScore >= 70) {
  alert(
    "Your love score is " +
      loveScore +
      "%" +
      " You love each other like Kanya loves Kanya."
  );
} else {
  alert("Your love score is " + loveScore + "%");
}
