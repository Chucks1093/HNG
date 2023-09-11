const dateObject = new Date();
dateObject.setUTCHours(8);
dateObject.setUTCMinutes(15);
dateObject.setUTCSeconds(0);

const timestamp = dateObject.getTime();
const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const timeElement = document.getElementById("time");
timeElement.textContent = timestamp.toString();
const dayOfTheWeekElement = document.getElementById("dayOfTheWeek");
dayOfTheWeekElement.textContent = daysOfTheWeek[dateObject.getDay()];
