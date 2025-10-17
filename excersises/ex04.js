// add a button titled click me 
// when it is clicked
let totoalNumber = 0; 
$("needy-button").html("new text"); 

$("#needy-button").click( function() {
    totoalNumber = totoalNumber + 1; 
    count = count + 1; 
    let sentence = "I was clicked"
    let totalnumbers = sentence + totoalNumber; 
    $("#needy-button"). html("you clicked me" + count + "times"); 
    $("#needy-button").html(totalnumbers); 
    let sentencetwo = "oh no"; 
    let totoalNumber = sentence +totoalNumber + sentencetwo; 

});
    
let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum"]; // new line tp add

$("#needy-button").click(function () {
    let reminder = count % colors.length; 

    $("#needy-button").html( "Clicks: " + count + " Color: " 
        + colors[count] ); 
        $("body").css("background-color", colors[reminder] );
   // new line tp add

    count = count + 1;

});
 //1. Orchid
  //  2. coral 
   // 3. HotPink 


// show how many times 
// add one to the total number 
// on our  button 
// show "clicked totanal number times "

// a top limit 



// 
