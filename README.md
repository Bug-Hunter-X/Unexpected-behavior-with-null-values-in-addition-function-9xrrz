# Unexpected behavior with null values in addition function

This code demonstrates a common error in JavaScript when handling null values. The function `foo` attempts to add two numbers, but it incorrectly handles the case where one or both of the inputs are null. This can lead to unexpected results or errors. 

The solution shows the correct approach for handling null values, providing a more robust and reliable function.

## Bug

The original `foo` function returns 0 if either `a` or `b` is null, which might not be the intended behavior.  A more appropriate approach would be to either throw an error or return a different value that indicates that the addition could not be performed due to the null values.

## Solution

The corrected `foo` function now explicitly checks for null values and throws an error if either `a` or `b` is null. This makes the function's behavior more predictable and prevents unexpected results.

