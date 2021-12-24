// var character = 
// document.getElementById("character");

// var block = document.getElementById("block")

// function jump(){
//   if(character.classList != "animate"){
//     character.classList.add("animate");
//   }
  
  
  
//   setTimeout(function(){
//     character.classList.remove("animate");
//   }, 500);
// }

// var checkDead = setInterval(function(){
//   var characterTop = 
//   parseInt(window.getComputedStyle(character).getPropertyValue("top"));
//   var blockLeft =
//   parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  
//   if(blockLeft<20 && blockLeft>0 && characterTop>=130){
//     block.style.animation = "none";
//     block.style.display = "none";
//     alert("you lose.");
//   }

// },10);

  window.addEventListener("keydown", function(event) {
  const p = document.createElement("p");
  p.textContent = `KeyboardEvent: key="${event.key}" | code="${event.code}'`;
  document.getElementById("output").appendChild(p);
}, true);
/*probleemi olemus on see, et pole kirjas järgmist sammu. Selleks on siis probleemi püstitus.
Probleem on, et tahan võtta window add eventlisteneri ja selle siduda nupuvajutusega.
Küsimus -- kas saan ühendada if tingimusega eventlisteneri ja mingi konkreetse nupu väärtuse?
Selleks luua uus aken ja testida väikseima võimaliku lahendusena.
*/
