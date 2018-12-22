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
const USER_PLACE = prompt('Введите число необходимых мест:');

if ( USER_PLACE === null ) {
  alert('Нам очень жаль, приходите еще!');
} else if ( Number(USER_PLACE) === Math.round(USER_PLACE) && USER_PLACE > 0 ) {
  if (Number(USER_PLACE)<=TABA) {
    if (confirm('Поздравляем, у нас есть свободные места в группе, которая едет на Таба, нажмите "ОК", если хотите поехать туда или нажмите "Отмена", если хотите посмотреть другие предложения')) {
      alert('Приятного путешествия в группе Таба');
    } else {
      if (confirm('Поздравляем, у нас есть свободные места в группе, которая едет на Шарм, нажмите "ОК", если хотите поехать туда или нажмите "Отмена", если хотите посмотреть другие предложения')) {
        alert('Приятного путешествия в группе Шарм');
      } else {
      alert('Нам очень жаль, приходите еще!');
    }
  }
  } else if (Number(USER_PLASE)<=SHARM) {
    if (confirm('Поздравляем, у нас есть свободные места в группе на Шарм, едем туда?   PS ещё есть места там то)')) {
      alert('Приятного путешествия в группе <имя группы>');
    } else {
      alert('Нам очень жаль, приходите еще!');
    }
  } else if (Number(USER_PLASE)<=HURGADA) {
    if (confirm('Поздравляем, у нас есть свободные места в группе на Хургада, едем туда? Это последнее предложение!')) {
      alert('Приятного путешествия в группе <имя группы>');
    } else {
      alert('Нам очень жаль, приходите еще!');
    }
  } else {
    alert('Извините, столько мест нет ни в одной группе!')
  }
} else {
  alert('Ошибка ввода');
}