function isThisMonday(day) {
  switch(day) {
    case 1:
      return true;
      break;
    case "Monday":
      return true;
      break;
    default:
      return false;
  }
}

console.log(isThisMonday('Monday'));
