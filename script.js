// задание 1-2
let name = prompt("Ведите ваше имя");
let age = prompt("Ввдеите ваш возраст");
let city = prompt("введите ваш город");
let phone = prompt("введите ваш телефон")
let email = prompt("введите вашу почту")
let company = prompt("Введите вашу контору")

alert(`Меня зовут ${name}. Мне ${age} лет Я проживаю вгороде ${city} и работаю в компании ${company} Мои контактные данные:${name}, ${name}`);

 let year = (2023-age)
alert(`${name} родился в ${year}`);

// Задание 3
const str = "123321";
let firstThreeDigitsSum = Number(str[0]) + Number(str[1]) + Number(str[2]);
let secondThreeDigitsSum = Number(str[3]) + Number(str[4]) + Number(str[5]);

if (firstThreeDigitsSum === secondThreeDigitsSum) {
  console.log("да");
} else {
  console.log("нет");
};

// задание 4
let a = prompt("введите число")
if (a>0) {
    console.log("Верно")
} else{
    console.log("неверно")
};

// задание 5
let f=10, b=2;
summa = f+b;
console.log(summa);
console.log(f-b);
console.log(f*b);
console.log(f/b);
if (summa>1) {
    console.log(summa*summa)
}else{
    console.log(summa)
};

// Задание 6
if ((f>2 && f<11) || (b>=6 && b<14)){
    console.log('Verno')
} else{
    console.log('Neverno')
};
//Задание 7
let n = 27;

if (n >= 0 && n < 15) {
  console.log('Первая четверть');
} else if (n >= 15 && n < 30) {
  console.log('Вторая четверть');
} else if (n >= 30 && n < 45) {
  console.log('Третья четверть');
} else {
  console.log('Четвертая четверть');
};
//Задание 8
let day = 23;

if (day >= 1 && day <= 10) {
  console.log('Первая декада');
} else if (day >= 11 && day <= 20) {
  console.log('Вторая декада');
} else {
  console.log('Третья декада');
}

//Задание 9
let days = 10;
let years = days / 365;
let months = days / 31;
let weeks = days / 7;
let hours = days * 24;
let minutes = hours * 60;
let seconds = minutes * 60;

if (days < 365) {
  console.log('Меньше года');
} else {
  console.log(years + ' год(а)');
}

if (days < 31) {
  console.log('Меньше месяца');
} else {
  console.log(months + ' месяц(а/ев)');
}

if (days < 7) {
  console.log('Меньше недели');
} else {
  console.log(weeks + ' неделя(и/ь)');
}

console.log(hours + ' час(ов)');
console.log(minutes + ' минут(а/ы)');
console.log(seconds + ' секунд(а/ы)');

//задание 10 
let dayOfYear = 27;
let month;
let season;

switch (true) {
  case dayOfYear >= 1 && dayOfYear <= 31:
    month = 1;
    season = 'зима';
    break;
  case dayOfYear >= 32 && dayOfYear <= 59:
    month = 2;
    season = 'зима';
    break;
  case dayOfYear >= 60 && dayOfYear <= 90:
    month = 3;
    season = 'весна';
    break;
  case dayOfYear >= 91 && dayOfYear <= 120:
    month = 4;
    season = 'весна';
    break;
  case dayOfYear >= 121 && dayOfYear <= 151:
    month = 5;
    season = 'весна';
    break;
  case dayOfYear >= 152 && dayOfYear <= 181:
    month = 6;
    season = 'лето';
    break;
  case dayOfYear >= 182 && dayOfYear <= 212:
    month = 7;
    season = 'лето';
    break;
  case dayOfYear >= 213 && dayOfYear <= 243:
    month = 8;
    season = 'лето';
    break;
  case dayOfYear >= 244 && dayOfYear <= 273:
    month = 9;
    season = 'осень';
    break;
  case dayOfYear >= 274 && dayOfYear <= 304:
    month = 10;
    season = 'осень';
    break;
  case dayOfYear >= 305 && dayOfYear <= 334:
    month = 11;
    season = 'осень';
    break;
  case dayOfYear >= 335 && dayOfYear <= 365:
    month = 12;
    season = 'зима';
    break;
  default:
    console.log('Ошибка: Неверный день года');
    break;
}

console.log(`День года: ${dayOfYear}, месяц: ${month}, пора года: ${season}`);
