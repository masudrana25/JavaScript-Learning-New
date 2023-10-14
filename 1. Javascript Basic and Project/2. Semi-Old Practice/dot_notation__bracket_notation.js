const countryDetails = {
  Bangladesh: 'Dhaka',
  India: 'Dilhi',
  USA: 'Wasinghton',
  Thailand: 'Bankkok',
  Nepal: 'Katmandu',
  Rasia: 'Mosko'
};

//backet notation
console.log(countryDetails['Bangladesh']);

//dot notation
console.log(countryDetails.Bangladesh);

//backet notation
Object.keys(countryDetails).map(function (country) {
  const detailsInOneCountry = `Country is: ${country} and capital is : ${countryDetails[country]}`;
  console.log(detailsInOneCountry);
})
