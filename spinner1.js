const spinner = (repetitions) => {
  const characters = '|/-\\'; //.length = 4

  for (let i = 0; i < characters.length*repetitions; i++) {
    setTimeout(() => {
      if (i >= characters.length){
        process.stdout.write(`\r${characters[i%characters.length]}`) //remainder necessary for looping over same character set
      } else {
        process.stdout.write(`\r${characters[i]}`);
      }
    },300*(i+1));
  }
}

spinner(4);