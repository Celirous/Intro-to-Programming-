/*
var i = 0;
while (i < 100) {
  console.log(i + ": Hello, JavaScript!");
  i++;
}
// This will output the 0: Hello, JavaSctipt until 99: Hello, JavaScript!
*/

/*
var count = 10;
while (count > 0) {
  alert(count);
  count--;
}
alert("Blast Off!");
// this will output an alert starting at 10 and then counting down to 1 (this is because we said it needs to be bigger than 0 and not equal to). So
*/

/*
var people = ["Jamie", "Sam", "Jakes", "James", "Lindin"];
var i = 0;
while (people[i]) {
    alert(people[i]);
    i++;
};
// here the i is being incremented, each time it does, the while loop runs 
// and it outputs an index position of people untill it reaches the end of the array
// once the people[i] reaches "false" it will stop, it will be false if there is 'no more data"
*/

// -----------------------------
            // Lunch game 



// declare globals
var money = 20;
var lunches = 0;

//display lunch budget
money = document.getElementById("money").innerHTML

//listen for order
document.getElementById("placeOrder").addEventListener("click", buyLunches);

// buys specified number of sandwiches per day at current prices 
function buyLunches() {
  
//     todo: 
//      * reset the form
//     * start a loop
//  * get daily sandwich order
//  * calculate total price
//  * figure out if there's enough money
//  * if so: subtract money, increment number of lunches, 
// and start loop over
//  * if not: display 'out of money' message
//  * display total lunches after loop exits
    resetForm();
    var day = 0;

    while (money > 0) {
        var priceToday = getSandwichPrice();
        var numberOfSandwiches = document.getElementById("numSandwiches").value
        var totalPrice = priceToday * numberOfSandwiches;
        if (money >= totalPrice) {
            money = money - totalPrice;
            day++;
            lunches++;
            document.getElementById("receipt").innerHTML += 
            "<p>On day " + day + ", sandwiches are: $" + priceToday + 
            ". You have $" + money.toFixed(2) + " left.</p>";
        } else { 
            document.getElementById("receipt").innerHTML += "<p>Today, sandwiches are: $" + priceToday + 
            ". You don't have enough money. Maybe your sister will give you some of her sandwich.</p>";
            money = 0;
        };
    };
    document.getElementById("receipt").innerHTML += "<p>You bought "
    + lunches + " lunches this week.</p>";
};

/*
gets the current price of sandwiches
*/
function getSandwichPrice() {
  var sandwichPrice = (Math.random() * (5 - 1) + 1).toFixed(2); // gives you a random number between 0 - 4 (not 4) and then we + 1 so that it can start from 1 and end at 3.99999) then the .toFixed(2) makes it 2 decimal places for you. 
  return sandwichPrice;
}

/*
resets the game so that a new order can be placed
*/
function resetForm() {
  money = 20;
  lunches = 0;
  document.getElementById("receipt").innerHTML = "";
}