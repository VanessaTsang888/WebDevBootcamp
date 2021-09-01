/* 

Pseudo random number generators:

/* 

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
