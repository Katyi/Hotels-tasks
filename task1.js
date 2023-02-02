// Написать метод/функцию, который/которая на вход принимает массив городов. В качестве результата возвращает строку, 
// где города разделены запятыми, а в конце стоит точка.
// Пример:
// «Москва, Санкт-Петербург, Воронеж.»

const task1 = (arr) => {
  return `${arr.join(', ')}.`;
}

let arr = ['Москва', 'Санкт - Петербург', 'Воронеж'];
console.log(task1(arr));