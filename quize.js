// output is false due to binary floating point arithmatic imprecise
console.log(0.1 + 0.2 == 0.3);

// what is the output
let array = [1, 2, 3];
array[6] = 9;
console.log(array[5]);
// output is undefined because array index out of bounds.

// what is the output:
console.log(018 - 015);
// output is 5 because octal numbers are used in the expression.
// 015 is interpreted as octal (13 in decimal), while 018 falls back to decimal (18), resulting in 18 - 13 = 5.

// What is the output
console.log(("b" + "a" + +"a" + "a").toLowerCase());
// output is 'banana' because the expression is evaluated as follows:
// 1. 'b' + 'a' is 'ba'
// 2. + 'a' is 0 (The + operator before "a" is try to  converts it to a number, which can't do it results NAN)
// 3. ba + 'NAN'+ a is 'baNANa'
// 4. toLowerCase() is called on the string 'baNANa', resulting in 'banana
