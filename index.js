function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (feet > 2000 && feet <2501){
    return 'I will gladly take your thirty bucks.';
  }else if (feet > 2500) {
    return 'No can do.';
  }else {
    return 'This ride will cost you.';
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC'? 'Ok, sounds good.':'No go.'
}


function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}