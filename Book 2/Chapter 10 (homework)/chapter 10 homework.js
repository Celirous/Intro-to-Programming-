var replaceButton = document.getElementById("replaceButton");
  replaceButton.addEventListener("click",replaceIt);

  function replaceIt() {
    var storyDiv = document.getElementById("story");
    var adj1 = "<span class='replacement'>"+ document.getElementById("adj1").value + "</span>";  
    var verbIng = "<span class='replacement'>"+ document.getElementById("verbIng").value + "</span>";  
    var roomInHouse = "<span class='replacement'>"+ document.getElementById("roomInHouse").value + "</span>";
    var color = "<span class='replacement'>"+ document.getElementById("color").value + "</span>";
    var nounPlural = "<span class='replacement'>"+ document.getElementById("nounPlural").value + "</span>";
    var pastVerb = "<span class='replacement'>"+ document.getElementById("pastVerb").value + "</span>";
    var beverage = "<span class='replacement'>"+ document.getElementById("beverage").value + "</span>";
    var musicType = "<span class='replacement'>"+ document.getElementById("musicType").value + "</span>";
    var diffRoom = "<span class='replacement'>"+ document.getElementById("diffRoom").value + "</span>";
    var exclamation = "<span class='replacement'>"+ document.getElementById("exclamation").value + "</span>";
    var pastVerb2 = "<span class='replacement'>"+ document.getElementById("pastVerb2").value + "</span>";
    var adjDance = "<span class='replacement'>"+ document.getElementById("adjDance").value + "</span>";
    var animal = "<span class='replacement'>"+ document.getElementById("animal").value + "</span>";
    var city = "<span class='replacement'>"+ document.getElementById("city").value + "</span>";
    var verb = "<span class='replacement'>"+ document.getElementById("verb").value + "</span>";


    var theStory = "<h1>Douglas's Ridiculous Day</h1>";
    theStory += "It was a " + adj1 + " morning when Douglas was " + verbIng + " in the " + roomInHouse + ", trying to train his collection of " + color + " " + nounPlural + ".<br><br>";
    theStory += "He " + pastVerb + " a huge gulp of " + beverage + " when suddenly, loud " + musicType + " started blasting from the " + diffRoom + ".<br><br>";
    theStory += "\"" + exclamation + "!\" Douglas yelled, as he " + pastVerb2 + " straight into a " + adjDance + " conga line.<br><br>";
    theStory += "Out of nowhere, an " + animal + " appeared as the DJ, spinning records and teaching everyone the secret dance of " + city + ". To win the contest, Douglas had to " + verb + " like nobody was watching.<br><br>";

  storyDiv.innerHTML = theStory;
  };

