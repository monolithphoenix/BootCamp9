/* 
  Напишите функцию validate которая проверяет поля формы 
  firstname и lastname и возвращает результат в виде 
  обьекта со свойствами 'first name' и 'last name'.
  
  Кроме того, формат объекта: в свойства записывается буль-флаг 
  уведомляющий о статусе прохождения валидации для каждого поля.
  {
    'first name': true или false,
    'last name': true или false,
  }
  
  Критерии валидации:
  1)Имя. Допускается не более 2-х слов, разделенных пробелами
  или дефисом. Слова должны состоять только из букв.
  
  2)Фамилия. Допускается не более 2-х слов, разделенных пробелами
  или дефисом. Слова должны состоять только из букв.
  
  При клике на кнопку submit должна происходить проверка.
  Результат проверки, объект, выводить в консоль.
*/

const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const submitBtn = document.getElementById("submit-btn");
const resultList = document.querySelector('.results');

// console.log(firstname.value);
// console.log(lastname);
// console.log(resultList);

submitBtn.addEventListener("click", validate);

function validate(evt) {
  evt.preventDefault();
  let result = {'first name': false,'last name': false};
  const pattern = /^[a-z]+( ?|-?)[a-z]+$/i;
  if (pattern.test(firstname.value)) {result["first name"] = true};
  if (pattern.test(lastname.value)) {result["last name"] = true};
  console.log(pattern.test(lastname.value));
  console.log(lastname.value);
  
  console.log(lastname.value.match(pattern));

  return console.log(result)
}
