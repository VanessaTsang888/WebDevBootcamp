Since I have already learnt basic Javascript ES6 in previous Udemy training course called The Complete JavaScript Course 2021: Form Zero to Expert, I am only watching the videos on this sections and then, doing some of the coding exercises and taking the Quiz.

Coding Exercise 4: BMI Calculator Challenge:

// Create your function below this line.
// Better way to write: Math.pow(base, exponent); -> Math.pow(height, 2);
// Math.round(bmi) -> will round up to 20

function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    return Math.round(bmi);
}

// Calculate the BMI from 65kg and 1.8:
    var bmi = bmiCalculator(65, 1.8);

// Logout that BMI into the console. Output: 20.0617.....
// bmi is normally a whole number so we need to convert this long number into a whole number.
// 
    console.log(bmi);


/* 

If my weight is 65kg and my height is 1.8m, I should be able to call your function like this:

    var bmi = bmiCalculator(65, 1.8);

bmi should equal around 20 in this case.

Steps to workout the answer:
1. Using a calculator, workout what is 1.8 square: 1.8 x 1.8 = 3.24
So we know 1.8 squared is 3.24, we can divide 65 / 3.24 = 20.0617284
2. Now write the function first commented line above.
Inside a pair of parentheses write our inputs.
Inside a pair of braces specify everything that this function is going to do.
This function has to calculate the value of bmi and the formula is the wight divded by height squared.
Height square is also: height multiplied by itself: height * height
JS numbers: can use the parentheses to set precedence to say calculate this first: (height * height).
To get value bmi out of this function, we use the return keyword.

There is a number of ways to write this function. We don't have to height multiplied by itself to get it squared. We can just raise height to the power of 2:
Ask Google: raise a number to a power javascript:
    mdn docs -> Math.pow()
    Shows us how to use this function, example:
        console.log(Math.pow(7, 3));
    // The first number is the base, the second number is the exponent: Math.pow(base, exponent)
    This is how we would use it:
        var bmi = weight / Math.pow(height, 2);

Convert a long number into a whole number. Google: javascript round number to nearest whole number:
    -> w3schools.com -> JavaScript round() Method -> Math.round(2.5);  
    -> similar to the floor Method which will round dwon our decimal but Math.round is more mathematically correct.
    ->  return Math.round(bmi); // rounded up 20









*/

