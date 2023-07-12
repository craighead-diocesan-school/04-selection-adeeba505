// ####################################
// #### ----- Sale Calculator ----- ###
// ####################################

function saleCalculator() {
  // write your code here
  let money = Number(prompt("How much money do you have to spend?"))
  let item = Number(prompt("How much is the item usually?"))
  let percentage = Number(prompt("And what is the discount percentage?"))

  let total = item - ((percentage / 100)* item)

  if (total > money) {
    alert("You don't have enough. You have $" + money + " to spend, but even with " + percentage + "% off, $" + item + " only comes down to " + total)
  }
  else if (total < money) {
    alert ("You can buy this item with the money you have! As it costs $" + total+ 'with the ' +percentage+'% off.')
  }
}
