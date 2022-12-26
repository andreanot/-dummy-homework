function createBigString(strings) {
    let bigString = "";
    for (const str of strings) {
      bigString += str + " ";
    }
    return bigString;
  }
  
  console.log(createBigString(["Hello", "there", "students", "of", "SEDC", "!"]));