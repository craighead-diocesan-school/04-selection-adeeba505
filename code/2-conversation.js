// ####################################
// ##### ----- Conversation ----- #####
// ####################################

function conversation() {
  alert("Welcome to my conversation program.")

  let answer = prompt("Do you like spiderman? Answer yes or no.")

  if (answer == "yes") {
    let spiderman = prompt("That's good - do you know who spiderman is?")
    if (spiderman == "yes") alert("dam how'd you know my secret")
    else {
      alert("It's me")
    }
  } else {
    alert("LAME.")
  }

  alert("cya")
}

function age() {
  let theirName = prompt ("What's your name?")
  let Age = prompt ('How old are you?')
  Age = Number(Age)
  
  if (Age>65) {
    alert ('You can retire')
  }
  else if(Age<5){
    alert ('You need supervision when using a computer')
  }
  else if(Age>=18) {
    alert ('You can vote')
  }
  else if(Age!=15) {
    alert ('You are not the same age as me')
  }
  alert ('Hope you learnt something today ' + theirName)
 







}
