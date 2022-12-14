function convertHumanYearsToDog(humanYrs) {
  let dogYear = humanYrs * 7;
  console.log(`${humanYrs}  Human years is equal to ${dogYear} dog years`);
}
convertHumanYearsToDog(5);

function convertDogYearsToHuman(dogYrs) {
  let humanyears = dogYrs / 7;
  console.log(
    `${dogYrs}  Dog years is equal to ${humanyears.toFixed(2)} human years`
  );
}
convertDogYearsToHuman(50);
