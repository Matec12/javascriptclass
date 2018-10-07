////Date



var date = new Date();


console.log("Get Full Year: " + date.getFullYear())

console.log("Get Month: " + date.getMonth());

console.log("Get Date: " + date.getDate())

console.log("Get Hours: " + date.getHours())

console.log("Get Minutes: " + date.getMinutes())

console.log("Get Seconds: " + date.getSeconds())

console.log("Get Milliseconds: " + date.getMilliseconds())


console.log("Get Day: " + date.getDay())


date.setFullYear(1997, 11, 20);


var _date = Date.parse("1997-12-11")

var newDate = new Date(_date)
console.log(newDate.getFullYear())
console.log(newDate.getDate())


var day = DaysInWords(date.getDay());

var month = MonthInWords(date.getMonth());


//console.log(`${day}, ${month}  ${date.getDate()}, ${date.getFullYear()} - ${date.getHours()} : ${date.getMinutes()}`);

let hoursElement = document.getElementById("hours");

let minsElement = document.getElementById("mins");

let secElement = document.getElementById("sec");

var seconds = 60;
var mins = 60;
var countDown = 3;

var countDownInSecs = 3 * 60 * 60;

console.log(countDownInSecs)
setInterval(() => {

    countDownInSecs -= 1;

    var hours = Math.floor(countDownInSecs / 3600);

    hoursElement.innerText = hours;

    var minutes = Math.floor((countDownInSecs / 60) - (Math.floor(hours) * 60));

    minsElement.innerText = minutes;


    var seconds = countDownInSecs - ((minutes * 60) + (hours * 60 * 60));


    secElement.innerText = seconds < 10 ? "0" + seconds : seconds;


}, 1000)

function DaysInWords(day) {
    switch (day) {
        case 0:
            return "Sunday"
            break;
        case 1:
            return "Monday"
            break;
        case 2:
            return "Tuesday"
            break;
        case 3:
            return "Wednesday"
            break;
        case 4:
            return "Thursday"
            break;
        case 5:
            return "Friday"
            break;
        case 6:
            return "Saturday"
            break;
        default:
            return "Friday"
            break;
    }
}



function MonthInWords(month) {
    switch (month) {
        case 0:
            return "January"
            break;
        case 1:
            return "February"
            break;
        case 2:
            return "March"
            break;
        case 3:
            return "April"
            break;
        case 4:
            return "May"
            break;
        case 5:
            return "June"
            break;
        case 6:
            return "July"
            break;
        case 7:
            return "August"
            break;
        case 8:
            return "September"
            break;
        case 9:
            return "October"
            break;
        case 10:
            return "November"
            break;
        case 11:
            return "December"
            break;
        default:
            return "December"
            break;
    }
}