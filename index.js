function ternaryCheckCity(city) {
  
    const goToCity = (city==='NYC') ? 'Ok, sounds good.' : 'No go.';
    return goToCity;
  }
  function switchOnCharmFromTip(tipss){
  switch (tipss) {
    case 'generous':
      return "Thank you so much.";
    
    case 'not as generous':
      return "Thank you.";
    
    default :
      return "Bye.";
  }
  }
  

  function scuberGreetingForFeet(feet) {
    if (feet>2500) {
    return 'No can do.'
    } else if (feet>2000) {
      return 'I will gladly take your thirty bucks.'
    }
    else if (feet<400) {
      return 'This one is on me!';
    }}
  