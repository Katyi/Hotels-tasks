// Задача 3
// Написать метод/функцию, который/которая на вход принимает число (int), а на выходе выдает
// слово “компьютер” в падеже, соответствующем указанному количеству.Например, «25 компьютеров»,
// «41 компьютер», «1048 компьютеров».

const obj = {
  '1': 'компьютер',
  "2": 'компьютера',
  '3': 'компьютера',
  '4': 'компьютера',
  '5': 'компьютеров',
  '6': 'компьютеров',
  '7': 'компьютеров',
  '8': 'компьютеров',
  '9': 'компьютеров',
  '10': 'компьютеров',
  '11': 'компьютеров',
  '12': 'компьютеров',
  '13': 'компьютеров',
  '14': 'компьютеров',
  '15': 'компьютеров',
  '16': 'компьютеров',
  '17': 'компьютеров',
  '18': 'компьютеров',
  '19': 'компьютеров',
  '0': 'компьютеров'
}

const task3 = (int) => {
  let str = int.toString();
  let result = '';
  let last2 = str.substring(str.length - 2);
  let last1 = str.substring(str.length - 1);
  if (obj[last2]) {
    result = str + ' ' + obj[last2];
  } else if (obj[last1]) {
    result = str + ' ' + obj[last1];
  }
  return result;
}

let int = 25;
console.log(task3(int));
int = 41;
console.log(task3(int));
int = 1048;
console.log(task3(int));
int = 100;
console.log(task3(int));