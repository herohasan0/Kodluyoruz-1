let getName = prompt("Lütfen İsminizi Giriniz", "İsminiz");


if (getName.length > 0) {
  document.querySelector("#isim").innerHTML = getName;
} else {
  getName = prompt("Lütfen Geçerli Bir İsim Giriniz", "İsminiz");
}



function getTime() {
  let date = new Date();
  let hours = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let day = date.getDay();

  hours = (hours <= 9) ? "0" + hours.toString() : hours;
  min = (min <= 9) ? "0" + min.toString() : min;
  sec = (sec <= 9) ? "0" + sec.toString() : sec;

  switch(day) {
    case 0: 
    day = "Pazar"
    break;
    case 1: 
    day = "Pazartesi"
    break;
    case 2: 
    day = "Salı"
    break;
    case 3: 
    day = "Carşamba"
    break;
    case 4: 
    day = "Perşembe"
    break;
    case 5: 
    day = "Cuma"
    break;
    case 6: 
    day = "Cumartesi"
    break;
    default:
      day = "Gün"
  }
  
  let time =  hours + ":" + min + ":" + sec + " " + day;
  document.querySelector("#date").innerHTML = time;
}

getTime();

setInterval(getTime, 1000);