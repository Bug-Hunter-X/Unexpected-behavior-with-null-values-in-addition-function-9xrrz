function foo(a, b) {
  if (a === null || b === null) {
    return 0; //This is wrong: Should handle null values appropriately
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0
console.log(foo(1, null)); // Output: 0