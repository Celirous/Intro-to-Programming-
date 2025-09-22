var input = "javascript is awesome";
var output = "";

for (i = 0; i < input.length; i++){
    if (input[i] === "a"){
        output += "4";
    } else if (input[i] === "e"){
        output += "3";
    } else if (input[i] === "i"){
        output += "1";
    } else if (input[i] === "o"){
        output += "0";
    // } else if (input[i] === "j"){
    //     output += "J";
    } else {
        output += input[i];
    }
}

console.log(output)


/* So from what i can understand, i am checking the input here, which is the sentance,
then i am going through the entire sentance one letter at a time. Then i am telling it, if this letter that 
it is going through is equal to one of the letters i chose, it needs to change it to the number of it. 
Then i am saying that it needs to show the "output" on the consol log. and in this case the console log is
the output and i have set the output to be the sentance, with the replaced letters
*/ 