let firstCard = 6
let secondCard = 15
let sum = firstCard + secondCard

if (sum < 21) {
  console.log("Do you want to draw a new card? 🤔")
}
else if (sum === 21) {
  console.log("You won! 🎉")
}
else {
  console.log("You lost 😭")
}
