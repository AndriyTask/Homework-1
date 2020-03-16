/*ЗАДАЧА1*/

const myDate = new Date();
// тут я встановлюю придуману мною дату
const mySetYear = myDate.setFullYear(2000);
const mySetMonth = myDate.setMonth(1);
const mySetToday = myDate.setDate(1);
const mySetHours = myDate.setHours(7);
const mySetMinutes = myDate.setMinutes(7);

// а тут я отримую придуману мною дату
// зробив перевірку в шаблонному рядку якшо місяць, день і т.д. складається з 1 числа додаю спереду нуль
const myGetyear = myDate.getFullYear();
const myGetmonth = myDate.getMonth();
// У тебе всюди повторюється логіка щось < 10 ? '0' : '', можна винести це в окрему функцію і перевикористовувати
const myGetmonthEdit = `${myGetmonth < 10 ? '0' : ''}${myGetmonth}`;
const myGettoday = myDate.getDate();
const myGettodayEdit = `${myGettoday < 10 ? '0' : ''}${myGettoday}`;
const myGethours = myDate.getHours();
const myGethoursEdit = `${myGethours < 10 ? '0' : ''}${myGethours}`;
const myGetminutes = myDate.getMinutes();
const myGetminutesEdit = `${myGetminutes < 10 ? '0' : ''}${myGetminutes}`;
const enterData = `${myGetyear}-${myGetmonthEdit}-${myGettodayEdit} ${myGethoursEdit}:${myGetminutesEdit}`;
let str = JSON.stringify(enterData); // А нащо робити JSON.stringify?
//якщо розкоментуєш рядок нижче то моя функція "myFunc" виведе поточну дату
/*str = '';*/

// У тебе 2 рази повторюється логіка діставання дат із Date і побудови з них стрічки з датою, зроби під цей процес окрему функцію і перевикористай її

// а цей код потрібний для виводу поточної дати на випадок якшо у функцію нічого не передано
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentMonthEdit = `${currentMonth < 10 ? '0' : ''}${currentMonth}`;
const currentToday = currentDate.getDate();
const currentTodayEdit = `${currentToday < 10 ? '0' : ''}${currentToday}`;
const currentHours = currentDate.getHours();
const currentHoursEdit = `${currentHours < 10 ? '0' : ''}${currentHours}`;
const currentMinutes = currentDate.getMinutes();
const currentMinutesEdit = `${currentMinutes  < 10 ? '0' : ''}${currentMinutes}`;
const currentData = `${currentYear}-${currentMonthEdit}-${currentTodayEdit} ${currentHoursEdit}:${currentMinutesEdit}`;
const currentStr = JSON.stringify(currentData);

// ну і функція що виводить або встановлену мною дату або у її відсутності поточну дату
const myFunc=(str,currentStr)=>{
  if (str !== ''){
    return str;
  } else {
    return currentStr;
  }
};

console.log(myFunc(str,currentStr));
