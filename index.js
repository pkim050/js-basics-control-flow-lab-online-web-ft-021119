function scuberGreetingForFeet(number){
  // Write your code here!
  if (number > 2500) {
    return "No can do.";
  }
  else if (number > 2000) {
    return "I will gladly take your thirty bucks.";
  }
  else if (number <= 400) {
    return "This one is on me!";
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(string){
  // Write your code here!
  switch (string) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye."
  }
}
