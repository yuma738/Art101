

$("#add-creature").click(
    function () {

        // grab the value from the input
        let crName = $("#crName").val();
        let crColor= $("#crColor").val();
        let crEyesNum= $("#crEyesNum").val();
        let crEyesHTML="";

        for (let i = 0; i < crEyesNum ; i++){
            crEyesHTML=crEyesHTML + "<div class=eye>.</div>";
        }


        // check for the field value do not add empty ones
        if ( (crName == "") || (crName.length>12) ) { // do nothing 
        }
        else {
            $("#creature-list").append(`
<div class="creature">
    <div class="creature-body" style="background: ${crColor}">${crEyesHTML}</div>
    <div class="creature-info">${crName}</div>
</div>
`);
        }

        // remove the name after it's added
        $("#crName").val("");

    });
// Your web app's Firebase configuration provided when setting up the firebase
const firebaseConfig = {
  apiKey: "AIzaSyDrkHSpBUKFmxQDR6AtPWX8mxQxG9O5PMk",
  authDomain: "art101-78759.firebaseapp.com",
  projectId: "art101-78759",
  storageBucket: "art101-78759.firebasestorage.app",
  messagingSenderId: "778878539022",
  appId: "1:778878539022:web:c62f8bed2ab1fa68ad735f"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Get database
  const db = firebase.database();

  // Reference to creatures collection, just our own name
  const creaturesRef = db.ref("garden/creatures");  

  function loadCreaturesFromDB() {
 creaturesRef.once("value").then(snapshot => {
   const data = snapshot.val() || {};
   allCreatures = Object.keys(data).map(id => data[id]);
   renderAllCreatures();
 });
} 
function renderAllCreatures() {

 $("#creature-list").empty();

 allCreatures.forEach((cr, index) => {
   addCreatureToDOM(cr);
 });
} 
creaturesRef.push(newCreature); // save the new creature to the database 

// memorize all creatures in array
let allCreatures = [];

// random name api
async function getRandomName() {

  const response = await fetch(
    "https://api.gofakeit.com/funcs/petname",
    { method: "GET", });

  const nameRandom = await response.text();
  console.log("Got name:", nameRandom);
  return nameRandom;
}

// random name api
async function getRandomColor() {

  const response = await fetch(
    "https://api.gofakeit.com/funcs/hexcolor",
    { method: "GET", });

  const nameRandom = await response.text();
  console.log("Got name:", nameRandom);
  return nameRandom;
}

// random emoji api
async function getRandomEmoji() {

  const response = await fetch(
    "https://api.gofakeit.com/funcs/emojianimal",
    { method: "GET", });

  const nameRandom = await response.text();
  console.log("Got name:", nameRandom);
  return nameRandom;
}

// random creature
async function randomizeCreature() {

  const eyesRandom = Math.floor(Math.random() * 5) + 1;
  const nameRandom = await getRandomName();
  const colorRandom = await getRandomColor();
  const emojiRandom = await getRandomEmoji();

  const randomCreature = {
    name: emojiRandom + nameRandom,
    color: colorRandom,
    eyesNum: eyesRandom
  };

  return randomCreature;
}

// grabs data from the form
function getCreatureFromForm() {
  const freshCreature = {
    name: $("#crName").val(),
    color: $("#crColor").val(),
    eyesNum: $("#crEyesNum").val()
  };

  return freshCreature;
};

// prepare HTML for a single creature (does NOT add to the page)
function renderCreature(creature) {
  let crEyesHTML = "";

  for (let i = 0; i < creature.eyesNum; i++) {
    crEyesHTML = crEyesHTML + "<div class='eye'>.</div>";
  }

  const html = `
<div class="creature">
  <div class="creature-body" style="background: ${creature.color}">
${crEyesHTML}
  </div>
  <div class="creature-info">${creature.name}</div>
</div>
`;
  return html;
}


// append one creature to the DOM using its HTML
function addCreatureToDOM(creature) {
  html = renderCreature(creature);
  $("#creature-list").append(html);

}

// check if creature data is valid
function isCreatureValid(creature) {
  if (creature.name === "") return false;
  if (creature.name.length > 12) return false;
  if (creature.eyesNum == "" || creature.eyesNum > 5) return false;
  return true;
}

// clear all form fields
function clearForm() {
  $("#crName").val("");
  $("#crColor").val("#ee7dea");  // or keep previous if you prefer
  $("#crEyesNum").val(1);
}


function loadCreaturesFromDB() {
 creaturesRef.once("value").then(snapshot => {
   const data = snapshot.val() || {};
   allCreatures = Object.keys(data).map(id => data[id]);
   renderAllCreatures();
 });
}

function renderAllCreatures() {

 $("#creature-list").empty();

 allCreatures.forEach((cr, index) => {
   addCreatureToDOM(cr);
 });

}



// BUTTON HANDLERS

$("#add-creature").click(
  async function () {


    let newCreature;

    // choose the source for a creature
    if ($("#crRandom").is(':checked')) { newCreature = await randomizeCreature(); }
    else { newCreature = getCreatureFromForm(); }

    // do checks, exit function if something is wrong
    if (isCreatureValid(newCreature) == false) {
      return;
    }

    allCreatures.push(newCreature);   // remember it
    addCreatureToDOM(newCreature);    // show it
    creaturesRef.push(newCreature); // save the new creature to the database

    // start wandering for this single new creature:
    let newest = $("#creature-list .creature").last()[0];
    startWanderingOne(newest);

    clearForm();

  });

startWanderingAll();

$("#btn-start").click(function () {
  startWanderingAll();
});

$("#btn-resume").click(function () {
  resumeWandering();
});
$("#btn-freeze").click(function () {
  freezeWandering();
});

$("#btn-load").click(function () {
 loadCreaturesFromDB();
});



function loadThreeEyeCreatures() {
 creaturesRef
   .orderByChild("eyesNum")
   .equalTo(3)
   .once("value")
   .then(snapshot => {
     const data = snapshot.val() || {};

     // convert {id: creature, ...} → [creature, ...]
     allCreatures = Object.values(data);

     console.log("3-eye creatures:", allCreatures);
     renderAllCreatures();
   });
}   
     