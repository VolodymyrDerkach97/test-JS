function checkForSpam(message) {
  let result;
  message = message.toLowerCase()
  if (message.includes("spam")) {
    result = true;
  } else if (message.includes("sale")) {
    result = true;
  } else {
    result = false;
  }

return result;
}


  console.log(checkForSpam("[SPAM] How to earn fast money?"));


  


//   function checkForSpam(message) {
//     let result;
//   if (message.includes("spam")) {
//     result = true;
    
//   } else if (message.includes("sale")) {
//     result = true;
//   } else {
//     result = false;
//   }
// }