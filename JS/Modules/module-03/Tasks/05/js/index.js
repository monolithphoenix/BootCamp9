/* Task 05
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы,
  символы букв и цифр!
*/

function findLongestWord(str) {
  let wordsArr = str.split(' ');
  let longestWord;
  let wordLengthCount = 0;
  for (let el of wordsArr) {
    if (el.length > wordLengthCount) {
      wordLengthCount = el.length;
      longestWord = el;
    };
  };
  return longestWord;
}

// Вызовы функции для проверки
console.log(
  findLongestWord("The quick brown fox jumped over the lazy dog")
); // вернет 'jumped'

console.log(
  findLongestWord("Google do a roll")
); // вернет 'Google'

console.log(
  findLongestWord("May the force be with you")
); // вернет 'force'



