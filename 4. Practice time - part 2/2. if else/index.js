let age = 66

// less than 6 years old -> free
if (age < 6) {
  console.log("free")
} else if (age < 18) {
  // 6 to 17 years old     -> child discount
  console.log("child discount")
} else if (age < 27) {
  // 18 to 26 years old    -> student discount
  console.log("student discount")
} else if (age < 67) {
  console.log("full price")
} else {
  console.log("senior citizen discount")
}

// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable
