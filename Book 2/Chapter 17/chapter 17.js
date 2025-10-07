/*
// This will count down from 10 to 0, each time giving you an alert, once it is done,
// it will output an alert saying "Blast off"

for (var i = 10; i > 0; i--) {
  alert(i);
};
alert("Blast Off!");
*/

/*
// so this will alert you from position 0 on the array who your friends are until its done
var myFriends = ["Jamie", "Sam", "Jakes", "James", "Lindin"];
for (var i = 0; i < myFriends.length; i++){
    alert(myFriends[i] + " is my friend!")
};
*/

// alert(Math.random()); // this gives you a random rumber between 0- 1 not including 1. eg 0.789465168
// alert(Math.random() * 10); // this will give you a number between 0-10 not including 10. eg 7.876458647 
// alert(Math.floor(Math.random() * 10)); // this will give you a radnom number between 0-10 and remove the decimal points  
/*
var myFriends = ["Jamie", "Sam", "Jakes", "James", "Lindin"];
var randomFriend  = Math.floor(Math.random() * myFriends.length); 

alert(myFriends[randomFriend]);
*/


// ---------------------------------------------------------
        // WEATHER APP

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var weather = ["Sunny", "Partly Sunny", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];
var minTemp = 8;
var maxTemp = 38;

generateWeather();
function generateWeather() {
  for (var i = 0; i < days.length; i++) {
    var weatherToday = weather[Math.floor(Math.random() * weather.length)];
    var tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
    document.getElementById("5DayWeather").innerHTML +="<div id='" + days[i] + "' class='" + weatherToday + 
      "'><b>Forecast for " + days[i] + 
      ":</b><br><br>" + weatherToday + " and " + tempToday + " degrees.</div>";
  };
};



