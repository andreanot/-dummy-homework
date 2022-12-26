function printAndAdd(n) {
    for (let i = 1; i <= n; i++) {
      console.log(i);
      if (i % 2 === 0) {
        console.log(`${i} is even`);
      } else {
        console.log(`${i} is odd`);
      }
    }
  }
  
  printAndAdd(20);