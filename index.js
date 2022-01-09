function scuberGreetingForFeet(feet){
  // Write your code here!
  if ( feet <= 400){
    return 'This one is on me!';
  }
  if (feet >= 2000 && feet < 2501){
    return `I will gladly take your thirty bucks.`
  }else{
    return "No can do.";
  }
}


function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go."
  // Write your code here!
}

function switchOnCharmFromTip(word){
  // Write your code here!
  switch (word){
    case "generous":
      return 'Thank you so much.';
    case "not as generous":
      return 'Thank you.';
    default: 
      return 'Bye.';
  }
}