// Playing with if statements here 
/*
var language = prompt("What lang do you speak?").toLowerCase();

if (language === "javascript"){
    alert ("Hey! You speak my language!!");
    var speaksJava = true;
} else {
    alert ("I do not understand!?");
};

if (speaksJava) {
    alert ("Nice to meet you, I have been so lonely");
} else {
    console.log("I am so lonely");
};
*/
/*
if ((deliveryCity === "Anytown") && (orderPrice > 10)) { // this is saying, both the city needs to be anyTown AND price needs to be more than 10 for this to be "true"
    var deliveryPrice = 0; // if the statement is true, this will run 
} else {
    var deliveryPrice = 5; // if the statement is false, this will run 
};

if (((deliveryCity === "Anytown") && (orderPrice > 10)) || // this is showing "or" so either the first section needs to be true
(       birthday === "yes")) { // or this section. If their of them are true, the entire condidtion will be true, then this will run
        var deliveryPrice = 0;
    } else {
        var deliveryPrice = 5; // if neither of them are true, it means this if statement is false and this will run 
};
*/


    // listen for button clicks
    document.getElementById("placeOrder").addEventListener("click", placeOrder);

    /**
     * gets form values
     * calculates prices
     * produces output
     */
    function placeOrder() {
        // get form values
        var numPizzas = document.getElementById("numPizzas").value;
        var typePizza = document.getElementById("typePizza").value;
        var deliveryCity = document.getElementById("deliveryCity").value;
        var birthday = document.getElementById("birthday").value;
    
        // get the pizza price
        var orderPrice = calculatePrice(numPizzas, typePizza);
    
        // get the delivery price
        var deliveryPrice = calculateDelivery(deliveryCity, orderPrice, birthday);
    
        // create the output
        var theOutput = "<p>Thank you for your order {^.^} </p>";
    
        // output the delivery price, if there is one
        if (deliveryPrice === 0) {
            theOutput += "<p>Yay! You get free delivery!</p>";
           } else {
            theOutput += "<p>Your delivery cost is: $" + deliveryPrice;
           }
        theOutput += "<p>Your total is: $" + (orderPrice + deliveryPrice);
    
        // display the output
        document.getElementById("displayTotal").innerHTML = theOutput;
    }
     
    
    /**
     * calculates pizza price
     */
    function calculatePrice(numPizzas, typePizza) {
        var orderPrice = Number(numPizzas) * 10;
        var extraCharge = 0;
        
        // Calculating extraCharge, if there is one.
        if (typePizza === "somethingMeaty") {
            extraCharge = Number(numPizzas) * 2;   
        }
         orderPrice += extraCharge;
        return orderPrice;
    }
    
 
    /**
     * calculates delivery price
     */
    function calculateDelivery(deliveryCity, orderPrice, birthday) {
        var deliveryPrice = 0;
        
        // calculate delivery price, if there is one
        if (((deliveryCity === "centurion") && (orderPrice > 10)) || (birthday === "yes")) {
            deliveryPrice = 0;
        }  else {
            deliveryPrice = 5;
        }
        return deliveryPrice;  
    }






