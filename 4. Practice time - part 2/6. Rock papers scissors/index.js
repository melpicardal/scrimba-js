let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function getHand() {
  console.log(hands[Math.floor(Math.random() * hands.length)])
}

getHand()
