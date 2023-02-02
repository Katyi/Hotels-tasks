// Задача 2
// Написать метод/функцию, который/которая на вход принимает число (float), а на выходе получает число, округленное до пятерок.
// Пример:
// 27 => 25, 27.8 => 30, 41.7 => 40.

const task2 = (float) => {
  let remainder = float % 5;
  return remainder >= 2.5 ? float - remainder + 5 : float - remainder;
}

let float = 27;
console.log(task2(float));
float = 27.8;
console.log(task2(float));
float = 41.7;
console.log(task2(float));
float = -40.888888888888;
console.log(task2(float));