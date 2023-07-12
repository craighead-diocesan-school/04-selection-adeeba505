// ####################################
// ######## ----- Capital ----- #######
// ####################################

function capital() {
  // write your code here
  let Name = prompt("What's you name?")
  let question = prompt("What's the capital of France " + Name)

  if (question == "paris") {
    alert("That's right, " + Name)
  } 
  else if (question == "Paris") {
    alert("That's right, " + Name)
  } 
  else {
    alert("Wrong, get smarter " + Name)
  }
}
