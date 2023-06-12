// ####################################
// ###### ----- Driving Age ----- #####
// ####################################

function drivingAge() {
  let drivingAge = prompt('How old are you?')
  
  drivingAge = Number(drivingAge)

  if (drivingAge>=16) {
    alert("You're old enough to drive.")
  }
  else if(drivingAge<16) {
    alert ("You are not old enough to drive")
  }

}
