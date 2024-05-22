let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

// fightButton.addEventListener("click", function() {
//     // Challenge:
//     // When the user clicks on the "Pick Fighters" button, pick two random 
//     // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
// })

fightButton.addEventListener("click", function () {
  // Pick two random fighters using the getRandomFighter function (explained below)
  let fighter1 = getRandomFighter();
  let fighter2 = getRandomFighter();

  // Ensure fighters are not the same (re-pick if necessary)
  while (fighter1 === fighter2) {
    fighter2 = getRandomFighter();
  }

  // Display the fighters on the stage element
  stageEl.textContent = fighter1 + " vs " + fighter2;
});

// Function to return a random fighter from the array
function getRandomFighter() {
  let randomIndex = Math.floor(Math.random() * fighters.length);
  return fighters[randomIndex];
}
