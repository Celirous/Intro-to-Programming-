// -------------------------------- Lemonade stand ---------------------------



// ------------- WEATHER FORECAST ------------

// create days of week array
// define types of weather
// set min and max temperatures
// cost (to you) of a cup of lemonade
// array for storing daily temps

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var weather = ["Sunny", "Partly Sunny", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];

var maxTemp = 101;
var minTemp = 0;

var lemonadeCost = 0.5;

var dailyTemp = [];


// click the "open stand button" and then it will run function openTheS
document.getElementById("OpenTheStand").addEventListener("click", openTheStand);


generateWeather(); 

function generateWeather() {
    var weatherToday;
    var tempToday;
    for (var i = 0; i < days.length; i++) {
        weatherToday = weather[Math.floor(Math.random() * weather.length)];
        tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
        dailyTemp[i] = tempToday;
        document.getElementById("5DayWeather").innerHTML +="<div id='" + days[i] + "' class='" + weatherToday + 
        "'><b>Forecast for " + days[i] + 
        ":</b><br><br>" + weatherToday + " and " + tempToday + " degrees.</div>";
    };
};

// ---------------------- Weather app end 

// ---------------- Starting Open Stand function 

function openTheStand() {
    var glassesSold = 0; // daily sales
    var totalGlasses = 0; //weekly sales
    var glassesLeft = 0; // left to sell 
    resetform(); // clear previous results 
    // get input
    var numGlasses = Number(document.getElementById("numGlasses").value);
    var glassPrice = Number(document.getElementById("glassPrice").value);

    for (var i = 0; i < days.length; i++) {
        // glasses sold depends on temp and price
        glassesSold = Math.floor(dailyTemp[i] / glassPrice); // the higher the temp for the day (dailyTemp[i]), the more glasses you can sell. The math.floor just removes the decimal point
        // how many glasses do we have now?
        glassesLeft = numGlasses - totalGlasses

        // we can't sell more than we have, checks stock for the day 
        if (glassesSold > glassesLeft) {
            glassesSold = glassesLeft; 
        };
        // increase the weekly sales/glass sold for the week 
     totalGlasses = glassesSold + totalGlasses;
    // display daily total sales
    document.getElementById("result").innerHTML += "<p>" + days[i] +
    ", you sold " + glassesSold + " glasses of lemonade.</p>";
    };
    displayResults(numGlasses, glassPrice, totalGlasses);
}; 

// calculates results and diplay a report
// we are now going to pass in the info from line 67 as the values here. 
// so - weeklyInventory is the numGlasses, glassPrice is glassPrice, weeklySales is totalGlasses.
function displayResults(weeklyInventory, glassPrice, weeklySales) {
    // calculate results
    var revenue = weeklySales * glassPrice
    var expense = weeklyInventory * lemonadeCost;
    var leftOver = weeklyInventory - weeklySales;
    var profit = revenue - expense;
    // print out the weekly report
    document.getElementById("result").innerHTML += "<p>You sold a total of " + weeklySales + " glasses of lemonade this week.</p>";
    document.getElementById("result").innerHTML += "<p>Total revenue: $" + revenue + ".</p>";
    document.getElementById("result").innerHTML += "<p>You have " + leftOver + " glasses of lemonade left over.</p>";
    document.getElementById("result").innerHTML += "<p>Each glass costs you $" + lemonadeCost + ". Your profit was $" + profit + ".";
};

// we are now resetting the "result area". Now a new order can be placed
function resetform() {
    document.getElementById("result").innerHTML = "";
};

