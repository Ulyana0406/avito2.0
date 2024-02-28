function monthFormat(month){
  if (month === 1) return "января"
  if (month === 2) return "февраля"
  if (month === 3) return "марта"
  if (month === 4) return "апреля"
  if (month === 5) return "мая"
  if (month === 6) return "июня"
  if (month === 7) return "июля"
  if (month === 8) return "августа"
  if (month === 9) return "сентября"
  if (month === 10) return "октября"
  if (month === 11) return "ноября"
  if (month === 12) return "декабря"
}
function formatMinutes(minutes){
  if (minutes%60 >= 10){
    return `${Math.floor(minutes%60)}`
  }
  else {
    return `0${Math.floor(minutes%60)}`
  }
}

export function priceFormat(price) {
    let result = "";
    let priceLengthDevide = Math.ceil(price.toString().length / 3) + 1;
    while (price > 0) {
      if (priceLengthDevide > 2) {
        result +=
          Math.floor(price / Math.pow(10, priceLengthDevide)).toString() + " ";
        price -=
          Math.floor(price / Math.pow(10, priceLengthDevide)) *
          Math.pow(10, priceLengthDevide);
        priceLengthDevide--;
      }

      if (priceLengthDevide <= 2 && price > 0) {
        result += price.toString();
        price = 0;
      } else if (priceLengthDevide <= 2 && price === 0) result += "000";
    }
    return result;
  }

  export function dateFormat(released) {
    let One = [1, 21, 31, 41, 51]
    let Two = [2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43 , 44, 52, 53, 54]
    let Three = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 26, 27, 28, 29, 
    30, 35, 36, 37, 38, 39, 40, 45, 46, 47, 48, 49, 50, 55, 56, 57, 58, 59]

    let releasedDate = new Date(released.toString());
    let releasedYear = releasedDate.getYear() + 1900;
    let releasedMonth = releasedDate.getMonth() + 1;
    let releasedDay = releasedDate.getDate();
    let releasedHours = releasedDate.getHours();
    let releasedMinutes = releasedDate.getMinutes();

    let currentDate = new Date();
    let currentYear = currentDate.getYear() + 1900;
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();
    let currentHours = currentDate.getHours();
    let currentMinutes = currentDate.getMinutes();

    if (
      releasedYear === currentYear &&
      releasedMonth === currentMonth &&
      releasedDay === currentDay &&
      releasedHours === currentHours &&
      releasedMinutes === currentMinutes
    ) {
      return "Только что";
    }
    else if (
      releasedYear === currentYear &&
      releasedMonth === currentMonth &&
      releasedDay === currentDay &&
      releasedHours === currentHours
    ) {
      let Min = ""
      if (One.indexOf(releasedMinutes) !== -1){
        Min = " минут назад"
      }
      else if (Two.indexOf(releasedMinutes) !== -1){
        Min = " минуты назад"
      }
      else if (Three.indexOf(releasedMinutes) !== -1){
        Min = " минут назад"
      }
      return (currentMinutes - releasedMinutes).toString() + Min
    }
    else if (
      releasedYear === currentYear
    ){
      if (currentHours - releasedHours === 1) return "1 час назад"
      else if (currentHours - releasedHours <= 3) return (currentHours - releasedHours).toString() + " часа"
      else if (currentDay === releasedDate){
        return `Сегодня в ${releasedHours}:${formatMinutes(releasedMinutes)}`
      }
      else if (currentDay - releasedDay === 1){
        return `Вчера в ${releasedHours}:${formatMinutes(releasedMinutes)}`
      }
      else if (currentDay - releasedDay === 2){
        return `Позавчера в ${releasedHours}:${formatMinutes(releasedMinutes)}`
      }
      else {
        return `${releasedDay} ${monthFormat(releasedMonth)} в ${releasedHours}:${formatMinutes(releasedMinutes)}`
      }
    }
    else {
      return `${releasedDay} ${monthFormat(releasedMonth)} ${releasedYear} года в ${releasedHours}:${formatMinutes(releasedMinutes)}`
    }
  }
  export function sellsFrom(date){
    const sellsFrom = new Date(date)

    return `Продает товары с ${monthFormat(sellsFrom.getMonth() + 1)} ${sellsFrom.getYear() + 1900} года`
  }