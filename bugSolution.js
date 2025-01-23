function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed');
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
//console.log(foo(null, 2)); // Throws Error: Null values are not allowed
//console.log(foo(1, null)); // Throws Error: Null values are not allowed