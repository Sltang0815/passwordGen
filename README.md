# passwordGen

# Strings lines 5-8
In the pass word generator I made a set of function, as conditions, for the gen. to follow.

I made variables "num, lowerCase, upperCase, & special" as the arrays to pull from to generate the password

# function generatePassword() lines 19-53

## 19-23
I made a string with parseInt to convert my prompt string into a Int.
with an if statement with the condition that the password needs to be between 8-128 length
with an alerted message pushing out a string of the condition

## 24-27
Strings with a confirm, rather than prompts, because I want a yes/no, instead of an input answer

## 29-32
If statement that alerts user that they didnt meet the conditions, if the user says no. "&&" to all if statements into one parameter? 

## 34-58
Variable with an if condition for if the user says yes. an array and ".concat" for merging the password instead of separating each array with commas

