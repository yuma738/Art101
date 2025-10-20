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

document.getElementById('createBoxesBtn').addEventListener('click', function() {
    const boxContainer = document.getElementById('boxContainer');
    boxContainer.innerHTML = ''; // Clear existing boxes

    const colors = ['red', 'blue', 'green', 'purple', 'orange'];

    for (let i = 0; i < colors.length; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.backgroundColor = colors[i]; // Set background color
        box.textContent = colors[i].toUpperCase(); // Add text for clarity
        box.style.color = 'white'; // Text color for contrast
        box.style.display = 'flex';
        box.style.justifyContent = 'center';
        box.style.alignItems = 'center';

        // Optional: Add an event listener to change color on click
        box.addEventListener('click', function() {
            const currentColor = this.style.backgroundColor;
            // Example: toggle between current color and black
            this.style.backgroundColor = (currentColor === 'black') ? colors[i] : 'black';
        });

        boxContainer.appendChild(box);
    }
});


