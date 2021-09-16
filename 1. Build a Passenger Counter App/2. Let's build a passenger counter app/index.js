let count = 0
let countEl = document.getElementById("count-el")
let username = "mel"
let message = "You have three new notifications"
let messageToUser = message + ", " + username
console.log(messageToUser)

function increment() {
  count = count + 1
  countEl.innerText = count
}

function save() {
  console.log(count)
}


console.log("Let's count people on the subway!")
