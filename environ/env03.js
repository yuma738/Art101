let characters = ["miku","akito", "teto"];
let favouritecharacters = { 
    title: "this is your sekai", 
    worlds: "2",
    type1: "vocoloid", 
    type2: "sekai Friend",
};
let megaSentence;

megaSentence = "<p> Introducing " + characters[0] + ", " + characters[1] + ","+ characters[2]+ "</p>";
megaSentence = megaSentence + "<p>Introducing " + favouritecharacters.type1 + ", sekai number "
 + favouritecharacters.worlds 
+ " the characters " + favouritecharacters.type1[0] + " sekai friend"+ "</p>"
$("#output").html(megaSentence);
$("#output").apprend(megaSentence);


