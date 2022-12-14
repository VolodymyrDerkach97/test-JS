function formatMessage(message, maxLength) {
    let result;
    // Change code below this line
  if (message.length <= maxLenght) {
    result = message;
  } else {
    result = message.slice(0, message.length);
  }
    /// Change code above this line
    return result;
  }
  
  
  
  console.log(formatMessage("Curabitur ligula sapien", 23));