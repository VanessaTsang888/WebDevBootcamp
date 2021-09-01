Since I have already learnt basic Javascript ES6 in previous Udemy training course called The Complete JavaScript Course 2021: Form Zero to Expert, I am only watching the videos on this sections and then, doing some of the coding exercises and taking the Quiz.

125 - Random Number Generation in JS: Building a Love Calculator:

A way of generating a random number to satisfy girls needs to predict the future. We can create this using code as JS has a way of generating random numbers. This is a function that generates a random number.

    let n = Math.random()

The number that gets generated is 16 decimal place number and can be any number between 0 and 0.99999999999, it never reaches 1. The number you get will be different every single time you run the code. Its useful as allows us to generate up to a billion random numbers:
let n = Math.random();

Dice roll: to turn it to a number from 1 - 6 :

1. multiply by 6 so we get 2.18842964779:
   n = n \* 6;
2. Take that number and perform Math.floor() to get a whole numbers between 0 and 5. 'n' used as input to round it down to nearest whole number.
   n = Math.floor(n); // 2
3. To get number between 1 and 6, we just add 1 at the end. This is called pseudo random number generator:
   n = Math.floor(n) + 1;
4. Now we have a whole number of 2 we can work with and give back to the user.

Challenge: Deveop a Love Calculator:

1. needs to have 2 prompts that asks for names of 2 people.
2. Calculate a random number that is a percentage between 1 and 100.
3. Give this info back to user in form of alert telling them what is their love score.

126 - CONTROL STATEMENTS: Using if-Else Conditionals & Logic:
Give the user a custome message depending how high or how low their score is using control flow and if-else statements.
To do this we need to check what score they got and responding differently based on that score. To do that we need to use 'Conditionals'.

127 - Comparators and Equality:
To compare 2 different values.
