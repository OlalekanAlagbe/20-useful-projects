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



//   let futureDate = new Date(2023,9,31,23,59); 
  let futureDate = new Date(tempYear,tempMonth,tempDay + 7,23,59)
  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();
  const date = futureDate.getDate();

  // months and weekdays are index based
  let monthIndex = futureDate.getMonth();
  let actualMonth = months[monthIndex];

  let weekday = futureDate.getDay();
  weekday = weekdays[weekday];

  giveaway.textContent = `giveaway ends on ${weekday} ${date} of ${actualMonth} ${year} at ${hours}:${minutes}`;

  //future time in ms

  const futureTime = futureDate.getTime();


  let getRemaining = ()=>{
    const today = new Date().getTime();
    const t = futureTime - today;
    //1s = 1000ms
    //1m = 60s
    //1h = 60m
    //1d = 24h

    // values in ms

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // calculate all values
    let days = t / oneDay;
    days = Math.floor(days);

    let hours = (t % oneDay)/oneHour
    hours = Math.floor(hours);

    let minutes = Math.floor((t % oneHour) / oneMinute)
    let seconds = Math.floor((t % oneMinute) / 1000)

    /*  My recalculations
    let myday = Math.floor(t/oneDay)
    let remainder = t % oneDay;
    let myhours = Math.floor(remainder / oneHour);
    remainder = remainder % oneHour;
    let myminutes = Math.floor(remainder / oneMinute)
    remainder = remainder % oneMinute
    let mySeconds = Math.floor(remainder / 1000)

    console.log(myday)
    console.log(myhours)
    console.log(myminutes)
    console.log(mySeconds)    
                           */





    //set values array;

    const values = [days, hours, minutes, seconds];
    // format values
    let format = (item)=>{
        if(item < 10){
            return item = `0${item}`
        }
        return item;
    }

    items.forEach((item,index)=>{
        item.innerHTML = format(values[index]); 
    })
    if(t < 0){
        clearInterval(countdown);
        deadline.innerHTML = `
        <h4 class="expired">Sorry, this giveaway has expired</h4>`
    }

  }


//  setInterval(()=>{
//     getRemaining()
//  },1000);

// count down
let countdown = setInterval(getRemaining,1000)
getRemaining()