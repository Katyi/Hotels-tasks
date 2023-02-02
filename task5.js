// Написать метод, который определяет, какие элементы присутствуют в двух экземплярах в каждом из массивов (= в двух и более, причем в каждом). На вход подаются два массива. На выходе массив с необходимыми совпадениями.
// Пример:
// [7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]
// На выходе [1, 17]

const task5 = (arr1, arr2) => {
  let map1 = new Map();
  let map2 = new Map();
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    let count1 = 1;
    map1.has(`${arr1[i]}`) ? map1.set(`${arr1[i]}`, count1 + 1) : map1.set(`${arr1[i]}`, count1); 
  }
  for (let i = 0; i < arr2.length; i++) {
    let count2 = 1;
    map2.has(`${arr2[i]}`) ? map2.set(`${arr2[i]}`, count2 + 1) : map2.set(`${arr2[i]}`, count2);
  }
  for (const item1 of map1) {
    for (const item2 of map2) {
      if (item1[0] === item2[0] && item1[1] >= 2 && item2[1] >= 2) {
        arr3.push(item1[0])
      }
    }
  }
  return(arr3);
}




let arr1 = [7, 17, 1, 9, 1, 17, 56, 56, 23];
let arr2 = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1];
console.log(task5(arr1, arr2));
