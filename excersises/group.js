let count =0; 
let color = ["orchid", "coral", "plum", "HotPink"];
let colorCount = 0;  
$(needy-button).click(function() {
    if(count< 5) {mood = "gresh and happy";0}
    else if ( (count >= 5) && (count <10 )){mood ="keep pushing";
 } else {mood = "so tired"; }

    
    

    $("#needy-button").html("clicks:"+ count + "Color:" + colors[colorCount]); 
    if (colors[colorCount]== "orchid"){}
    $("body").css("background-color", colors[colorCount]); 

    count = count + 1; 
    colorCount = colorCount + 1;
     if (colors[colorCount]== "orchid"){}
     

}

)