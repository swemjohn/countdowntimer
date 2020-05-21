const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

//let futureDate = new Date(2020, 4, 31, 23, 59, 59);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 23, 59, 59);



const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();

let month = futureDate.getMonth();
month = months[month];
let day = futureDate.getDay();
day = weekdays[day];
giveaway.innerHTML = `Giveaway ends on ${day}, ${date} ${month} ${year} ${hours}:${minutes}pm`;


const futureTime = futureDate.getTime();

function calculateCountdown(){
  const today = new Date().getTime();
  const diff = futureTime - today;
  
  
  const d = Math.floor(diff / 1000 / 60 / 60 / 24 );
  const h = Math.floor(diff / 1000 / 60 / 60)%24;
  const m = Math.floor(diff / 1000 /60)%60;
  const s = Math.floor(diff / 1000)%60;
  
  const values = [d, h, m, s];
  function format(item){
    if(item < 10){
      return item = `0${item}`;
    }
    return item;
  }
  items.forEach(function(item, index){
    item.innerHTML = format(values[index]);
  });
  if(diff < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry, This GiveAway Has EXPIRED now.</h4>`;
  }
  
}

let countdown = setInterval(calculateCountdown, 1000);

calculateCountdown();



