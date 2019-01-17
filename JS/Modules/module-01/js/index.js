/*
  Напишите скрипт имитирующий авторизацию администратора в панели управления.
  
  При загрузке страницы у посетителя запрашивается логин через prompt:
  
    - Если посетитель нажал Cancel — показывать alert с текстом 'Отменено пользователем!'
    - Если было введено что либо другое, что не совпадает со значением константы adminLogin, 
       показывать alert с текстом 'Доступ запрещен, неверный логин!'   
    - Если был введен логин совпадающий со значением константы adminLogin, 
      спрашивать пароль через prompt.
    
  При вводе пароля:
  
      - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
      - Если введен пароль который не совпадает со значением константы adminPassword,
        показывать alert с текстом 'Доступ запрещен, неверный пароль!'        
      - Если введён пароль который совпадает со значением константы adminPassword, 
        показывать alert с текстом 'Добро пожаловать!'
        
  🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
*/

// const adminLogin = 'admin';
// const adminPassword = 'm4ngo1zh4ackz0r';

// Решение
  // const enterLogin = prompt('Введите логин: ');
  // let enterPassword;

  // Ver.1
    // if (enterLogin === null) {
    //   alert('Отменено пользователем!');
    // } else if (enterLogin === adminLogin) {
    //   enterPassword = prompt('Введите пароль: ');
    //   if (enterPassword === null) {
    //     alert('Отменено пользователем!');
    //   } else if (enterPassword === adminPassword) {
    //     alert('Добро пожаловать!');
    //   } else {
    //     alert('Доступ запрещен, неверный пароль!');
    //   }
    // } else {
    //   alert('Доступ запрещен, неверный логин!');
    // }

  // Ver.2
    // enterLogin === null ? 
    // alert('Отменено пользователем!'):
    // enterLogin === adminLogin ? 
    // ( enterPassword = prompt('Введите пароль: '), 
    //   enterPassword === null ? alert('Отменено пользователем!') :
    //   enterPassword === adminPassword ? alert('Добро пожаловать!') :
    //   alert('Доступ запрещен, неверный пароль!')):
    // alert('Доступ запрещен, неверный логин!');


/*
  ⚠️ ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.

  Кол-во мест в группах ограничено (создайте переменные для хранения мест в группах): 
    * sharm - 15
    * hurgada - 25
    * taba - 6.

  Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест,
  результат сохранить в переменную.

  Необходимо проверить являются ли введенные данные целым положительным числом. 
  
    - В случае неверного ввода от пользователя, скрипт показывает alert с текстом 
      "Ошибка ввода" и больше ничего не делает.
    - Если пользователь нажал Cancel, скрипт показывает alert с текстом "Нам очень жаль, приходите еще!".
    - В случае верного ввода, последовательно проверить кол-во мест в группах, 
      и кол-во необходимых мест введенных пользователем.

  Если была найдена группа в которой количество мест больше либо равно необходимому, 
  вывести сообщение через confirm, что есть место в группе такой-то, согласен ли 
  пользоваетель быть в этой группе?

    * Если ответ да, показать alert с текстом 'Приятного путешествия в группе <имя группы>'
    * Если ответ нет, показать alert с текстом 'Нам очень жаль, приходите еще!'
  
  Если мест нигде нет, показать alert с сообщением 'Извините, столько мест нет ни в одной группе!'
*/

const SHARM = 15;
const HURGADA = 25;
const TABA = 6;
const USER_PLACE = Number(prompt('Введите число необходимых мест:'));
// Набор фраз:
const alertNull = "Нам очень жаль, приходите еще!";
const alertNoPlaces = alertNull;
const alertError = "Ошибка ввода";
const alertNiceTrip = "Приятного путешествия в ";
const alertHavePlaces = " у нас есть свободные места на курорт ";
const alertClickOk = "! \r\nНажмите ОК, если хотите поехать туда.";
const alertClickCancel = "\r\nНажмите Отмена, если хотите посмотреть другие предложения.";
const alertLastChanse = "\r\nЭто последнее предложение...";

console.log(USER_PLACE);

if ( USER_PLACE === null ) {
  alert(alertNull);
} 
else if ( USER_PLACE === Math.round(USER_PLACE) && USER_PLACE > 0 ) {
  if ( USER_PLACE <= TABA ) {
    if (confirm("Поздравляем," + alertHavePlaces + "Таба" + alertClickOk + alertClickCancel)) {
      alert(alertNiceTrip + "Таба!");
    } 
    else {
      if (confirm("Также" + alertHavePlaces + "Шарм" + alertClickOk + alertClickCancel)) {
        alert(alertNiceTrip + "Шарм!");
      } 
      else {
        if (confirm("Также" + alertHavePlaces + "Хургада" + alertClickOk + alertLastChanse)) {
          alert(alertNiceTrip + "Хургада!");
        } 
        else {
          alert(alertNoPlaces);
        }
      }
    }
  } 
  else if ( USER_PLACE <= SHARM ) {
    if (confirm("Поздравляем," + alertHavePlaces + "Шарм" + alertClickOk + alertClickCancel)) {
      alert(alertNiceTrip + "Шарм!");
    } 
    else {
      if (confirm("Также" + alertHavePlaces + "Хургада" + alertClickOk + alertLastChanse)) {
        alert(alertNiceTrip + "Хургада!");
      } 
      else {
        alert(alertNoPlaces);
      }
    }
  } 
  else if ( USER_PLACE <= HURGADA ) {
    if (confirm("Поздравляем," + alertHavePlaces + "Хургада" + alertClickOk + alertLastChanse)) {
      alert(alertNiceTrip + "Хургада!");
    } 
    else {
      alert(alertNoPlaces);
    }
  } 
  else {
    alert("Cтолько мест нет ни в одной группе!")
  }
} 
else {
  alert(alertError);
}