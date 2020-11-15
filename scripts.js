export const unixConverter = (value) => {
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var date = new Date(value * 1000);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

return formattedTime
}
function GetDates(startDate, daysToAdd) {
  var aryDates = [];

  for(var i = 0; i <= daysToAdd; i++) {
      var currentDate = new Date();
      currentDate.setDate(startDate.getDate() + i);
      aryDates.push(DayAsString(currentDate.getDay()) + ", " + currentDate.getDate() + " " + MonthAsString(currentDate.getMonth()) + " " + currentDate.getFullYear());
  }
  
  return aryDates;
}

function MonthAsString(monthIndex) {
  var d=new Date();
  var month=new Array();
  month[0]="January";
  month[1]="February";
  month[2]="March";
  month[3]="April";
  month[4]="May";
  month[5]="June";
  month[6]="July";
  month[7]="August";
  month[8]="September";
  month[9]="October";
  month[10]="November";
  month[11]="December";
  
  return month[monthIndex];
}

function DayAsString(dayIndex) {
  var weekdays = new Array(7);
  weekdays[0] = "Sunday";
  weekdays[1] = "Monday";
  weekdays[2] = "Tuesday";
  weekdays[3] = "Wednesday";
  weekdays[4] = "Thursday";
  weekdays[5] = "Friday";
  weekdays[6] = "Saturday";
  
  return weekdays[dayIndex];
}

var startDate = new Date();
var aryDates = function GetDates(startDate, daysToAdd) {
var aryDates = [];

for(var i = 0; i <= daysToAdd; i++) {
    var currentDate = new Date();
    currentDate.setDate(startDate.getDate() + i);
    aryDates.push(DayAsString(currentDate.getDay()) + ", " + currentDate.getDate() + " " + MonthAsString(currentDate.getMonth()) + " " + currentDate.getFullYear());
}

return aryDates;
}

