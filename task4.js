// Написать метод / функцию, который / которая на вход принимает целое число, а на выходе
// возвращает то, является ли число простым(не имеет делителей кроме 1 и самого себя).

const task4 = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let num = 1; // true
console.log(task4(num));
num = -11; // true
console.log(task4(num));
num = 2; //true
console.log(task4(num));
num = 3; //true
console.log(task4(num));
num = 4; //false
console.log(task4(num));
num = 5; //true
console.log(task4(num));
num = 6; //false
console.log(task4(num));
num = 7; //true
console.log(task4(num));
num = 8; //false
console.log(task4(num));
num = 9; //false
console.log(task4(num));
num = 227; //true
console.log(task4(num));
num = 3011; //true
console.log(task4(num));
num = 3012; //false
console.log(task4(num));

