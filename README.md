# Type Error in TypeScript Function Parameter
This repository demonstrates a common type error in TypeScript that occurs when passing an array to a function expecting a single string argument.

The `bug.ts` file contains the code that produces the error, while `bugSolution.ts` provides a corrected version.

## Bug Description:
The `greeter` function expects a single string argument but receives an array. This mismatch causes a type error during compilation. 

## Solution:
The solution involves either modifying the function signature to accept an array of strings or iterating over the array and calling the function for each string in the array. 