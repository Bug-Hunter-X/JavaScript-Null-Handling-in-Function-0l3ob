function foo(a, b) {
  if (a === null || b === null) {
    // throw new Error('Null values not allowed'); // Alternative: Throw an error
    return 0; //Alternative: Use default value 0
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0 //Or throws Error
console.log(foo(1, null)); // Output: 0 //Or throws Error
console.log(foo(null, null)); // Output: 0 //Or throws Error